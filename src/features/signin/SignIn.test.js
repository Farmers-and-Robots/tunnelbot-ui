import "@testing-library/jest-dom";
import { fireEvent, render, screen } from "@testing-library/react";
import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import SignIn from "./SignIn";

test("loads and displays SignIn page", async () => {
  render(
    <Router>
      <SignIn />
    </Router>,
  );

  // Add info and click.
  const emailInput = screen.getByRole("textbox", {
    name: "Email Address",
  });

  fireEvent.change(emailInput, {
    target: { value: "info@farmersandrobots.com" },
  });

  const pwdInput = screen.getByTestId("password").querySelector("input");
  fireEvent.change(pwdInput, {
    target: { value: process.env.TEST_PWD },
  });

  const signInButton = screen.getByTestId("signin");
  fireEvent.click(signInButton);
});
