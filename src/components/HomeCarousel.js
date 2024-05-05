import React, { useState } from "react"
import {
  Carousel,
  CarouselItem,
  CarouselControl,
  CarouselIndicators,
  CarouselCaption,
} from "reactstrap"
import hawaii from "../assets/hawaii.jpg"
import concert from "../assets/concert.jpg"
import baseball from "../assets/baseball.jpg"
import cabin from "../assets/cabin.jpg"

const items = [
  {
    src: hawaii,
    altText: "Hawaii Trip for Four",
    caption: "Average total cost per person: $2,000",
    key: 1,
  },
  {
    src: concert,
    altText: "Concert With 4 Friends",
    caption: "Average total cost per person: $200",
    key: 2,
  },
  {
    src: baseball,
    altText: "Baseball Game with 3 Friends",
    caption: "Average total cost per person: $125",
    key: 3,
  },
  {
    src: cabin,
    altText: "Cabin Trip for Six",
    caption: "Average total cost per person: $500",
    key: 4,
  },
]

function HomeCarousel(args) {
  const [activeIndex, setActiveIndex] = useState(0)
  const [animating, setAnimating] = useState(false)

  const next = () => {
    if (animating) return
    const nextIndex = activeIndex === items.length - 1 ? 0 : activeIndex + 1
    setActiveIndex(nextIndex)
  }

  const previous = () => {
    if (animating) return
    const nextIndex = activeIndex === 0 ? items.length - 1 : activeIndex - 1
    setActiveIndex(nextIndex)
  }

  const goToIndex = (newIndex) => {
    if (animating) return
    setActiveIndex(newIndex)
  }

  const slides = items.map((item) => {
    return (
      <CarouselItem
        onExiting={() => setAnimating(true)}
        onExited={() => setAnimating(false)}
        key={item.src}
      >
        <img
          style={{ height: "90vh", width: "100vw" }}
          src={item.src}
          alt={item.altText}
        />
        <CarouselCaption
          className="carousel-text"
          captionText={item.caption}
          captionHeader={item.altText}
        />
      </CarouselItem>
    )
  })

  return (
    <div>
      <h2 className="how-to-title">Endless Opportunities</h2>
      <Carousel
        activeIndex={activeIndex}
        next={next}
        previous={previous}
        {...args}
      >
        <CarouselIndicators
          items={items}
          activeIndex={activeIndex}
          onClickHandler={goToIndex}
        />
        {slides}
        <CarouselControl
          direction="prev"
          directionText="Previous"
          onClickHandler={previous}
        />
        <CarouselControl
          direction="next"
          directionText="Next"
          onClickHandler={next}
        />
      </Carousel>
    </div>
  )
}

export default HomeCarousel
