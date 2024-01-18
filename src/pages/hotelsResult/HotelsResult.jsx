import React, { useEffect, useRef } from "react";
import styles from "./hotelsResults.module.scss";
import SearchHotelSidebar from "../../components/searchHotelSidebar/SearchHotelSidebar";
import SearchHotelList from "../../components/searchHotelList/SearchHotelList";

const HotelsResult = () => {
  const searchFlight = useRef(null);

  useEffect(() => {
    scrollToComponent(searchFlight.current);
  }, []);

  const scrollToComponent = (element) => {
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };
  return (
    <div className={styles[`search-flight`]} ref={searchFlight}>
      <div className={styles.container}>
        <div className={styles.left}>
          <SearchHotelSidebar />
        </div>
        <div className={styles.right}>
          <SearchHotelList />
        </div>
      </div>
    </div>
  );
};

export default HotelsResult;
