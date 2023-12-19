import * as React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Cameras from "./components/Cameras";
import Curtains from "./components/Curtains";
import Devices from "./components/Devices";
import Events from "./components/Events";
import Farm from "./components/Farm";
import Heating from "./components/Heating";
import Irrigation from "./components/Irrigation";
import PageNotFound from "./components/PageNotFound";
import People from "./components/People";
import SignIn from "./components/SignIn";
import SignUp from "./components/SignUp";
import Tunnels from "./components/Tunnels";
import Weather from "./components/Weather";

function App() {
  return (
    <Router>
      <div>
        <section>
          <Routes>
            <Route path="/" element={<Farm />}></Route>
            <Route path="/signup" element={<SignUp />}></Route>
            <Route path="/signin" element={<SignIn />}></Route>
            <Route path="/farm" element={<Farm />}>
              <Route index="events" element={<Events />}></Route>
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
