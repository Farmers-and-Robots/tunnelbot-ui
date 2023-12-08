import React from "react"
import {render, screen} from "@testing-library/react"
import "@testing-library/jest-dom"
import {BrowserRouter as Router} from "react-router-dom";
import Operations from "./Operations";

test("loads component", async () => {
  // ARRANGE
  render(
    <Router>
      <Operations url="/tunnelbot/operations"/>
    </Router>)

  // ASSERT
  expect(screen.getByRole("heading")).toHaveTextContent("Operations")
})