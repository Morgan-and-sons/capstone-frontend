import React from "react"
import bankLogo from "../assets/bank-logo-2.png"
import { Nav, Button } from "reactstrap"
import { Link, NavLink } from "react-router-dom"
const Header = ({ signOut, currentUser }) => {
  return (
    <Nav className="nav-cont" navbar>
      <div className="logo-cont">
        <div className="left-side-header">
          <NavLink to="/">
            <img src={bankLogo} alt="bank buddy logo" className="bank-logo" />
          </NavLink>
          <div className="nav-links">
            {currentUser && (
              <NavLink to="/dashboard" className="nav-link">
                Dashboard
              </NavLink>
            )}
          </div>
        </div>
        <div className="right-side-header">
          <div className="nav-links">
            <Link to="/" className="nav-link nav-links">
              Home
            </Link>
          </div>
          <div className="nav-links">
            {!currentUser && (
              <NavLink to="/signin" className="nav-link nav-links">
                Sign In
              </NavLink>
            )}
          </div>
          <div className="nav-links">
            <NavLink to="/FAQ" className="nav-link nav-links">
              FAQ
            </NavLink>
          </div>
          <div className="nav-links">
            <NavLink to="/aboutus" className="nav-link nav-links">
              About Us
            </NavLink>
          </div>
          <div className="nav-links">
            {!currentUser && (
              <Button
                tag={Link}
                to="/signup"
                className="nav-link nav-links"
                style={{
                  borderRadius: "0.375rem",
                  padding: "10px 20px",
                  backgroundColor: "#8A58FE",
                  color: "white",
                }}
              >
                Sign Up
              </Button>
            )}
          </div>
          <div className="nav-links">
            {currentUser && (
              <Button
                tag={Link}
                to="/"
                className="nav-link nav-links"
                style={{
                  borderRadius: "0.375rem",
                  padding: "10px 20px",
                  backgroundColor: "#8A58FE",
                  color: "white",
                  marginRight: "2rem",
                }}
                onClick={signOut}
              >
                Sign Out
              </Button>
            )}
          </div>
        </div>
      </div>
    </Nav>
  )
}
export default Header
