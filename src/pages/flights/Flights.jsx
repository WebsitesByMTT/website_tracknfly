import React from "react";
import "./flight.scss";

import { WhatTracknFlyHaveForYou } from "../../components/whatTracknFlyHaveForYou/WhatTracknFlyHaveForYou";
import FrquentlyAskedQuestions from "../../components/faqs/FrquentlyAskedQuestions";

const data = [
  {
    id: 1,
    question: "Where can I find the latest flight booking deals?",
    answer:
      "You can check for all the latest flight ticket booking deals on our official website. There you will get the best deal not only on flight tickets but on hotel booking also.      ",
  },
  {
    id: 2,
    question: "What are the best flight offers on Trackn Fly?      ",
    answer:
      "If you are traveling with Trackn Fly for the first time then you can use our first-time user offer to have the exclusive discount on your booking.      ",
  },
  {
    id: 3,
    question: "Which airline flight tickets can I book on Trackn Fly?    ",
    answer:
      "There are several airlines including IndiGo, Vistara, Air India, Go First, SpiceJet Flight, and many more on Trackn Fly. There you will also have international airlines such as Emirates, Qatar Airways, and many more.      ",
  },
  {
    id: 4,
    question: "What are the best and worst duration to fly?    ",
    answer:
      "Although there are no such days Tuesdays and Wednesdays are the cheapest days to fly as they are the working days. However, weekends are the most expensive as most people travel these days.       ",
  },
  {
    id: 5,
    question:
      "Do I get my flight ticket by email while booking on Trackn Fly?    ",
    answer:
      "When you book your flight tickets on Trackn Fly, you will get your e-tickets by email. You can print and show this ticket at the check-in counter.      ",
  },
  {
    id: 6,
    question: "How many seats are available on a single booking?    ",
    answer:
      "You can book up to 9 seats in a single booking. If you face any problem then you can contact us freely.    ",
  },
  {
    id: 7,
    question: "Does Trackn Fly has travel insurance?    ",
    answer:
      "Yes, while booking you can add insurance. It will secure your trip against cancellation, delay, loss of baggage, and many more.      ",
  },
  {
    id: 8,
    question: "How do I check in online?    ",
    answer:
      "Visit Trackn Fly official website and then visit its check-in page which is linked to Spicejet, IndiGo, Vistara, Air India, and many more web check-in pages.      ",
  },
  {
    id: 9,
    question: "How do I change or cancel my booking on Trackn Fly?    ",
    answer:
      "With Trackn Fly, you can easily change or cancel your booking.      ",
  },
];

const Flights = () => {
  return (
    <>
      <WhatTracknFlyHaveForYou />
      <FrquentlyAskedQuestions data={data} sidebar={false} />
    </>
  );
};

export default Flights;
