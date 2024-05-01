import React from "react";
import "./hotel.scss";
import FrquentlyAskedQuestions from "../../components/faqs/FrquentlyAskedQuestions";

const data = [
  {
    id: 1,
    question: "Where can I find the best hotel deals on Trackn Fly?    ",
    answer: "You can find all the exclusive offers on the booking page.      ",
  },
  {
    id: 2,
    question: "What is the best duration to book hotels online?    ",
    answer:
      "If you want to book at the cheapest price then you must book the hotel at least before four weeks. Additionally Trackn Fly also offers last-minute hotel deals.",
  },
  {
    id: 3,
    question:
      "Which mode of payment is available for Trackn Fly hotel bookings?    ",
    answer:
      "You can pay online by using a debit or credit card. There are other payment modes are also available such as Amazon Pay, PhonePe, Paytm, and many more.      ",
  },
  {
    id: 4,
    question:
      "How to find the best hotels near my travel destination on Trackn Fly?    ",
    answer:
      "With just a few clicks, you can find the best hotels on Trackn Fly. Go to the hotel booking page enter your city and dates and search for the best accommodation near you with the best deals.      ",
  },
  {
    id: 5,
    question: "Where do I select my room type?      ",
    answer:
      "After you select a hotel, you can choose your room type. There you will get to see photos of the room, amenities, charges, and other things.      ",
  },
  {
    id: 6,
    question: "How to change or cancel my hotel booking?    ",
    answer:
      "Log in to your account and cancel your hotel booking without any hassle.       ",
  },
  {
    id: 7,
    question: "Will I get a refund for the hotel cancellation?    ",
    answer:
      "Yes, you will get a refund on your hotel cancellation in your original payment mode. It will take 10 to 15 days to proceed.      ",
  },
  {
    id: 8,
    question:
      "Do I need to present an ID proof while checking in at the hotel?    ",
    answer:
      "Yes, while checking in at the hotel, you have to show your ID proof at the reception.      ",
  },
];

const Hotel = () => {
  return (
    <>
      <FrquentlyAskedQuestions data={data} sidebar={false} />
    </>
  );
};

export default Hotel;
