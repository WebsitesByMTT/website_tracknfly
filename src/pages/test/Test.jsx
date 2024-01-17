import React, { useEffect, useRef } from 'react'
import styles from './test.module.scss'
import SearchFlightSidebar from '../../components/searchFlightSidebar.jsx/SearchFlightSidebar';
import SearchFlightList from '../../components/searchFlightList/SearchFlightList';

const Test = () => {
    const searchFlight = useRef(null);

    useEffect(() => {
      scrollToComponent(searchFlight.current);
    }, []);

    const scrollToComponent = (element) => {
        if (element) {
          element.scrollIntoView({
            behavior: 'smooth',
            block: 'start',
          });
        }
    };


  return (
    <div className={styles[`search-flight`]} ref={searchFlight}>
        <div className={styles.container}>
            <div className={styles.left}>
                <SearchFlightSidebar/>
            </div>
            <div className={styles.right}>
                <SearchFlightList/>
            </div>
        </div>
    </div>
  )
}

export default Test