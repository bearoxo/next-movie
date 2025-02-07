import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import styles from '../styles/components/header.module.css';
import { header } from '../utils/data'

export default function Header () {
  const menu = header.menu
  const search = header.search
  const profile = header.profile
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
          <div className={`${styles.searchButton} ${router.pathname === search.link ? styles.isActiveIcon : ''}`}>
            <Link href={search.link} key={search.id}>
              <a>
                <Image 
                  src={search.icon}
                  alt="Search button"
                  height={24}
                  width={24}
                />
              </a>
            </Link>
          </div>  
        </div>

        <div className={styles.profile}>
          <div className={styles.profileImage}>
            <Link href={profile.link} key={profile.id}>
              <a>
                <Image 
                  src={profile.icon}
                  alt="Profile image"
                  height={48}
                  width={48}
                />
              </a>
            </Link>
          </div>
          <h6>bearoxo</h6>
        </div>
        
      </div>
    </header>
  )
}