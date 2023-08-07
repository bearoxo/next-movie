import Image from 'next/image';
import { useContext } from 'react';
import { useSearchContext } from '../contexts/SearchContext'
import styles from '../styles/components/search-result.module.css';
import { icons } from '../utils/data';

export default function SearchResult () {
  const { movies } = useSearchContext();  
  
  console.log("movies in SearchResult:", movies);
  // movies.map((movie) => {
  //   console.log("movie", movie)
  // })
  
  return (
      <div className={styles.lastWatch}>
        <div className={styles.title}>
          <h3>Search Results</h3>
        </div>
        <div className={styles.cardContainer}>
          {movies.length > 0 ? movies.map((movie) => (
            <div key={movie.Movie_ID} className={styles.cards}>
              <div className={styles.poster}>
                <Image src={movie.Poster} alt={movie.Title} loading="lazy" layout="fill" objectFit="cover" objectPosition="center" />
              </div>
              <div className={styles.overlay}>
                <div className={styles.genre}>{movie.Genre}</div>
                <div>
                  <div className={styles.details}>
                    <div className={styles.duration}>
                      <Image src={icons.duration.path} alt={icons.duration.alt} height={24} width={24} />
                      {movie.Duration}
                    </div>
                    <div className={styles.views}>
                      <Image src={icons.views.path} alt={icons.views.alt} height={24} width={24} />
                      {movie.Views}
                    </div>
                  </div>
                  <div className={styles.cardTitle}><h3>{movie.Title}</h3></div>
                </div>
              </div>
            </div>
          )) : (
            <p>No search results found.</p>
          )}
        </div>
      </div>
  )
}