import React, { useState } from "react"
import "./App.css"
import mockEventParticipants from "./mockEventParticipants"
import mockEvents from "./mockEvents"
import mockUsers from "./mockUsers"

const App = () => {
  const [currentUser, setCurrentUser] = useState(mockUsers[0])
  const [events, setEvents] = useState(mockEvents)
  const [eventParticipants, setEventParticipants] = useState(
    mockEventParticipants
  )

  return (
    <>
      <h3>Bank Buddy App</h3>
    </>
  )
}

export default App
