import React from "react"
import { render, screen } from "@testing-library/react"
import { BrowserRouter } from "react-router-dom"
import NotFound from "../pages/NotFound"
import notFound from "../assets/notfound.mp4"

test("renders the NotFound component", () => {
  render(
    <BrowserRouter>
      <NotFound />
    </BrowserRouter>
  )

  const notFoundVideo = screen.getByText(
    "Your Browser does not support the video tag."
  )
  expect(notFoundVideo).toBeInTheDocument()

  expect(notFoundVideo.querySelector("source")).toHaveAttribute("src", notFound)
})
