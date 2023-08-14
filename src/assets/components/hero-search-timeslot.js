import Image from 'next/image';
import { useState } from 'react';
import styles from '../styles/components/hero-search-timeslot.module.css';
import { icons } from '../utils/data';
import { DP_DayTime_Range_Start, DP_DayTime_Range_End } from './date-picker';
import { format } from 'date-fns'
import { useSearchContext } from "../contexts/SearchContext"

export default function HeroSearchTimeslot () {
  const [theatreName, setTheatreName] = useState('');
  const today = new Date()
  const [startTime, setStartTime] = useState(today);
  const tomorrow = today.setDate(today.getDate() + 1);
  const [endTime, setEndTime] = useState(tomorrow);

  const { setMovies } = useSearchContext();
  const baseUrl = process.env.NEXT_PUBLIC_DOMAIN;

  const handleSearchTimeslot = async (e) => {
    e.preventDefault();
    const queryStartTime = format(startTime, 'yyyy-MM-dd hh:mm:ss')
    const queryEndTime = format(endTime, 'yyyy-MM-dd hh:mm:ss')
    const searchQuery = `${baseUrl}/api/search-timeslot?theatreName=${encodeURIComponent(theatreName)}&queryStartTime=${encodeURIComponent(queryStartTime)}&queryEndTime=${encodeURIComponent(queryEndTime)}`;
    try {
      // Call the server-side function to fetch data from the API
      console.log("Fetching searchQuery...", searchQuery);
      const response = await fetch(searchQuery);
      const data = await response.json();
      setMovies(data)
      console.log("Fetched data:", data)
    } catch (error) {
      console.error(`Error fetching movies: ${error.message}`);
    }
  };

  return (
    <>
      <div>
        <form className={styles.searchForm}>
          <div className={styles.searchBox}>
            <div style={{ filter: 'invert(1)' }}>
              <Image 
                src={icons.search.path}
                alt={icons.search.alt}
                height={20}
                width={20}
              />
            </div>
            <input onChange={(e) => setTheatreName(e.target.value)} type="text" placeholder='Theatre name...' />
          </div>
          <div>
            <div className={styles.dpContainer}>
              <Image 
                src={icons.calendar.path}
                alt={icons.calendar.alt}
                height={20}
                width={20}
              />
              <div className={styles.datePicker}>
                <DP_DayTime_Range_Start startTime={startTime} setStartTime={setStartTime} />
              </div>
            </div>
            <div className={styles.dpContainer}>
              <Image 
                src={icons.calendar.path}
                alt={icons.calendar.alt}
                height={20}
                width={20}
              />
              <div className={styles.datePicker}>
                <DP_DayTime_Range_End endTime={endTime} setEndTime={setEndTime} />
              </div>
            </div>
          </div>
        </form>
      </div>
      <button className={styles.searchBtn} onClick={handleSearchTimeslot}>Search</button>
    </>
  )
}