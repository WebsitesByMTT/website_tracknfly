import React from "react";
import "./hotel.scss";
import Benefits from "../../components/benefits/Benefits";
import ProductOffering from "../../components/productOffering/ProductOffering";
import FrquentlyAskedQuestions from "../../components/faqs/FrquentlyAskedQuestions";
import AboutTrackenFly from "../../components/aboutTrackenFly/AboutTrackenFly";
import { Helmet } from "react-helmet";
import Hero from "../../components/hero/Hero";

const data = {
  frquentlyAskedQuestions: [
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

  productOffering: [
    {
      title: "PRODUCT OFFERING ",
      desc: "Book Flights From US, Book Flights From UAE, Book Hotels From UAE, Flight Status, Flights, International Flights, Charter Flights, Hotels, International Hotels, Book Flights From US, Book Flights From UAE, Trip Ideas, Travel Blog, flight booking, cheap flights, airline tickets, plane tickets, cheap airline tickets, flight ticket, cheap flight tickets, last minute flights, car on rent, cheap cars for rent, rent a car for a day, cheapest car hire, hire a car for a day, hotel booking, cheap hotels, last minute hotels hotwire hotels, hotel booking sites.      ",
      redirect: "",
    },
    {
      title: "Have Safe and Affordable Stays with Trackn Fly      ",
      desc: "We at Trackn Fly always keep your safety as our top priority. For that, we have the most affordable hotels with all the services. We give the best deals on hotel bookings. So, now you don’t have to check your pocket while booking a luxurious hotel. You will find the best hotels near your place. From luxury resorts to 5-star hotels, we have it all. Now don’t wait for too long and visit Trackn Fly and get exclusion deals.      ",
      redirect: "",
    },
    {
      title: "Why You Should Book a Hotel From Trackn Fly?      ",
      desc: "You find the best flight tickets but it is hard to get an affordable hotel near your travel destination. Then don’t worry as Trackn Fly makes your stay more comfortable and cheaper. We have hundreds and thousands of hotels, homestays, resorts, and villas where you can spend your day. It's just you need to visit our website and check the exclusion deals on the latest hotel booking. Additionally, we also provide free cancellation and early check-in and late check-out facilities.",
      redirect: "",
    },
    {
      title: "How to Book a Hotel on Trackn Fly      ",
      desc: "It is very easy to book hotels on Tackn Fly. You just need to follow these simple steps.      ",
      redirect: "",
      more: {
        link: "https://www.tracknfly.com/hotels",
        steps: [
          "First, enter your travel destination where you want to book the hotel along with check-in and check-out dates.          ",
          "Now you can pick the hotel where you want to stay and click on the Book Now button.          ",
          "You will get to see exclusive deals on hotels.          ",
          "Enter your contact details and pay for your hotel booking.          ",
        ],
      },
    },
    {
      title: "TOP HOTELS      ",
      desc: "Paramount Hotel Dubai, Grand Hyatt Dubai, Jw Marriott Marquis Hotel Dubai, Gevora Hotel, Jumeirah Beach Hotel, Citymax Hotel Bur Dubai, Atana Hotel, Sheraton Grand Hotel Dubai, Millennium Airport Hotel Dubai, Media One Hotel, Grand Excelsior Hotel Bur Dubai, Ghaya Grand Hotel, Marco Polo Hotel, Copthorne Hotel Dubai, Kempinski Hotel Mall Of The Emirates, The Meydan Hotel, Park Regis Kris Kin Hotel, Armani Hotel Dubai, York International Hotel, Signature 1 Hotel Tecom, Park Regis Kris Kin Hotel, Armani Hotel Dubai, York International Hotel, Signature 1 Hotel Tecom  .",
      redirect: "",
    },
    {
      title: "MORE LINKS      ",
      desc: "Hotels In Dubai, Hotels In Abu Dhabi, Hotels In Sharjah, Hotels In Ras Al Khaimah, Hotels In Ajman, Hotels In Fujairah, Hotels In Al Ain, Hotels In Kalba, Hotels In Singapore, Hotels In Bangkok, Hotels In Pattaya, Hotels In London, Hotels In Phuket, Hotels In Bali, Hotels In Hong Kong, Hotels In Paris, Hotels In Koh Samui, Hotels In New York, Hotels In Las Vegas, Hotels In Colombo, Hotels In Macau, Hotels In Kuala Lumpur, Hotels In Sydney, Hotels In Kathmandu, Hotels In Maldives, Hotels In Langkawi, Hotels In Istanbul, Hotels In Rome, Hotels in Tbilisi, Hotels in Baku, Hotels in Cairo, Hotels in Islamabad, Hotels in Muscat, Hotels in Mykonos, Hotels in Santorini, Hotels in Mykonos, Hotels in Yerevan, Hotels in Zanzibar, Hotels in Moscow      ",
      redirect: "/hotels",
    },
  ],
};

const Hotel = () => {
  return (
    <>
      <Helmet>
        <title>Book Hotel rooms online and have the best deal on it.</title>
        <meta
          name="description"
          content="At Trackn Fly book hotel rooms online and have the best deal on it. You can save more money with its coupons. Visit the hotels page for more information"
        />
        <meta property="og:url" content="https://www.tracknfly.com/Hotels" />
        <meta property="og:type" content="website" />
        <meta
          property="og:title"
          content="Book Hotel rooms online and have the best deal on it."
        />
        <meta property="og:site_name" content="Hotels" />
        <meta
          property="og:description"
          content="At Trackn Fly book hotel rooms online and have the best deal on it. You can save more money with its coupons. Visit the hotels page for more information."
        />
        <meta
          property="og:image"
          content="https://i.im.ge/2024/04/30/ZPv6SY.Final-logo.jpeg"
        />
        <meta
          name="Keywords"
          content="Hotels Booking, Hotel online book, expedia hotels, Hotel Booking with Trackn fly, cheap hotels near me, cheap hotels, nyc hotels, hotels tonight, hotel booking sites, best hotel booking site, book hotel"
        />
      </Helmet>
      <Hero text={'Our Best Hotels to Book Online'}/>
      <Benefits />
      <FrquentlyAskedQuestions
        data={data.frquentlyAskedQuestions}
        sidebar={false}
      />
      <AboutTrackenFly />
      <ProductOffering data={data.productOffering} />
    </>
  );
};

export default Hotel;
