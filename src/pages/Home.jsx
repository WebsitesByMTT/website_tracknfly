import React from "react";
import Benefits from "../components/benefits/Benefits";
import TopFlightOffer from "../components/topFlights/TopFlightOffer";
import WhyToChooseUs from "../components/why-choose-us/WhyToChooseUs";
import Newsletter from "../components/newsletter/Newsletter";
import HowWeCanHelp from "../components/howCanWeHelp/HowWeCanHelp";
import FrquentlyAskedQuestions from "../components/faqs/FrquentlyAskedQuestions";
import ProductOffering from "../components/productOffering/ProductOffering";
import WhyTracknFly from "../components/whyTracknFly/WhyTracknFly";

const data = {
  frquentlyAskedQuestions: [
    {
      id: 1,
      question: "Why choose Trackn Fly?",
      answer:
        "Trackn Fly is one of the leading company around the globe. We provide the best deals on the airline, flight tickets, and hotel bookings with huge discounts. At Trackn Fly you can also hire a car on rental at the lowest deal. We assure you that while using it, you will have the best experience without any trouble.",
    },
    {
      id: 2,
      question:
        "What is the best duration to book flights, hotels, and Cars on rent?",
      answer:
        "You can book your flight tickets before six to eight weeks in advance to get the cheapest price. However, hotel prices drop when you book four weeks before your travel date. It would be better if you rent a car before two weeks in advance.",
    },
    {
      id: 3,
      question: "What are the available payment modes?",
      answer:
        "There are payment modes from where you can pay for your flight tickets and hotel booking, debit or credit card. You can also pay from your digital wallet such as Amazon Pay, Mobikwik, and many more.",
    },
    {
      id: 4,
      question: "What is the Lowest Airfare Guarantee?",
      answer:
        "We are the only one who guarantees you the lowest airfare for domestic and international flight bookings.",
    },
    {
      id: 5,
      question: "Where do I find flights, hotels and Cars on rent deals?",
      answer:
        "At Trackn Fly, you can have the latest cars on rent, flights, and hotel deals.",
    },
    {
      id: 6,
      question: "How do I connect with Trackn Fly customer support?",
      answer:
        "We have 24/7 services, you can connect with us via email or call.",
    },
  ],
  productOffering: [
    {
      title: "PRODUCT OFFERING ",
      desc: "Flights, International Flights, Charter Flights, Hotels, International Hotels, Book Flights From US, Book Flights From UAE, Trip Ideas, Travel Blog, flight booking, cheap flights, airline tickets, plane tickets, cheap airline tickets, flight ticket, cheap flight tickets, last minute flights, car on rent, cheap cars for rent, rent a car for a day, cheapest car hire, hire a car for a day, hotel booking, cheap hotels, last minute hotels hotwire hotels, hotel booking sites.      ",
    },
    {
      title:
        "Trackn Fly gives exclusive discounts on Flights, Hotels and Car on Rent      ",
      desc: "We at Trackn Fly offer the best deal on airline tickets in one place where you can not find cheap flight tickets and a hotel booking at a low price. Here you will also get a car on rent at a very cheap price. We also have affordable and customized holiday packages. For us, our customer satisfaction is the top most priority and we have our dedicated staff who will be there to help you at any time. For the past few years, we are very happy to fulfill the dreams of many travelers who love to explore different places. So, with Trackn Fly discover the whole world without breaking your pocket.      ",
    },
    {
      title: "Domestic Flights with Trackn Fly      ",
      desc: "Trackn Fly is the leading website for flight and airline bookings. We offer the cheapest fare guarantee and give instant notifications to update you on the current flight status with amazing discounts.      ",
    },
    {
      title: "TOP DOMESTIC HOTELS IN USA        ",
      desc: "Acqualina Resort & Residences, Four Seasons Hotel at The Surf Club, Surfside, Florida, The Langham, Chicago, The Peninsula Chicago, Montage Laguna Beach, Mauna Lani, Auberge Resorts Collection, Faena Hotel Miami Beach, The Setai Miami Beach, Mandarin Oriental, Boston, planet hollywood las vegas, circus circus reno, opryland hotel, the venetian las vegashilton, hawaiian village, universal hotels, quality inn, ritz carlton, fontainebleau miami, comfort inn, yosemite valley lodge, universal studios hotels, excalibur hotel, park mgm, camelback resort, palazzo las vegas, hilton garden inn, hotels near universal studios, encore las vegas, bonvoy marriott, grand sierra resort, radisson blu, radisson, hotel washington, palazzo, luxor hotel, ala moana hotel      ",
    },
    {
      title: "TOP INTERNATIONAL HOTELS      ",
      desc: "Fairmont Jaipur, Taj Rishikesh, Taj Lake Palace Udaipur, The Taj Mahal Palace Mumbai, Kimpton Hotels & Restaurants, Hyatt Hotels & Resorts, Marriott International, Four Seasons, Hotels & Resorts, Wyndham Hotels & Resorts, IHG Hotels and Resorts, Jin Jiang International, Best Western International, Six Senses Fort Barwara, Taj West End Bengaluru, Grand Hyatt Mumbai, The Ritz Carlton Bengaluru, The Oberoi Gurgaon, Taj Bengal Kolkata, Le Meridien Goa, Best Hotels in India, Jai Mahal Palace Jaipur, St Regis Goa      ",
    },
    {
      title: "Popular US Destinations for Car Rentals      ",
      desc: "Car Rental Las Vegas, Car Rental NYC, Car Rental Chicago, Car Rental Orlando Car Rental Los Angeles, Car Rental Orlando Airport, Car Rental Fort Myers Airport, Car Rental Tampa Airport, Car Rental Miami Airport, Car Rental Phoenix Airport, Car Rental Denver Airport, Car Rental Las Vegas Airport, Car Rental Toronto Airport, Car Rental Dallas Airport, Car Rental Nashville Airport, Car Rental Palm Springs Airport, Car Rental Edmonton Airport, Car Rental Newark Airport, Car Rental LAX Airport, Car Rental SJO Airport, Cheap Car Rental Orlando, Cheap Car Rental Miami",
    },
    {
      title: "Popular Rental Cars      ",
      desc: "Barcelona, Milan, Cape Town, Durban, Lima, Peru, Kraków, Poland, Moscow, Russia, Los Angeles, Luxury Car Rental, Budget cars, Family cars, Car rentals that fit your budget, SUV Rental, All Car/Sedan Sizes, Van Rental      ",
    },
    {
      title: "QUICK LINKS      ",
      desc: "Flights from USA to India (US - IN), Flights from New York to Miami (NYC - MIA), Flights from New York to Florida (NYC - FL), Flights from Chicago to Las Vegas (CHI - LAS), Flights from New York to Atlanta (NYC - ATL), Flights from New York to Orlando (NYC - ORL), Flights from Los Angeles to Manila (LAX - MNL), Flights from New York to Los Angeles (NYC - LAX), Flights from Los Angeles to Las Vegas (LAX - LAS), Flights from Dallas to Las Vegas (DFW - LAS), Flights from Atlanta to Miami (ATL - MIA), Flights from New York to Las Vegas (NYC - LAS), Flights from San Francisco to India (SFO - IN), Flights from Chicago to Los Angeles (CHI - LAX), Flights from Los Angeles to Hawaii (LAX - HI), Flights from USA to Philippines (US - PH), Flights from Chicago to Miami (CHI - MIA), Flights from New York to London (NYC - LON), Flights from Miami to The Bahamas (MIA - BS), Flights from New York to Chicago (NYC - CHI), Flights from Atlanta to Las Vegas (ATL - LAS), Flights from Los Angeles to New York (LAX - NYC), Flights from Dallas to Los Angeles (DFW - LAX), Flights from New York to California (NYC - CA)      ",
    },
  ],
};
const Home = () => {
  return (
    <>
      <Benefits />
      <TopFlightOffer />
      <HowWeCanHelp />
      <WhyToChooseUs />
      <WhyTracknFly />
      <FrquentlyAskedQuestions
        data={data.frquentlyAskedQuestions}
        sidebar={true}
      />
      <ProductOffering data={data.productOffering} />
    </>
  );
};

export default Home;
