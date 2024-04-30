import React, { useState } from "react"
import Button from "react-bootstrap/Button"
import Modal from "react-bootstrap/Modal"
import { Progress } from "reactstrap"

const DashModal = ({ event, overallBarVisual }) => {
  const [show, setShow] = useState(false)

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
        <Modal.Body>
          <p>{event.body}</p>
          <Progress className="my-2" value={overallBarVisual}>
            <p>{event && event.grouptotal}</p>
          </Progress>
        </Modal.Body>
      </Modal>
    </>
  )
}

export default DashModal
