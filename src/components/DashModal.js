import React, { useState, useEffect } from "react"
import Modal from "react-bootstrap/Modal"
import { Progress } from "reactstrap"
import DeleteIcon from "@mui/icons-material/Delete"
import { Link } from "react-router-dom"
import { FaChevronRight } from "react-icons/fa"
import ActivityLog from "./ActivityLog"
import Tooltip from "@mui/material/Tooltip"
import IconButton from "@mui/material/IconButton"
import EditIcon from "@mui/icons-material/Edit"
import AddEventParticipant from "./AddEventParticipant"
import UpdateEventGroupTotal from "./UpdateEventGroupTotal"
import PersonAddIcon from "@mui/icons-material/PersonAdd"
import SavingsIcon from "@mui/icons-material/Savings"
import SuccessBanner from "./SuccessBanner"

const DashModal = ({
  event,
  currentUser,
  deleteEvent,
  getPermittedEvents,
  convertUSD,
  setActivityData,
  createEventParticipant,
  updateEvent,
  setEvent,
}) => {
  const [show, setShow] = useState(false)
  const [addPartForm, setAddPartForm] = useState(false)
  const [groupTotalForm, setGroupTotalForm] = useState(false)
  const [email, setEmail] = useState(null)
  const [submissionStatus, setSubmissionStatus] = useState(null)

  useEffect(() => {
    setAddPartForm(false)
    setGroupTotalForm(false)
    if (!show) {
      setSubmissionStatus(null)
    }
  }, [show])

  const isCreator = () => {
    return currentUser && event.creator === currentUser.id
  }

  const deleteUserEvent = () => {
    deleteEvent(event.id)
    getPermittedEvents()
    setShow(false)
  }

  const handleAddPartForm = () => {
    setAddPartForm(!addPartForm)
  }

  const handleGroupTotalForm = () => {
    setGroupTotalForm(!groupTotalForm)
  }

  return (
    <>
      <span
        className="see-more"
        style={{
          color: event.color,
        }}
        onClick={() => setShow(true)}
      >
        See More
        <FaChevronRight />
      </span>
      <Modal
        show={show}
        onHide={() => setShow(false)}
        dialogClassName="modal-90w"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        {submissionStatus === "success" && (
          <SuccessBanner
            text={`${email} was succesfully added to this event`}
          />
        )}
        <Modal.Header style={{ position: "relative" }} closeButton>
          <div style={{ marginBottom: "4.5vh", marginTop: "1vh" }}>
            <Modal.Title id="example-custom-modal-styling-title">
              {event.title}
            </Modal.Title>
            <p style={{ color: "#888787", fontWeight: 500 }}>
              {event.location}
            </p>
            <div className="d-flex modal-btn-cont">
              <div className="mini-btn-cont d-flex">
                <div
                  style={{ position: "relative" }}
                  className="modal-tool-tips"
                >
                  <Tooltip placement="top" title="Update Group Total">
                    <IconButton onClick={handleGroupTotalForm}>
                      <SavingsIcon />
                    </IconButton>
                  </Tooltip>
                  <div className="modal-forms">
                    <UpdateEventGroupTotal
                      updateEvent={updateEvent}
                      currentUser={currentUser}
                      setActivityData={setActivityData}
                      eventId={event.id}
                      event={event}
                      setEvent={setEvent}
                      getPermittedEvents={getPermittedEvents}
                      createEventParticipant={createEventParticipant}
                      setGroupTotalForm={setGroupTotalForm}
                      groupTotalForm={groupTotalForm}
                    />
                  </div>
                </div>
                <div>
                  <div
                    style={{ position: "relative" }}
                    className="modal-tool-tips"
                  >
                    <Tooltip placement="top" title="Add Participant">
                      <IconButton onClick={handleAddPartForm}>
                        <PersonAddIcon />
                      </IconButton>
                    </Tooltip>
                    <div className="modal-forms">
                      <AddEventParticipant
                        eventId={event.id}
                        createEventParticipant={createEventParticipant}
                        setAddPartForm={setAddPartForm}
                        addPartForm={addPartForm}
                        setEmail={setEmail}
                        setSubmissionStatus={setSubmissionStatus}
                      />
                    </div>
                  </div>
                </div>
                {isCreator() && (
                  <>
                    <Link className="modal-tool-tips" to={`/edit/${event.id}`}>
                      <Tooltip placement="top" title="Edit">
                        <IconButton>
                          <EditIcon />
                        </IconButton>
                      </Tooltip>
                    </Link>
                    <div className="modal-tool-tips">
                      <Tooltip placement="top" title="Delete">
                        <IconButton onClick={deleteUserEvent}>
                          <DeleteIcon />
                        </IconButton>
                      </Tooltip>
                    </div>
                  </>
                )}
              </div>
            </div>
          </div>
        </Modal.Header>
        <div style={{ padding: "2vh", marginTop: "2vh" }}>
          <p style={{ marginBottom: "1vh", fontWeight: 600 }}>
            Event Description:
          </p>
          <p>{event.body}</p>
          <div
            style={{ fontSize: "2.25vh", fontWeight: 500 }}
            className="text-center"
          >{`Goal: ${convertUSD(event.eventamount)}`}</div>
          <div className="d-flex" style={{ justifyContent: "center" }}>
            <Progress
              animated
              className="my-2"
              value={(event.grouptotal / event.eventamount) * 100}
              style={{ width: "100%" }}
            >
              <p
                style={{
                  marginTop: "1.75vh",
                  backgroundColor: event.color,
                }}
              >
                {convertUSD(event.grouptotal)}
              </p>
            </Progress>
          </div>
          <div className="d-flex" style={{ justifyContent: "center" }}>
            <img className="modal-img" src={event.eventphoto} alt="Event" />
          </div>
          <ActivityLog
            convertUSD={convertUSD}
            eventId={event.id}
            event={event}
          />
        </div>
      </Modal>
    </>
  )
}

export default DashModal
