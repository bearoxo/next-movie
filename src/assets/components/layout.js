import Header from './header';
import Main from './main';
import Footer from './footer';
import styles from '../styles/components/layout.module.css';

export default function Layout({ children }) {
	return (
		<div className={styles.body}>
      <div className={styles.container}>
        <Header />
        <Main>{children}</Main>
        <Footer />
      </div>
    </div>
	);
}