import { useState } from "react";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Header from "./components/header/Header";
import Contact from "./pages/contact/Contact";
import Footer from "./components/footer/Footer";
import Hero from "./components/hero/Hero";
import Flights from "./pages/flights/Flights";
import FlightsList from "./pages/flightsList/FlightsList";
import FlightDetail from "./pages/flightDetail/FlightDetail";

function App() {
  return (
    <>
      <Header />
      <Hero />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact-us" element={<Contact />} />
        <Route path="/flights" element={<Flights />} />
        <Route path="/flight-list" element={<FlightsList />} />
        <Route path="/flight-detail" element={<FlightDetail />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
