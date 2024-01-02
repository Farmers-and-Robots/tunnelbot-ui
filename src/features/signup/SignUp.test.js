import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import SignIn from "./SignUp";

test("loads and displays SignUp link", async () => {
  // ARRANGE
  render(
    <Router>
      <SignIn url="/signup" />
    </Router>,
  );

  // ASSERT
  expect(screen.getByRole("heading")).toHaveTextContent("Tunnelbot");
});
