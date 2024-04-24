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

  const DashboardLink = screen.getByText(/Dashboard/i)
  expect(DashboardLink).toBeInTheDocument()
  expect(DashboardLink.getAttribute("href")).toBe("/dashboard")

  const HomeLink = screen.getByText(/Home/i)
  expect(HomeLink).toBeInTheDocument()
  expect(HomeLink.getAttribute("href")).toBe("/")

  const FAQLink = screen.getByText(/FAQ/i)
  expect(FAQLink).toBeInTheDocument()
  expect(FAQLink.getAttribute("href")).toBe("/FAQ")

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
