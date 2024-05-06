import React from "react"
import { useForm } from "react-hook-form"
import { Form, FormGroup, Label } from "reactstrap"

const UpdateEventGroupTotal = ({
  updateEvent,
  event,
  currentUser,
  eventId,
  getPermittedEvents,
  setGroupTotalForm,
  groupTotalForm,
}) => {
  const events = event
  const preloadedValues = {
    title: events?.title,
    body: events?.body,
    eventphoto: events?.eventphoto,
    eventamount: events?.eventamount,
    location: events?.location,
    creator: events?.creator,
    time: new Date(),
    grouptotal: events?.grouptotal,
  }

  const handleFormClose = () => {
    setGroupTotalForm(false)
  }

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ defaultValues: preloadedValues })

  const onSubmit = (formData) => {
    let data = {
      currentUserFirstname: currentUser?.firstname,
      currentUserLastname: currentUser?.lastname,
      groupTotal: formData?.grouptotal,
      eventId: events?.id,
      eventTitle: events?.title,
      time: new Date(),
    }

    const updateContributionData = (
      eventId,
      currentUserFirstname,
      groupTotal,
      time
    ) => {
      let contributionData =
        JSON.parse(localStorage.getItem("contributionData")) || {}

      if (!contributionData[eventId]) {
        contributionData[eventId] = {}
      }

      if (!contributionData[eventId][currentUserFirstname]) {
        contributionData[eventId][currentUserFirstname] = []
      }

      contributionData[eventId][currentUserFirstname].push({
        groupTotal: Number(groupTotal),
        time: time,
        firstname: currentUserFirstname,
      })

      localStorage.setItem("contributionData", JSON.stringify(contributionData))
    }
    updateContributionData(
      data.eventId,
      data.currentUserFirstname,
      data.groupTotal,
      data.time
    )
    updateEvent(parseInt(eventId), formData)
    getPermittedEvents()
  }

  return (
    <Form
      className={groupTotalForm === false ? "hide" : "form-size tiny-form"}
      onSubmit={handleSubmit(onSubmit)}
    >
      <FormGroup>
        <Label hidden for="title">
          Event Title
        </Label>
        <input
          style={{ width: "30vw" }}
          id="title"
          name="title"
          placeholder="Event Title"
          type="text"
          className="form-control"
          hidden
          {...register("title", { required: true })}
        />
        {errors.title && (
          <span className="form-validations">Title is required</span>
        )}
      </FormGroup>
      <FormGroup>
        <Label hidden for="body">
          Event Description
        </Label>
        <input
          style={{ width: "30vw" }}
          id="body"
          name="body"
          hidden
          placeholder="Event Description"
          type="text"
          className="form-control"
          {...register("body", { required: true })}
        />
        {errors.body && (
          <span className="form-validations">Description is required</span>
        )}
      </FormGroup>
      <FormGroup>
        <Label hidden for="eventphoto">
          Event Photo URL
        </Label>
        <input
          style={{ width: "30vw" }}
          id="eventphoto"
          hidden
          name="eventphoto"
          placeholder="Event Photo URL"
          type="text"
          className="form-control"
          {...register("eventphoto", { required: true })}
        />
        {errors.eventphoto && (
          <span className="form-validations">Event Photo URL is required</span>
        )}
      </FormGroup>
      <FormGroup>
        <Label hidden for="eventamount">
          Event Amount
        </Label>
        <input
          style={{ width: "30vw" }}
          id="eventamount"
          name="eventamount"
          placeholder="Event Amount"
          type="number"
          hidden
          min="0"
          className="form-control"
          {...register("eventamount", { required: true })}
        />
        {errors.eventamount && (
          <span className="form-validations">Event Amount is required</span>
        )}
      </FormGroup>
      <FormGroup>
        <Label for="grouptotal">Group Total</Label>
        <input
          style={{ width: "10vw" }}
          id="grouptotal"
          name="grouptotal"
          type="number"
          min="0"
          className="form-control"
          {...register("grouptotal", { required: true })}
        />
        {errors.grouptotal && (
          <span className="form-validations">Group Total is required</span>
        )}
      </FormGroup>
      <FormGroup>
        <Label hidden for="location">
          Location
        </Label>
        <input
          style={{ width: "30vw" }}
          id="location"
          name="location"
          placeholder="Location"
          type="text"
          hidden
          className="form-control"
          {...register("location", { required: true })}
        />
        {errors.location && (
          <span className="form-validations">Location is required</span>
        )}
      </FormGroup>
      <FormGroup>
        <Label hidden for="creator">
          Event Creator
        </Label>
        <input
          style={{ width: "30vw" }}
          id="creator"
          name="creator"
          type="text"
          className="form-control"
          hidden
          readOnly
          {...register("creator", { required: true })}
        />
        {errors.creator && (
          <span className="form-validations">Creator is required</span>
        )}
      </FormGroup>
      <div className="center-tiny-btns">
        <button className="tiny-form-btns" onClick={handleFormClose}>
          Cancel
        </button>
        <button
          className="tiny-form-btns"
          onClick={handleFormClose}
          type="submit"
        >
          Submit
        </button>
      </div>
    </Form>
  )
}

export default UpdateEventGroupTotal
