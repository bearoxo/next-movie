import Image from 'next/image';
import styles from '../styles/components/footer.module.css';
import newsletterButton from '../../../public/img/newsletter-button.svg'
import { footer } from '../utils/data'

export default function Footer () {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>

        <div className={styles.left}>

          <div className={styles.logo}>
            <h2>PcariMovie</h2>
          </div>

          <p>Lorem ipsum dolor sit amet, consec tetur adipis cing elit, sed do eiusmod tempor incididunt ut labore et.</p>
         
          <div className={styles.newsletter}>
            <h6>Join Newsletters</h6>
            <div className={styles.input}>
  						<input type="text" placeholder="Insert your mail here"/>
              <button>
                <Image src={newsletterButton} alt="Newsletter button" width={48} height={48} />
              </button>
            </div>
          </div>

        </div>

        <div className={styles.right}>
          <div className={styles.menu}>
            {footer.menu.map((item) => {
              return (
                <div className={styles.menuItem} key={item.id}>
                  <h6>{item.name}</h6>
									<div>
										{item.links.map((item) => {
                      return <p key={item.id}>{item.name}</p>;
										})}
									</div>
                </div>
              )
            })}
          </div>

          <div className={styles.contacts}>
              {footer.contacts.map((item) => {
                return (
                  <div className={styles.contactItem} key={item.id}>
                    <div className={styles.contactIcon} key={item.id}>
                      <Image src={item.icon} alt={item.alt} width={24} height={24}/>
                    </div>
                    <p>{item.text}</p>
                  </div>
                )
              })}
          </div>

        </div>

      </div>
    </footer>
  )
}