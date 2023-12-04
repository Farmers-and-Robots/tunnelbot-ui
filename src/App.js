import * as React from "react";
import Tunnelbot from "./components/Tunnelbot";
import { BrowserRouter as Router } from "react-router-dom";
import SignIn from "./components/SignIn";
import SignUp from "./components/SignUp";
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
            <Route path="/tunnelbot" element={<Tunnelbot/>}></Route>
          </Routes>
        </section>
      </div>
    </Router>
  )

}

export default App;
