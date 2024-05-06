import React from "react"
import { useForm } from "react-hook-form"
import { Form, FormGroup, Label } from "reactstrap"

const AddEventParticipant = ({
  eventId,
  createEventParticipant,
  setAddPartForm,
  addPartForm,
  setSubmissionStatus,
  setEmail,
}) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm()

  const onSubmit = (newEventParticipant) => {
    setSubmissionStatus("success")
    handleFormClose()
    createEventParticipant(newEventParticipant)
    setEmail(newEventParticipant.user_id)
    document.getElementById("user_id").value = ""
    setTimeout(() => {
      setSubmissionStatus(null)
    }, 3000)
  }

  const handleFormClose = () => {
    setAddPartForm(false)
  }

  return (
    <Form
      onSubmit={handleSubmit(onSubmit)}
      className={addPartForm === false ? "hide" : "form-size tiny-form"}
      style={{ paddingTop: "1vh" }}
    >
      <FormGroup>
        <Label for="user_id">User's Email</Label>
        <input
          style={{
            width: "20vw",
          }}
          id="user_id"
          name="user_id"
          type="text"
          className="form-control"
          {...register("user_id", { required: true })}
        />
        {errors.user_id && (
          <span hidden className="form-validations">
            User_id Required
          </span>
        )}
      </FormGroup>
      <Label hidden for="event_id">
        Event ID
      </Label>
      <input
        style={{
          width: "30vw",
        }}
        id="event_id"
        name="event_id"
        type="text"
        className="form-control"
        value={eventId}
        readOnly
        hidden
        {...register("event_id", { required: true })}
      />
      {errors.event_id && (
        <span className="form-validations">Event ID is required</span>
      )}
      <Label hidden for="individual_contributions">
        Individual Contributions
      </Label>
      <input
        style={{
          width: "30vw",
        }}
        value="0"
        readOnly
        hidden
        id="individual_contributions"
        name="individual_contributions"
        type="text"
        className="form-control"
        {...register("individual_contributions", { required: true })}
      />
      {errors.individual_contributions && (
        <span className="form-validations">
          Individual Contribution is Required
        </span>
      )}
      <div className="center-content">
        <button
          className="tiny-form-btns"
          style={{ marginRight: "1vw" }}
          onClick={handleFormClose}
        >
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

export default AddEventParticipant
