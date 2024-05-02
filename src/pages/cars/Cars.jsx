import React from "react";
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
      answer: "No, to rent any vehicle you need a place request before.      ",
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

  productOffering: [
    {
      title: "PRODUCT OFFERING ",
      desc: "Flights, International Flights, Charter Flights, Hotels, International Hotels, Book Flights From US, Book Flights From UAE, Trip Ideas, Travel Blog, flight booking, cheap flights, airline tickets, plane tickets, cheap airline tickets, flight ticket, cheap flight tickets, last minute flights, car on rent, cheap cars for rent, rent a car for a day, cheapest car hire, hire a car for a day, hotel booking, cheap hotels, last minute hotels hotwire hotels, hotel booking sites.      ",
      redirect: "",
    },
    {
      title: "Popular US Destinations for Car Rentals      ",
      desc: "Car Rental Las Vegas, Car Rental NYC, Car Rental Chicago, Car Rental Orlando Car Rental Los Angeles, Car Rental Orlando Airport, Car Rental Fort Myers Airport, Car Rental Tampa Airport, Car Rental Miami Airport, Car Rental Phoenix Airport, Car Rental Denver Airport, Car Rental Las Vegas Airport, Car Rental Toronto Airport, Car Rental Dallas Airport, Car Rental Nashville Airport, Car Rental Palm Springs Airport, Car Rental Edmonton Airport, Car Rental Newark Airport, Car Rental LAX Airport, Car Rental SJO Airport, Cheap Car Rental Orlando, Cheap Car Rental Miami, Cheap Car Rental Fort Lauderdale, Cheap Car Rental Tampa, Cheap Car Rental Los Angeles, Cheap Car Rental New York, Cheap Car Rental Phoenix, Cheap Car Rental Atlanta, Cheap Car Rental Toronto, Cheap Car Rental Dallas, Cheap Car Rental Houston, Cheap Car Rental Melbourne, Cheap Car Rental San Francisco, Cheap Car Rental Chicago, Cheap Car Rental Seattle",
      redirect: "",
    },
    {
      title: "Popular Rental Cars      ",
      desc: "Barcelona, Milan, Cape Town, Durban, Lima, Peru, Kraków, Poland, Moscow, Russia, Los Angeles, Luxury Car Rental, Budget cars, Family cars, Car rentals that fit your budget, SUV Rental, All Car/Sedan Sizes, Van Rental      ",
      redirect: "",
    },
    {
      title: "Steps to Book a Car on Trackn Fly",
      desc: "It is a very easy process.      ",
      redirect: "",
      more: {
        link: "",
        steps: [
          "Enter your drop-off location and your preferred dates.",
          "Select your age",
          "Click on the search button",
          "There will be numerous options of cheap cars on rental.",
        ],
      },
    },
  ],
};

const Cars = () => {
  return (
    <>

      <Helmet>
        <title>Trackn Fly has the best deals on cars on rent.</title>
        <meta
          name="description"
          content=" Book affordable cars with Trackn fly. It has the best deals on cars on rent. If you have any doubt, then do visit our car on rent page."
        />
        <meta
          property="og:url"
          content="https://www.tracknfly.com/cars-on-rent"
        />
        <meta property="og:type" content="website" />
        <meta
          property="og:title"
          content="Trackn Fly has the best deals on cars on rent."
        />
        <meta property="og:site_name" content="cars on rent" />
        <meta
          property="og:description"
          content="Book affordable cars with Trackn fly. It has the best deals on cars on rent. If you have any doubt, then do visit our car on rent page."
        />
        <meta
          property="og:image"
          content="https://i.im.ge/2024/04/30/ZPv6SY.Final-logo.jpeg"
        />
        <meta
          name="Keywords"
          content="cars on rent, rental cars, how much to rent a car, car rental san diego, google rental cars, rent a car with Tracknfly, rental agencies, last minute car rentals, cheap rental car delivered to you, airport rent a car, cheap automobile rentals, available car"
        />
      </Helmet>

      <Hero text={'Find Hundreds Of Cars on Rent At Your Destination'}/>

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

export default Cars;
