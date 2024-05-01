import React, { useState, useEffect } from "react"
import {
  Progress,
  Card,
  CardTitle,
  Button,
  Offcanvas,
  OffcanvasHeader,
  OffcanvasBody,
} from "reactstrap"
import DashModal from "../components/DashModal"
import { Link } from "react-router-dom"

const Dashboard = ({ currentUser }) => {
  const [showOffcanvas, setShowOffcanvas] = useState(false)
  const [userEvents, setUserEvents] = useState(null)
  useEffect(() => {
    getPermittedEvents()
  }, [])
  const handleToggle = () => {
    setShowOffcanvas(!showOffcanvas)
  }

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
      setUserEvents(getResult)
    } catch (error) {
      alert("Ooops something went wrong", error.message)
    }
  }

  return (
    <>
      <div>
        <Button className="btn-class" onClick={handleToggle}>
          Open
        </Button>
        <Offcanvas isOpen={showOffcanvas} toggle={handleToggle}>
          <div className="slide-close-btn-cont">
            <Button className="slide-close-btn" onClick={handleToggle}>
              X
            </Button>
          </div>
          <OffcanvasHeader>
            {currentUser.firstname} {currentUser.lastname}
          </OffcanvasHeader>
          <OffcanvasBody>
            <p>{`Username: ${currentUser.username}`}</p>
            <p>{`Email: ${currentUser.email}`}</p>
            <Link to="/new">
              <Button className="btn-class">Add Event</Button>
            </Link>
          </OffcanvasBody>
        </Offcanvas>
      </div>
      <div className="dashboard-cont">
        <div>
          <h1>{`Welcome ${currentUser.username}`}</h1>
        </div>
        <div className="overall-progress-cont">
          <h3>Overall Stats</h3>
          <div className="progress-bars">
            {userEvents &&
              userEvents.map((event) => (
                <div key={event.id}>
                  <p>{event && event.title}</p>
                  <Progress
                    className="my-2"
                    value={(event.grouptotal / event.eventamount) * 100}
                  >
                    <p>{event && event.grouptotal}</p>
                  </Progress>
                </div>
              ))}
          </div>
        </div>

        <div className="personal-cont">
          <h3>Personal Events</h3>
          <div>
            {userEvents &&
              userEvents.map((event) => (
                <Card
                  key={event.id}
                  body
                  className="text-center card-body"
                  style={{
                    width: "18rem",
                  }}
                >
                  <CardTitle tag="h5" style={{ fontSize: "4vh" }}>
                    <p>{event && event.title}</p>
                  </CardTitle>
                  <Progress
                    className="my-2"
                    value={(event.grouptotal / event.eventamount) * 100}
                  >
                    <p>{event && event.grouptotal}</p>
                  </Progress>
                  <DashModal
                    event={event}
                    currentUser={currentUser}
                    overallBarVisual={
                      (event.grouptotal / event.eventamount) * 100
                    }
                  />
                </Card>
              ))}
          </div>
        </div>
        <Link to="/new">
          <Button className="btn-class">Add Event</Button>
        </Link>
      </div>
    </>
  )
}

export default Dashboard
