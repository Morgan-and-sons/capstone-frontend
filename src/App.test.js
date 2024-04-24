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
  const dashboardLink = screen.getByText("Dashboard")
  const homeLink = screen.getByText("Home")
  const signInLink = screen.getByText("Sign In")
  const faqLink = screen.getByText("FAQ")

  const signUpButton = screen.getByText(/Sign Up/i)
  expect(bankLogo).toBeInTheDocument()
  const signOutButton = screen.getByText(/Sign Out/i)
  expect(dashboardLink).toBeInTheDocument()
  expect(homeLink).toBeInTheDocument()
  expect(signInLink).toBeInTheDocument()
  expect(faqLink).toBeInTheDocument()
  expect(signUpButton).toBeInTheDocument()
  expect(signOutButton).toBeInTheDocument()
})
