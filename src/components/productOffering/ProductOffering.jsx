import React from "react";
import "./productOffering.scss";

const data = [
  {
    title: "Product Offering",
    desc: "Flights, International Flights, Charter Flights, Hotels, International Hotels, Homestays and Villas, Activities, Book Flights From US, Book Flights From UAE, Trip Planner, Gift Cards, Trip Money, Trip Ideas, Travel Blog, flight booking, cheap flights, airline tickets, plane tickets, cheap airline tickets, flight ticket, cheap flight tickets, last minute flights, car on rent, cheap cars for rent, rent a car for a day, cheapest car hire, hire a car for a day, hotel booking, cheap hotels, last minute hotels hotwire hotels, hotel booking sites.",
  },
  {
    title: "Top Hotels in USA",
    desc: "planet hollywood las vegas, circus circus reno, opryland hotel, the venetian las vegashilton, hawaiian village, universal hotels, quality inn, ritz carlton, fontainebleau miami, comfort inn, yosemite valley lodge, universal studios hotels, excalibur hotel, park mgm, camelback resort, palazzo las vegas, hilton garden inn, hotels near universal studios, encore las vegas, bonvoy marriott, grand sierra resort, radisson blu, radisson, hotel washington, palazzo, luxor hotel, ala moana hotel",
  },
  {
    title: "quick links",
    desc: "Flights from USA to India (US - IN), Flights from New York to Miami (NYC - MIA), Flights from New York to Florida (NYC - FL), Flights from Chicago to Las Vegas (CHI - LAS), Flights from New York to Atlanta (NYC - ATL), Flights from New York to Orlando (NYC - ORL), Flights from Los Angeles to Manila (LAX - MNL), Flights from New York to Los Angeles (NYC - LAX), Flights from Los Angeles to Las Vegas (LAX - LAS), Flights from Dallas to Las Vegas (DFW - LAS), Flights from Atlanta to Miami (ATL - MIA), Flights from New York to Las Vegas (NYC - LAS), Flights from San Francisco to India (SFO - IN), Flights from Chicago to Los Angeles (CHI - LAX), Flights from Los Angeles to Hawaii (LAX - HI), Flights from USA to Philippines (US - PH), Flights from Chicago to Miami (CHI - MIA), Flights from New York to London (NYC - LON), Flights from Miami to The Bahamas (MIA - BS), Flights from New York to Chicago (NYC - CHI), Flights from Atlanta to Las Vegas (ATL - LAS), Flights from Los Angeles to New York (LAX - NYC), Flights from Dallas to Los Angeles (DFW - LAX), Flights from New York to California (NYC - CA)",
  },
  {
    title: "airlines links",
    desc: "Aeromexico, Air Canada, Air France, Alaska Airlines, American Airlines,China Eastern Airlines, Copa Airlines, Emirates Etihad Airways, EVA Air, Frontier Airlines, Hawaiian Airlines, LATAM Airlines, Lufthansa, Air Europa, Spirit Airlines, Turkish Airlines, United Airlines, Volaris Airlines Trip Ideas, Beaches, Romantic Destinations, Popular Destinations, Domestic Flight Offers, International Flight Offers.",
  },
];

const ProductOffering = ({ data }) => {
  return (
    <div className="productOffering">
      <div className="Container">
        <div className="cards">
          {data.map((item, index) => (
            <div className="card" key={index}>
              <h3>{item.title}</h3>
              <p>{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductOffering;
