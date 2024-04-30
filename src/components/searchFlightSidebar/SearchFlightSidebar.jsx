import React, { useState } from "react";
import styles from "./searchFlightSidebar.module.scss";
import { WiSunrise } from "react-icons/wi";
import { IoSunnyOutline } from "react-icons/io5";
import { BsCloudSun } from "react-icons/bs";
import { BsCloudMoon } from "react-icons/bs";

const SearchFlightSidebar = () => {
  const [selectedFilters, setSelectedFilters] = useState([]);
  const [priceRange, setPriceRange] = useState([0, 10000]);
  const [selectedStops, setSelectedStops] = useState([]);
  const [selectedDepartureTime, setSelectedDepartureTime] = useState("");
  const [selectArrivalTime, setSelectArrivalTime] = useState("");
  const [selectedAirlines, setSelectedAirlines] = useState([]);
  const [showFilters, setShowFilters] = useState(false);

  const popularFilters = [
    { title: "Non Stop", price: "₹ 6,805" },
    { title: "Vistara", price: "₹ 7,186" },
    { title: "Air India", price: "₹ 6,805" },
    { title: "SpiceJet", price: "₹ 7,928" },
    { title: "Akasa Air", price: "₹ 8,805" },
    { title: "Air India Express", price: "₹ 6,805" },
    { title: "Late Departures", price: "₹ 6,865" },
    { title: "1 Stop", price: "₹ 6,800" },
    { title: "AfterNoon Departure", price: "₹ 6,800" },
    { title: "Early Morning Departures", price: "₹ 7,186" },
    { title: "Morning Departures", price: "₹ 6,805" },
  ];

  const stopOptions = [
    { title: "Non Stop", price: "₹ 6,805" },
    { title: "1 Stop", price: "₹ 6,800" },
  ];

  const departureTimeOptions = [
    {
      time: "Before 6 AM",
      icon: <WiSunrise />,
    },
    {
      time: "6 AM - 12 PM",
      icon: <IoSunnyOutline />,
    },
    {
      time: "12 PM - 6 PM",
      icon: <BsCloudSun />,
    },
    {
      time: "After 6 PM",
      icon: <BsCloudMoon />,
    },
  ];

  const arrivalTimeOptions = [
    {
      time: "Before 6 AM",
      icon: <WiSunrise />,
    },
    {
      time: "6 AM - 12 PM",
      icon: <IoSunnyOutline />,
    },
    {
      time: "12 PM - 6 PM",
      icon: <BsCloudSun />,
    },
    {
      time: "After 6 PM",
      icon: <BsCloudMoon />,
    },
  ];

  const airlineOptions = [
    { title: "Air India", price: "₹ 6,805" },
    { title: "Air India Express", price: "₹ 6,805" },
    { title: "Akasa Air", price: "₹ 8,805" },
    { title: "SpiceJet", price: "₹ 7,928" },
    { title: "Star Air", price: "₹ 10,479" },
    { title: "Vistara", price: "₹ 7,186" },
  ];

  const handleCheckboxChange = (title) => {
    const updatedFilters = selectedFilters.includes(title)
      ? selectedFilters.filter((filter) => filter !== title)
      : [...selectedFilters, title];

    setSelectedFilters(updatedFilters);
  };

  const handlePriceRangeChange = (event) => {
    const newPriceRange = event.target.value.split(",").map(Number);
    setPriceRange(newPriceRange);
  };

  const handleStopChange = (stop) => {
    const updatedStops = selectedStops.includes(stop)
      ? selectedStops.filter((selectedStop) => selectedStop !== stop)
      : [...selectedStops, stop];

    setSelectedStops(updatedStops);
  };

  const handleSelectChange = (option) => {
    setSelectedDepartureTime(option);
  };

  const handleSelectArrivalChange = (option) => {
    setSelectArrivalTime(option);
  };

  const handleAirlineChange = (airline) => {
    const updatedAirlines = selectedAirlines.includes(airline)
      ? selectedAirlines.filter(
        (selectedAirline) => selectedAirline !== airline
      )
      : [...selectedAirlines, airline];

    setSelectedAirlines(updatedAirlines);
  };

  return (
    <aside className={`${styles[`search-flight-sidebar`]} ${showFilters ? styles.visible : styles.hidden}`}>
      <div className={styles.container}>
        <div className={styles.item}>
          <h4>
            Popular Filters{" "}
            <button
              className={styles.close__btn}
              onClick={() => setShowFilters(!showFilters)}
            >
              {showFilters ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="m6 9 6 6 6-6" />
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="m18 15-6-6-6 6" />
                </svg>
              )}
            </button>
          </h4>
          <div className={styles.list}>
            {popularFilters.map((filter) => (
              <div className={styles.option}>
                <label key={filter.title}>
                  <input
                    type="checkbox"
                    checked={selectedFilters.includes(filter.title)}
                    onChange={() => handleCheckboxChange(filter.title)}
                  />
                  {`${filter.title}`}
                </label>

                <span>{`${filter.price}`}</span>
              </div>
            ))}
          </div>
        </div>

        <div className={styles.item}>
          <h4>One Way Price</h4>
          <div className={styles.list}>
            <div className={styles.option}>
              <input
                type="range"
                id="priceRange"
                name="priceRange"
                min={0}
                max={10000}
                step={100}
                value={priceRange.join(",")}
                onChange={handlePriceRangeChange}
                className={styles[`price-range`]}
              />
            </div>
          </div>
        </div>

        <div className={styles.item}>
          <h4>Stops From New Delhi</h4>

          <div className={styles.list}>
            {stopOptions.map((stopOption) => (
              <div className={styles.option}>
                <label key={stopOption.title}>
                  <input
                    type="checkbox"
                    checked={selectedStops.includes(stopOption.title)}
                    onChange={() => handleStopChange(stopOption.title)}
                  />
                  {`${stopOption.title}`}
                </label>
                <span>{`${stopOption.price}`}</span>
              </div>
            ))}
          </div>
        </div>

        <div className={styles.item}>
          <h4>Departure From New Delhi</h4>

          <div className={`${styles.list} ${styles[`select-time`]}`}>
            {departureTimeOptions.map((option) => (
              <div key={option.time} className={styles[`select-time-option`]}>
                <input
                  type="radio"
                  id={option.time}
                  name="departureTime"
                  value={option}
                  checked={selectedDepartureTime === option.time}
                  onChange={() => handleSelectChange(option.time)}
                />
                {option.icon}
                <label htmlFor={option.time}>{option.time}</label>
              </div>
            ))}
          </div>
        </div>

        <div className={styles.item}>
          <h4>Arrival at Bengaluru</h4>

          <div className={`${styles.list} ${styles[`select-time`]}`}>
            {arrivalTimeOptions.map((option) => (
              <div key={option.time} className={styles[`select-time-option`]}>
                <input
                  type="radio"
                  id={option.time}
                  name="departureTime"
                  value={option}
                  checked={selectedDepartureTime === option.time}
                  onChange={() => handleAirlineChange(option.time)}
                />
                {option.icon}
                <label htmlFor={option.time}>{option.time}</label>
              </div>
            ))}
          </div>
        </div>
        <div className={styles.item}>
          <h4>Airlines</h4>

          <div className={styles.list}>
            {airlineOptions.map((airline) => (
              <div className={styles.option} key={airline.title}>
                <label>
                  <input
                    type="checkbox"
                    checked={selectedAirlines.includes(airline.title)}
                    onChange={() => handleAirlineChange(airline.title)}
                  />
                  {`${airline.title}`}
                </label>
                <span>{` ${airline.price}`}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </aside>
  );
};

export default SearchFlightSidebar;
