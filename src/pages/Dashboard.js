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

const Dashboard = ({ currentUser, events, eventParticipants }) => {
  const [showOffcanvas, setShowOffcanvas] = useState(false)
  const [userEvents, setUserEvents] = useState(null)
  const [overallBarVisual, setOverallBarVisual] = useState(0)

  const handleToggle = () => {
    setShowOffcanvas(!showOffcanvas)
    console.log(showOffcanvas)
  }

  useEffect(() => {
    const currentUserEvents = events.filter(
      (event) => currentUser.user_id === event.creator
    )

    if (currentUserEvents.length > 0) {
      setUserEvents(currentUserEvents[0])

      const overallBar =
        (currentUserEvents[0].grouptotal / currentUserEvents[0].eventamount) *
        100
      setOverallBarVisual(overallBar)
    }

    const currentEventParticipant = eventParticipants.filter(
      (participant) => participant.user_id === currentUser.user_id
    )
    console.log(currentEventParticipant)
  }, [])

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
          </OffcanvasBody>
        </Offcanvas>
      </div>

      <div className="dashboard-cont">
        <div>
          <h1>{`Welcome ${currentUser.username}`}</h1>
        </div>

        <div>
          <h3>Dashboard</h3>
        </div>

        <div className="overall-progress-cont">
          <h3>Overall Stats</h3>
          <div className="progress-bars">
            <p>{userEvents && userEvents.title}</p>
            <Progress className="my-2" value="25">
              25.0$
            </Progress>
            <Progress className="my-2" value="25">
              25.0$
            </Progress>
            <Progress className="my-2" value="25">
              25.0$
            </Progress>
            <Progress className="my-2" value="25">
              25.0$
            </Progress>
          </div>
        </div>

        <div className="personal-cont">
          <h3>Personal Events</h3>
          <div>
            <Card
              body
              className="text-center card-body"
              style={{
                width: "18rem",
              }}
            >
              <CardTitle tag="h5" style={{ fontSize: "4vh" }}>
                Special Title Treatment
              </CardTitle>
              <Progress className="my-2" value="25">
                25.0$
              </Progress>
              <Button className="btn-class">Go somewhere</Button>
            </Card>
          </div>
        </div>

        <div className="group-cont">
          <h3>Group Events</h3>
          <div>
            <Card
              body
              className="text-center card-body"
              style={{
                width: "18rem",
              }}
            >
              <CardTitle tag="h5" style={{ fontSize: "4vh" }}>
                <p>{userEvents && userEvents.title}</p>
              </CardTitle>
              <Progress className="my-2" value={overallBarVisual}>
                <p>{userEvents && userEvents.grouptotal}</p>
              </Progress>
              <Button className="btn-class">Go somewhere</Button>
            </Card>
          </div>
        </div>

        <Button className="btn-class">Add Event</Button>
      </div>
    </>
  )
}

export default Dashboard
