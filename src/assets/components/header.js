import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import styles from '../styles/components/header.module.css';
import searchButton from '../../../public/img/search-button.svg';
import profile from '../../../public/img/profile.png'
import { menu } from '../utils/data'

export default function Header () {
  const router = useRouter();

  return (
    <header className={styles.header}>
      <div className={styles.container}>
        
        <div className={styles.logo}>
          <h4>PcariMovie</h4>
        </div>
        
        <div className={styles.menu}>
          {menu.map((item) => (
            <Link href={item.link} key={item.id}>
              <a className={`${styles.menu} ${router.pathname === item.link ? styles.isActive : ''}`}>{item.name}</a>
            </Link>
          ))}
        </div>
        
        <div className={styles.search}>
          <div className={styles.searchButton}>
            <Image 
              src={searchButton}
              alt="Search button"
            />
          </div>
        </div>

        <div className={styles.profile}>
          <div className={styles.profileImage}>
            <Image 
              src={profile}
              alt="Profile image"
              height={48}
              width={48}
            />
          </div>
          <h6>bearoxo</h6>
        </div>
        
      </div>
    </header>
  )
}