import * as React from "react";
import Tunnelbot from "./components/Tunnelbot";
import { BrowserRouter as Router } from "react-router-dom";
import SignIn from "./components/SignIn";
import SignUp from "./components/SignUp";
import PageNotFound from "./components/PageNotFound"
import Farm from "./components/Farm"
import Cameras from "./components/Cameras"
import Weather from "./components/Weather"
import Heating from "./components/Heating"
import Lights from "./components/Lights"
import Irrigation from "./components/Irrigation"
import Curtains from "./components/Curtains"
import Profile from "./components/Profile"
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <div>
        <section>
          <Routes>
            <Route path="/" element={<Tunnelbot/>}></Route>
            <Route path="/signup" element={<SignUp/>}></Route>
            <Route path="/signin" element={<SignIn/>}></Route>
            <Route path="/tunnelbot" element={<Tunnelbot/>}>
              <Route path="farm" element={<Farm/>}></Route>
              <Route path="curtains" element={<Curtains/>}></Route>
              <Route path="heating" element={<Heating/>}></Route>
              <Route path="irrigation" element={<Irrigation/>}></Route>
              <Route path="camera" element={<Cameras/>}></Route>
              <Route path="lights" element={<Lights/>}></Route>
              <Route path="weather" element={<Weather/>}></Route>
              <Route path="profile" element={<Profile/>}></Route>
            </Route>
            <Route path="*" element={<PageNotFound/>}></Route>
          </Routes>
        </section>
      </div>
    </Router>
  )

}

export default App;
