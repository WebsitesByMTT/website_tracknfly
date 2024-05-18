import React, { Suspense, useEffect, useState } from "react";
import "./App.css";
import { Route, Routes, useLocation } from "react-router-dom";
import PreLoader from "./utils/PreLoader";

//Using React Lazy
const TermsAndServices = React.lazy(() =>
  import("./pages/termsAndServices/TermsAndServices")
);
const FAQS = React.lazy(() => import("./pages/faq/FAQS"));
const Modal = React.lazy(() => import("./components/modal/Modal"));
const RefundPolicy = React.lazy(() =>
  import("./pages/refundPolicy/RefundPolicy")
);
const Cars = React.lazy(() => import("./pages/cars/Cars"));
const Hotel = React.lazy(() => import("./pages/hotels/Hotel"));
const AboutUs = React.lazy(() => import("./pages/aboutus/AboutUs"));
const BestDeals = React.lazy(() => import("./pages/bestdeals/BestDeals"));
const Home = React.lazy(() => import("./pages/Home"));
const Header = React.lazy(() => import("./components/header/Header"));
const Contact = React.lazy(() => import("./pages/contact/Contact"));
const Footer = React.lazy(() => import("./components/footer/Footer"));
const Flights = React.lazy(() => import("./pages/flights/Flights"));
const PrivacyPolicy = React.lazy(() =>
  import("./pages/privacyPolicy/PrivacyPolicy")
);
const ProductOffering = React.lazy(() =>
  import("./components/productOffering/ProductOffering")
);

const data = {
  productOffering: [
    {
      title: "PRODUCT OFFERING ",
      desc: "Flights, International Flights, Charter Flights, Hotels, International Hotels, Book Flights From US, Book Flights From UAE, Trip Ideas, Travel Blog, flight booking, cheap flights, airline tickets, plane tickets, cheap airline tickets, flight ticket, cheap flight tickets, last minute flights, car on rent, cheap cars for rent, rent a car for a day, cheapest car hire, hire a car for a day, hotel booking, cheap hotels, last minute hotels hotwire hotels, hotel booking sites.      ",
      redirect: "",
    },
    {
      title:
        "Trackn Fly gives exclusive discounts on Flights, Hotels and Car on Rent      ",
      desc: "We at Trackn Fly offer the best deal on airline tickets in one place where you can not find cheap flight tickets and a hotel booking at a low price. Here you will also get a car on rent at a very cheap price. We also have affordable and customized holiday packages. For us, our customer satisfaction is the top most priority and we have our dedicated staff who will be there to help you at any time. For the past few years, we are very happy to fulfill the dreams of many travelers who love to explore different places. So, with Trackn Fly discover the whole world without breaking your pocket.      ",
      redirect: "",
    },
    {
      title: "Domestic Flight Routes within USA",
      desc: "Honolulu (HNL) – Kahului (OGG), Atlanta (ATL) – Orlando (MCO), Las Vegas (LAS) - Los Angeles (LAX), New York (JFK) – Los Angeles (LAX), Denver (DEN) – Las Vegas (LAS), Atlanta (ATL) - Fort Lauderdale, Denver (DEN) – Las Vegas (LAS), Denver (DEN - Phoenix, San Francisco (SFO) – Los Angeles (LAX), New York (LGA) – Chicago (ORD), Los Angeles (LAX) – Chicago (ORD)",
      redirect: "",
    },
    {
      title: "TOP DOMESTIC HOTELS IN USA ",
      desc: "Acqualina Resort & Residences, Four Seasons Hotel at The Surf Club, Surfside, Florida, The Langham, Chicago, The Peninsula Chicago, Montage Laguna Beach, Mauna Lani, Auberge Resorts Collection, Faena Hotel Miami Beach, The Setai Miami Beach, Mandarin Oriental, Boston, planet hollywood las vegas, circus circus reno, opryland hotel, the venetian las vegashilton, hawaiian village, universal hotels, quality inn, ritz carlton, fontainebleau miami, comfort inn, yosemite valley lodge, universal studios hotels, excalibur hotel, park mgm, camelback resort, palazzo las vegas, hilton garden inn, hotels near universal studios, encore las vegas, bonvoy marriott, grand sierra resort, radisson blu, radisson, hotel washington, palazzo, luxor hotel, ala moana hotel",
      redirect: "/hotels",
    },
    {
      title: "TOP INTERNATIONAL HOTELS      ",
      desc: "Armani Hotel Dubai, Baur au Lac, Belmond Copacabana Palace, Carlisle Bay, Ciragan Palace Kempinski Istanbul, Excelsior Palace Hotel Rapallo, Fairmont Le Chateau Frontenac, Hotel Vier Jahreszeiten Kempinski Munich, Fairmont Jaipur, Taj Rishikesh, Taj Lake Palace Udaipur, The Taj Mahal Palace Mumbai, Kimpton Hotels & Restaurants, Hyatt Hotels & Resorts, Marriott International, Four Seasons, Hotels & Resorts, Wyndham Hotels & Resorts, IHG Hotels and Resorts, Jin Jiang International, Best Western International, Six Senses Fort Barwara, Taj West End Bengaluru, Grand Hyatt Mumbai, The Ritz Carlton Bengaluru, The Oberoi Gurgaon, Le Meridien Goa, Jai Mahal Palace Jaipur, St Regis Goa",
      redirect: "/hotels",
    },
    {
      title: "Popular US Destinations for Car Rentals",
      desc: "Car Rental Las Vegas, Car Rental NYC, Car Rental Chicago, Car Rental Orlando Car Rental Los Angeles, Car Rental Orlando Airport, Car Rental Fort Myers Airport, Car Rental Tampa Airport, Car Rental Miami Airport, Car Rental Phoenix Airport, Car Rental Denver Airport, Car Rental Las Vegas Airport, Car Rental Toronto Airport, Car Rental Dallas Airport, Car Rental Nashville Airport, Car Rental Palm Springs Airport, Car Rental Edmonton Airport, Car Rental Newark Airport, Car Rental LAX Airport, Car Rental SJO Airport, Cheap Car Rental Orlando, Cheap Car Rental Miam",
      redirect: "/car-on-rent",
    },
    {
      title: "Popular Rental Cars ",
      desc: "Barcelona, Milan, Cape Town, Durban, Lima, Peru, Kraków, Poland, Moscow, Russia, Los Angeles, Luxury Car Rental, Budget cars, Family cars, Car rentals that fit your budget, SUV Rental, All Car/Sedan Sizes, Van Rental, ",
      redirect: "",
    },
    {
      title: "QUICK LINKS",
      desc: "Flights from USA to India (US - IN), Flights from New York to Miami (NYC - MIA), Flights from New York to Florida (NYC - FL), Flights from Chicago to Las Vegas (CHI - LAS), Flights from New York to Atlanta (NYC - ATL), Flights from New York to Orlando (NYC - ORL), Flights from Los Angeles to Manila (LAX - MNL), Flights from New York to Los Angeles (NYC - LAX), Flights from Los Angeles to Las Vegas (LAX - LAS), Flights from Dallas to Las Vegas (DFW - LAS), Flights from Atlanta to Miami (ATL - MIA), Flights from New York to Las Vegas (NYC - LAS), Flights from San Francisco to India (SFO - IN), Flights from Chicago to Los Angeles (CHI - LAX), Flights from Los Angeles to Hawaii (LAX - HI), Flights from USA to Philippines (US - PH), Flights from Chicago to Miami (CHI - MIA), Flights from New York to London (NYC - LON), Flights from Miami to The Bahamas (MIA - BS), Flights from New York to Chicago (NYC - CHI), Flights from Atlanta to Las Vegas (ATL - LAS), Flights from Los Angeles to New York (LAX - NYC), Flights from Dallas to Los Angeles (DFW - LAX), Flights from New York to California (NYC - CA)",
      redirect: "/flights",
    },
  ],
};

function App() {
  const [modalstate, setModalState] = useState(false);
  const location = useLocation();
  const excludePaths = [
    "/flights",
    "/hotels",
    "/cars-on-rent",
    "best-deals",
    "/contact-us",
    "/privacy-policy",
    "/cancellation-&-refund-policy",
    "/terms-&services",
  ];
  const shouldRenderProductOffering = !excludePaths.includes(location.pathname);
  window.scrollTo({ top: 0, behavior: "smooth" });
  useEffect(() => {
    const timeState = setTimeout(() => {
      setModalState(false);
    }, 1000);
    return () => clearTimeout(timeState);
  }, []);
  const closeModal = () => {
    setModalState(false);
  };

  return (
    <>
      <Suspense fallback={<PreLoader />}>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/flights" element={<Flights />} />
          <Route path="/hotels" element={<Hotel />} />
          <Route path="/cars-on-rent" element={<Cars />} />
          <Route path="/best-deals" element={<BestDeals />} />
          <Route path="/contact-us" element={<Contact />} />
          <Route path="/about-us" element={<AboutUs />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route
            path="/cancellation-&-refund-policy"
            element={<RefundPolicy />}
          />
          <Route path="/terms-&services" element={<TermsAndServices />} />
          <Route path="/frequently-asked-questions" element={<FAQS />} />
        </Routes>{" "}
        {shouldRenderProductOffering && (
          <ProductOffering data={data.productOffering} />
        )}
        <Footer />
      </Suspense>
      <Modal isOpen={modalstate} onClose={closeModal} />
    </>
  );
}

export default App;
