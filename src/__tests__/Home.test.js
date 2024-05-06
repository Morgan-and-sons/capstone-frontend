import { render, screen } from "@testing-library/react"
import { BrowserRouter } from "react-router-dom"
import Home from "../pages/Home"

test("renders Home component", () => {
  render(
    <BrowserRouter>
      <Home />
    </BrowserRouter>
  )
  const titles = screen.getAllByText("Bank Buddy")
  titles.forEach((title) => {
    expect(title).toBeInTheDocument()
  })

  const subHeader = screen.getByText(
    /Start saving money with friends and family today with Bank Buddy/i
  )
  expect(subHeader).toBeInTheDocument()

  const image = screen.getByAltText("home1")
  expect(image).toBeInTheDocument()

  const howToHeading = screen.getByRole("heading", {
    name: /How to Start Saving With Bank Buddy/i,
  })
  expect(howToHeading).toBeInTheDocument()

  const account = screen.getByText(
    /Create an account with Bank Buddy to start saving money today with friends, family, or personal goals/i
  )
  expect(account).toBeInTheDocument()

  const createEvent = screen.getByText(
    /Create an event with Bank Buddy to start saving money with friends and family. Finally save for what you always plan to do!/i
  )
  expect(createEvent).toBeInTheDocument()

  const invite = screen.getByText(
    /Invite friends and family by Email to join your event and start saving as a group! or save for your personal goals/i
  )
  expect(invite).toBeInTheDocument()

  const enjoy = screen.getByText(
    /Meet up with your friends and family to celebrate the savings and spend the money on what you saved for!/i
  )
  expect(enjoy).toBeInTheDocument()

  const featuresHeading = screen.getByRole("heading", {
    name: /Why Should I Use Bank Buddy/i,
  })
  expect(featuresHeading).toBeInTheDocument()

  const feature1 = screen.getByText(
    /Set a goal and start saving with friends and family\. Finally actually do the things you always talk about doing with friends and family! Plan a trip, buy a gift, or save up for a rainy day\./i
  )
  expect(feature1).toBeInTheDocument()

  const feature2 = screen.getByText(
    /Planned Events are a great way to build better bonds with friends and Family\. Bank Buddy makes it easy to save for events and enjoy the time spent with loved ones\./i
  )
  expect(feature2).toBeInTheDocument()
  const faqHeading = screen.getByRole("heading", {
    name: /Frequently Asked Questions/i,
  })
  expect(faqHeading).toBeInTheDocument()

  const question1 = screen.getByText(
    /Do I need to have a bank account to use Bank Buddy?/i
  )
  expect(question1).toBeInTheDocument()

  const answer1 = screen.getByText(
    /You can create an account and keep track of what savings you have stored away on your own for that Event. We are working on a way to connect your bank account to Bank Buddy in the future./i
  )
  expect(answer1).toBeInTheDocument()

  const question2 = screen.getByText(
    /What do we do once we meet our savings goal?/i
  )
  expect(question2).toBeInTheDocument()

  const answer2 = screen.getByText(
    /Get together and spend the money on what you saved for! Come back and the event Creator can delete the event and start a new one!/i
  )
  expect(answer2).toBeInTheDocument()

  const question3 = screen.getByText(/How do I create an event?/i)
  expect(question3).toBeInTheDocument()

  const answer3 = screen.getByText(
    /Fill in the required information and click submit\. You will be redirected to the event page where you can invite friends and family to join your event\./i
  )
  expect(answer3).toBeInTheDocument()

  const question4 = screen.getByText(/What If I don't meet my savings goal?/i)
  expect(question4).toBeInTheDocument()

  const answer4 = screen.getByText(
    /The event creator can delete the event and start a new one! So you and your loved ones can go at your own pace to save for the next event\./i
  )
  expect(answer4).toBeInTheDocument()

  const question5 = screen.getByText(
    /How do I Invite Friends and Family to my event?/i
  )
  expect(question5).toBeInTheDocument()

  const answer5 = screen.getByText(
    /Then click on the "Invite" button and enter the email addresses of the friends and family you want to invite\. The invited guests will then be added to the event and can start saving with you towards the goal\./i
  )
  expect(answer5).toBeInTheDocument()
})
