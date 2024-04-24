import React from "react"
import bankLogo from "../assets/bank.png"
import { Nav, Button } from "reactstrap"
import { Link, NavLink } from "react-router-dom"

const Header = () => {
  return (
    <Nav className="nav-cont" navbar>
      <div className="logo-cont">
        <div className="left-side-header">
          <NavLink to="/" className="nav-link">
            <img src={bankLogo} alt="bank buddy logo" className="bank-logo" />
          </NavLink>
          <div className="nav-links">
            <NavLink to="/dashboard" className="nav-link">
              Dashboard
            </NavLink>
          </div>
        </div>
        <div className="right-side-header">
          <div className="nav-links">
            <Link to="/" className="nav-link nav-links">
              Home
            </Link>
          </div>
          <div className="nav-links">
            <NavLink to="/signin" className="nav-link nav-links">
              Sign In
            </NavLink>
          </div>
          <div className="nav-links">
            <NavLink to="/FAQ" className="nav-link nav-links">
              FAQ
            </NavLink>
          </div>
          <div className="nav-links">
            <Button
              tag={Link}
              to="/signup"
              className="nav-link nav-links"
              style={{
                borderRadius: "20px",
                padding: "10px 20px",
                backgroundImage: "linear-gradient(to right, #8C52FF, #5CE1E6)",
                color: "black",
              }}
            >
              Sign Up
            </Button>
          </div>
          <div className="nav-links">
            <Button
              tag={Link}
              to="/"
              className="nav-link nav-links"
              style={{
                borderRadius: "20px",
                padding: "10px 20px",
                backgroundImage: "linear-gradient(to right, #8C52FF, #5CE1E6)",
                color: "black",
                border: "none",
                marginRight: "2rem",
              }}
              // onClick={signOut}
            >
              Sign Out
            </Button>
          </div>
        </div>
      </div>
    </Nav>
  )
}
export default Header
