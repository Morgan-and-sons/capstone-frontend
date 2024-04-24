import { render, screen } from "@testing-library/react"
import { BrowserRouter } from "react-router-dom"
import Header from "../components/Header"

test("renders Header component logo and appropriate links", () => {
  render(
    <BrowserRouter>
      <Header />
    </BrowserRouter>
  )

  const logo = screen.getByAltText(/bank buddy logo/i)
  expect(logo).toBeInTheDocument()

  const dashboardLink = screen.getByText(/Dashboard/i)
  expect(dashboardLink).toBeInTheDocument()
  expect(dashboardLink.getAttribute("href")).toBe("/dashboard")

  const homeLink = screen.getByText(/Home/i)
  expect(homeLink).toBeInTheDocument()
  expect(homeLink.getAttribute("href")).toBe("/")

  const faqLink = screen.getByText(/FAQ/i)
  expect(faqLink).toBeInTheDocument()
  expect(faqLink.getAttribute("href")).toBe("/FAQ")

  const signInLink = screen.getByText(/sign in/i)
  expect(signInLink).toBeInTheDocument()
  expect(signInLink.getAttribute("href")).toBe("/signin")

  const signUpButton = screen.getByText(/sign up/i)
  expect(signUpButton).toBeInTheDocument()
  expect(signUpButton.getAttribute("href")).toBe("/signup")

  const signOutButton = screen.getByText(/sign out/i)
  expect(signOutButton).toBeInTheDocument()
  expect(signOutButton.getAttribute("href")).toBe("/")
})
