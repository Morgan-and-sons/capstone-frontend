import React from "react"
import { Link } from "react-router-dom"
import home1 from "../assets/home1.jpg"
import home2 from "../assets/home2.jpg"
import home3 from "../assets/home3.jpg"
import { Card, CardBody, CardTitle, CardText, Button } from "reactstrap"

const Home = () => {
  return (
    <div>
      <div className="title-cont">
        <Card
          style={{
            width: "18rem",
            backgroundColor: "transparent",
            border: "none",
          }}
        >
          <CardBody>
            <CardTitle
              className="card-title"
              tag="h5"
              style={{ color: "white" }}
            >
              Bank Buddy
            </CardTitle>
            <CardText className="card-text">
              Some quick example text to build on the card title and make up the
              bulk of the card‘s content.
            </CardText>
            <Button className="card-button">Join Now</Button>
          </CardBody>
        </Card>
        <img src={home1} alt="home1" className="home1" />
      </div>
      <div className="how-to-cont">
        <h2>How to Use Bank Buddy</h2>
      </div>
      <div className="features-cont">
        <h2>Features</h2>
      </div>
      <div className="FAQ-cont">
        <h2>FAQ</h2>
      </div>
    </div>
  )
}

export default Home
