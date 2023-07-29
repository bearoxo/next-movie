import Image from 'next/image';
import Link from 'next/link';
import { useContext } from 'react';
import { MovieContext } from '../contexts/MovieContext'
import { useRouter } from 'next/router';
import styles from '../styles/components/last-watch.module.css';

import duration from '../../../public/img/duration.svg';
import views from '../../../public/img/views.svg'

export default function LastWatch () {
  const { movies } = useContext(MovieContext)  
  console.log("2...")
  movies.map((movie) => {
    console.log(movie)
  })
  
  return (
      <div className={styles.lastWatch}>
        <div className={styles.title}>
          <h3>New Releases</h3>
          <h5>View more</h5>
        </div>
        <div className={styles.cardContainer}>
          {movies.map((movie) => (
            <div key={movie.Movie_ID} className={styles.cards}>
              <div className={styles.poster}>
                <Image src={movie.Poster} alt={movie.Title} loading="lazy" layout="fill" objectFit="cover" objectPosition="center" />
              </div>
              <div className={styles.overlay}>
                <div className={styles.genre}>{movie.Genre}</div>
                <div className={styles.details}>
                  <div className={styles.duration}>
                    <Image src={duration} alt="Views" height={24} width={24} />
                    {movie.Duration}
                  </div>
                  <div className={styles.views}>
                    <Image src={views} alt="Views" height={24} width={24} />
                    {movie.Views}
                  </div>
                </div>
                <div className={styles.cardTitle}><h3>{movie.Title}</h3></div>
              </div>
            </div>
          ))}
        </div>
      </div>
  )
}