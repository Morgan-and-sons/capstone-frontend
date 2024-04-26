import React from "react"
import { render, screen } from "@testing-library/react"
import Dashboard from "../pages/Dashboard"
import mockUsers from "../mockUsers"
import mockEvents from "../mockEvents"
import mockEventParticipants from "../mockEventParticipants"

test("renders Dashboard page", () => {
  render(
    <Dashboard
      currentUser={mockUsers}
      events={mockEvents}
      eventParticipants={mockEventParticipants}
    />
  )

  const welcomeMessage = screen.getByText(`Welcome ${mockUsers.username}`)
  expect(welcomeMessage).toBeInTheDocument()

  const overallStatsHeading = screen.getByText("Overall Stats")
  expect(overallStatsHeading).toBeInTheDocument()

  const personalEventsHeading = screen.getByText("Personal Events")
  expect(personalEventsHeading).toBeInTheDocument()

  const groupEventsHeading = screen.getByText("Group Events")
  expect(groupEventsHeading).toBeInTheDocument()

  const addEventButton = screen.getByText("Add Event")
  expect(addEventButton).toBeInTheDocument()
})
