import React from "react"
import {render, screen} from "@testing-library/react"
import "@testing-library/jest-dom"
import {BrowserRouter as Router} from "react-router-dom";
import Farm from "./Farm";

test("loads component", async () => {
  // ARRANGE
  render(
    <Router>
      <Farm url="/tunnelbot/farm"/>
    </Router>)

  // ASSERT
  expect(screen.getByRole("heading")).toHaveTextContent("Farm")
})