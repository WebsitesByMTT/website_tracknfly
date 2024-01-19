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
import { BiSolidPlaneAlt } from "react-icons/bi";
import { FaHotel } from "react-icons/fa";

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

  const [selectedFromCity, setSelectedFromCity] = useState("");
  const [selectedFromCountry, setSelectedFromCountry] = useState("");
  const [selectedIATACode, setSelectedFromIATACode] = useState("");

  const [selectedToCity, setSelectedToCity] = useState("");
  const [selectedToIATACode, setSelectedToIATACode] = useState("");
  const [selectedToCountry, setSelectedToCountry] = useState("");

  const [searchFor, setSearchFor] = useState("FLIGHTS");

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
    console.log("SELECTED AIRPORT : ", airport);
    setDepartFrom(airport.name);
    setFrom(airport.iata_code);
    setSelectedFromCity(airport.city);
    setSelectedFromIATACode(airport.iata_code);
    setSelectedFromCountry(airport.country);
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
    setSelectedToIATACode(airport.iata_code);
    setSelectedToCity(airport.city);
    setSelectedToCountry(airport.country);
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

      if(searchFor === "HOTELS"){
        navigate('/hotels_results')
      }
      else{
        navigate("/flights_results");
      }

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
            <div className="tabs">
              <ul>
                <li
                  className={`${searchFor === "FLIGHTS" && "active"}`}
                  onClick={() => setSearchFor("FLIGHTS")}
                >
                  <BiSolidPlaneAlt /> Flights
                </li>
                <li
                  className={`${searchFor === "HOTELS" && "active"}`}
                  onClick={() => setSearchFor("HOTELS")}
                >
                  <FaHotel />
                  Hotels
                </li>
              </ul>
            </div>

            {searchFor === "FLIGHTS" && (
              <div
                className="content-container"
                style={{
                  borderRadius: `${
                    showFlyingRes || showDepartRes ? "0rem 1rem 1rem 0rem" : ""
                  }`,
                }}
              >
                <div className="top">
                  <div className="trip-type">
                    <select
                      name="trip_type"
                      value={tripType}
                      onChange={(e) => setTripType(e.target.value)}
                    >
                      <option value="ONE_WAY">One Way</option>
                      <option value="ROUND_TRIP">Round Trip</option>
                    </select>
                  </div>

                  <div className="trip-passengers">
                    <button
                      onClick={() =>
                        setShowPassengerCounter(!showPassengerCounter)
                      }
                    >
                      {totalPassengers} Passengers
                    </button>

                    {showPassengerCounter && (
                      <div className="passenger-counter">
                        <div className="passenger-counter-container">
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
                      </div>
                    )}
                  </div>

                  <div className="trip-class">
                    <select value={selectedClass} onChange={handleClassChange}>
                      {["Economy", "Premium Economy", "Business", "First"].map(
                        (option) => (
                          <option key={option} value={option.toUpperCase()}>
                            {option}
                          </option>
                        )
                      )}
                    </select>
                  </div>
                </div>
                <form className="middle" onSubmit={submitFormHandler}>
                  <div className="item depart-from">
                    <label htmlFor="">from</label>
                    <div className="input">
                      {/* <MdOutlineLocationOn /> */}
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

                    {selectedIATACode && departFrom && (
                      <label className="airport-detail">{`${selectedIATACode}, ${selectedFromCity}, ${selectedFromCountry}`}</label>
                    )}
                  </div>
                  <div className="swap">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      class="lucide lucide-arrow-right-left"
                    >
                      <path d="m16 3 4 4-4 4" />
                      <path d="M20 7H4" />
                      <path d="m8 21-4-4 4-4" />
                      <path d="M4 17h16" />
                    </svg>
                  </div>
                  <div className="item flying-to">
                    <label htmlFor="">to</label>
                    <div className="input">
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
                    {selectedToIATACode && flyingTo && (
                      <label className="airport-detail">{`${selectedToIATACode}, ${selectedToCity}, ${selectedToCountry}`}</label>
                    )}
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
                  <div
                    className={`item ${tripType === "ONE_WAY" && "disabled"}`}
                  >
                    <label htmlFor="">Return date</label>
                    <div className="input">
                      <input
                        required
                        type="date"
                        value={returnDate}
                        onChange={(date) => setReturnDate(date.target.value)}
                        min={calculateMinReturnDate(departDate)} // Custom minimum date calculation
                        disabled={departDate === "" || tripType === "ONE_WAY"}
                        style={{
                          cursor:
                            tripType === "ONE_WAY" ? "not-allowed" : "auto",
                        }}
                      />
                    </div>
                    <label htmlFor=""></label>
                  </div>

                  <div className="submit">
                    <button>
                      {" "}
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        class="lucide lucide-plane"
                      >
                        <path d="M17.8 19.2 16 11l3.5-3.5C21 6 21.5 4 21 3c-1-.5-3 0-4.5 1.5L13 8 4.8 6.2c-.5-.1-.9.1-1.1.5l-.3.5c-.2.5-.1 1 .3 1.3L9 12l-2 3H4l-1 1 3 2 2 3 1-1v-3l3-2 3.5 5.3c.3.4.8.5 1.3.3l.5-.2c.4-.3.6-.7.5-1.2z" />
                      </svg>{" "}
                      Search Flights
                    </button>
                  </div>
                </form>
              </div>
            )}

            {searchFor === "HOTELS" && (
              <div
                className="content-container"
                style={{
                  borderRadius: `${
                    showFlyingRes || showDepartRes ? "0rem 1rem 1rem 0rem" : ""
                  }`,
                }}
              >
                <div className="top">
                  <div className="trip-type">
                    <select
                      name="trip_type"
                      value={tripType}
                      onChange={(e) => setTripType(e.target.value)}
                    >
                      <option value="ONE_WAY">One Way</option>
                      <option value="ROUND_TRIP">Round Trip</option>
                    </select>
                  </div>

                  <div className="trip-passengers">
                    <button
                      onClick={() =>
                        setShowPassengerCounter(!showPassengerCounter)
                      }
                    >
                      {totalPassengers} Passengers
                    </button>

                    {showPassengerCounter && (
                      <div className="passenger-counter">
                        <div className="passenger-counter-container">
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
                      </div>
                    )}
                  </div>

                  <div className="trip-class">
                    <select value={selectedClass} onChange={handleClassChange}>
                      {["Economy", "Premium Economy", "Business", "First"].map(
                        (option) => (
                          <option key={option} value={option.toUpperCase()}>
                            {option}
                          </option>
                        )
                      )}
                    </select>
                  </div>
                </div>
                <form className="middle" onSubmit={submitFormHandler}>
                  <div className="item depart-from">
                    <label htmlFor="">from</label>
                    <div className="input">
                      {/* <MdOutlineLocationOn /> */}
                      <input
                        required
                        type="text"
                        placeholder="Hotel Location"
                        value={departFrom}
                        onChange={handleChangeDepartFrom}
                        onFocus={() => setShowDepartRes(true)}
                        onBlur={() => setShowDepartRes(false)}
                      />
                    </div>

                    {selectedIATACode && departFrom && (
                      <label className="airport-detail">{`${selectedIATACode}, ${selectedFromCity}, ${selectedFromCountry}`}</label>
                    )}
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
                  <div
                    className={`item ${tripType === "ONE_WAY" && "disabled"}`}
                  >
                    <label htmlFor="">Return date</label>
                    <div className="input">
                      <input
                        required
                        type="date"
                        value={returnDate}
                        onChange={(date) => setReturnDate(date.target.value)}
                        min={calculateMinReturnDate(departDate)} // Custom minimum date calculation
                        disabled={departDate === "" || tripType === "ONE_WAY"}
                        style={{
                          cursor:
                            tripType === "ONE_WAY" ? "not-allowed" : "auto",
                        }}
                      />
                    </div>
                    <label htmlFor=""></label>
                  </div>

                  <div className="submit">
                    <button>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        class="lucide lucide-hotel"
                      >
                        <path d="M18 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2Z" />
                        <path d="m9 16 .348-.24c1.465-1.013 3.84-1.013 5.304 0L15 16" />
                        <path d="M8 7h.01" />
                        <path d="M16 7h.01" />
                        <path d="M12 7h.01" />
                        <path d="M12 11h.01" />
                        <path d="M16 11h.01" />
                        <path d="M8 11h.01" />
                        <path d="M10 22v-6.5m4 0V22" />
                      </svg>
                      Search Hotels
                    </button>
                  </div>
                </form>
              </div>
            )}

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
