import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import styles from '../styles/components/last-watch.module.css';

export default function LastWatch () {
  const router = useRouter();

  return (
    <div className={styles.lastWatch}>
      <div className={styles.title}>
        <h3>New Releases</h3>
        <h5>View more</h5>
      </div>
      <div className={styles.cardContainer}>
        <div className={styles.cards}></div>
        <div className={styles.cards}></div>
        <div className={styles.cards}></div>
        <div className={styles.cards}></div>
        <div className={styles.cards}></div>
      </div>
    </div>
  )
}