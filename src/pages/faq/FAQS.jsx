import { Helmet } from "react-helmet";
import FrquentlyAskedQuestions from "../../components/faqs/FrquentlyAskedQuestions";
import React, { useEffect } from "react";
import WhyTracknFly from "../../components/whyTracknFly/WhyTracknFly";

const data = [
  {
    title: "Flights",
    data: [
      {
        id: 1,
        question: "How can I find last-minute flight deals?",
        answer:
          "However, Trackn Fly offers last-minute flight deals but it would be better if you book tickets in advance. In the best deals, you will get all the offers.",
      },
      {
        id: 2,
        question: "How can I find cheap flights for a weekend getaway?",
        answer:
          "While booking your flight you will have all the available offers.",
      },
      {
        id: 3,
        question: "How can I find flight deals if my travel plans are flexible?",
        answer:
          "On the best deals page, you will find all the exclusive offers. You can book your flights in your budget.",
      },
      {
        id: 4,
        question: "How can I find cheap flights to anywhere?",
        answer:
          "By visiting the Trackn Fly website and then entering your travel destination and dates, you will be shown the available deals on it.",
      },
      {
        id: 5,
        question:
          "Where can I find the latest flight booking offers?",
        answer:
          "On the flight page, you will find all offers and coupons.",
      },
      {
        id: 6,
        question: "How do I get my flight ticket when I book on Trackn Fly?",
        answer:
          "You will get your flight ticket via email. When you will check in you can print your ticket and show them at the counter.",
      },
      {
        id: 7,
        question: "How do I change/cancel my booking?",
        answer:
          "It is very easy, to login to your account and select the cancel or change option and cancel it. The best is you can cancel your ticket at the last moment also.",
      },
      {
        id: 8,
        question: "Do prices include Taxes and fees?",
        answer:
          "All flights in Trackn Fly include taxes and fees. Sometimes, it includes baggage fees, seat selection, and pet accommodation fees also.",
      },
      {
        id: 9,
        question: "Do flight prices include luggage fees?",
        answer:
          "There are airlines that may charge extra fees for luggage, but it is advised to check the guidelines of the guidelines from where you are booking the ticket.",
      },
      {
        id: 10,
        question: "How does Trackn Fly find low-price flights?",
        answer:
          "We process over 2 billion flight queries annually and then we display the results from thousands of airlines which allow to you get low-priced flights.",
      },
      {
        id: 11,
        question: "How do I find the best deals on flights?",
        answer:
          "All you need to visit our website and compare them with thousands of travel sites.",
      },
      {
        id: 12,
        question: "Does Trackn Fly query more flights?",
        answer:
          "Yes, it accesses more data and information than other travel websites.",
      }
    ],
  },
  {
    title: "Hotels",
    data: [
      {
        id: 1,
        question: "Where can I find the best hotel offers on Trackn Fly?",
        answer:
          "At Trackn Fly you will find all the exclusive offers related to hotels.",
      },
      {
        id: 2,
        question: "What is the best time to book hotels online?",
        answer:
          "To get the best deals book your hotel online before four weeks.",
      },
      {
        id: 3,
        question:
          "Which mode of payment is accepted for Trackn Fly hotel bookings?",
        answer:
          "Any payment mode is acceptable here including debit/credit card and the other netbanking mode.",
      },
      {
        id: 4,
        question:
          "How do I change/cancel my hotel booking?",
        answer:
          "Simply log in to your account here you will get the cancel option where you can cancel or change your hotel booking.",
      },
      {
        id: 5,
        question: "Where do I select the room type?",
        answer:
          "While booking your hotel you will have to select a room type option where you can choose your most preferred room.",
      },
      {
        id: 6,
        question: "Where do I receive a refund for hotel cancellation?",
        answer:
          "You will get your refund in your original payment mode. Remember you will get your refund after 7 to 15 days.",
      },
      {
        id: 7,
        question: "Do I need to present an ID proof while checking in at the hotel?",
        answer:
          "Yes, you need to show your ID proof while checking in at the hotel. So to avoid any trouble keep your ID proof within yourself.",
      },
      {
        id: 8,
        question:
          "How can you save money while booking hotels?",
        answer:
          "You should compare the best deals on various websites and compare them with others. You can also book it in advance.",
      },
      {
        id: 9,
        question:
          "Can you book a hotel with a local ID?",
        answer:
          "There are some Hotels that won't allow check-in with local ID proof but now these are accepted. So you should check the website before booking the Hotel.",
      },
      {
        id: 10,
        question:
          "Can you book cheap hotel rooms in 5-star hotels?",
        answer:
          "There are 5-star hotels in various cities that offer stays at cheaper rates. It's just you need to be flexible about your dates. Try not to travel during weekends.",
      },
      {
        id: 11,
        question:
          "Can I book a hotel online?",
        answer:
          "You can, all you need to visit our website tab the hotels, and enter the city name, location, or specific hotel where you want to stay.",
      },
    ],
  },
  {
    title: "Car Rental",
    data: [
      {
        id: 1,
        question: "Do you require a deposit to rent a vehicle?",
        answer: "Yes, before renting a vehicle you need to deposit an advance.",
      },
      {
        id: 2,
        question:
          "What are the minimum age requirements for renting?",
        answer:
          "You should be above 18 while renting a car with Trackn Fly.",
      },
      {
        id: 3,
        question: "WHAT DO I NEED TO PICK UP MY CAR?",
        answer: "You must have your valid ID proof and driving license.",
      },
      {
        id: 4,
        question: "WHAT IF I FIND A BETTER RATE FOR A RENTAL CAR?",
        answer:
          "No way! We guarantee that you will never a better rate than us.",
      },
      {
        id: 5,
        question: "How does Trackn Fly find low car prices?",
        answer:
          "We compare car rental prices from all the major car rental companies and display them on our website.",
      },
      {
        id: 6,
        question: "Can new drivers rent a car?",
        answer: "Its policies vary for each other car agency. While there are agencies that require a driving license for a minimum of 1 year, and there are some who ask for a valid driving license.",
      },
      {
        id: 7,
        question: "What kind of cars can you hire from Trackn Fly?",
        answer:
          "Here you can find the best deals on all types of car rentals including small, medium, large, luxury, etc.",
      },
      {
        id: 8,
        question: " Can you hire a car rental without a credit card?",
        answer:
          "Yes, you can hire without a credit card. ",
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
    <>
      <Helmet>
        <title>FAQ - Book cheap hotels, flights | cars on rental</title>
        <meta
          name="description"
          content="Trackn Fly - If you have any questions then do visit its FAQ page. It is the best travel agency that has cheap hotels, flights, and cars on rentals."
        />
        <meta
          property="og:url"
          content="https://www.tracknfly.com/frequently-asked-questions"
        />
        <meta property="og:type" content="website" />
        <meta property="og:title" content=" TERMS & SERVICES - Trackn Fly" />
        <meta property="og:site_name" content="TERMS & SERVICES" />
        <meta
          property="og:description"
          content="Trackn Fly - If you have any questions then do visit its FAQ page. It is the best travel agency that has cheap hotels, flights, and cars on rentals."
        />
       <meta property="og:image" content="https://www.tracknfly.com/assets/tracknfly-logo-6b9305ee.png"/>
      </Helmet>
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
      <WhyTracknFly />
    </>
  );
};

export default FAQS;
