import React, { useState, useEffect, useRef } from "react";
import "./hero.scss";
import { FaPlane } from "react-icons/fa";
import { MdOutlineLocationOn } from "react-icons/md";
import { BiSearchAlt, BiChevronDown } from "react-icons/bi";
import Benefits from "../benefits/Benefits";
import TopFlightOffer from "../topFlights/TopFlightOffer";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Popup from "../popup/Popup";
import ErrorPopup from "../errorPopup/ErrorPopup";
import { RiArrowDropDownLine } from "react-icons/ri";

const images = ["/f-c-1.jpg", "f-c-2.jpg", "f-c-3.jpg", "f-c-4.jpg"];

const Hero = () => {
  const [tripType, setTripType] = useState("ONE_WAY");
  const [departFrom, setDepartFrom] = useState("");
  const [flyingTo, setFlyingTo] = useState("");
  const [departDate, setDepartDate] = useState("");
  const [returnDate, setReturnDate] = useState("");
  const [passengers, setPassengers] = useState(1);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [flightsData, setFlightsData] = useState([]);
  const [airportFitsDepart, setAirportFitsDepart] = useState([]);
  const [airportFitsFlying, setAirportFitsFlying] = useState([]);
  const [from, setFrom] = useState("");
  const [to, setTo] = useState("");
  const [showDepartRes, setShowDepartRes] = useState(false);
  const [showFlyingRes, setShowFlyingRes] = useState(false);
  const [error, setError] = useState("");
  const [popup, setPopup] = useState(false);
  const [adults, setAdults] = useState(1);
  const [kids, setKids] = useState(0);
  const [infant, setInfant] = useState(0);
  const [totalPassengers, setTotalPassengers] = useState(1);
  const [showPassengerCounter, setShowPassengerCounter] = useState(false);
  const [selectedClass, setSelectedClass] = useState("ECONOMY");

  const handleClassChange = (event) => {
    setSelectedClass(event.target.value);
  };

  const handleAdultDecrement = () => {
    if (adults > 1) {
      setAdults(adults - 1);
      setTotalPassengers(totalPassengers - 1);
    }
  };

  const handleAdultIncrement = () => {
    setAdults(adults + 1);
    setTotalPassengers(totalPassengers + 1);
  };

  const handleKidsDecrement = () => {
    if (kids > 0) {
      setKids(kids - 1);
      setTotalPassengers(totalPassengers - 1);
    }
  };

  const handleKidsIncrement = () => {
    setKids(kids + 1);
    setTotalPassengers(totalPassengers + 1);
  };

  const handleInfantDecrement = () => {
    if (infant > 0) {
      setInfant(infant - 1);
      setTotalPassengers(totalPassengers - 1);
    }
  };

  const handleInfantIncrement = () => {
    setInfant(infant + 1);
    setTotalPassengers(totalPassengers + 1);
  };

  const handleDropdownClick = () => {
    setShowPassengerCounter(!showPassengerCounter);
  };

  // Search Suggestion for Depart From
  const handleChangeDepartFrom = (e) => {
    setDepartFrom(e.target.value);
    searchAirportDepartFrom(e.target.value);
  };

  const airportSelectHandlerDepartFrom = (airport) => {
    setDepartFrom(airport.name);
    setFrom(airport.iata_code);
    setAirportFitsDepart([]);
  };

  // Fetch airports for both DepartFrom
  const searchAirportDepartFrom = async (departFrom) => {
    if (departFrom.length === 0) {
      setAirportFitsDepart([]);
      return;
    }

    const res = await fetch(
      "https://raw.githubusercontent.com/algolia/datasets/master/airports/airports.json"
    );
    const airports = await res.json();

    const regex = new RegExp(`^${departFrom}`, "gi");
    const fits = airports.filter(
      (airport) =>
        airport.country.match(regex) ||
        airport.name.match(regex) ||
        airport.city.match(regex) ||
        airport.iata_code.match(regex)
    );

    setAirportFitsDepart(fits);
  };

  // Search Suggestion for FlyingTo

  const handleChangeFlyingTo = (e) => {
    setFlyingTo(e.target.value);
    searchAirportFlyingTo(e.target.value);
    setTo(e.target.value);
  };

  const airportSelectHandlerFlyingTo = (airport) => {
    setFlyingTo(airport.name);
    setTo(airport.iata_code);
    setAirportFitsFlying([]);
  };

  // Fetch airports for both Flying To
  const searchAirportFlyingTo = async (departFrom) => {
    if (departFrom.length === 0) {
      setAirportFitsFlying([]);
      return;
    }

    const res = await fetch(
      "https://raw.githubusercontent.com/algolia/datasets/master/airports/airports.json"
    );
    const airports = await res.json();

    const regex = new RegExp(`^${departFrom}`, "gi");
    const fits = airports.filter(
      (airport) =>
        airport.country.match(regex) ||
        airport.name.match(regex) ||
        airport.city.match(regex) ||
        airport.iata_code.match(regex)
    );

    setAirportFitsFlying(fits);
  };

  const navigate = useNavigate();

  const todayDate = new Date().toISOString().split("T")[0];

  useEffect(() => {
    setDepartDate(todayDate);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((currentSlide + 1) % images.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [currentSlide]);

  const submitFormHandler = async (e) => {
    e.preventDefault();

    if (from === to) {
      setError("Origin and Destination Can't be same!");
      return;
    } else {
      setError("");
    }
    const dataToSend = {
      from,
      to,
      departDate,
      adults,
      kids,
      infant,
      tripType,
      selectedClass,
    };

    if (tripType === "ROUND_TRIP") {
      dataToSend.returnDate = returnDate;
    }

    const options = {
      method: "POST",
      url: import.meta.env.VITE_OURSERVERURL,
      data: dataToSend,
    };

    try {
      setPopup(true);
      console.log("Starting API request");
      const startTime = performance.now();

      const timeoutPromise = new Promise((resolve, reject) => {
        setTimeout(() => {
          reject(new Error("Request time out"));
        }, 30000);
      });

      // const response = await Promise.race([
      //   axios.request(options),
      //   timeoutPromise,
      // ]);

      // if (response.data) {
      //   setPopup(false);
      //   setFlightsData(response.data.data);

      //   const endTime = performance.now();
      //   console.log("API request took", endTime - startTime, "milliseconds");

      //   navigate("/flight-list", { state: { data: response.data.data } });
      // }


      setPopup(false);
      const endTime = performance.now();
      console.log("API request took", endTime - startTime, "milliseconds");
      navigate("/test");



    } catch (error) {
      setDepartFrom("");
      setFlyingTo("");
      setDepartDate("");
      setReturnDate("");
      setPassengers(1);
      setAirportFitsDepart([]);
      setAirportFitsFlying([]);

      setPopup(false);
      setError("Something went wrong!");
      console.log(error);
    }
  };

  const calculateMinReturnDate = (departureDate) => {
    if (!departureDate) {
      return ""; // No minimum date if departure date is not selected
    }

    const minReturnDate = new Date(departureDate);
    minReturnDate.setDate(minReturnDate.getDate() + 1); // Minimum return date is departure date + 1 day

    const minReturnDateString = minReturnDate.toISOString().split("T")[0];
    return minReturnDateString;
  };

  return (
    <>
      <div
        className="hero"
        style={{ backgroundImage: `url(${images[currentSlide]})` }}
      >
        {popup && <Popup />}
        {error && (
          <ErrorPopup error={error} setError={setError} setPopup={setPopup} />
        )}
        <div className="container">
          <div className="title">
            <h1>
              <div className="icon">
                <FaPlane />
              </div>
              Search, Compare Flights & Save
            </h1>
            <h2>Search. Book. Travel. </h2>
          </div>
          <div className="content">
            <div className="content-container">
              <div className="top">
                <label>
                  <input
                    type="radio"
                    name="trip_type"
                    value="ONE_WAY"
                    checked={tripType === "ONE_WAY"}
                    onChange={() => setTripType("ONE_WAY")}
                  />
                  One Way
                </label>
                <label>
                  <input
                    type="radio"
                    name="trip_type"
                    value="ROUND_TRIP"
                    checked={tripType === "ROUND_TRIP"}
                    onChange={() => setTripType("ROUND_TRIP")}
                  />
                  Round Trip
                </label>
              </div>
              <form className="middle" onSubmit={submitFormHandler}>
                <div className="item depart-from">
                  <label htmlFor="">Depart from</label>
                  <div className="input">
                    <MdOutlineLocationOn />
                    <input
                      required
                      type="text"
                      placeholder="City or airport"
                      value={departFrom}
                      onChange={handleChangeDepartFrom}
                      onFocus={() => setShowDepartRes(true)}
                      onBlur={() => setShowDepartRes(false)}
                    />
                  </div>
                </div>
                <div className="item flying-to">
                  <label htmlFor="">Flying to</label>
                  <div className="input">
                    <MdOutlineLocationOn />
                    <input
                      required
                      type="text"
                      placeholder="City or airport"
                      value={flyingTo}
                      onChange={handleChangeFlyingTo}
                      onFocus={() => setShowFlyingRes(true)}
                      onBlur={() => setShowFlyingRes(false)}
                    />
                  </div>
                </div>
                <div className="item">
                  <label htmlFor="">Departure date</label>
                  <div className="input">
                    <input
                      required
                      type="date"
                      value={departDate}
                      onChange={(date) => setDepartDate(date.target.value)}
                      min={new Date().toISOString().split("T")[0]} // Set the minimum date to today
                    />
                  </div>
                </div>
                {tripType === "ROUND_TRIP" && (
                  <div className="item">
                    <label htmlFor="">Return date</label>
                    <div className="input">
                      <input
                        required
                        type="date"
                        value={returnDate}
                        onChange={(date) => setReturnDate(date.target.value)}
                        min={calculateMinReturnDate(departDate)} // Custom minimum date calculation
                        disabled={departDate === ""} // Disable if departure date is not selected yet
                      />
                    </div>
                  </div>
                )}

                <div className="item passenger">
                  <label htmlFor="" className="form-label">
                    Passengers
                  </label>
                  <div className="input" onClick={handleDropdownClick}>
                    <input
                      type="text"
                      placeholder="Total Passengers"
                      value={`${totalPassengers} ${
                        totalPassengers === 1 ? "Passenger" : "Passengers"
                      }`}
                      readOnly
                    />
                    <RiArrowDropDownLine />
                  </div>
                  {showPassengerCounter && (
                    <div className="passenger-counter">
                      <div className="counter">
                        <label>Adults</label>
                        <div className="actions">
                          <span onClick={handleAdultDecrement}>-</span>
                          <p className="counter-value">{adults}</p>
                          <span onClick={handleAdultIncrement}>+</span>
                        </div>
                      </div>
                      <div className="counter">
                        <label>Kids</label>
                        <div className="actions">
                          <span onClick={handleKidsDecrement}>-</span>
                          <p className="counter-value">{kids}</p>
                          <span onClick={handleKidsIncrement}>+</span>
                        </div>
                      </div>
                      <div className="counter">
                        <label>Infant</label>
                        <div className="actions">
                          <span onClick={handleInfantDecrement}>-</span>
                          <p className="counter-value">{infant}</p>
                          <span onClick={handleInfantIncrement}>+</span>
                        </div>
                      </div>
                    </div>
                  )}
                </div>

                <div className="item">
                  <label htmlFor="" className="form-label">
                    Class
                  </label>
                  <select value={selectedClass} onChange={handleClassChange}>
                    <option value="ECONOMY">Economy</option>
                    <option value="PREMIUM_ECONOMY">Premium Economy</option>
                    <option value="BUSINESS">Business</option>
                    <option value="FIRST">First</option>
                  </select>
                </div>

                <div className="search item">
                  <button>
                    <BiSearchAlt />
                    Search
                  </button>
                </div>
              </form>
              {/* <div className="bottom">
                <select value={selectedClass} onChange={handleClassChange}>
                  <option value="economy">Economy</option>
                  <option value="premium-economy">Premium Economy</option>
                  <option value="business">Business</option>
                  <option value="first">First</option>
                </select>
              </div> */}
            </div>

            {showFlyingRes === false && (
              <div className="airport-search-depart">
                {airportFitsDepart.length > 0 &&
                  airportFitsDepart.map((fit) => (
                    <div
                      key={fit.iata_code}
                      className="airport-search__result"
                      onClick={() => airportSelectHandlerDepartFrom(fit)}
                    >
                      <div className="airport__iata">{fit.iata_code}</div>
                      <h3 className="airport__name">{fit.name}</h3>
                      <p className="airport__city">{fit.city}, </p>
                      <p className="airport__country">{fit.country}</p>
                    </div>
                  ))}
              </div>
            )}

            {showDepartRes === false && (
              <div className="airport-search-flying">
                {airportFitsFlying.length > 0 &&
                  airportFitsFlying.map((fit) => (
                    <div
                      key={fit.iata_code}
                      className="airport-search__result"
                      onClick={() => airportSelectHandlerFlyingTo(fit)}
                    >
                      <div className="airport__iata">{fit.iata_code}</div>
                      <h3 className="airport__name">{fit.name}</h3>
                      <p className="airport__city">{fit.city}, </p>
                      <p className="airport__country">{fit.country}</p>
                    </div>
                  ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
