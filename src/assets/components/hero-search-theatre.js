import Image from 'next/image';
import { useState } from 'react';
import styles from '../styles/components/hero-search-theatre.module.css';
import { icons } from '../utils/data';
import { DP_Day } from './date-picker';
import { format } from 'date-fns'
import { useSearchContext } from "../contexts/SearchContext"

export default function HeroSearchTheatre () {
  const [theatreName, setTheatreName] = useState('');
  const [startDate, setStartDate] = useState(new Date());

  const { setMovies } = useSearchContext();

  const handleSearchTheatre = async (e) => {
    e.preventDefault();
    const queryStartDate = format(startDate, 'yyyy-MM-dd');
    const searchQuery = `/api/search-theatre?theatreName=${encodeURIComponent(theatreName)}&queryStartDate=${encodeURIComponent(queryStartDate)}`;
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
  }

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
            <input onChange={(e) => setTheatreName(e.target.value)} type="text" placeholder='Search by theatre...' />
          </div>
          <div className={styles.dpContainer}>
            <Image 
              src={icons.calendar.path}
              alt={icons.calendar.alt}
              height={20}
              width={20}
            />
            <DP_Day startDate={startDate} setStartDate={setStartDate}/>
          </div>
        </form>
      </div>
      <button className={styles.searchBtn} onClick={handleSearchTheatre}>Search</button>
    </>
  )
}
