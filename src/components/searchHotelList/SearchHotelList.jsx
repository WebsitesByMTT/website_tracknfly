import React, { useState } from "react";
import styles from "./searchHotelList.module.scss";

const hotels = [
  {
    name: "Luxury Oasis Hotel",
    location: "City Center, Example City",
    rating: 4.8,
    numberOfRatings: 120,
    coupleFriendly: true,
    numberOfRooms: 150,
    price: "$200",
    facilities: {
      bookWithZeroPayment: true,
      freeCancellationTillCheckIn: true,
      breakfastIncluded: true,
      exclusiveDiscount: "Exclusive offer on SBI credit card. Get INR 307 off.",
    },
  },
  {
    name: "Seaside Retreat Resort",
    location: "Oceanfront, Sample Town",
    rating: 4.5,
    numberOfRatings: 90,
    coupleFriendly: true,
    numberOfRooms: 200,
    price: "$180",
    facilities: {
      bookWithZeroPayment: true,
      freeCancellationTillCheckIn: true,
      breakfastIncluded: true,
      exclusiveDiscount: "Exclusive offer on SBI credit card. Get INR 307 off.",
    },
  },
  {
    name: "Mountain View Lodge",
    location: "Scenic Mountains, Test Valley",
    rating: 4.2,
    numberOfRatings: 60,
    coupleFriendly: false,
    numberOfRooms: 100,
    price: "$150",
    facilities: {
      bookWithZeroPayment: false,
      freeCancellationTillCheckIn: false,
      breakfastIncluded: false,
      exclusiveDiscount: null,
    },
  },
  {
    name: "Cozy Inn Motel",
    location: "Suburb Area, Exampleville",
    rating: 3.9,
    numberOfRatings: 45,
    coupleFriendly: true,
    numberOfRooms: 75,
    price: "$120",
    facilities: {
      bookWithZeroPayment: true,
      freeCancellationTillCheckIn: true,
      breakfastIncluded: false,
      exclusiveDiscount: "Exclusive offer on SBI credit card. Get INR 307 off.",
    },
  },
];

const SearchHotelList = () => {
  const getRatingName = (rating) => {
    if (rating >= 4.2) {
      return "Excellent";
    } else if (rating >= 3.5) {
      return "Very Good";
    } else if (rating >= 3) {
      return "Good";
    } else {
      return "Below Good";
    }
  };
  return (
    <section className={styles[`search-flight-list`]}>
      <div className={styles.container}>
        <h3 className={styles.title}>Flights from New Delhi to Bengaluru</h3>

        <div className={styles.content}>
          <ul>
            {hotels.map((hotel, index) => (
              <li className={styles.list} key={index}>
                <div className={styles[`list-top`]}>
                  <div className={styles.left}>
                    <div className={styles.images}>
                      <img
                        src="https://ramadalucknow.com/wp-content/uploads/2023/02/lucknow-hotel-room-near-me-Twin-Bed-room-booking.jpg"
                        alt={hotel.name}
                      />
                    </div>
                    <div className={styles.details}>
                      <div className={styles.top}>
                        <h2 className={styles.name}>{hotel.name}</h2>
                        <p className={styles.location}>{hotel.location}</p>
                      </div>
                      {hotel.coupleFriendly && (
                        <div className={styles.middle}>
                          <button>Couple Friendly</button>
                        </div>
                      )}

                      <div className={styles.facilities}>
                          {hotel.facilities.bookWithZeroPayment && (
                            <p>✓ Book with ₹0 Payment</p>
                          )}
                          {hotel.facilities.freeCancellationTillCheckIn && (
                            <p>✓ Free Cancellation till check-in</p>
                          )}

                          {hotel.facilities.breakfastIncluded && (
                            <p>✓ Breakfast Included</p>
                          )}
                      </div>
                    </div>
                  </div>
                  <div className={styles.right}>
                    <div className={styles[`top`]}>
                      <p className={styles.rating}>
                        <span className={styles.rating_title}>
                          {getRatingName(hotel.rating)}
                        </span>
                        <span className={styles.rating__count}>
                          {hotel.rating}
                        </span>
                      </p>
                      <p className={styles[`rating_count`]}>
                        {`(${hotel.numberOfRatings} Ratings) `}
                      </p>
                    </div>

                    <div className={styles.middle}>
                      <div className={styles.price}>
                        <h3>{hotel.price}</h3>
                      </div>
                    </div>

                    <div className={styles.bottom}>
                      <div className={styles.booknow}>
                        <button>Book Now</button>
                      </div>
                    </div>
                  </div>
                </div>

                {hotel.facilities.exclusiveDiscount && (
                  <div className={styles[`list-bottom`]}>
                    <p>{hotel.facilities.exclusiveDiscount}</p>
                  </div>
                )}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default SearchHotelList;
