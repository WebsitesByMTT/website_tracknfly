import React, { useState, useEffect, useRef } from "react";
import { useFlightContext } from "../../utils/FlightContext";
import "./flightDetail.scss";
import { Convert } from "easy-currencies";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const FlightDetail = () => {
  const { flightData } = useFlightContext();
  const [convertedPrices, setConvertedPrices] = useState({});
  const [airportData, setAirportData] = useState({});
  const [loading, setLoading] = useState(true);
  const ref = useRef();
  const navigate = useNavigate();

  const handleRefreshAndNavigate = () => {
    navigate("/");
    window.location.reload();
  };

  if (!flightData) {
    return (
      <div className="no-data">
        <div className="content">
          <p>No flight data available</p>

          <button onClick={handleRefreshAndNavigate}>Search Again</button>
        </div>
      </div>
    );
  }

  console.log(flightData);

  useEffect(() => {
    if (ref.current) {
      ref.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [flightData]);

  const departureDate = new Date(
    flightData.segments[0].legs[0].departureDateTime
  );

  const returnDepartureDate =
    flightData.segments.length > 1
      ? new Date(flightData.segments[1].legs[0].departureDateTime)
      : "";

  // Function to get the day of the week
  const getDayOfWeek = (date) => {
    const daysOfWeek = [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
    ];
    return daysOfWeek[date.getDay()];
  };

  // Function to get the abbreviated month name
  const getMonthAbbreviation = (date) => {
    const monthNames = [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ];
    return monthNames[date.getMonth()];
  };

  const calcualateTotalTime = (segments) => {
    let totalMinutes = 0;

    const departureTime = new Date(segments[0].legs[0].departureDateTime);
    const arrivalTime = new Date(
      segments[0].legs[segments[0].legs.length - 1].arrivalDateTime
    );
    const durationInMilliseconds = arrivalTime - departureTime;
    const durationInMinutes = durationInMilliseconds / (1000 * 60); // Convert to minutes
    totalMinutes += durationInMinutes;

    const hours = Math.floor(totalMinutes / 60);
    const minutes = Math.round(totalMinutes % 60);

    return `${hours}h ${minutes}m`;
    // calculate the total time for each segement
  };
  const calcualateTotalReturnTime = (segments) => {
    let totalMinutes = 0;

    const departureTime = new Date(segments[1].legs[0].departureDateTime);
    const arrivalTime = new Date(
      segments[1].legs[segments[1].legs.length - 1].arrivalDateTime
    );
    const durationInMilliseconds = arrivalTime - departureTime;
    const durationInMinutes = durationInMilliseconds / (1000 * 60); // Convert to minutes
    totalMinutes += durationInMinutes;

    const hours = Math.floor(totalMinutes / 60);
    const minutes = Math.round(totalMinutes % 60);

    return `${hours}h ${minutes}m`;
    // calculate the total time for each segement
  };

  useEffect(() => {
    // Convert prices and store them in state
    const convertPrices = async () => {
      const convertedPricesObj = {};
      if (flightData.purchaseLinks[0].currency !== "USD") {
        const convertedValue = await Convert(
          flightData.purchaseLinks[0].totalPrice
        )
          .from(flightData.purchaseLinks[0].currency)
          .to("USD");
        convertedPricesObj[flightData.purchaseLinks[0].purchaseLinkId] =
          convertedValue.toFixed(2); // Round to 2 decimal places
      }
      setConvertedPrices(convertedPricesObj);
    };

    convertPrices();
  }, []);

  const originAirport = flightData.segments[0].legs[0].originStationCode;

  const destinationAirport =
    flightData.segments[0].legs.length <= 1
      ? flightData.segments[0].legs[0].destinationStationCode
      : flightData.segments[0].legs[flightData.segments[0].legs.length - 1]
          .destinationStationCode;

  const originCityInfo = airportData[originAirport] || {};
  const destinationCityInfo = airportData[destinationAirport] || {};

  // Return Data
  const returnFlightSegments =
    flightData.segments.length > 1 ? flightData.segments[1].legs : "";

  const returnOriginAirport =
    flightData.segments.length > 1
      ? returnFlightSegments[0].originStationCode
      : "";

  const returnDestinationAirport =
    flightData.segments.length > 1
      ? returnFlightSegments[returnFlightSegments.length - 1]
          .destinationStationCode
      : "";
  const returnOriginCityInfo =
    flightData.segments.length > 1
      ? airportData[returnOriginAirport] || {}
      : "";
  const returnDestinationCityInfo =
    flightData.segments.length > 1
      ? airportData[returnDestinationAirport] || {}
      : "";

  // Get City, Airport name
  useEffect(() => {
    const fetchedAirportData = async () => {
      try {
        const response = await axios.get(
          "https://raw.githubusercontent.com/algolia/datasets/master/airports/airports.json"
        );
        const airportMap = {};
        response.data.forEach((airport) => {
          airportMap[airport.iata_code] = {
            city: airport.city,
            airportName: airport.name,
            iata_code: airport.iata_code,
          };
        });
        setAirportData(airportMap);
        setLoading(false);
      } catch (error) {
        console.log(error);
        setLoading(false);
      }
    };

    fetchedAirportData();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }
  return (
    <div className="flight-detail" ref={ref}>
      <div className="container">
        <div className="heading">
          <h2>
            {originCityInfo.city || "Unknown"} -{" "}
            {destinationCityInfo.city || "Unknown"}
          </h2>
          <p className="class">
            {flightData.segments[0].legs[0].classOfService}
          </p>
        </div>

        <div className="content">
          <div className="top">
            <div className="titles">
              <div className="airline-detail">
                <img
                  src={flightData.segments[0].legs[0].operatingCarrier.logoUrl}
                  alt="flight-logo"
                  className="logo"
                />
                <div className="airline-text">
                  <h3>
                    {
                      flightData.segments[0].legs[0].operatingCarrier
                        .displayName
                    }
                  </h3>
                  <p>{flightData.segments[0].legs[0].flightNumber}</p>
                </div>
              </div>
              <div className="detail">
                <p className="date">
                  {getDayOfWeek(departureDate)},{" "}
                  {getMonthAbbreviation(departureDate)}{" "}
                  {departureDate.getDate()}
                </p>
                <p className="class">
                  {flightData.segments[0].legs[0].classOfService}
                </p>
                <p className="stops">
                  {flightData.segments[0].legs.length - 1 > 0
                    ? flightData.segments[0].legs.length - 1 + " Stops"
                    : "Direct"}
                </p>
                <p className="travel-time">
                  {calcualateTotalTime(flightData.segments)}
                </p>
              </div>
            </div>
            <div className="price">
              <button>
                {" "}
                {flightData.purchaseLinks[0].currency !== "USD"
                  ? `$${
                      convertedPrices[
                        flightData.purchaseLinks[0].purchaseLinkId
                      ]
                    }`
                  : new Intl.NumberFormat("en-US", {
                      style: "currency",
                      currency: flightData.purchaseLinks[0].currency,
                      minimumFractionDigits: 2,
                      maximumFractionDigits: 2,
                    }).format(flightData.purchaseLinks[0].totalPrice)}
              </button>
            </div>
          </div>
          <div className="bottom">
            <ul className="time">
              <li className="depart-time">
                {new Date(
                  flightData.segments[0].legs[0].departureDateTime
                ).toLocaleTimeString("en-US", {
                  hour: "2-digit",
                  minute: "2-digit",
                  hour12: false,
                })}
                <p className="code">{originCityInfo.iata_code}</p>
              </li>
              <div className="vertical-line"></div>
              <li className="arival-time">
                {new Date(
                  flightData.segments[0].legs.length <= 0
                    ? flightData.segments[0].legs[0]
                    : flightData.segments[0].legs[
                        flightData.segments[0].legs.length - 1
                      ].arrivalDateTime
                ).toLocaleTimeString("en-US", {
                  hour: "2-digit",
                  minute: "2-digit",
                  hour12: false,
                })}
                <p className="code">{destinationCityInfo.iata_code}</p>
              </li>
            </ul>
            <ul className="place">
              <li className="origin">
                <p className="city">{originCityInfo.city || "Unknown"}</p>
                <p className="airport">
                  {originCityInfo.airportName || "Unknown"}
                </p>
                <p className="date">
                  {getDayOfWeek(departureDate)},{" "}
                  {getMonthAbbreviation(departureDate)}{" "}
                  {departureDate.getDate()}
                </p>
              </li>
              <div className="vertical-line">
                <p className="travel-time">
                  {calcualateTotalTime(flightData.segments)}
                </p>
              </div>
              <li className="destination">
                <p className="city">{destinationCityInfo.city || "Unknown"}</p>
                <p className="airport">
                  {destinationCityInfo.airportName || "Unknown"}
                </p>
              </li>
            </ul>
          </div>

          {/* Return Data  */}
          {flightData.segments.length > 1 && (
            <div className="bottom">
              <ul className="time">
                <li className="depart-time">
                  {new Date(
                    flightData.segments[1].legs[0].departureDateTime
                  ).toLocaleTimeString("en-US", {
                    hour: "2-digit",
                    minute: "2-digit",
                    hour12: false,
                  })}
                  <p className="code">{returnOriginCityInfo.iata_code}</p>
                </li>
                <div className="vertical-line"></div>
                <li className="arival-time">
                  {new Date(
                    flightData.segments[1].legs.length <= 0
                      ? flightData.segments[1].legs[0]
                      : flightData.segments[1].legs[
                          flightData.segments[1].legs.length - 1
                        ].arrivalDateTime
                  ).toLocaleTimeString("en-US", {
                    hour: "2-digit",
                    minute: "2-digit",
                    hour12: false,
                  })}
                  <p className="code">{returnDestinationCityInfo.iata_code}</p>
                </li>
              </ul>
              <ul className="place">
                <li className="origin">
                  <p className="city">
                    {returnOriginCityInfo.city || "Unknown"}
                  </p>
                  <p className="airport">
                    {returnOriginCityInfo.airportName || "Unknown"}
                  </p>
                  <p className="date">
                    {getDayOfWeek(returnDepartureDate)},{" "}
                    {getMonthAbbreviation(returnDepartureDate)}{" "}
                    {returnDepartureDate.getDate()}
                  </p>
                </li>
                <div className="vertical-line">
                  <p className="travel-time">
                    {calcualateTotalReturnTime(flightData.segments)}
                  </p>
                </div>
                <li className="destination">
                  <p className="city">
                    {returnDestinationCityInfo.city || "Unknown"}
                  </p>
                  <p className="airport">
                    {returnDestinationCityInfo.airportName || "Unknown"}
                  </p>
                </li>
              </ul>
            </div>
          )}

          <div className="additonal-info">
            <p>
              For exclusive deals and extra discounts, call our toll-free
              number: <span className="contact">1-800-123-4567</span>. Our
              friendly customer service representatives are available 24/7 to
              assist you. Don't miss out on amazing savings for your next
              flight!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FlightDetail;
