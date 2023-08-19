import React from "react";
import Benefits from "../components/benefits/Benefits";
import TopFlightOffer from "../components/topFlights/TopFlightOffer";
import WhyToChooseUs from "../components/why-choose-us/WhyToChooseUs";
import Newsletter from "../components/newsletter/Newsletter";
import HowWeCanHelp from "../components/howCanWeHelp/HowWeCanHelp";

const Home = () => {
  return (
    <>
      <Benefits />
      <TopFlightOffer />
      <HowWeCanHelp />
      <WhyToChooseUs />
    </>
  );
};

export default Home;
