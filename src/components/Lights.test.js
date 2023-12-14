import React from "react"
import {render, screen} from "@testing-library/react"
import "@testing-library/jest-dom"
import {BrowserRouter as Router} from "react-router-dom";
import Lights from "./Lights";

test("loads component", async () => {
  // ARRANGE
  render(
    <Router>
      <Lights url="/farm/lights"/>
    </Router>)

  // ASSERT
  expect(screen.getByRole("heading")).toHaveTextContent("Lights")
})
