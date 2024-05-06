import React from "react"
import { render, screen } from "@testing-library/react"
import HomeCarousel from "../components/HomeCarousel"

test("renders HomeCarousel component", () => {
  render(<HomeCarousel />)

  const title = screen.getByText(/Endless Opportunities/i)
  expect(title).toBeInTheDocument()

  const hawaiiItem = screen.getByAltText(/Hawaii Trip for Four/i)
  expect(hawaiiItem).toBeInTheDocument()

  const concertItem = screen.getByAltText(/Concert With 4 Friends/i)
  expect(concertItem).toBeInTheDocument()

  const baseballItem = screen.getByAltText(/Baseball Game with 3 Friends/i)
  expect(baseballItem).toBeInTheDocument()

  const cabinItem = screen.getByAltText(/Cabin Trip for Six/i)
  expect(cabinItem).toBeInTheDocument()
})
