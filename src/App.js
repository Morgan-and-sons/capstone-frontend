import React, { useState } from "react"
import "./App.css"
import mockEventParticipants from "./mockEventParticipants"
import mockEvents from "./mockEvents"
import mockUsers from "./mockUsers"
import Header from "./components/Header"
import Footer from "./components/Footer"

const App = () => {
  const [currentUser, setCurrentUser] = useState(mockUsers[0])
  const [events, setEvents] = useState(mockEvents)
  const [eventParticipants, setEventParticipants] = useState(
    mockEventParticipants
  )

  return (
    <>
      <Header />

      <Footer />
    </>
  )
}

export default App
