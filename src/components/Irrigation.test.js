import React from "react"
import {render, screen} from "@testing-library/react"
import "@testing-library/jest-dom"
import {BrowserRouter as Router} from "react-router-dom";
import Irrigation from "./Irrigation";

test("loads component", async () => {
  // ARRANGE
  render(
    <Router>
      <Irrigation url="/farm/irrigation"/>
    </Router>)

  // ASSERT
  expect(screen.getByRole("heading")).toHaveTextContent("Irrigation")
})
