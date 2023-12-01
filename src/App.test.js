import React from "react"
import {render, screen} from "@testing-library/react"
import fireEvent from "@testing-library/user-event"
import "@testing-library/jest-dom"
import SignIn from "./components/SignIn"
import { BrowserRouter as Router } from "react-router-dom";
import {act} from "react-dom/test-utils";


test("loads and displays SignUp link", async () => {
  // ARRANGE
  render(
    <Router>
      <SignIn url="/signin" />
    </Router>)

  // ACT
  act(() => {
    fireEvent.click(screen.getByText("Sign in"))
    screen.findByRole("heading")
  }
  )


  // ASSERT
  expect(screen.getByRole("heading")).toHaveTextContent("Sign in")
})
