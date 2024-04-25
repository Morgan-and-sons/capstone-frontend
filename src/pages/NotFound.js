import React from "react"
import notFound from "../assets/notfound.mp4"

const NotFound = () => {
  return (
    <div className="not-found-cont">
      <video className="not-found-mp4" autoPlay loop muted playsInline>
        <source src={notFound} type="video/mp4" />
        Your Browser does not support the video tag.
      </video>
    </div>
  )
}

export default NotFound
