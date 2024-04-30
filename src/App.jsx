import React, { Suspense } from "react";
import "./App.css";
import { Route, Routes, useLocation } from "react-router-dom";
import PreLoader from "./utils/PreLoader";
import AboutTrackenFly from "./components/aboutTrackenFly/AboutTrackenFly";
//Using React Lazy
const Home = React.lazy(() => import("./pages/Home"))
const Header = React.lazy(() => import("./components/header/Header"))
const Contact = React.lazy(() => import("./pages/contact/Contact"))
const Footer = React.lazy(() => import("./components/footer/Footer"))
const Hero = React.lazy(() => import("./components/hero/Hero"))
const Flights = React.lazy(() => import("./pages/flights/Flights"))
const FlightsList = React.lazy(() => import("./pages/flightsList/FlightsList"))
const FlightDetail = React.lazy(() => import("./pages/flightDetail/FlightDetail"))
const FlightResult = React.lazy(() => import("./pages/flightsResult/FlightResult"))
const HotelsResult = React.lazy(() => import("./pages/hotelsResult/HotelsResult"))
const PrivacyPolicy = React.lazy(() => import("./pages/privacyPolicy/PrivacyPolicy"))
const ProductOffering = React.lazy(() => import("./components/productOffering/ProductOffering"))
const WhyTracknFly = React.lazy(() => import("./components/whyTracknFly/WhyTracknFly"))


function App() {
  const location = useLocation();
  const isPrivacyPolicyPage = location.pathname === "/privacy-policy";
  return (
    <>
     <Suspense fallback={<PreLoader />}>
        <Header />
        {!isPrivacyPolicyPage && <Hero />}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contact-us" element={<Contact />} />
          <Route path="/flights" element={<Flights />} />
          <Route path="/flight-list" element={<FlightsList />} />
          <Route path="/flight-detail" element={<FlightDetail />} />
          <Route path="/flights_results" element={<FlightResult />} />
          <Route path="/hotels_results" element={<HotelsResult />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        </Routes>
        <WhyTracknFly />
        <AboutTrackenFly />
        <ProductOffering />
        <Footer />
      </Suspense>
    </>
  );
}

export default App;
