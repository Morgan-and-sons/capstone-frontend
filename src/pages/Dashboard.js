import React, { useState, useEffect } from "react"
import {
  Progress,
  Card,
  CardTitle,
  Offcanvas,
  OffcanvasHeader,
  OffcanvasBody,
} from "reactstrap"
import DashModal from "../components/DashModal"
import { Link } from "react-router-dom"
import { FaPlus } from "react-icons/fa"
import { Tooltip } from "react-tooltip"

const Dashboard = ({
  currentUser,
  deleteEvent,
  setActivityData,
  createEventParticipant,
  updateEvent,
}) => {
  const [showOffcanvas, setShowOffcanvas] = useState(false)
  const [userEvents, setUserEvents] = useState(null)
  const [eventsWithColor, setEventsWithColor] = useState(null)
  const [newHovered, setNewHovered] = useState(false)

  useEffect(() => {
    getPermittedEvents()
  }, [])

  useEffect(() => {
    sortEvents()
  }, [userEvents])

  const getPermittedEvents = async () => {
    try {
      const getResponse = await fetch(
        `https://capstone-backend-pcts.onrender.com/event_participants/${currentUser.id}`,
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
      console.log("Ooops something went wrong", error.message)
    }
  }

  const barColors = [
    "#8C53FF",
    "#6f71ee",
    "#5390dd",
    "#38afd9",
    "#2abfd6",
    "#1cded0",
    "#0eeed9",
  ]

  const sortEvents = () => {
    let myEvents = userEvents?.filter(
      (event) => event.creator === currentUser.id
    )
    let invitedEvents = userEvents?.filter(
      (event) => event.creator !== currentUser.id
    )
    let allEvents = myEvents?.concat(invitedEvents)

    const addColorProperty = allEvents?.map((event, index) => {
      return {
        ...event,
        color: barColors[index % barColors.length],
      }
    })
    setEventsWithColor(addColorProperty)
  }

  const isItMine = (events) => {
    return events?.filter((event) => event.creator === currentUser.id)
  }

  const wasIInvited = (events) => {
    return events?.filter((event) => event.creator !== currentUser.id)
  }

  const convertUSD = (amount) => {
    const [dollars, cents] = String(amount).split(".")
    const formattedDollars = dollars.replace(/\B(?=(\d{3})+(?!\d))/g, ",")
    const formattedAmount = `${formattedDollars}.${cents || "00"}`
    return `$${formattedAmount}`
  }

  console.log(eventsWithColor)

  return (
    <>
      <div>
        <div className="d-flex pic-div">
          <img
            data-tooltip-id="my-tooltip"
            data-tooltip-content={`${currentUser.firstname}'s Profile`}
            src={currentUser.profile_photo_url}
            alt="your profile picture"
            style={{
              height: "8vh",
              cursor: "pointer",
            }}
            onClick={() => setShowOffcanvas(!showOffcanvas)}
          />
        </div>
        <Tooltip
          id="my-tooltip"
          style={{
            backgroundColor: "#E9ECEF",
            color: "#888787",
            fontWeight: 600,
          }}
        />
        <Offcanvas
          isOpen={showOffcanvas}
          toggle={() => setShowOffcanvas(!showOffcanvas)}
        >
          <div className="slide-close-btn-cont">
            <svg
              onClick={() => setShowOffcanvas(!showOffcanvas)}
              style={{ cursor: "pointer" }}
              width="23"
              height="23"
              viewBox="0 0 30 30"
            >
              <defs>
                <linearGradient id="textGradient" x1="0" y1="0" x2="1" y2="0">
                  <stop offset="0%" stop-color="#8c52ff" />
                  <stop offset="100%" stop-color="#5ce1e6" />
                </linearGradient>
              </defs>
              <text
                x="0"
                y="20"
                fill="url(#textGradient)"
                font-size="35"
                font-weight="800"
                fontFamily="Arial Rounded MT Bold"
                text-anchor="start"
              >
                x
              </text>
            </svg>
          </div>
          <div className="d-flex" style={{ justifyContent: "center" }}>
            <div className="d-flex pic-div-inside">
              <img
                src={currentUser.profile_photo_url}
                alt="your profile picture"
                style={{
                  height: "15vh",
                }}
                onClick={() => setShowOffcanvas(!showOffcanvas)}
              />
            </div>
          </div>
          <OffcanvasHeader
            className="d-flex"
            style={{ justifyContent: "center" }}
          >
            {currentUser.firstname} {currentUser.lastname}
          </OffcanvasHeader>
          <OffcanvasBody>
            <p>
              <span style={{ fontWeight: 700 }}>Username: </span>
              {currentUser.username}
            </p>
            <p>
              <span style={{ fontWeight: 700 }}>Email: </span>
              {currentUser.email}
            </p>
          </OffcanvasBody>
        </Offcanvas>
      </div>
      <div className="main-dash-cont">
        <div className="middle-dash-cont">
          <div style={{ textAlign: "center" }}>
            <h1
              className="mb-5"
              style={{ fontFamily: "Shrikhand, serif" }}
            >{`${currentUser.firstname}'s Dashboard`}</h1>
          </div>
          <div
            className="d-flex mb-3"
            style={{ justifyContent: "center", flexDirection: "column" }}
          >
            <h3>Overall Stats</h3>
            <div className="progress-bars">
              {eventsWithColor &&
                eventsWithColor.map((event) => (
                  <div key={event.id}>
                    <p
                      style={{
                        fontWeight: 600,
                        color: "#38373799",
                        marginBottom: "1vh",
                      }}
                    >
                      {event && event.title}
                    </p>
                    <Progress
                      animated
                      className="my-2"
                      value={(event.grouptotal / event.eventamount) * 100}
                    >
                      <p
                        style={{
                          marginTop: "1.75vh",
                          backgroundColor: event.color,
                        }}
                      >
                        {convertUSD(event.grouptotal)}
                      </p>
                    </Progress>
                  </div>
                ))}
            </div>
          </div>
          <div className="personal-cont">
            <h3>{`Created Events`}</h3>
            <div className="d-flex gap-3 wrap-cards mb-3">
              {eventsWithColor &&
                isItMine(eventsWithColor).map((event) => (
                  <Card key={event.id} body className="dash-card-body">
                    <CardTitle
                      style={{
                        fontSize: "3vh",
                        height: "50%",
                        fontWeight: "500",
                        color: "#38373799",
                      }}
                    >
                      <p>{event && event.title}</p>
                    </CardTitle>
                    <div
                      style={{
                        height: "50%",
                        color: "#38373799",
                        fontWeight: 600,
                      }}
                    >
                      <div className="text-center">{`Goal: ${convertUSD(
                        event.eventamount
                      )}`}</div>
                      <Progress
                        animated
                        className="my-2"
                        value={(event.grouptotal / event.eventamount) * 100}
                      >
                        <p
                          style={{
                            marginTop: "1.75vh",
                            backgroundColor: event.color,
                          }}
                        >
                          {convertUSD(event.grouptotal)}
                        </p>
                      </Progress>
                      <DashModal
                        event={event}
                        currentUser={currentUser}
                        deleteEvent={deleteEvent}
                        getPermittedEvents={getPermittedEvents}
                        convertUSD={convertUSD}
                        setActivityData={setActivityData}
                        createEventParticipant={createEventParticipant}
                        updateEvent={updateEvent}
                      />
                    </div>
                  </Card>
                ))}
              <Link to="/new" style={{ textDecoration: "none" }}>
                <Card
                  body
                  className="dash-card-body add-event-card d-flex"
                  style={{ justifyContent: "center", alignItems: "center" }}
                  onMouseEnter={() => setNewHovered(true)}
                  onMouseLeave={() => setNewHovered(false)}
                >
                  <span
                    style={{
                      fontSize: "3vh",
                      fontWeight: "500",
                      color: "#38373799",
                    }}
                  >
                    {!newHovered ? (
                      "Create an Event"
                    ) : (
                      <FaPlus style={{ height: "5vh", color: "#fff" }} />
                    )}
                  </span>
                </Card>
              </Link>
            </div>
            <h3>Invited Events</h3>
            <div className="d-flex gap-3 wrap-cards">
              {eventsWithColor &&
                wasIInvited(eventsWithColor).map((event) => (
                  <Card key={event.id} body className="dash-card-body">
                    <CardTitle
                      style={{
                        fontSize: "3vh",
                        height: "50%",
                        fontWeight: "500",
                        color: "#38373799",
                      }}
                    >
                      <p>{event && event.title}</p>
                    </CardTitle>
                    <div
                      style={{
                        height: "50%",
                        color: "#38373799",
                        fontWeight: 600,
                      }}
                    >
                      <div className="text-center">{`Goal: ${convertUSD(
                        event.eventamount
                      )}`}</div>
                      <Progress
                        animated
                        className="my-2"
                        value={(event.grouptotal / event.eventamount) * 100}
                      >
                        <p
                          style={{
                            marginTop: "1.75vh",
                            backgroundColor: event.color,
                          }}
                        >
                          {convertUSD(event.grouptotal)}
                        </p>
                      </Progress>
                      <DashModal
                        event={event}
                        currentUser={currentUser}
                        deleteEvent={deleteEvent}
                        getPermittedEvents={getPermittedEvents}
                        convertUSD={convertUSD}
                        setActivityData={setActivityData}
                        createEventParticipant={createEventParticipant}
                        updateEvent={updateEvent}
                      />
                    </div>
                  </Card>
                ))}
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Dashboard
