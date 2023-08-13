import Image from 'next/image';
import { useMovieContext } from '../contexts/MovieContext'
import styles from '../styles/components/last-watch.module.css';
import { icons } from '../utils/data';

export default function LastWatch () {
  const { movies } = useMovieContext();
  return (
      <div className={styles.lastWatch}>
        <div className={styles.title}>
          <h3>New Releases</h3>
          <h5>View more</h5>
        </div>
        <div className={styles.cardContainer}>
          {movies ? movies.map((movie) => (
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
            <p>No data found.</p>
          )}
        </div>
      </div>
  )
}
