import React from "react"
import {render, screen} from "@testing-library/react"
import "@testing-library/jest-dom"
import {BrowserRouter as Router} from "react-router-dom";
import People from "./People";

test("loads component", async () => {
  // ARRANGE
  render(
    <Router>
      <People url="/farm/people"/>
    </Router>)

  // ASSERT
  expect(screen.getByRole("heading")).toHaveTextContent("People")
})
