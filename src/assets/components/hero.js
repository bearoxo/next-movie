import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import styles from '../styles/components/hero.module.css';
import playButton from '../../../public/img/play-button.svg'

export default function HeroMain () {
  const router = useRouter();

  return (
    <div className={styles.hero}>
      <div className={styles.container}>
        <div className={styles.playBtn}>
          <Image 
            src={playButton}
            alt="Play button"
            height={250}
            width={250}
          />
        </div>
        <div className={styles.content}>
          <h1>Find your movies here!</h1>
          <p>Explore our gallery full of exciting films from all around the globe only your yor entertainments. No hidden charges or disturbing ads.</p>
        </div>
      </div>
    </div>
  )
}