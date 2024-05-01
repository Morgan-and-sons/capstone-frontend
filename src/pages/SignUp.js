import React from "react"
import { useForm } from "react-hook-form"
import { Form, FormGroup, Label, Row, Col } from "reactstrap"
import { Link, useNavigate } from "react-router-dom"

const SignUp = ({ signUp }) => {
  const navigate = useNavigate()

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm()

  const onSubmit = (newUser) => {
    signUp({ user: newUser })
    navigate("/")
    console.log(newUser)
  }

  return (
    <div className="edit-cont">
      <div className="sign-up-form">
        <Form onSubmit={handleSubmit(onSubmit)}>
          <h2 className="sign-up-title">Create an Account</h2>
          <Row>
            <Col md={6}>
              <FormGroup floating>
                <input
                  style={{
                    width: "15vw",
                  }}
                  id="firsname"
                  name="firstname"
                  placeholder="First Name"
                  type="text"
                  className="form-control"
                  {...register("firstname", { required: true })}
                />
                <Label for="firstname">Enter Your First Name</Label>
                {errors.firstname && (
                  <span className="form-validations">
                    First name is required
                  </span>
                )}
              </FormGroup>
            </Col>
            <Col md={6}>
              <FormGroup floating>
                <input
                  style={{
                    width: "15vw",
                  }}
                  id="lastname"
                  name="lastname"
                  placeholder="Last Name"
                  type="text"
                  className="form-control"
                  {...register("lastname", { required: true })}
                />
                <Label for="lastname">Enter Your Last Name</Label>
                {errors.lastname && (
                  <span className="form-validations">
                    Last name is required
                  </span>
                )}
              </FormGroup>
            </Col>
          </Row>
          <Row>
            <Col md={6}>
              <FormGroup floating>
                <input
                  style={{
                    width: "15vw",
                  }}
                  id="email"
                  name="email"
                  placeholder="email"
                  type="email"
                  className="form-control"
                  {...register("email", { required: true })}
                />
                <Label for="email">Enter Your Email</Label>
                {errors.email && (
                  <span className="form-validations">Email is required</span>
                )}
              </FormGroup>
            </Col>
            <Col md={6}>
              <FormGroup floating>
                <input
                  style={{
                    width: "15vw",
                  }}
                  id="username"
                  name="username"
                  placeholder="username"
                  type="username"
                  className="form-control"
                  {...register("username", { required: true })}
                />
                <Label for="username">Enter Your Username</Label>
                {errors.username && (
                  <span className="form-validations">Username is required</span>
                )}
              </FormGroup>
            </Col>
          </Row>
          <Row>
            <Col md={6}>
              <FormGroup floating>
                <input
                  style={{
                    width: "15vw",
                  }}
                  id="password"
                  name="password"
                  placeholder="password"
                  type="password"
                  className="form-control"
                  {...register("password", { required: true })}
                />
                <Label for="password">Enter Your Password</Label>
                {errors.password && (
                  <span className="form-validations">Password is required</span>
                )}
              </FormGroup>
            </Col>
            <Col md={6}>
              <FormGroup floating>
                <input
                  style={{
                    width: "15vw",
                  }}
                  id="password_confirmation"
                  name="password_confirmation"
                  placeholder="Password Confirmation"
                  type="Password"
                  className="form-control"
                  {...register("password_confirmation", { required: true })}
                />
                <Label for="password_confirmation">Password Confirmation</Label>
                {errors.password_confirmation && (
                  <span className="form-validations">
                    Password Confirmation is required
                  </span>
                )}
              </FormGroup>
            </Col>
          </Row>
          <Row>
            <FormGroup floating>
              <input
                style={{
                  width: "15vw",
                }}
                id="profile_photo_url"
                name="profile_photo_url"
                placeholder="Profile photo url"
                type="text"
                className="form-control"
                {...register("profile_photo_url", { required: true })}
              />
              <Label for="profile_photo_url">Profile photo url</Label>
              {errors.profile_photo_url && (
                <span className="form-validations">
                  Profile photo url is required
                </span>
              )}
            </FormGroup>
          </Row>
          <button
            onClick={handleSubmit}
            type="submit"
            className="signin-button"
          >
            Sign Up
          </button>
          <p style={{ marginTop: "2vh" }}>
            Aleady have an account?{" "}
            <Link to="/signin" style={{ color: "#79A4F1" }}>
              Signin
            </Link>
          </p>
        </Form>
      </div>
    </div>
  )
}

export default SignUp
