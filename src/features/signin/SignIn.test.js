import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import SignIn from "./SignIn";

test("loads and displays SignIn page", async () => {
  // ARRANGE
  render(
    <Router>
      <SignIn url="/signin" />
    </Router>,
  );

  // ASSERT
  expect(screen.getByRole("heading")).toHaveTextContent("Tunnelbot");
});
