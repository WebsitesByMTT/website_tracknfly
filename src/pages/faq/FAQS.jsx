import FrquentlyAskedQuestions from "../../components/faqs/FrquentlyAskedQuestions";
import React, { useEffect } from "react";

const data = [
  {
    title: "Flights",
    data: [
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
    ],
  },
  {
    title: "Hotels",
    data: [
      {
        id: 1,
        question: "Where can I find the best hotel deals on Trackn Fly?    ",
        answer:
          "You can find all the exclusive offers on the booking page.      ",
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
    ],
  },
  {
    title: "Car Rental",
    data: [
      {
        id: 1,
        question: "What types of cars can I rent?    ",
        answer: "You can rent any type of cars or vehicle.    ",
      },
      {
        id: 2,
        question:
          "Can I place an online request if I am not a U.S. resident?    ",
        answer:
          "Yes, you can place an online request if you are not from the US.      ",
      },
      {
        id: 3,
        question: "What do I need to bring when I pick up my rental car?      ",
        answer: "You must have your valid ID proof and driving license.      ",
      },
      {
        id: 4,
        question: "Can I rent a car without a reservation?      ",
        answer:
          "No, to rent any vehicle you need a place request before.      ",
      },
      {
        id: 5,
        question: "Can I cancel my reservation?    ",
        answer:
          "Yes, you can cancel your reservation. You will get your refund after 7 to 15 days on your original payment mode.      ",
      },
      {
        id: 6,
        question: "What happens if I arrive late when picking up the car?    ",
        answer: "It will be better if you inform us about the delay.      ",
      },
      {
        id: 7,
        question: "What should I do if I damage the car?    ",
        answer:
          "If anything happens like that then you need to pay the extra expense for the damages.      ",
      },
      {
        id: 8,
        question: "Can I pay by credit card?      ",
        answer:
          "Yes, we accept any mode of payment including credit cards.      ",
      },
      {
        id: 9,
        question: "Do the fees vary by region and season?    ",
        answer: "Yes, it varies by region and season.    ",
      },
      {
        id: 10,
        question: "Can I get a non-smoking car?    ",
        answer: "No, you can not have a non-smoking car with Trackn Fly.    ",
      },
    ],
  },
];

const FAQS = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className={" py-[4rem] md:py-[7rem] px-[2rem] md:px-[4rem]"}>
      <div className={" flex flex-col gap-[4rem]"}>
        <div className={""}>
          <h1 className="text-black text-center tracking-wide font-semibold  text-[4rem]">
            Frequently Asked Questions
          </h1>
        </div>
        <div>
          {data?.map((item, index) => (
            <FrquentlyAskedQuestions
              title={item.title}
              data={item.data}
              sidebar={false}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default FAQS;
