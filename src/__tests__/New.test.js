import React from "react"
import { render, screen } from "@testing-library/react"
import { BrowserRouter } from "react-router-dom"
import New from "../pages/New"

test("renders New component", () => {
  render(
    <BrowserRouter>
      <New />
    </BrowserRouter>
  )

  const signUpTitle = screen.getByText(/Create a New Event/)
  expect(signUpTitle).toBeInTheDocument()

  const description = screen.getByLabelText(/Event Description/)
  expect(description).toBeInTheDocument()

  const url = screen.getByLabelText(/Event Photo URL/)
  expect(url).toBeInTheDocument()

  const amount = screen.getByLabelText(/Event Amount/)
  expect(amount).toBeInTheDocument()

  const total = screen.getByLabelText(/Group Total/)
  expect(total).toBeInTheDocument()

  const location = screen.getByLabelText(/Location/)
  expect(location).toBeInTheDocument()

  const creator = screen.getByLabelText(/Event Creator/)
  expect(creator).toBeInTheDocument()

  const backButton = screen.getByText("Back")
  expect(backButton).toBeInTheDocument()

  const submitButton = screen.getByText("Submit")
  expect(submitButton).toBeInTheDocument()
})
