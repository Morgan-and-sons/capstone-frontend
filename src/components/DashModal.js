import React, { useState } from "react"
import Button from "react-bootstrap/Button"
import Modal from "react-bootstrap/Modal"
import { Progress } from "reactstrap"
import { FaTrash, FaEdit } from "react-icons/fa"
import { Link } from "react-router-dom"

const DashModal = ({
  event,
  overallBarVisual,
  currentUser,
  deleteEvent,
  getPermittedEvents,
}) => {
  const [show, setShow] = useState(false)

  const isCreator = () => {
    return currentUser && event.creator === currentUser.id
  }

  const deleteUserEvent = () => {
    deleteEvent(event.id)
    getPermittedEvents()
    setShow(false)
  }

  return (
    <>
      <Button variant="primary" onClick={() => setShow(true)}>
        Custom Width Modal
      </Button>

      <Modal
        show={show}
        onHide={() => setShow(false)}
        dialogClassName="modal-90w"
        aria-labelledby="example-custom-modal-styling-title"
      >
        <Modal.Header closeButton>
          <Modal.Title id="example-custom-modal-styling-title">
            {event.title}
          </Modal.Title>
        </Modal.Header>
        <Progress className="my-2" value={overallBarVisual}>
          <p>{event && event.grouptotal}</p>
        </Progress>
        <Modal.Body>
          <p>{event.body}</p>
          <p>{event.eventamount}</p>
          <img src={event.eventphoto} alt="Event" />
          <p>{event.location}</p>
        </Modal.Body>
        <div className="modal-btns-cont">
          {isCreator() && (
            <>
              <button className="modal-btns" onClick={deleteUserEvent}>
                <FaTrash />
              </button>
              <Link to={`/edit/${event.id}`}>
                <button className="modal-btns">
                  <FaEdit />
                </button>
              </Link>
            </>
          )}
        </div>
      </Modal>
    </>
  )
}

export default DashModal
