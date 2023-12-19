import * as React from "react";
import Farm from "./components/Farm";
import { BrowserRouter as Router } from "react-router-dom";
import SignIn from "./components/SignIn";
import SignUp from "./components/SignUp";
import PageNotFound from "./components/PageNotFound"
import Events from "./components/Events"
import Cameras from "./components/Cameras"
import Weather from "./components/Weather"
import Heating from "./components/Heating"
import Devices from "./components/Devices"
import Irrigation from "./components/Irrigation"
import Curtains from "./components/Curtains"
import People from "./components/People"
import { Routes, Route } from "react-router-dom";
import Tunnels from "./components/Tunnels";

function App() {
  return (
    <Router>
      <div>
        <section>
          <Routes>
            <Route path="/" element={<Farm/>}></Route>
            <Route path="/signup" element={<SignUp/>}></Route>
            <Route path="/signin" element={<SignIn/>}></Route>
            <Route path="/farm" element={<Farm/>}>
              <Route index="events" element={<Events/>}></Route>
              <Route path="tunnels" element={<Tunnels/>}></Route>
              <Route path="curtains" element={<Curtains/>}></Route>
              <Route path="heating" element={<Heating/>}></Route>
              <Route path="irrigation" element={<Irrigation/>}></Route>
              <Route path="camera" element={<Cameras/>}></Route>
              <Route path="devices" element={<Devices/>}></Route>
              <Route path="weather" element={<Weather/>}></Route>
              <Route path="people" element={<People/>}></Route>
            </Route>
            <Route path="*" element={<PageNotFound/>}></Route>
          </Routes>
        </section>
      </div>
    </Router>
  )

}

export default App;
