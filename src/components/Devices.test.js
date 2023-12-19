import React from "react"
import {render, screen} from "@testing-library/react"
import "@testing-library/jest-dom"
import {BrowserRouter as Router} from "react-router-dom";
import Devices from "./Devices";

test("loads component", async () => {
  // ARRANGE
  render(
    <Router>
      <Devices url="/farm/devices"/>
    </Router>)

  // ASSERT
  expect(screen.getByRole("heading")).toHaveTextContent("Devices")
})
