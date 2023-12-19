import React from "react"
import {render, screen} from "@testing-library/react"
import "@testing-library/jest-dom"
import {BrowserRouter as Router} from "react-router-dom";
import Tunnels from "./Tunnels";

test("loads component", async () => {
  // ARRANGE
  render(
    <Router>
      <Tunnels url="/farm/tunnels"/>
    </Router>)

  // ASSERT
  expect(screen.getByRole("heading")).toHaveTextContent("Tunnels")
})
