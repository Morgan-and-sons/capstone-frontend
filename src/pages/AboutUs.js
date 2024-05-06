import React from "react"
import { Card, CardBody, CardText, CardTitle, CardSubtitle } from "reactstrap"
import ryanImg from "../assets/ryan.png"
import morganImg from "../assets/morgan.png"
import louieImg from "../assets/louie.png"
import { FaLinkedin } from "react-icons/fa"
import { BiLogoGithub } from "react-icons/bi"
import { Link } from "react-router-dom"

const AboutUs = () => {
  return (
    <>
      <div className="about-us-cont">
        <div>
          <Card className="about-us-card">
            <CardBody>
              <CardTitle className="about-us-card-title">Ryan Lemus</CardTitle>
              <CardSubtitle className="about-us-card-subtitle">
                Product/Project Manager
              </CardSubtitle>
            </CardBody>
            <img src={ryanImg} alt="Ryan img" />
            <CardBody>
              <CardText className="about-us-cardtext">
                <ul>
                  <li>Led the big-picture vision of the product</li>

                  <li>Ensured the product meets all requirements</li>

                  <li>
                    Provided support to the team and helped team with blocks.
                  </li>

                  <li>
                    Led internal team communication and Oversaw the project
                    management board
                  </li>

                  <li>Managed external resources</li>

                  <li>
                    Made sure developers were assigned to the card they are
                    working on
                  </li>
                </ul>
              </CardText>
              <Link to="https://github.com/Rlemus93" target="_blank">
                <BiLogoGithub className="github-logo" />
              </Link>
              <Link
                to="https://www.linkedin.com/in/ryan-lemus/"
                target="_blank"
              >
                <FaLinkedin className="linkedin-logo" />
              </Link>
            </CardBody>
          </Card>
        </div>
        <div>
          <Card className="about-us-card">
            <CardBody>
              <CardTitle className="about-us-card-title">
                Morgan Smith
              </CardTitle>
              <CardSubtitle className="about-us-card-subtitle">
                Design Lead
              </CardSubtitle>
            </CardBody>
            <img src={morganImg} alt="Morgan img" />
            <CardBody>
              <CardText className="about-us-cardtext">
                <ul>
                  <li>
                    Oversaw look, color scheme, and branding of the project.
                  </li>

                  <li>Managed UI/UX needs of the application</li>

                  <li>
                    Created wireframes and handled navigation and user
                    experience
                  </li>

                  <li>Oversaw color schemes and implementation of branding</li>
                </ul>
              </CardText>
              <Link to="https://github.com/smorgannicole" target="_blank">
                <BiLogoGithub className="github-logo" />
              </Link>

              <Link
                to="https://www.linkedin.com/in/morgansmith13/"
                target="_blank"
              >
                <FaLinkedin className="linkedin-logo" />
              </Link>
            </CardBody>
          </Card>
        </div>
        <div>
          <Card className="about-us-card">
            <CardBody>
              <CardTitle className="about-us-card-title">Luis Moreno</CardTitle>
              <CardSubtitle className="about-us-card-subtitle">
                Tech Lead/Anchor
              </CardSubtitle>
            </CardBody>
            <img src={louieImg} alt="Louie img" />
            <CardBody>
              <CardText className="about-us-cardtext">
                <ul>
                  <li>Code base and version control</li>

                  <li>Managed technical needs of the project</li>

                  <li>Checked for bugs on the technicalities of the project</li>

                  <li>Merged code branches on GitHub</li>

                  <li>Surfaced blockers to the team</li>
                </ul>
              </CardText>
              <Link to="https://github.com/Louie-cpu" target="_blank">
                <BiLogoGithub className="github-logo" />
              </Link>
              <Link
                to="https://www.linkedin.com/in/luis-u14-moreno/"
                target="_blank"
              >
                <FaLinkedin className="linkedin-logo" />
              </Link>
            </CardBody>
          </Card>
        </div>
      </div>
    </>
  )
}

export default AboutUs
