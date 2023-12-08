import React from "react"
import {render, screen} from "@testing-library/react"
import "@testing-library/jest-dom"
import {BrowserRouter as Router} from "react-router-dom";
import Profile from "./Profile";

test("loads component", async () => {
  // ARRANGE
  render(
    <Router>
      <Profile url="/tunnelbot/profile"/>
    </Router>)

  // ASSERT
  expect(screen.getByRole("heading")).toHaveTextContent("Profile")
})
