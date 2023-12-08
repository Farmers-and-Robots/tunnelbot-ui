import React from "react"
import {render, screen} from "@testing-library/react"
import "@testing-library/jest-dom"
import {BrowserRouter as Router} from "react-router-dom";
import Heating from "./Heating";

test("loads component", async () => {
  // ARRANGE
  render(
    <Router>
      <Heating url="/tunnelbot/heating"/>
    </Router>)

  // ASSERT
  expect(screen.getByRole("heading")).toHaveTextContent("Heating")
})