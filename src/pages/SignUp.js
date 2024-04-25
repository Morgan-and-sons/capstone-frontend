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
    signUp(newUser)
    navigate("/")
    const formData = new FormData()
    formData.append("firstName", newUser.firstName)
    formData.append("lastName", newUser.lastName)
    formData.append("email", newUser.email)
    formData.append("username", newUser.username)
    formData.append("password", newUser.password)
    formData.append("password_confirmation", newUser.password_confirmation)
    formData.append("profile_photo", newUser.profile_photo[0])

    signUp(formData)

    navigate("/")
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
                  id="firstName"
                  name="firstName"
                  placeholder="First Name"
                  type="text"
                  className="form-control"
                  {...register("firstName", { required: true })}
                />
                <Label for="firstName">Enter Your First Name</Label>
                {errors.email && (
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
                  id="lastName"
                  name="lastName"
                  placeholder="Last Name"
                  type="text"
                  className="form-control"
                  {...register("lastName", { required: true })}
                />
                <Label for="lastName">Enter Your Last Name</Label>
                {errors.email && (
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
                <Label for="email">Enter Your Username</Label>
                {errors.email && (
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
          <FormGroup>
            <Label for="profile_photo">Profile Photo</Label>
            <input
              type="file"
              name="profile_photo"
              id="profile_photo"
              {...register("profile_photo", { required: true })}
            />
            {errors.profile_photo && (
              <span className="form-validations">
                Profile photo is required
              </span>
            )}
          </FormGroup>
          <button onClick={handleSubmit} className="signin-button">
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
