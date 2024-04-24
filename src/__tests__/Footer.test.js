import React from "react"
import { render, screen } from "@testing-library/react"
import { BrowserRouter } from "react-router-dom"
import Footer from "../components/Footer"

test("renders the Footer component", () => {
  render(
    <BrowserRouter>
      <Footer />
    </BrowserRouter>
  )
  const ryanLink = screen.getByText("Ryan Lemus")
  const louieLink = screen.getByText("Luis Moreno")
  const morganLink = screen.getByText("Morgan Smith")

  expect(ryanLink).toHaveAttribute("href", "https://github.com/Rlemus93")
  expect(louieLink).toHaveAttribute("href", "https://github.com/Louie-cpu")
  expect(morganLink).toHaveAttribute("href", "https://github.com/smorgannicole")
})
