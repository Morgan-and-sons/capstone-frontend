import { render, screen, within } from "@testing-library/react"
import { BrowserRouter } from "react-router-dom"
import Home from "../pages/Home"

test("renders Home component", () => {
  render(
    <BrowserRouter>
      <Home />
    </BrowserRouter>
  )
  const title = screen.getByText("Bank Buddy")
  expect(title).toBeInTheDocument()

  const image = screen.getByAltText("home1")
  expect(image).toBeInTheDocument()

  const howToHeading = screen.getByRole("heading", {
    name: /How to Use Bank Buddy/i,
  })
  expect(howToHeading).toBeInTheDocument()

  const featuresHeading = screen.getByRole("heading", { name: /Features/i })
  expect(featuresHeading).toBeInTheDocument()

  const faqHeading = screen.getByRole("heading", { name: /FAQ/i })
  expect(faqHeading).toBeInTheDocument()
})
