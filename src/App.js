import React, { useState } from "react"
import "./App.css"
import mockEventParticipants from "./mockEventParticipants"
import mockEvents from "./mockEvents"
import mockUsers from "./mockUsers"
import Header from "./components/Header"
import Footer from "./components/Footer"
import NotFound from "./pages/NotFound"
import Home from "./pages/Home"
import SignUp from "./pages/SignUp"
import SignIn from "./pages/SignIn"
import { Route, Routes } from "react-router-dom"

const App = () => {
  const [currentUser, setCurrentUser] = useState(mockUsers[0])
  const [events, setEvents] = useState(mockEvents)
  const [eventParticipants, setEventParticipants] = useState(
    mockEventParticipants
  )

  const signUp = (newUser) => {
    console.log(newUser)
  }

  const signIn = (user) => {
    console.log(user)
  }

  const signOut = (user) => {
    console.log(user)
  }
  return (
    <>
      <Header currentUser={currentUser} signOut={signOut} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signup" element={<SignUp signUp={signUp} />} />
        <Route path="/signin" element={<SignIn signIn={signIn} />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </>
  )
}

export default App
