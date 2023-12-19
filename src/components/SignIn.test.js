import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import fireEvent from "@testing-library/user-event";
import React from "react";
import { act } from "react-dom/test-utils";
import { BrowserRouter as Router } from "react-router-dom";
import SignIn from "./SignIn";

test("loads and displays SignIn page", async () => {
  // ARRANGE
  render(
    <Router>
      <SignIn url="/signin" />
    </Router>,
  );

  // ACT
  act(() => {
    fireEvent.click(screen.getByText("Sign in"));
    screen.findByRole("heading");
  });

  // ASSERT
  expect(screen.getByRole("heading")).toHaveTextContent("Sign in");
});
