import React, { Suspense } from "react";
import "./App.css";
import { Route, Routes, useLocation } from "react-router-dom";
import PreLoader from "./utils/PreLoader";
import AboutTrackenFly from "./components/aboutTrackenFly/AboutTrackenFly";
import FrquentlyAskedQuestions from "./components/faqs/FrquentlyAskedQuestions";
import Cars from "./pages/cars/Cars";
import RefundPolicy from "./pages/refundPolicy/RefundPolicy";
import TermsAndServices from "./pages/termsAndServices/TermsAndServices";
import FAQS from "./pages/faq/FAQS";
import KiwiForm from "./pages/kiwiform/KiwiForm";

//Using React Lazy
const Hotel=React.lazy(()=>import("./pages/hotels/Hotel"))
const AboutUs=React.lazy(()=>import("./pages/aboutus/AboutUs"))
const BestDeals = React.lazy(()=>import("./pages/bestdeals/BestDeals"))
const Home = React.lazy(() => import("./pages/Home"));
const Header = React.lazy(() => import("./components/header/Header"));
const Contact = React.lazy(() => import("./pages/contact/Contact"));
const Footer = React.lazy(() => import("./components/footer/Footer"));
const Hero = React.lazy(() => import("./components/hero/Hero"));
const Flights = React.lazy(() => import("./pages/flights/Flights"));
const FlightsList = React.lazy(() => import("./pages/flightsList/FlightsList"));
const FlightDetail = React.lazy(() =>
  import("./pages/flightDetail/FlightDetail")
);
const FlightResult = React.lazy(() =>
  import("./pages/flightsResult/FlightResult")
);
const HotelsResult = React.lazy(() =>
  import("./pages/hotelsResult/HotelsResult")
);
const PrivacyPolicy = React.lazy(() =>
  import("./pages/privacyPolicy/PrivacyPolicy")
);
const ProductOffering = React.lazy(() =>
  import("./components/productOffering/ProductOffering")
);
const WhyTracknFly = React.lazy(() =>
  import("./components/whyTracknFly/WhyTracknFly")
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
      title: "Domestic Flights with Trackn Fly      ",
      desc: "Trackn Fly is the leading website for flight and airline bookings. We offer the cheapest fare guarantee and give instant notifications to update you on the current flight status with amazing discounts.      ",
      redirect: "",
    },
    {
      title: "TOP DOMESTIC HOTELS IN USA        ",
      desc: "Acqualina Resort & Residences, Four Seasons Hotel at The Surf Club, Surfside, Florida, The Langham, Chicago, The Peninsula Chicago, Montage Laguna Beach, Mauna Lani, Auberge Resorts Collection, Faena Hotel Miami Beach, The Setai Miami Beach, Mandarin Oriental, Boston, planet hollywood las vegas, circus circus reno, opryland hotel, the venetian las vegashilton, hawaiian village, universal hotels, quality inn, ritz carlton, fontainebleau miami, comfort inn, yosemite valley lodge, universal studios hotels, excalibur hotel, park mgm, camelback resort, palazzo las vegas, hilton garden inn, hotels near universal studios, encore las vegas, bonvoy marriott, grand sierra resort, radisson blu, radisson, hotel washington, palazzo, luxor hotel, ala moana hotel      ",
      redirect: "/hotels",
    },
    {
      title: "TOP INTERNATIONAL HOTELS      ",
      desc: "Fairmont Jaipur, Taj Rishikesh, Taj Lake Palace Udaipur, The Taj Mahal Palace Mumbai, Kimpton Hotels & Restaurants, Hyatt Hotels & Resorts, Marriott International, Four Seasons, Hotels & Resorts, Wyndham Hotels & Resorts, IHG Hotels and Resorts, Jin Jiang International, Best Western International, Six Senses Fort Barwara, Taj West End Bengaluru, Grand Hyatt Mumbai, The Ritz Carlton Bengaluru, The Oberoi Gurgaon, Taj Bengal Kolkata, Le Meridien Goa, Best Hotels in India, Jai Mahal Palace Jaipur, St Regis Goa      ",
      redirect: "/hotels",
    },
    {
      title: "Popular US Destinations for Car Rentals      ",
      desc: "Car Rental Las Vegas, Car Rental NYC, Car Rental Chicago, Car Rental Orlando Car Rental Los Angeles, Car Rental Orlando Airport, Car Rental Fort Myers Airport, Car Rental Tampa Airport, Car Rental Miami Airport, Car Rental Phoenix Airport, Car Rental Denver Airport, Car Rental Las Vegas Airport, Car Rental Toronto Airport, Car Rental Dallas Airport, Car Rental Nashville Airport, Car Rental Palm Springs Airport, Car Rental Edmonton Airport, Car Rental Newark Airport, Car Rental LAX Airport, Car Rental SJO Airport, Cheap Car Rental Orlando, Cheap Car Rental Miami",
      redirect: "/car-on-rent",
    },
    {
      title: "Popular Rental Cars      ",
      desc: "Barcelona, Milan, Cape Town, Durban, Lima, Peru, Kraków, Poland, Moscow, Russia, Los Angeles, Luxury Car Rental, Budget cars, Family cars, Car rentals that fit your budget, SUV Rental, All Car/Sedan Sizes, Van Rental      ",
      redirect: "",
    },
    {
      title: "QUICK LINKS      ",
      desc: "Flights from USA to India (US - IN), Flights from New York to Miami (NYC - MIA), Flights from New York to Florida (NYC - FL), Flights from Chicago to Las Vegas (CHI - LAS), Flights from New York to Atlanta (NYC - ATL), Flights from New York to Orlando (NYC - ORL), Flights from Los Angeles to Manila (LAX - MNL), Flights from New York to Los Angeles (NYC - LAX), Flights from Los Angeles to Las Vegas (LAX - LAS), Flights from Dallas to Las Vegas (DFW - LAS), Flights from Atlanta to Miami (ATL - MIA), Flights from New York to Las Vegas (NYC - LAS), Flights from San Francisco to India (SFO - IN), Flights from Chicago to Los Angeles (CHI - LAX), Flights from Los Angeles to Hawaii (LAX - HI), Flights from USA to Philippines (US - PH), Flights from Chicago to Miami (CHI - MIA), Flights from New York to London (NYC - LON), Flights from Miami to The Bahamas (MIA - BS), Flights from New York to Chicago (NYC - CHI), Flights from Atlanta to Las Vegas (ATL - LAS), Flights from Los Angeles to New York (LAX - NYC), Flights from Dallas to Los Angeles (DFW - LAX), Flights from New York to California (NYC - CA)      ",
      redirect: "/flights",
    },
  ],
};

function App() {
  const location = useLocation();
  const excludePathsForHero = [
    "/privacy-policy",
    "/cancellation-and-refund-policy",
    "/terms-and-services",
    "/frequently-asked-questions",
    "/best-deals"
  ];
  const shouldRenderHero = !excludePathsForHero.includes(location.pathname);

  const excludePaths = ["/flights", "/hotels", "/car-on-rent", "best-deals"];
  const shouldRenderProductOffering = !excludePaths.includes(location.pathname);

  return (
    <>
      <Suspense fallback={<PreLoader />}>
        <Header />
        {shouldRenderHero && <Hero />}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contact-us" element={<Contact />} />
          <Route path="/flights" element={<Flights />} />
          <Route path="/hotels" element={<Hotel />} />
          <Route path="/car-on-rent" element={<Cars />} />
          <Route path="/flight-list" element={<FlightsList />} />
          <Route path="/flight-detail" element={<FlightDetail />} />
          <Route path="/flights_results" element={<FlightResult />} />
          <Route path="/hotels_results" element={<HotelsResult />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route
            path="/cancellation-and-refund-policy"
            element={<RefundPolicy />}
          />
          <Route path="/terms-and-services" element={<TermsAndServices />} />
          <Route path="/frequently-asked-questions" element={<FAQS />} />
          <Route path="/best-deals" element={<BestDeals />} />
          <Route path="/about-us" element={<AboutUs />} />
          {/* <Route path="/kiwi-form" element={<KiwiForm />}/> */}

        </Routes>

        {shouldRenderProductOffering && (
          <ProductOffering data={data.productOffering} />
        )}
        <Footer />
      </Suspense>
    </>
  );
}

export default App;
