import React from "react";
import styles from "./searchFlightList.module.scss";
import AirlineLogo from "../../assets/airline.jpeg";

const flights = [
  {
    airline: {
      name: "SpiceJet",
      logoUrl:
        "https://logos-world.net/wp-content/uploads/2023/01/SpiceJet-Logo.png",
    },
    flightDetails: {
      flightNumber: "SG 143",
      departureTime: "21:00",
      departureCity: "New Delhi",
      travelTime: "02 h 50 m",
      stopType: "Non stop",
      arrivalTime: "23:50",
      arrivalCity: "Bengaluru",
      price: "₹ 6,510",
      pricePerAdult: "per adult",
    },
    promotion: "Get Rs 150 off using MMTBONUS*",
  },
  {
    airline: {
      name: "IndiGo",
      logoUrl:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/6/69/IndiGo_Airlines_logo.svg/2560px-IndiGo_Airlines_logo.svg.png",
    },
    flightDetails: {
      flightNumber: "6E 302",
      departureTime: "08:30",
      departureCity: "Mumbai",
      travelTime: "02 h 15 m",
      stopType: "Non stop",
      arrivalTime: "10:45",
      arrivalCity: "Delhi",
      price: "₹ 4,920",
      pricePerAdult: "per adult",
    },
    promotion: "Book Now and Save 10%",
  },
  {
    airline: {
      name: "GoAir",
      logoUrl:
        "https://upload.wikimedia.org/wikipedia/commons/8/86/GoAir_Logo.png?20131227121333",
    },
    flightDetails: {
      flightNumber: "G8 271",
      departureTime: "14:15",
      departureCity: "Chennai",
      travelTime: "01 h 50 m",
      stopType: "1 Stop",
      arrivalTime: "16:05",
      arrivalCity: "Kolkata",
      price: "₹ 5,325",
      pricePerAdult: "per adult",
    },
    promotion: "Limited Time Offer: Free Meal",
  },
  {
    airline: {
      name: "AirAsia",
      logoUrl:
        "https://images.squarespace-cdn.com/content/v1/5a5dbe4632601eb31977f947/1629703651716-J8RVOTD1XO3SDINHP2RG/unnamed+%281%29.png",
    },
    flightDetails: {
      flightNumber: "AK 201",
      departureTime: "12:45",
      departureCity: "Bangalore",
      travelTime: "03 h 30 m",
      stopType: "1 Stop",
      arrivalTime: "16:15",
      arrivalCity: "Hyderabad",
      price: "₹ 3,950",
      pricePerAdult: "per adult",
    },
    promotion: "Flash Sale: 20% Off",
  },
  {
    airline: {
      name: "GoAir",
      logoUrl:
        "https://upload.wikimedia.org/wikipedia/commons/8/86/GoAir_Logo.png?20131227121333",
    },
    flightDetails: {
      flightNumber: "G8 502",
      departureTime: "07:00",
      departureCity: "Delhi",
      travelTime: "02 h 40 m",
      stopType: "Non stop",
      arrivalTime: "09:40",
      arrivalCity: "Mumbai",
      price: "₹ 4,750",
      pricePerAdult: "per adult",
    },
    promotion: "Exclusive Deal: Free Seat Selection",
  },

  {
    airline: {
      name: "Air India Express",
      logoUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8d/Air_India_Express_Logo.svg/2560px-Air_India_Express_Logo.svg.png",
    },
    flightDetails: {
      flightNumber: "IX 612",
      departureTime: "18:20",
      departureCity: "Hyderabad",
      travelTime: "02 h 30 m",
      stopType: "1 Stop",
      arrivalTime: "20:50",
      arrivalCity: "Bangalore",
      price: "₹ 5,180",
      pricePerAdult: "per adult",
    },
    promotion: "Family Discount: 15% Off for 4 or more travelers",
  },
  {
    airline: {
      name: "SpiceJet",
      logoUrl:
      "https://logos-world.net/wp-content/uploads/2023/01/SpiceJet-Logo.png",    },
    flightDetails: {
      flightNumber: "SG 542",
      departureTime: "14:00",
      departureCity: "Mumbai",
      travelTime: "02 h 45 m",
      stopType: "Non stop",
      arrivalTime: "16:45",
      arrivalCity: "Delhi",
      price: "₹ 5,690",
      pricePerAdult: "per adult",
    },
    promotion: "Special Offer: Free Priority Boarding",
  },
  {
    airline: {
      name: "AirAsia",
      logoUrl:
      "https://images.squarespace-cdn.com/content/v1/5a5dbe4632601eb31977f947/1629703651716-J8RVOTD1XO3SDINHP2RG/unnamed+%281%29.png",    },
    flightDetails: {
      flightNumber: "AK 101",
      departureTime: "09:30",
      departureCity: "Chennai",
      travelTime: "03 h 10 m",
      stopType: "1 Stop",
      arrivalTime: "12:40",
      arrivalCity: "Kolkata",
      price: "₹ 4,450",
      pricePerAdult: "per adult",
    },
    promotion: "Early Bird Discount: Book 30 days in advance",
  },
  {
    airline: {
      name: "IndiGo",
      logoUrl:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/6/69/IndiGo_Airlines_logo.svg/2560px-IndiGo_Airlines_logo.svg.png",    },
    flightDetails: {
      flightNumber: "6E 401",
      departureTime: "13:15",
      departureCity: "Bangalore",
      travelTime: "02 h 30 m",
      stopType: "Non stop",
      arrivalTime: "15:45",
      arrivalCity: "Hyderabad",
      price: "₹ 4,920",
      pricePerAdult: "per adult",
    },
    promotion: "Frequent Flyer Offer: Earn Double Points",
  },
  {
    airline: {
      name: "GoAir",
      logoUrl:
      "https://upload.wikimedia.org/wikipedia/commons/8/86/GoAir_Logo.png?20131227121333",    },
    flightDetails: {
      flightNumber: "G8 602",
      departureTime: "17:45",
      departureCity: "Delhi",
      travelTime: "02 h 10 m",
      stopType: "Non stop",
      arrivalTime: "19:55",
      arrivalCity: "Mumbai",
      price: "₹ 4,500",
      pricePerAdult: "per adult",
    },
    promotion: "Weekend Special: Flat 15% Off on Saturdays and Sundays",
  },

  {
    airline: {
      name: "Air India Express",
      logoUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8d/Air_India_Express_Logo.svg/2560px-Air_India_Express_Logo.svg.png",    },
    flightDetails: {
      flightNumber: "IX 422",
      departureTime: "11:30",
      departureCity: "Hyderabad",
      travelTime: "03 h 10 m",
      stopType: "1 Stop",
      arrivalTime: "14:40",
      arrivalCity: "Bangalore",
      price: "₹ 5,480",
      pricePerAdult: "per adult",
    },
    promotion: "Student Discount: 20% Off with valid ID",
  },
  // Add more flight entries as needed
];

const SearchFlightList = () => {
  return (
    <section className={styles[`search-flight-list`]}>
      <div className={styles.container}>
        <h3 className={styles.title}>Flights from New Delhi to Bengaluru</h3>

        <div className={styles.content}>
          <ul>
            {flights.map((flight, index) => (
              <li className={styles.list} key={index}>
                <div className={styles.top}>
                  <div className={styles.flight}>
                    <span
                      className={styles.logo}
                      style={{
                        backgroundImage: `url(${flight.airline.logoUrl})`,
                      }}
                    ></span>
                    <div className={styles.title}>
                      <h5>{flight.airline.name}</h5>
                      <p>{flight.flightDetails.flightNumber}</p>
                    </div>
                  </div>
                  <div className={styles[`depart-time`]}>
                    <h6>{flight.flightDetails.departureTime}</h6>
                    <p>{flight.flightDetails.departureCity}</p>
                  </div>
                  <div className={styles[`travel-time`]}>
                    <p className={styles.time}>
                      {flight.flightDetails.travelTime}
                    </p>
                    <p>{flight.flightDetails.stopType}</p>
                  </div>
                  <div className={styles[`arrival-time`]}>
                    <h6>{flight.flightDetails.arrivalTime}</h6>
                    <p>{flight.flightDetails.arrivalCity}</p>
                  </div>
                  <div className={styles.price}>
                    <h6>{flight.flightDetails.price}</h6>
                    <p>{flight.flightDetails.pricePerAdult}</p>
                  </div>
                </div>
                <div className={styles.middle}>
                  <p>{flight.promotion}</p>
                </div>
                <div className={styles.bottom}>
                  <button>View Flight Details</button>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default SearchFlightList;
