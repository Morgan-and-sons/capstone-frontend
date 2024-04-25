import React, { useState } from "react"
import {
  Progress,
  Card,
  CardTitle,
  Button,
  Offcanvas,
  OffcanvasHeader,
  OffcanvasBody,
} from "reactstrap"

const Dashboard = () => {
  const [showOffcanvas, setShowOffcanvas] = useState(false)

  const handleToggle = () => {
    setShowOffcanvas(!showOffcanvas)
    console.log(showOffcanvas)
  }
  return (
    <>
      <div>
        <Button color="primary" onClick={handleToggle}>
          Open
        </Button>
        <Offcanvas isOpen={showOffcanvas} toggle={handleToggle}>
          <OffcanvasHeader closeButton>
            <Button onClick={handleToggle}>X</Button>
            Offcanvas
          </OffcanvasHeader>
          <OffcanvasBody>
            <strong>This is the Offcanvas body.</strong>
          </OffcanvasBody>
        </Offcanvas>
      </div>

      <div className="dashboard-cont">
        <div>
          <h1>{`Welcome {user.username}`}</h1>
        </div>

        <div>
          <h3>Dashboard</h3>
        </div>

        <div className="overall-progress-cont">
          <h3>Overall Stats</h3>
          <div className="progress-bars">
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
              <Button color="primary">Go somewhere</Button>
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
                Special Title Treatment
              </CardTitle>
              <Progress className="my-2" value="25">
                25.0$
              </Progress>
              <Button color="primary">Go somewhere</Button>
            </Card>
          </div>
        </div>

        <button>Add Event</button>
      </div>
    </>
  )
}

export default Dashboard
