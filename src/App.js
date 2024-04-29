import React, { useState, useEffect } from "react"
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
import Dashboard from "./pages/Dashboard"
import { Route, Routes } from "react-router-dom"

const App = () => {
  const [events, setEvents] = useState([])
  useEffect(() => {
    getPermittedEvents()
  }, [])
  const [eventParticipants, setEventParticipants] = useState(
    mockEventParticipants
  )
  const [currentUser, setCurrentUser] = useState(null)

  useEffect(() => {
    const loggedInUser = localStorage.getItem("currentUser")
    if (loggedInUser) {
      setCurrentUser(JSON.parse(loggedInUser))
    }
  }, [])

  const signUp = async (currentUser) => {
    try {
      const signUpResponse = await fetch("http://localhost:3000/signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(currentUser),
      })
      if (!signUpResponse) {
        throw new Error(signUpResponse.errors)
      }
      const payload = await signUpResponse.json()
      localStorage.setItem("token", signUpResponse.headers.get("Authorization"))
      localStorage.setItem("currentUser", JSON.stringify(payload))
      setCurrentUser(payload)
    } catch (error) {
      console.log("error fetching sign up data")
    }
  }

  const signIn = async (user) => {
    try {
      const signInResponse = await fetch("http://localhost:3000/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(user),
      })

      if (!signInResponse.ok) {
        throw new Error("Invalid credentials")
      }

      const payload = await signInResponse.json()
      localStorage.setItem("token", signInResponse.headers.get("Authorization"))
      localStorage.setItem("user", JSON.stringify(payload))
      setCurrentUser(payload)

      return true
    } catch (error) {
      console.log("Error fetching sign-in data:", error)
      return false
    }
  }

  const signOut = async () => {
    try {
      const signOutResponse = await fetch("http://localhost:3000/logout", {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
          Authorization: localStorage.getItem("token"),
        },
      })
      if (!signOutResponse) {
        throw new Error(signOutResponse.errors)
      }
      await signOutResponse.json()
      setCurrentUser(null)
      localStorage.removeItem("token")
      localStorage.removeItem("user")
    } catch (error) {
      console.log("error fetching log out data")
    }
  }

  // const getEvents = async () => {
  //   try {
  //     const getResponse = await fetch("http://localhost:3000/events")
  //     if (!getResponse.ok) {
  //       throw new Error("Error on the get request for events")
  //     }
  //     const getResult = await getResponse.json()
  //     setEvents(getResult)
  //   } catch (error) {
  //     alert("Ooops something went wrong", error.message)
  //   }
  // }

  const getPermittedEvents = async () => {
    try {
      const getResponse = await fetch(
        `http://localhost:3000/event_participants/${currentUser.id}`,
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            Authorization: localStorage.getItem("token"),
          },
        }
      )
      if (!getResponse.ok) {
        throw new Error("Error on the get request for events")
      }
      const getResult = await getResponse.json()
      setEvents(getResult)
    } catch (error) {
      alert("Ooops something went wrong", error.message)
    }
  }

  console.log(currentUser.id)
  console.log(currentUser)
  console.log(events)
  return (
    <>
      <Header currentUser={currentUser} signOut={signOut} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signup" element={<SignUp signUp={signUp} />} />
        <Route path="/signin" element={<SignIn signIn={signIn} />} />
        <Route
          path="/dashboard"
          element={
            <Dashboard
              currentUser={currentUser}
              events={events}
              eventParticipants={eventParticipants}
            />
          }
        />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </>
  )
}

export default App
