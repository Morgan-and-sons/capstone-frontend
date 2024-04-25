import React from "react"
import { render, screen } from "@testing-library/react"
import { BrowserRouter } from "react-router-dom"
import SignUp from "../pages/SignUp"

test("renders SignUp component", () => {
  render(
    <BrowserRouter>
      <SignUp />
    </BrowserRouter>
  )

  const signInTitle = screen.getByText(/Create an Account/)
  expect(signInTitle).toBeInTheDocument()

  const firstName = screen.getByLabelText(/Enter Your First Name/)
  expect(firstName).toBeInTheDocument()

  const lastName = screen.getByLabelText(/Enter Your Last Name/)
  expect(lastName).toBeInTheDocument()

  const username = screen.getByLabelText(/Enter Your Username/)
  expect(username).toBeInTheDocument()

  const email = screen.getByLabelText(/Enter Your Email/)
  expect(email).toBeInTheDocument()

  const password = screen.getByLabelText(/Enter Your Password/)
  expect(password).toBeInTheDocument()

  const passwordConfirmation = screen.getByLabelText(/Password Confirmation/)
  expect(passwordConfirmation).toBeInTheDocument()

  const submitButton = screen.getByText("Sign Up")
  expect(submitButton).toBeInTheDocument()
})
