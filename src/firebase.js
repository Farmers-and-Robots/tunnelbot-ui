import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getDatabase } from "firebase/database"

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyBLKB-cpt_ClZfpMhTVYw3Rtis8TN8htmY",
    authDomain: "tunnelbot.firebaseapp.com",
    databaseURL: "https://tunnelbot-default-rtdb.firebaseio.com",
    projectId: "tunnelbot",
    storageBucket: "tunnelbot.appspot.com",
    messagingSenderId: "1005603752829",
    appId: "1:1005603752829:web:1899becc015bc325b99a14",
    measurementId: "G-X11V3DQZ3H"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
const auth = getAuth(app);
const db = getDatabase(app)
export { auth, db }
