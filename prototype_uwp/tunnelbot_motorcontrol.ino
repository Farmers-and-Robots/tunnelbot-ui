#include "DHT.h"
#include <Arduino.h>
#if defined(ESP32)
#include <WiFi.h>
#elif defined(ESP8266)
#include <ESP8266WiFi.h>
#endif
#include <Firebase_ESP_Client.h>
#include "addons/TokenHelper.h"
#include "addons/RTDBHelper.h"


//Wi-Fi credentials
//#define WIFI_SSID "hotspot"
//#define WIFI_PASSWORD "password2134"

#define WIFI_SSID "RG2100 6104" //HOTSPOT
#define WIFI_PASSWORD "047697c8" //HOTSPOT


//Database credentials
#define API_KEY "AIzaSyBLKB-cpt_ClZfpMhTVYw3Rtis8TN8htmY"
#define DATABASE_URL "https://tunnelbot-default-rtdb.firebaseio.com/"

FirebaseData fbdo;
FirebaseAuth auth;
FirebaseConfig config;
bool signupOK = false;

float desired_left_pos = 0;
float desired_right_pos = 0;
float current_left_pos = 0;
float current_right_pos = 0;
String command = "nothing";
bool command_executed = true;
float calibration_const = 900;
float move_time = 0;

int motor_speed = 0;
int ramp_up_time = 1000;



//Motor control pints
#define IN1 D0
#define IN2 D1
#define IN3 D2
#define IN4 D3

#define ENA1 D5
#define ENA2 D6

//Temperature sensors
//#define DHT1PIN D0
//DHT temp_sensor1(DHT1PIN, DHT11);









void setup() {

  Serial.begin(115200);
  Serial.println("Communication Started \n\n");
  delay(1000);
  pinMode(LED_BUILTIN, OUTPUT);
  WiFi.mode(WIFI_STA);
  WiFi.begin(WIFI_SSID, WIFI_PASSWORD);
  Serial.print("Connecting to ");
  Serial.print(WIFI_SSID);

  while (WiFi.status() != WL_CONNECTED) {
    Serial.print(".");
    delay(500);
    digitalWrite(LED_BUILTIN, LOW);
    delay(500);
    digitalWrite(LED_BUILTIN, HIGH);
  }
  Serial.print("Connected to ");
  Serial.println(WIFI_SSID);
  Serial.print("IP Address is : ");
  Serial.println(WiFi.localIP());
  digitalWrite(LED_BUILTIN, HIGH);





  /* Assign the api key (required) */
  config.api_key = API_KEY;

  /* Assign the RTDB URL (required) */
  config.database_url = DATABASE_URL;


  while (signupOK == false) {

    if (Firebase.signUp(&config, &auth, "", "")) {
      Serial.println("connected to database");
      signupOK = true;
    }
    else {
      Serial.printf("%s\n", config.signer.signupError.message.c_str());
    }
  }

  /* Assign the callback function for the long running token generation task */
  config.token_status_callback = tokenStatusCallback; //see addons/TokenHelper.h
  Firebase.begin(&config, &auth);
  Firebase.reconnectWiFi(true);

  pinMode(IN1, OUTPUT);
  pinMode(IN2, OUTPUT);
  pinMode(IN3, OUTPUT);
  pinMode(IN4, OUTPUT);
  pinMode(ENA1, OUTPUT);
  pinMode(ENA2, OUTPUT);
}


//Ramps up PWM signal
void rampUp(int pwmPin) {
  while (motor_speed < 255) {
    analogWrite(pwmPin, motor_speed);
    motor_speed += 1;
    delay(ramp_up_time / 255);
  }
  analogWrite(pwmPin, 255);
  motor_speed = 0;
}


void moveMotor(String motor_side, String move_direction, float move_time) {

  if (move_time != 0) {

    if (motor_side == "left") {
      if (move_direction == "up") {
        digitalWrite(IN1, HIGH);
        digitalWrite(IN2, LOW);
        rampUp(ENA1);
      }
      else if (move_direction == "down") {
        digitalWrite(IN1, LOW);
        digitalWrite(IN2, HIGH);
        rampUp(ENA1);
      }
    }

    else if (motor_side == "right") {
      if (move_direction == "up") {
        digitalWrite(IN3, HIGH);
        digitalWrite(IN4, LOW);
        rampUp(ENA2);
      }
      else if (move_direction == "down") {
        digitalWrite(IN3, LOW);
        digitalWrite(IN4, HIGH);
        rampUp(ENA2);
      }
    }
  }
  delay(move_time);
  digitalWrite(IN1, LOW);
  digitalWrite(IN2, LOW);
  digitalWrite(IN3, LOW);
  digitalWrite(IN4, LOW);
  analogWrite(ENA1, 0);
  analogWrite(ENA2, 0);
}




void loop() {

  if (WiFi.status() == WL_CONNECTED) {
    if (Firebase.ready() && signupOK) {

      Firebase.RTDB.getFloat(&fbdo, "/left_curtain/current_position");
      current_left_pos = fbdo.floatData();

      Firebase.RTDB.getFloat(&fbdo, "/right_curtain/current_position");
      current_right_pos = fbdo.floatData();

      Firebase.RTDB.getFloat(&fbdo, "/left_curtain/desired_position");
      desired_left_pos = fbdo.floatData();

      Firebase.RTDB.getFloat(&fbdo, "/right_curtain/desired_position");
      desired_right_pos = fbdo.floatData();

      Firebase.RTDB.getBool(&fbdo, "/command/command_executed");
      command_executed = fbdo.boolData();

      Firebase.RTDB.getString(&fbdo, "/command/command");
      command = fbdo.stringData();
    }

    else {
      Serial.println("Failed");
      Serial.println("Reason:" + fbdo.errorReason());
    }




    if (command_executed == false) {

      //Right motor
      if (command == "move_right_curtain") {

        Serial.print("Right Position is: ");
        Serial.println(current_right_pos);

        if (current_right_pos <= desired_right_pos) {

          Serial.println("Moving the motor up");

          move_time = (desired_right_pos - current_right_pos) * calibration_const;
          moveMotor("right", "up", move_time);
          current_right_pos = desired_right_pos;

          Serial.print("Right motor has been moved to: ");
          Serial.println(desired_right_pos);
        }

        if (current_right_pos > desired_right_pos) {

          Serial.println("Moving the motor down");

          move_time = (current_right_pos - desired_right_pos) * calibration_const;
          moveMotor("right", "down", move_time);
          current_right_pos = desired_right_pos;

          Serial.print("Right motor has been moved to: ");
          Serial.println(desired_right_pos);
        }

        Firebase.RTDB.setFloat(&fbdo, "right_curtain/current_position", current_right_pos);
        Firebase.RTDB.setBool(&fbdo, "command/command_executed", true);
      }




      //Left motor
      if (command == "move_left_curtain") {

        Serial.print("Left Position is: ");
        Serial.println(current_left_pos);

        if (current_left_pos <= desired_left_pos) {

          Serial.println("Moving the motor up");

          move_time = (desired_left_pos - current_left_pos) * calibration_const;
          moveMotor("left", "up", move_time);
          current_left_pos = desired_left_pos;

          Serial.print("Left motor has been moved to: ");
          Serial.println(desired_left_pos);
        }

        if (current_left_pos > desired_left_pos) {

          Serial.println("Moving the motor down");

          move_time = (current_left_pos - desired_left_pos) * calibration_const;
          moveMotor("left", "down", move_time);
          current_left_pos = desired_left_pos;

          Serial.print("Left motor has been moved to: ");
          Serial.println(desired_left_pos);
        }

        Firebase.RTDB.setFloat(&fbdo, "left_curtain/current_position", current_left_pos);
        Firebase.RTDB.setBool(&fbdo, "command/command_executed", true);
      }


/*

      //Retrieve temp/humidity data
      else if (command == "get_temp") {

        float temp = temp_sensor1.readTemperature() * 1.8 + 32;
        float humidity = temp_sensor1.readHumidity();

        Serial.print("Temperature = ");
        Serial.print(temp);
        Serial.println(" F ");
        Serial.print("Humidity = ");
        Serial.println(humidity);

        Firebase.RTDB.setFloat(&fbdo, "conditions/temperature", temp);
        Firebase.RTDB.setFloat(&fbdo, "conditions/humidity", humidity);
      }



/*

      //Reset to known positions (all motors down)
      else if (command == "reset") {

        Serial.println("Reset motor positions");

        if (digitalRead(left_bot_limit) == HIGH) {

          digitalWrite(IN1, LOW);
          digitalWrite(IN2, HIGH);
          delay(5);

        }
        else if (digitalRead(left_bot_limit) == LOW) {

          digitalWrite(IN1, LOW);
          digitalWrite(IN2, LOW);

        }





        if (digitalRead(right_bot_limit) == HIGH) {

          digitalWrite(IN3, LOW);
          digitalWrite(IN4, HIGH);
          delay(5);

        }
        else if (digitalRead(right_bot_limit) == LOW) {

          digitalWrite(IN3, LOW);
          digitalWrite(IN4, LOW);

        }
      }

*/


      //Calibrate by measuring time to go from bottom to top limit switch
      else if (command == "calibrate") {

      }
    }





    else if (command_executed == true) {
      Serial.println("no commands to execute");
    }


    /*
      Serial.print("command: ");
      Serial.println(command);
      Serial.print("executed: ");
      Serial.println(command_executed);
      Serial.print("desired left: ");
      Serial.println(desired_left_pos);
      Serial.print("desired right: ");
      Serial.println(desired_right_pos);
      Serial.print("current left: ");
      Serial.println(current_left_pos);
      Serial.print("current right ");
      Serial.println(current_right_pos);
      Serial.println();
      Serial.println();
    */






  }

  Serial.println();
  delay(1000);


}
