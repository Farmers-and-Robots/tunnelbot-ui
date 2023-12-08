import React from "react"
import {render, screen} from "@testing-library/react"
import "@testing-library/jest-dom"
import { BrowserRouter as Router } from "react-router-dom";
import PageNotFound from "./PageNotFound";

test("loads 404 on a bad link", async () => {
  // ARRANGE
  render(
    <Router>
      <PageNotFound url="/foo" />
    </Router>)

  // ASSERT
  expect(screen.getByRole("heading")).toHaveTextContent("404 - Page Not Found")
})