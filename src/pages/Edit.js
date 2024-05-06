import React from "react"
import { useForm } from "react-hook-form"
import { Col, Form, FormGroup, Label, Row } from "reactstrap"
import { Link, useParams, useNavigate } from "react-router-dom"

const Update = ({ updateEvent, currentUser, event }) => {
  const navigate = useNavigate()
  const { id } = useParams()
  const events = event.find((e) => e.id === +id)

  const preloadedValues = {
    title: events.title,
    body: events.body,
    eventphoto: events.eventphoto,
    eventamount: events.eventamount,
    grouptotal: events.grouptotal,
    location: events.location,
    creator: events.creator,
  }

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ defaultValues: preloadedValues })

  const onSubmit = (editEvent) => {
    updateEvent(id, editEvent)
    navigate("/dashboard")
  }

  return (
    <div className="page-body">
      <div className="new-form">
        <Form onSubmit={handleSubmit(onSubmit)} className="form-size">
          <h3 className="title-header center-content">Update Event</h3>
          <Row>
            <Col md={6}>
              <FormGroup floating>
                <input
                  style={{ width: "30vw" }}
                  id="title"
                  name="title"
                  placeholder="Event Title"
                  type="text"
                  className="form-control"
                  {...register("title", { required: true })}
                />
                <Label for="title">Event Title</Label>
                {errors.title && (
                  <span className="form-validations">Title is required</span>
                )}
              </FormGroup>
            </Col>
            <Col md={6}>
              <FormGroup floating>
                <input
                  style={{ width: "30vw" }}
                  id="body"
                  name="body"
                  placeholder="Event Description"
                  type="text"
                  className="form-control"
                  {...register("body", { required: true })}
                />
                <Label for="body">Event Description</Label>
                {errors.body && (
                  <span className="form-validations">
                    Description is required
                  </span>
                )}
              </FormGroup>
            </Col>
          </Row>
          <Row>
            <Col md={6}>
              <FormGroup floating>
                <input
                  style={{ width: "30vw" }}
                  id="eventphoto"
                  name="eventphoto"
                  placeholder="Event Photo URL"
                  type="text"
                  className="form-control"
                  {...register("eventphoto", { required: true })}
                />
                <Label for="eventphoto">Event Photo URL</Label>
                {errors.eventphoto && (
                  <span className="form-validations">
                    Event Photo URL is required
                  </span>
                )}
              </FormGroup>
            </Col>
            <Col md={6}>
              <FormGroup floating>
                <input
                  style={{ width: "30vw" }}
                  id="eventamount"
                  name="eventamount"
                  placeholder="Event Amount"
                  type="number"
                  min="0"
                  className="form-control"
                  {...register("eventamount", { required: true })}
                />
                <Label for="eventamount">Event Amount</Label>
                {errors.eventamount && (
                  <span className="form-validations">
                    Event Amount is required
                  </span>
                )}
              </FormGroup>
            </Col>
          </Row>
          <Row>
            <Col md={6}>
              <FormGroup floating>
                <input
                  style={{ width: "30vw" }}
                  id="grouptotal"
                  name="grouptotal"
                  placeholder="Group Total"
                  type="number"
                  min="0"
                  className="form-control"
                  {...register("grouptotal", { required: true })}
                />
                <Label for="grouptotal">Group Total</Label>
                {errors.grouptotal && (
                  <span className="form-validations">
                    Group Total is required
                  </span>
                )}
              </FormGroup>
            </Col>
            <Col md={6}>
              <FormGroup floating>
                <input
                  style={{ width: "30vw" }}
                  id="location"
                  name="location"
                  placeholder="Location"
                  type="text"
                  className="form-control"
                  {...register("location", { required: true })}
                />
                <Label for="location">Location</Label>
                {errors.location && (
                  <span className="form-validations">Location is required</span>
                )}
              </FormGroup>
            </Col>
          </Row>
          <Row>
            <Col md={6}>
              <FormGroup floating>
                <input
                  style={{ width: "30vw" }}
                  id="creator"
                  name="creator"
                  placeholder={currentUser.id}
                  type="text"
                  className="form-control"
                  value={currentUser.id}
                  readOnly
                  {...register("creator", { required: true })}
                />
                <Label for="creator">Event Creator</Label>
                {errors.creator && (
                  <span className="form-validations">Creator is required</span>
                )}
              </FormGroup>
            </Col>
          </Row>
          <div className="center-content">
            <Link to="/dashboard">
              <button className="new-edit-button">Back</button>
            </Link>
            <button className="new-edit-button" onClick={handleSubmit}>
              Submit
            </button>
          </div>
        </Form>
      </div>
    </div>
  )
}

export default Update
