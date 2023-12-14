import React from "react"
import {render, screen} from "@testing-library/react"
import "@testing-library/jest-dom"
import {BrowserRouter as Router} from "react-router-dom";
import Home from "./Home";

test("loads component", async () => {
  // ARRANGE
  render(
    <Router>
      <Home url="/farm/home"/>
    </Router>)

  // ASSERT
  expect(screen.getByRole("heading")).toHaveTextContent("Farm")
})