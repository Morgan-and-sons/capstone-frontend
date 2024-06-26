import React, { useState, useEffect } from "react"
import "./App.css"
import Header from "./components/Header"
import Footer from "./components/Footer"
import NotFound from "./pages/NotFound"
import Home from "./pages/Home"
import AboutUs from "./pages/AboutUs"
import SignUp from "./pages/SignUp"
import SignIn from "./pages/SignIn"
import Dashboard from "./pages/Dashboard"
import New from "./pages/New"
import Edit from "./pages/Edit"
import { Route, Routes } from "react-router-dom"
import { useNavigate } from "react-router-dom"

const App = () => {
  const [currentUser, setCurrentUser] = useState(null)
  const [event, setEvent] = useState(null)
  const [activityData, setActivityData] = useState(null)
  const navigate = useNavigate()

  useEffect(() => {
    getEvents()
    getEventParticipants()
    const loggedInUser = localStorage.getItem("user")
    if (loggedInUser) {
      setCurrentUser(JSON.parse(loggedInUser))
    }
  }, [])

  const signUp = async (newUser) => {
    try {
      const signUpResponse = await fetch("https://capstone-backend-pcts.onrender.com/signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(newUser),
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
      const signInResponse = await fetch("https://capstone-backend-pcts.onrender.com/login", {
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
      const signOutResponse = await fetch("https://capstone-backend-pcts.onrender.com/logout", {
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
      const getResponse = await fetch("https://capstone-backend-pcts.onrender.com/events")
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
      const createResponse = await fetch("https://capstone-backend-pcts.onrender.com/events", {
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
      getEvents()
    } catch (error) {
      alert("Ooops something went wrong", error.message)
    }
    navigate("/dashboard")
  }

  const updateEvent = async (id, editEvent) => {
    try {
      const patchResponse = await fetch(`https://capstone-backend-pcts.onrender.com/events/${id}`, {
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
      const deleteResponse = await fetch(`https://capstone-backend-pcts.onrender.com/events/${id}`, {
        method: "DELETE",
      })
      if (!deleteResponse.ok) {
        throw new Error("Error on the delete request for events")
      }
    } catch (error) {
      alert("Ooops something went wrong", error.message)
    }
  }

  const createEventParticipant = async (event) => {
    try {
      const createResponse = await fetch(
        "https://capstone-backend-pcts.onrender.com/event_participants",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(event),
        }
      )
      if (!createResponse.ok) {
        throw new Error("Error on the post request for event participants")
      }
      await createResponse.json()
    } catch (error) {
      alert("Ooops something went wrong", error.message)
    }
    navigate("/dashboard")
  }

  const getEventParticipants = async () => {
    try {
      const getResponse = await fetch(
        "https://capstone-backend-pcts.onrender.com/event_participants"
      )
      if (!getResponse.ok) {
        throw new Error("Error on the get request for events")
      }
      const getResult = await getResponse.json()
    } catch (error) {
      alert("Ooops something went wrong", error.message)
    }
  }

  return (
    <>
      <Header id="top" currentUser={currentUser} signOut={signOut} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/aboutus" element={<AboutUs />} />
        <Route path="/signup" element={<SignUp signUp={signUp} />} />
        <Route path="/signin" element={<SignIn signIn={signIn} />} />
        <Route
          path="/dashboard"
          element={
            <Dashboard
              deleteEvent={deleteEvent}
              currentUser={currentUser}
              activityData={activityData}
              updateEvent={updateEvent}
              setActivityData={setActivityData}
              setEvent={setEvent}
              createEventParticipant={createEventParticipant}
            />
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
