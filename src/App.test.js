import React from "react"
import { render, screen } from "@testing-library/react"
import { BrowserRouter } from "react-router-dom"
import App from "./App"
test("renders App component", () => {
  render(
    <BrowserRouter>
      <App />
    </BrowserRouter>
  )
  const bankLogo = screen.getByAltText("bank buddy logo")
  const DashboardLink = screen.getByText("Dashboard")
  const HomeLink = screen.getByText("Home")
  const SignInLink = screen.getByText("Sign In")
  const FAQLink = screen.getByText("FAQ")

  const SignUpButton = screen.getByText(/Sign Up/i)
  expect(bankLogo).toBeInTheDocument()
  const SignOutButton = screen.getByText(/Sign Out/i)
  expect(DashboardLink).toBeInTheDocument()
  expect(HomeLink).toBeInTheDocument()
  expect(SignInLink).toBeInTheDocument()
  expect(FAQLink).toBeInTheDocument()
  expect(SignUpButton).toBeInTheDocument()
  expect(SignOutButton).toBeInTheDocument()
})
