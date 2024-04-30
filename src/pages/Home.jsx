import React from "react";
import Benefits from "../components/benefits/Benefits";
import TopFlightOffer from "../components/topFlights/TopFlightOffer";
import WhyToChooseUs from "../components/why-choose-us/WhyToChooseUs";
import Newsletter from "../components/newsletter/Newsletter";
import HowWeCanHelp from "../components/howCanWeHelp/HowWeCanHelp";
import PopularBeach from "../components/popularBeach/PopularBeach";

const Home = () => {
  return (
    <>
      <Benefits />
      <PopularBeach />
      <TopFlightOffer />
      <HowWeCanHelp />
      <WhyToChooseUs />
    </>
  );
};

export default Home;
