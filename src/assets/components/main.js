import styles from '../styles/components/main.module.css';

export default function Main ({ children }) {
  return (
    <main className={styles.main}>
      {children}
    </main>
  )
}