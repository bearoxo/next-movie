import Image from 'next/image';
import { useState } from 'react';
import styles from '../styles/components/hero.module.css';
import { icons } from '../utils/data';
import HeroSearchTheatre from './hero-search-theatre'
import HeroSearchTimeslot from './hero-search-timeslot'

export default function HeroSearch () {
  const [displayTheatre, setDisplayTheatre] = useState(true);

  const toggleDisplay = () => {
    setDisplayTheatre(!displayTheatre);
  };

  return (
    <div className={styles.hero}>
      <div className={styles.container}>
        <div className={styles.playBtn}>
          <Image 
            src={icons.play_btn.path}
            alt={icons.play_btn.alt}
            height={250}
            width={250}
          />
        </div>
        <div className={styles.content}>
          <h3>Search your movies here!</h3>
          {displayTheatre ? <HeroSearchTheatre /> : <HeroSearchTimeslot />}
          <button className={styles.searchToggle} onClick={toggleDisplay}>Search by {displayTheatre ? "timeslot" : "theatre"}</button>
        </div>
      </div>
    </div>
  )
}