import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import styles from '../styles/components/last-watch.module.css';

export default function LastWatch () {
  const router = useRouter();

  return (
    <div className={styles.lastWatch}>
      <h2>New Releases</h2>
      <h3>View more</h3>
      <div className={styles.grid}>
        <div className={styles.cards}></div>
      </div>
    </div>
  )
}