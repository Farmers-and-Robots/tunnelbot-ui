import * as React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import PageNotFound from "./components/PageNotFound";
import Cameras from "./features/cameras/Cameras";
import Curtains from "./features/curtains/Curtains";
import Devices from "./features/devices/Devices";
import Events from "./features/events/Events";
import Farm from "./features/farm/Farm";
import Heating from "./features/heating/Heating";
import Irrigation from "./features/irrigation/Irrigation";
import People from "./features/people/People";
import SignIn from "./features/signin/SignIn";
import SignUp from "./features/signup/SignUp";
import Tunnels from "./features/tunnels/Tunnels";
import Weather from "./features/weather/Weather";

function App() {
  return (
    <Router>
      <div>
        <section>
          <Routes>
            <Route index element={<Farm />}></Route>
            <Route path="/signup" element={<SignUp />}></Route>
            <Route path="/signin" element={<SignIn />}></Route>
            <Route path="/farm" element={<Farm />}>
              <Route index element={<Events />} />
              <Route path="events" element={<Events />}></Route>
              <Route path="tunnels" element={<Tunnels />}></Route>
              <Route path="curtains" element={<Curtains />}></Route>
              <Route path="heating" element={<Heating />}></Route>
              <Route path="irrigation" element={<Irrigation />}></Route>
              <Route path="camera" element={<Cameras />}></Route>
              <Route path="devices" element={<Devices />}></Route>
              <Route path="weather" element={<Weather />}></Route>
              <Route path="people" element={<People />}></Route>
            </Route>
            <Route path="*" element={<PageNotFound />}></Route>
          </Routes>
        </section>
      </div>
    </Router>
  );
}

export default App;
