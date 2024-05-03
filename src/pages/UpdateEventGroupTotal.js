import React from "react"
import { useForm } from "react-hook-form"
import { Col, Form, FormGroup, Label, Row } from "reactstrap"
import { Link, useParams } from "react-router-dom"

const UpdateEventGroupTotal = ({ updateEvent, event }) => {
  const { id } = useParams()
  const events = event.find((e) => e.id === +id)
  const preloadedValues = {
    title: events.title,
    body: events.body,
    eventphoto: events.eventphoto,
    eventamount: events.eventamount,
    location: events.location,
    creator: events.creator,
  }

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ defaultValues: preloadedValues })

  const onSubmit = (formData) => {
    updateEvent(id, formData)
  }
  return (
    <Form onSubmit={handleSubmit(onSubmit)} className="form-size">
      <h3 className="title-header center-content">Update Event</h3>
      <Row>
        <Col md={6}>
          <FormGroup>
            <Label for="title">Event Title</Label>
            <input
              style={{ width: "30vw" }}
              id="title"
              name="title"
              placeholder="Event Title"
              type="text"
              className="form-control"
              {...register("title", { required: true })}
            />
            {errors.title && (
              <span className="form-validations">Title is required</span>
            )}
          </FormGroup>
        </Col>
        <Col md={6}>
          <FormGroup>
            <Label for="body">Event Description</Label>
            <input
              style={{ width: "30vw" }}
              id="body"
              name="body"
              placeholder="Event Description"
              type="text"
              className="form-control"
              {...register("body", { required: true })}
            />
            {errors.body && (
              <span className="form-validations">Description is required</span>
            )}
          </FormGroup>
        </Col>
      </Row>
      <Row>
        <Col md={6}>
          <FormGroup>
            <Label for="eventphoto">Event Photo URL</Label>
            <input
              style={{ width: "30vw" }}
              id="eventphoto"
              name="eventphoto"
              placeholder="Event Photo URL"
              type="text"
              className="form-control"
              {...register("eventphoto", { required: true })}
            />
            {errors.eventphoto && (
              <span className="form-validations">
                Event Photo URL is required
              </span>
            )}
          </FormGroup>
        </Col>
        <Col md={6}>
          <FormGroup>
            <Label for="eventamount">Event Amount</Label>
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
            {errors.eventamount && (
              <span className="form-validations">Event Amount is required</span>
            )}
          </FormGroup>
        </Col>
      </Row>
      <Row>
        <Col md={6}>
          <FormGroup>
            <Label for="grouptotal">Group Total</Label>
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
            {errors.grouptotal && (
              <span className="form-validations">Group Total is required</span>
            )}
          </FormGroup>
        </Col>
        <Col md={6}>
          <FormGroup>
            <Label for="location">Location</Label>
            <input
              style={{ width: "30vw" }}
              id="location"
              name="location"
              placeholder="Location"
              type="text"
              className="form-control"
              {...register("location", { required: true })}
            />
            {errors.location && (
              <span className="form-validations">Location is required</span>
            )}
          </FormGroup>
        </Col>
      </Row>
      <Row>
        <Col md={6}>
          <FormGroup>
            <Label for="creator">Event Creator</Label>
            <input
              style={{ width: "30vw" }}
              id="creator"
              name="creator"
              type="text"
              className="form-control"
              readOnly
              {...register("creator", { required: true })}
            />
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
  )
}

export default UpdateEventGroupTotal
