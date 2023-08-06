import Image from 'next/image';
import { useState, useContext } from 'react';
import styles from '../styles/components/hero-search-theatre.module.css';
import { icons } from '../utils/data';
import { DP_Day } from './date-picker';
import { format } from 'date-fns'
import { SearchContext, SearchProvider, useSearchContext } from "../contexts/SearchContext"

export default function HeroSearchTheatre () {
  const {updateSearchQuery} = useSearchContext();
  const [search, setSearch] = useState('');
  const [startDate, setStartDate] = useState(new Date());

  const handleSearchTheatre = (e) => {
    e.preventDefault();
    const url = process.env.NEXT_PUBLIC_PSTMN_MOCK_API;
    const queryStartDate = format(startDate, 'yyyy-MM-dd');
    const queryString = `?theater_name=${encodeURIComponent(search)}&d_date=${encodeURIComponent(queryStartDate)}`;
    const searchUrl = `${url}/specific_movie_theater${queryString}`;
    updateSearchQuery(searchUrl);
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
            <input onChange={(e) => setSearch(e.target.value)} type="text" placeholder='Search by theatre...' />
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
