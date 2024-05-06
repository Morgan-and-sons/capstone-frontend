import React, { useState, useEffect } from "react"
import Alert from "@mui/material/Alert"
import CheckIcon from "@mui/icons-material/Check"

const SuccessBanner = ({ text }) => {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
    const timeout = setTimeout(() => {
      setIsVisible(false)
    }, 4000)
    return () => clearTimeout(timeout)
  }, [])

  return (
    <div
      style={{
        opacity: isVisible ? 1 : 0,
        transition: "opacity 1s ease-in-out",
        position: "absolute",
        top: "-7vh",
        left: "50%",
        transform: "translateX(-50%)",
      }}
    >
      {isVisible && (
        <Alert icon={<CheckIcon fontSize="inherit" />} severity="success">
          {text}
        </Alert>
      )}
    </div>
  )
}

export default SuccessBanner
