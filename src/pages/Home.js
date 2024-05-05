import React from "react"
import HomeCarousel from "../components/HomeCarousel"
import { useState } from "react"
import { Link, NavLink } from "react-router-dom"
import { BsArrowUpCircleFill } from "react-icons/bs"
import bank from "../assets/bank.png"
import home2 from "../assets/home2.jpg"
import home3 from "../assets/home3.jpg"
import num1 from "../assets/num1.png"
import num2 from "../assets/num2.png"
import num3 from "../assets/num3.png"
import num4 from "../assets/num4.png"
import {
  Accordion,
  AccordionItem,
  AccordionHeader,
  AccordionBody,
} from "reactstrap"

import { Card, CardBody, CardTitle, CardText } from "reactstrap"

const Home = () => {
  const [open, setOpen] = useState("1")
  const toggle = (id) => {
    if (open === id) {
      setOpen()
    } else {
      setOpen(id)
    }
  }

  return (
    <div>
      <div className="title-cont">
        <Card
          style={{
            width: "25rem",
            backgroundColor: "transparent",
            border: "none",
          }}
        >
          <CardBody>
            <CardTitle className="app-name" tag="h5">
              Bank Buddy
            </CardTitle>
            <CardText className="app-moto">
              Start saving money with friends and family today with Bank Buddy
            </CardText>
            <NavLink to="/signup" className="learn-more">
              <button className="learn-more">
                <span className="circle" aria-hidden="true">
                  <span className="icon arrow"></span>
                </span>
                <span className="button-text">Join Now</span>
              </button>
            </NavLink>
          </CardBody>
        </Card>
        <img src={bank} alt="home1" className="home1" />
      </div>
      <div className="how-to-cont">
        <h2 className="how-to-title">How to Start Saving With Bank Buddy</h2>
        <div className="how-to-steps">
          <Card
            style={{
              width: "18rem",
              border: "none",
              backgroundColor: "transparent",
            }}
          >
            <img alt="number 1" src={num1} />
            <CardBody>
              <CardTitle className="steps-title" tag="h5">
                <u>Create an Account</u>
              </CardTitle>
              <CardText className="steps-text">
                Create an account with Bank Buddy to start saving money today
                with friends, family, or personal goals
              </CardText>
            </CardBody>
          </Card>
          <Card
            style={{
              width: "18rem",
              border: "none",
              backgroundColor: "transparent",
            }}
          >
            <img alt="number 2 " src={num2} />
            <CardBody>
              <CardTitle className="steps-title" tag="h5">
                <u>Create an Event</u>
              </CardTitle>
              <CardText className="steps-text">
                Create an event with Bank Buddy to start saving money with
                friends and family. Finally save for what you always plan to do!
              </CardText>
            </CardBody>
          </Card>
          <Card
            style={{
              width: "18rem",
              border: "none",
              backgroundColor: "transparent",
            }}
          >
            <img alt="number 3" src={num3} />
            <CardBody>
              <CardTitle className="steps-title" tag="h5">
                <u>Invite Friends and Family</u>
              </CardTitle>
              <CardText className="steps-text">
                Invite friends and family by Email to join your event and start
                saving as a group! or save for your personal goals
              </CardText>
            </CardBody>
          </Card>
          <Card
            style={{
              width: "18rem",
              border: "none",
              backgroundColor: "transparent",
            }}
          >
            <img alt="number 4" src={num4} />
            <CardBody>
              <CardTitle className="steps-title" tag="h5">
                <u>Meet up and Enjoy!</u>
              </CardTitle>
              <CardText className="steps-text">
                Meet up with your friends and family to celebrate the savings
                and spend the money on what you saved for!
              </CardText>
            </CardBody>
          </Card>
        </div>
      </div>
      <div className="features-cont">
        <h2 className="how-to-title">Why Should I Use Bank Buddy?</h2>
        <div style={{ display: "flex", paddingTop: "2rem" }}>
          <Card
            style={{
              width: "40rem",
              border: "none",
              borderRadius: "0%",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              padding: "2rem",
            }}
          >
            <CardTitle
              style={{
                fontSize: "2rem",
                fontWeight: "800",
                padding: "2rem",
              }}
              tag="h5"
            >
              <u>Save Money for Planned Events</u>
            </CardTitle>
            <CardText
              style={{ fontSize: "1.5rem", fontFamily: "PT Serif serif" }}
            >
              Set a goal and start saving with friends and family. Finally save
              for what you always plan to do! Plan a trip, buy a gift, or save
              up for a rainy day.
            </CardText>
            <Link to="/signup" className="learn-more">
              <button className="learn-more">
                <span className="circle" aria-hidden="true">
                  <span className="icon arrow"></span>
                </span>
                <span className="button-text">Sign Up</span>
              </button>
            </Link>
          </Card>
          <Card style={{ width: "40rem", borderRadius: "0%" }}>
            <img alt="Sample" src={home2} />
          </Card>
        </div>
        <div style={{ display: "flex" }}>
          <Card style={{ width: "40rem", borderRadius: "0%" }}>
            <img alt="Sample" src={home3} />
          </Card>
          <Card
            style={{
              width: "40rem",
              border: "none",
              borderRadius: "0%",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              padding: "2rem",
            }}
          >
            <CardTitle
              style={{
                fontSize: "2rem",
                fontWeight: "800",
                padding: "2rem",
              }}
              tag="h5"
            >
              <u>Build Better Bonds</u>
            </CardTitle>
            <CardText
              style={{ fontSize: "1.5rem", fontFamily: "PT Serif serif" }}
            >
              Planned Events are a great way to build better bonds with friends
              and Family. Bank Buddy makes it easy to save for events and enjoy
              the time spent with loved ones.
            </CardText>
            <Link to="/signin" className="learn-more">
              <button className="learn-more">
                <span className="circle" aria-hidden="true">
                  <span className="icon arrow"></span>
                </span>
                <span className="button-text">Sign In</span>
              </button>
            </Link>
          </Card>
        </div>
      </div>
      <HomeCarousel />
      <div id="faq" className="FAQ-cont">
        <h2 style={{ color: "white" }} className="how-to-title">
          Frequently Asked Questions
        </h2>
        <div>
          <Accordion
            flush
            open={open}
            toggle={toggle}
            style={{ width: "80vw" }}
          >
            <AccordionItem className="FAQ-questions">
              <AccordionHeader targetId="1">
                Do I need to have a bank account to use Bank Buddy?
              </AccordionHeader>
              <AccordionBody accordionId="1">
                <strong>
                  As of right now you do not need a bank account to use Bank
                  Buddy.&nbsp;
                </strong>
                You can create an account and keep track of what savings you
                have stored away on your own for that Event. We are working on a
                way to connect your bank account to Bank Buddy in the future.
              </AccordionBody>
            </AccordionItem>
            <AccordionItem>
              <AccordionHeader targetId="2">
                {" "}
                What do we do once we meet our savings goal?
              </AccordionHeader>
              <AccordionBody accordionId="2">
                <strong>Enjoy your time with friends and family!&nbsp;</strong>
                Get together and spend the money on what you saved for! Come
                back and the event Creator can delete the event and start a new
                one!
              </AccordionBody>
            </AccordionItem>
            <AccordionItem>
              <AccordionHeader targetId="3">
                {" "}
                How do I create an event?
              </AccordionHeader>
              <AccordionBody accordionId="3">
                <strong>
                  To create an event, click on the "Create Event" button on the
                  dashboard page.&nbsp;
                </strong>
                Fill in the required information and click submit. You will be
                redirected to the event page where you can invite friends and
                family to join your event.
              </AccordionBody>
            </AccordionItem>
            <AccordionItem>
              <AccordionHeader targetId="4">
                {" "}
                What If I don't meet my savings goal?
              </AccordionHeader>
              <AccordionBody accordionId="4">
                <strong>
                  If you don't meet your savings goal, you can still enjoy the
                  time with friends and family!&nbsp;
                </strong>
                The event creator can delete the event and start a new one! So
                you and your loved ones can go at your own pace to save for the
                next event.
              </AccordionBody>
            </AccordionItem>
            <AccordionItem>
              <AccordionHeader targetId="5">
                {" "}
                How do I Invite Friends and Family to my event?
              </AccordionHeader>
              <AccordionBody accordionId="5">
                <strong>
                  From the Dashboard page, click on the event you want to invite
                  friends and family to.&nbsp;
                </strong>
                Then click on the "Invite" button and enter the email addresses
                of the friends and family you want to invite. The invited guests
                will then be added to the event and can start saving with you
                towards the goal.
              </AccordionBody>
            </AccordionItem>
          </Accordion>
        </div>
        <a href="/#top" className="back-to-top">
          <BsArrowUpCircleFill
            style={{ color: "white", fontSize: "4rem", marginTop: "4rem" }}
          />
        </a>
      </div>
    </div>
  )
}

export default Home
