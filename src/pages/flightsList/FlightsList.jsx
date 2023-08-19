import React, { useEffect, useRef, useState } from "react";
import "./flightsList.scss";
import { Link, useLocation } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { Convert } from "easy-currencies";
import { useFlightContext } from "../../utils/FlightContext";

const FlightsList = () => {
  const { setFlightData } = useFlightContext();

  const location = useLocation();
  const fetchedData = location.state?.data?.flights || [];

  const firstListItemRef = useRef(null);
  const navigate = useNavigate();

  // Define the state for convertedPrices
  const [convertedPrices, setConvertedPrices] = useState({});

  useEffect(() => {
    if (firstListItemRef.current) {
      firstListItemRef.current.scrollIntoView({ behavior: "smooth" });
    }
    console.log("data : ", fetchedData);
  }, [fetchedData]);

  const calcualateTotalTime = (segments) => {
    let totalMinutes = 0;

    segments.forEach((segment) => {
      const departureTime = new Date(segment.legs[0].departureDateTime);
      const arrivalTime = new Date(
        segment.legs[segment.legs.length - 1].arrivalDateTime
      );
      const durationInMilliseconds = arrivalTime - departureTime;
      const durationInMinutes = durationInMilliseconds / (1000 * 60); // Convert to minutes
      totalMinutes += durationInMinutes;
    });

    const hours = Math.floor(totalMinutes / 60);
    const minutes = Math.round(totalMinutes % 60);

    return `${hours}h ${minutes}m`;
    // calculate the total time for each segement
  };

  useEffect(() => {
    // Convert prices and store them in state
    const convertPrices = async () => {
      const convertedPricesObj = {};
      for (const flight of fetchedData) {
        if (flight.purchaseLinks[0].currency !== "USD") {
          const convertedValue = await Convert(
            flight.purchaseLinks[0].totalPrice
          )
            .from(flight.purchaseLinks[0].currency)
            .to("USD");
          convertedPricesObj[flight.purchaseLinks[0].purchaseLinkId] =
            convertedValue.toFixed(2); // Round to 2 decimal places
        }
      }
      setConvertedPrices(convertedPricesObj);
    };

    if (fetchedData.length > 0) {
      convertPrices();
    }
  }, [fetchedData]);

  const navigateToFlightDetail = (flight) => {
    setFlightData(flight);
    navigate("/flight-detail");
  };

  return (
    <div className="flightsList">
      <div className="container">
        <ul className="list">
          {fetchedData.length > 0 && (
            <li className="item headings" ref={firstListItemRef}>
              <span>Airline</span>
              <span>Departure Time</span>
              <span>Total Time</span>
              <span>Arrival Time</span>
              <span>Price</span>
            </li>
          )}
          {fetchedData.length > 0 ? (
            fetchedData.map((flight, index) => (
              <li className="item" key={index}>
                <div className="name">
                  <img
                    src={flight.segments[0].legs[0].operatingCarrier.logoUrl}
                    alt="flight-logo"
                    className="logo"
                  />
                  <div className="text">
                    <h2 className="title">
                      {flight.segments[0].legs[0].operatingCarrier.displayName}
                    </h2>
                    <p className="cabinType">
                      {flight.segments[0].legs[0].classOfService}
                    </p>
                  </div>
                </div>
                <div className="time">
                  <span>
                    {new Date(
                      flight.segments[0].legs[0].departureDateTime
                    ).toLocaleTimeString("en-US", {
                      hour: "2-digit",
                      minute: "2-digit",
                      hour12: false,
                    })}
                  </span>
                  <p>
                    {new Date(
                      flight.segments[0].legs[0].departureDateTime
                    ).toLocaleDateString("en-US", {
                      year: "numeric",
                      month: "2-digit",
                      day: "2-digit",
                    })}
                  </p>
                  <p>{flight.segments[0].legs[0].originStationCode}</p>
                </div>
                <div className="time">
                  <span className="total-time"> {calcualateTotalTime(flight.segments)}</span>
                  <div className="line"></div>
                  <p>
                    {flight.segments[0].legs.length - 1 > 0
                      ? flight.segments[0].legs.length - 1 + " Stops"
                      : "Direct"}{" "}
                  </p>
                </div>
                <div className="time">
                  <span>
                    {new Date(
                      flight.segments[0].legs.length <= 0
                        ? flight.segments[0].legs[0]
                        : flight.segments[0].legs[
                            flight.segments[0].legs.length - 1
                          ].arrivalDateTime
                    ).toLocaleTimeString("en-US", {
                      hour: "2-digit",
                      minute: "2-digit",
                      hour12: false,
                    })}
                  </span>
                  <p>
                    {new Date(
                      flight.segments[0].legs.length <= 0
                        ? flight.segments[0].legs[0].arrivalDateTime
                        : flight.segments[0].legs[
                            flight.segments[0].legs.length - 1
                          ].arrivalDateTime
                    ).toLocaleDateString("en-US", {
                      year: "numeric",
                      month: "2-digit",
                      day: "2-digit",
                    })}
                  </p>
                  <p>
                    {flight.segments[0].legs.length <= 1
                      ? flight.segments[0].legs[0].destinationStationCode
                      : flight.segments[0].legs[
                          flight.segments[0].legs.length - 1
                        ].destinationStationCode}
                  </p>
                </div>

                <div
                  className="price"
                  onClick={() => navigateToFlightDetail(flight)}
                >
                  <span className="price-btn">
                    {flight.purchaseLinks[0].currency !== "USD"
                      ? `$${
                          convertedPrices[
                            flight.purchaseLinks[0].purchaseLinkId
                          ]
                        }`
                      : new Intl.NumberFormat("en-US", {
                          style: "currency",
                          currency: flight.purchaseLinks[0].currency,
                          minimumFractionDigits: 2,
                          maximumFractionDigits: 2,
                        }).format(flight.purchaseLinks[0].totalPrice)}
                  </span>

                  <p className="book-now">Book Now</p>
                </div>
              </li>
            ))
          ) : (
            <div className="no-flights" ref={firstListItemRef}>
              <p>Sorry!</p>
              <h4>Flights Not Found</h4>
              <button onClick={() => navigate("/")}>Search Again</button>
            </div>
          )}
        </ul>
      </div>
    </div>
  );
};

export default FlightsList;
