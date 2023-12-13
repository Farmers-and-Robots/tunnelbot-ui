import React from "react"
import {render, screen} from "@testing-library/react"
import "@testing-library/jest-dom"
import {BrowserRouter as Router} from "react-router-dom";
import Weather from "./Weather";

test("loads component", async () => {
  // ARRANGE
  render(
    <Router>
      <Weather url="/tunnelbot/weatherqq"/>
    </Router>)

  // ASSERT
  expect(screen.getByRole("heading")).toHaveTextContent("Weather")
})