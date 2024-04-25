import React, { useState } from "react"
import "./App.css"
import mockEventParticipants from "./mockEventParticipants"
import mockEvents from "./mockEvents"
import mockUsers from "./mockUsers"
import Header from "./components/Header"
import Footer from "./components/Footer"
import NotFound from "./pages/NotFound"
import Home from "./pages/Home"
import { Route, Routes } from "react-router-dom"

const App = () => {
  const [currentUser, setCurrentUser] = useState(mockUsers[0])
  const [events, setEvents] = useState(mockEvents)
  const [eventParticipants, setEventParticipants] = useState(
    mockEventParticipants
  )

  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </>
  )
}

export default App
