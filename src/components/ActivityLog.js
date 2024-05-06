import React, { useEffect, useState } from "react"
import { Collapse, Card } from "reactstrap"
import ArrowDropUpIcon from "@mui/icons-material/ArrowDropUp"
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown"

const ActivityLog = ({ eventId, event, convertUSD }) => {
  const [eventData, setEventData] = useState([])
  const [collapse, setCollapse] = useState(false)

  useEffect(() => {
    const contributionData =
      JSON.parse(localStorage.getItem("contributionData")) || {}
    const eventDataForEvent = contributionData[eventId] || {}

    const contributions = Object.values(eventDataForEvent).flatMap(
      (amounts) => amounts
    )

    const sortedContributions = contributions.sort(
      (a, b) => new Date(b.time) - new Date(a.time)
    )

    setEventData(sortedContributions)
  }, [eventId])

  const toggle = () => {
    setCollapse(!collapse)
  }

  const formatDate = (dateTimeString) => {
    const options = {
      year: "numeric",
      month: "long",
      day: "numeric",
      hour: "numeric",
      minute: "numeric",
    }
    return new Date(dateTimeString).toLocaleDateString(undefined, options)
  }

  return (
    <div>
      <button
        style={{
          backgroundColor: event.color,
          color: "#fff",
          border: "none",
          borderRadius: "5px",
          padding: "1vh",
        }}
        className="mt-3"
        onClick={toggle}
      >
        View Contribution Activity
        {collapse ? <ArrowDropDownIcon /> : <ArrowDropUpIcon />}
      </button>
      <Collapse isOpen={collapse}>
        <div className="mt-3">
          {Array.isArray(eventData) && eventData.length > 0 ? (
            eventData.map((contribution, index) => (
              <div className="mb-2" key={index}>
                <Card
                  style={{ height: "13vh", padding: "2vh", color: "#7f7f7f" }}
                >
                  <p>
                    <strong>{contribution.firstname}</strong> contributed{" "}
                    <strong>{convertUSD(contribution.groupTotal)}</strong>
                  </p>
                  <p style={{ fontSize: "1.55vh", marginTop: "-2vh" }}>
                    {formatDate(contribution.time)}
                  </p>
                </Card>
              </div>
            ))
          ) : (
            <p>No contribution data available for this event.</p>
          )}
        </div>
      </Collapse>
    </div>
  )
}

export default ActivityLog
