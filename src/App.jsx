import { useState } from "react";
import "./App.css";
import { Route, Routes, useLocation } from "react-router-dom";
import Home from "./pages/Home";
import Header from "./components/header/Header";
import Contact from "./pages/contact/Contact";
import Footer from "./components/footer/Footer";
import Hero from "./components/hero/Hero";
import Flights from "./pages/flights/Flights";
import FlightsList from "./pages/flightsList/FlightsList";
import FlightDetail from "./pages/flightDetail/FlightDetail";
import FlightResult from "./pages/flightsResult/FlightResult";
import HotelsResult from "./pages/hotelsResult/HotelsResult";
import PrivacyPolicy from "./pages/privacyPolicy/PrivacyPolicy";

function App() {
  const location = useLocation();
  const isPrivacyPolicyPage = location.pathname === "/privacy-policy";
  return (
    <>
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
      <Footer />
    </>
  );
}

export default App;
