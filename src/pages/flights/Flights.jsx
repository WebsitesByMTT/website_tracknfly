import "./flight.scss";

import { WhatTracknFlyHaveForYou } from "../../components/whatTracknFlyHaveForYou/WhatTracknFlyHaveForYou";
import FrquentlyAskedQuestions from "../../components/faqs/FrquentlyAskedQuestions";
import Benefits from "../../components/benefits/Benefits";
import AboutTrackenFly from "../../components/aboutTrackenFly/AboutTrackenFly";
import ProductOffering from "../../components/productOffering/ProductOffering";
import { Helmet } from "react-helmet";
import Hero from "../../components/hero/Hero";

const data = {
  frquentlyAskedQuestions: [
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

  productOffering: [
    {
      title: "PRODUCT OFFERING ",
      desc: "Book Flights From US, Book Flights From UAE, Book Hotels From UAE, Flight Status, Flights, International Flights, Charter Flights, Hotels, International Hotels, Book Flights From US, Book Flights From UAE, Trip Ideas, Travel Blog, flight booking, cheap flights, airline tickets, plane tickets, cheap airline tickets, flight ticket, cheap flight tickets, last minute flights, car on rent, cheap cars for rent, rent a car for a day, cheapest car hire, hire a car for a day, hotel booking, cheap hotels, last minute hotels hotwire hotels, hotel booking sites.      ",
      redirect: "",
    },
    {
      title: "Why Book Air Tickets on Trackn Fly?      ",
      desc: "We at Trackn Fly offer the best deal on airline tickets in one place where you can not find cheap flight tickets but a hotel booking at a low price. We also get affordable and customized holiday packages. For us, our customer satisfaction is the top most priority and we have our dedicated staff who will be there to help you at any time. For the past few years, we are very happy to fulfill the dreams of many travelers who love to explore different places. So, with Trackn Fly discover the whole world without breaking your pocket.      ",
      redirect: "",
    },
    {
      title: "How to Book Cheap Flight Tickets on Trackn Fly?      ",
      desc: "Trackn Fly is the best website that offers cheap flight tickets at the most affordable price. You just need to visit its official website and enter your travel dates and destinations, it will automatically show you the best deals on it. The best thing is we also send notifications to update you about the cheapest deals on flight tickets.       ",
      redirect: "",
    },
    {
      title: "Domestic Flights with Trackn Fly      ",
      desc: "Trackn Fly is the leading website for flight and airline bookings. We offer the cheapest fare guarantee and give instant notifications to update you on the current flight status with amazing discounts.      ",
      redirect: "",
    },
    {
      title: "INTERNATIONAL FLIGHT ROUTES      ",
      desc: "Abu Dhabi To Amman Flight, Abu Dhabi To Dhaka Flight, Abu Dhabi To Doha Flight, Abu Dhabi To Kathmandu Flight, Cairo To Sharjah Flight, Dhaka To Sharjah Flight, Kathmandu To Abu Dhabi Flight, Kathmandu To Sharjah Flight, Sharjah To Dhaka Flight, Sharjah To Islamabad Flight, Sharjah To Beirut Flight, Sharjah To Dhaka Flight, Sharjah To Kathmandu Flight, Karachi To Sharjah Flight, Sharjah To Istanbul Flight, Sharjah To Doha Flight, Dubai to Manila Flight, Dubai to Kuwait Flight, Dubai to Islamabad Flight, Dubai to Karachi Flight, Dubai to Kathmandu Flight, Dubai to Delhi Flight, Dubai to Mumbai Flight, Dubai to Chennai Flight, Dubai to Hyderabad Flight, Dubai to Mangalore Flight, Dubai to Kochi Flight, Mumbai to Dubai Flight, Mumbai to Trivandrum Flight, Sharjah to Trivandrum Flight, Ahmedabad to Dubai Flight, Kochi to Dubai Flight, Dubai to Kozhikode Flight, Amritsar to Dubai Flight, Sharjah to Kochi Flight, Trivandrum to Dubai Flight, Calicut to Dubai Flight, Kochi to Sharjah Flight, Dubai to Thiruvananthapuram Flight, Thiruvananthapuram to Sharjah Flight, Dubai to Abu Dhabi Flight, Dubai to Sialkot Flight      ",
      redirect: "",
    },
    {
      title: "TOP FLIGHT ROUTES        ",
      desc: "Abu Dhabi to Kutaisi Flight, Aqaba to Abu Dhabi Flight, Al Ain to Peshawar Flight, Kutaisi to Abu Dhabi Flight, Dubai to Quetta Flight, Dammam to Dubai Flight, Dubai to Dammam Flight, Alexandria to Abu Dhabi Flight, Doha to Abu Dhabi Flight, Abu Dhabi to Lahore Flight, Abu Dhabi to Bangkok Flight, Abu Dhabi to Islamabad Flight, Abu Dhabi to Peshawar Flight, Manila to Abu Dhabi Flight, Islamabad to Sharjah Flight, Islamabad to Dubai Flight, Dubai to Bahrain Flight, Beirut to Dubai Flight, Dubai to Bangkok Flight, Abu Dhabi to Beirut Flight, Abu Dhabi to Manila Flight, Amman to Dubai Flight, Dubai to Alexandria Flight, Dubai to Amsterdam Flight, Dubai to Cairo Flight, Dubai to Hong Kong Flight, Dubai to Istanbul Flight, Dubai to Jakarta Flight, Dubai to London Flight, Dubai to Mauritius Flight, Dubai to New York Flight, Dubai to Paris Flight, Dubai to Riyadh Flight, Dubai to Rome Flight, Dubai to Toronto Flight, Dubai to Zurich Flight, Dubai to Faisalabad Flight, Dubai to Lagos Flight, Dubai to Los Angeles Flight, Dubai to Phuket Flight, Manila to Dubai Flight, Abu Dhabi to Cairo Flight, Dubai to Athens Flight, Dubai to Casablanca Flight, Casablanca to Dubai Flight, Dubai to Beirut Flight, Dubai to Lahore Flight, Dubai to Seychelles Flight, Dubai to Amman Flight, Dubai to Entebbe Flight, Dubai to Peshawar Flight, Dubai to Tunis Flight, Abu Dhabi to Casablanca Flight      ",
      redirect: "/hotels",
    },
    {
      title: "QUICK LINKS ",
      desc: "Flights from USA to India (US - IN), Flights from New York to Miami (NYC - MIA), Flights from New York to Florida (NYC - FL), Flights from Chicago to Las Vegas (CHI - LAS), Flights from New York to Atlanta (NYC - ATL), Flights from New York to Orlando (NYC - ORL), Flights from Los Angeles to Manila (LAX - MNL), Flights from New York to Los Angeles (NYC - LAX), Flights from Los Angeles to Las Vegas (LAX - LAS), Flights from Dallas to Las Vegas (DFW - LAS), Flights from Atlanta to Miami (ATL - MIA), Flights from New York to Las Vegas (NYC - LAS), Flights from San Francisco to India (SFO - IN), Flights from Chicago to Los Angeles (CHI - LAX), Flights from Los Angeles to Hawaii (LAX - HI), Flights from USA to Philippines (US - PH), Flights from Chicago to Miami (CHI - MIA), Flights from New York to London (NYC - LON), Flights from Miami to The Bahamas (MIA - BS), Flights from New York to Chicago (NYC - CHI), Flights from Atlanta to Las Vegas (ATL - LAS), Flights from Los Angeles to New York (LAX - NYC), Flights from Dallas to Los Angeles (DFW - LAX), Flights from New York to California (NYC - CA) ",
      redirect: "/flights",
    },
  ],
};

const Flights = () => {
  return (
    <>
      <Helmet>
        <title>
          Trackn Fly gives the best deals on cheap air-flight tickets.
        </title>
        <meta
          name="description"
          content="By visiting Trackn Fly, you will have the best deals on cheap air and book flight tickets on our flights page. Now you don't need to cancel your travel plans."
        />
        <meta property="og:url" content="https://www.tracknfly.com/flights" />
        <meta property="og:type" content="website" />
        <meta
          property="og:title"
          content="Trackn Fly gives the best deals on cheap air-flight tickets."
        />
        <meta property="og:site_name" content="FLIGHTS" />
        <meta
          property="og:description"
          content="By visiting Trackn Fly, you will have the best deals on cheap air and book flight tickets on our flights page. Now you don't need to cancel your travel plans"
        />
        <meta
          property="og:image"
          content="https://i.im.ge/2024/04/30/ZPv6SY.Final-logo.jpeg"
        />
        <meta
          name="Keywords"
          content="flights booking, flights online Booking, flight tickets, best deals, travel plans, Travel Ideas, cheap air, air-flight tickets, International Flight Online, Domestic flights Booking, Trackn Fly, Fly with Trackn Fly, united airlines, expedia flights, airline tickets, plane tickets, google flights"
        />
      </Helmet>
      <Hero text={"Search Domestic and International Flight Online"} />
      <Benefits />
      <WhatTracknFlyHaveForYou />
      <FrquentlyAskedQuestions
        data={data.frquentlyAskedQuestions}
        sidebar={false}
      />
      <AboutTrackenFly />
      <ProductOffering data={data.productOffering} />
    </>
  );
};

export default Flights;
