import React from "react"
import { render, screen } from "@testing-library/react"
import Edit from "../pages/Edit"
import { MemoryRouter, Routes, Route } from "react-router-dom"

test("renders Edit component", () => {
  const currentUser = { id: 1 }
  const event = [
    {
      id: 1,
      title: "Sample Event",
      body: "Sample Event Description",
      eventphoto: "sample-photo-url.jpg",
      eventamount: 100,
      grouptotal: 200,
      location: "Sample Location",
      creator: 1,
    },
  ]

  render(
    <MemoryRouter initialEntries={["/edit/1"]}>
      <Routes>
        <Route
          path="/edit/:id"
          element={<Edit event={event} currentUser={currentUser} />}
        />
      </Routes>
    </MemoryRouter>
  )

  const updateTitle = screen.getByText(/Update Event/)
  expect(updateTitle).toBeInTheDocument()

  const title = screen.getByLabelText(/Event Title/)
  expect(title).toBeInTheDocument()

  const eventDescription = screen.getByLabelText(/Event Description/)
  expect(eventDescription).toBeInTheDocument()

  const eventUrl = screen.getByLabelText(/Event Photo URL/)
  expect(eventUrl).toBeInTheDocument()

  const eventAmount = screen.getByLabelText(/Event Amount/)
  expect(eventAmount).toBeInTheDocument()

  const eventGroupTotal = screen.getByLabelText(/Group Total/)
  expect(eventGroupTotal).toBeInTheDocument()

  const eventLocation = screen.getByLabelText(/Location/)
  expect(eventLocation).toBeInTheDocument()

  const eventCreator = screen.getByLabelText(/Event Creator/)
  expect(eventCreator).toBeInTheDocument()
})
