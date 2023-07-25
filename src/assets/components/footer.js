import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
// import styles from '../styles/index.module.css';
import styles from '../styles/components/footer.module.css';

import LastWatch from './last-watch'

export default function Footer () {
  const router = useRouter();

  return (
    <footer className={styles.footer}>
      <div className={styles.section1}></div>
      <div className={styles.section2}></div>
      <div className={styles.section3}></div>
      <div className={styles.section4}></div>
    </footer>
  )
}