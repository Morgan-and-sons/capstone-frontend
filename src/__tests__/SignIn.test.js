import React from "react"
import { render, screen } from "@testing-library/react"
import { BrowserRouter } from "react-router-dom"
import SignIn from "../pages/SignIn"

test("renders SignIn component", () => {
  render(
    <BrowserRouter>
      <SignIn />
    </BrowserRouter>
  )

  const signInTitle = screen.getByRole("heading", { name: /Sign In/i })
  expect(signInTitle).toBeInTheDocument()

  const username = screen.getByLabelText(/Email/)
  expect(username).toBeInTheDocument()

  const password = screen.getByLabelText(/Password/)
  expect(password).toBeInTheDocument()

  const noAccount = screen.getByText(/Don't have an account?/)
  expect(noAccount).toBeInTheDocument()
})
