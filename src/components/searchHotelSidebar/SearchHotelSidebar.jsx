import React, { useState } from "react";
import styles from "./searchHotelSidebar.module.scss";
import { WiSunrise } from "react-icons/wi";
import { IoSunnyOutline } from "react-icons/io5";
import { BsCloudSun } from "react-icons/bs";
import { BsCloudMoon } from "react-icons/bs";

const SearchHotelSidebar = () => {
  const [showFilters, setShowFilters] = useState(false);

  const [selectedSuggestedForYou, setSelectedSuggestedForYou] = useState([]);
  const [selectPricePerNight, setSelectPricePerNight] = useState([])
  const [selectedUserRating, setSelectedUserRating] = useState([])
  const [selectedPropertyType, setSelectedPropertyType] = useState([])
  const [priceRange, setPriceRange] = useState([0, 30000]);


  const SuggestedForYou = [
    { title: "Last Minute Deals", count: "" },
    { title: "Free Cancellation", count: "517" },
    { title: "Breakfast Included", count: "297" },
    { title: "Breakfast + Lunch/Dinner Included", count: "86" },
    { title: "All Meals Included", count: "8" },
  ];

  const PricePerNight = [
    { title: "₹ 0 - ₹ 1000", count: "151" },
    { title: "₹ 1000 - ₹ 2500", count: "241" },
    { title: "₹ 2500 - ₹ 5500", count: "115" },
    { title: "₹ 5500 - ₹ 8500", count: "25" },
    { title: "₹ 8500 - ₹ 11500", count: "32" },
    { title: "₹ 11500 - ₹ 15000", count: "4" },
    { title: "₹ 15000 - ₹ 30000", count: "3" },
    { title: "₹ 30000+", count: "1" },
  ];

  const StarCategory = [
    { title: "3 Star", count: "280" },
    { title: "4 Star", count: "41" },
    { title: "5 Star", count: "11" },
  ];

  const UserRating =[
    {title : "Excellent: 4.2+", count:"49"},
    {title : "Very Good: 3.5+", count:"227"},
    {title : "Good: 3+", count:"320"},
  ]


  const PropertyType =[
    {title : "Hotel", count:"475"},
    {title : "Homestay", count:"46"},
    {title : "Apartment", count:"23"},
    {title : "Villa", count:"13"},
    {title : "Guest House", count:"13"},
    {title : "Resort", count:"13"},
    {title : "Hostel", count:"2"},
    {title : "Camp", count:"0"},
  ]

  
  const handleSuggestedForYou = (option) => {
    const updatedSuggested = selectedSuggestedForYou.includes(option)
      ? selectedSuggestedForYou.filter((filter) => filter !== option)
      : [...selectedSuggestedForYou, option];

    setSelectedSuggestedForYou(updatedSuggested);
  };


  const handlePricePerNight = (option) => {
    const upatedPricePerNight = selectPricePerNight.includes(option)
      ? selectPricePerNight.filter((filter) => filter !== option)
      : [...selectPricePerNight, option];

    setSelectPricePerNight(upatedPricePerNight);
  };

  const handleUserRating = (option) => {
    const updatedUserRating = selectedUserRating.includes(option)
      ? selectedUserRating.filter((filter) => filter !== option)
      : [...selectedUserRating, option];

    setSelectedUserRating(updatedUserRating);
  };


  const handlePropertyType = (option) => {
    const updatedPropertyType = selectedPropertyType.includes(option)
      ? selectedPropertyType.filter((filter) => filter !== option)
      : [...selectedPropertyType, option];

    setSelectedPropertyType(updatedPropertyType);
  };

  
  const handlePriceRangeChange = (event) => {
    const newPriceRange = event.target.value.split(",").map(Number);
    setPriceRange(newPriceRange);
  };

  return (
    <aside
      className={`${styles[`search-flight-sidebar`]} ${
        showFilters ? styles.visible : styles.hidden
      }`}
    >
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
            {SuggestedForYou.map((option) => (
              <div className={styles.option}>
                <label key={option.title}>
                  <input
                    type="checkbox"
                    checked={selectedSuggestedForYou.includes(option.title)}
                    onChange={() => handleSuggestedForYou(option.title)}
                  />
                  {`${option.title}`}
                </label>

                <span>{`(${option.count})`}</span>
              </div>
            ))}
          </div>
        </div>

        <div className={styles.item}>
          <h4>Price per night</h4>
          <div className={styles.list}>
            {PricePerNight.map((option) => (
              <div className={styles.option}>
                <label key={option.title}>
                  <input
                    type="checkbox"
                    checked={selectedSuggestedForYou.includes(option.title)}
                    onChange={() => handleSuggestedForYou(option.title)}
                  />
                  {`${option.title}`}
                </label>

                <span>{`(${option.count})`}</span>
              </div>
            ))}
          </div>
        </div>

        <div className={styles.item}>
          <h4>Your Budget</h4>
          <div className={styles.list}>
            <div className={styles.option}>
              <input
                type="range"
                id="priceRange"
                name="priceRange"
                min={0}
                max={30000}
                step={100}
                value={priceRange.join(",")}
                onChange={handlePriceRangeChange}
                className={styles[`price-range`]}
              />
            </div>
          </div>
        </div>

        <div className={styles.item}>
          <h4>Star Category</h4>
          <div className={styles.list}>
            {StarCategory.map((option) => (
              <div className={styles.option}>
                <label key={option.title}>
                  <input
                    type="checkbox"
                    checked={selectPricePerNight.includes(option.title)}
                    onChange={() => handlePricePerNight(option.title)}
                  />
                  {`${option.title}`}
                </label>

                <span>{`(${option.count})`}</span>
              </div>
            ))}
          </div>
        </div>

        <div className={styles.item}>
          <h4>User Rating</h4>
          <div className={styles.list}>
            {UserRating.map((option) => (
              <div className={styles.option}>
                <label key={option.title}>
                  <input
                    type="checkbox"
                    checked={selectedUserRating.includes(option.title)}
                    onChange={() => handleUserRating(option.title)}
                  />
                  {`${option.title}`}
                </label>

                <span>{`(${option.count})`}</span>
              </div>
            ))}
          </div>
        </div>

        <div className={styles.item}>
          <h4>Property Type</h4>
          <div className={styles.list}>
            {PropertyType.map((option) => (
              <div className={styles.option}>
                <label key={option.title}>
                  <input
                    type="checkbox"
                    checked={selectedPropertyType.includes(option.title)}
                    onChange={() => handlePropertyType(option.title)}
                  />
                  {`${option.title}`}
                </label>

                <span>{`(${option.count})`}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </aside>
  );
};

export default SearchHotelSidebar;
