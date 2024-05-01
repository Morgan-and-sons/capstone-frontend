import React, { useState, useEffect } from "react"
import "./App.css"
import Header from "./components/Header"
import Footer from "./components/Footer"
import NotFound from "./pages/NotFound"
import Home from "./pages/Home"
import SignUp from "./pages/SignUp"
import SignIn from "./pages/SignIn"
import Dashboard from "./pages/Dashboard"
import New from "./pages/New"
import Edit from "./pages/Edit"
import { Route, Routes } from "react-router-dom"
import { useNavigate } from "react-router-dom"
import { get } from "react-hook-form"

const App = () => {
  const [currentUser, setCurrentUser] = useState(null)
  const [event, setEvent] = useState(null)
  useEffect(() => {
    getEvents()
  }, [])

  const navigate = useNavigate()

  useEffect(() => {
    const loggedInUser = localStorage.getItem("user")
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

  const getEvents = async () => {
    try {
      const getResponse = await fetch("http://localhost:3000/events")
      if (!getResponse.ok) {
        throw new Error("Error on the get request for events")
      }
      const getResult = await getResponse.json()
      setEvent(getResult)
    } catch (error) {
      alert("Ooops something went wrong", error.message)
    }
  }

  const createEvent = async (event) => {
    try {
      const createResponse = await fetch("http://localhost:3000/events", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(event),
      })
      if (!createResponse.ok) {
        throw new Error("Error on the post request for events")
      }
      await createResponse.json()
    } catch (error) {
      alert("Ooops something went wrong", error.message)
    }
    navigate("/dashboard")
  }

  const updateEvent = async (id, editEvent) => {
    console.log(id)
    console.log(editEvent)
    try {
      const patchResponse = await fetch(`http://localhost:3000/events/${id}`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(editEvent),
      })
      if (!patchResponse.ok) {
        throw new Error("Error on the patch request for events")
      }
      await patchResponse.json()
      getEvents()
    } catch (error) {
      alert("Ooops something went wrong", error.message)
    }
  }

  const deleteEvent = async (id) => {
    try {
      const deleteResponse = await fetch(`http://localhost:3000/events/${id}`, {
        method: "DELETE",
      })
      if (!deleteResponse.ok) {
        throw new Error("Error on the delete request for events")
      }
    } catch (error) {
      alert("Ooops something went wrong", error.message)
    }
  }

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
            <Dashboard deleteEvent={deleteEvent} currentUser={currentUser} />
          }
        />
        <Route
          path="/new"
          element={<New createEvent={createEvent} currentUser={currentUser} />}
        />
        <Route
          path="/edit/:id"
          element={
            <Edit
              currentUser={currentUser}
              updateEvent={updateEvent}
              event={event}
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
