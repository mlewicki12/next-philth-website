
import Link from 'next/link';
import * as Routes from 'constants/routes';
import styles from './style.module.scss';

const Navigation = () => {
  return (
    <nav className={styles.nav}>
      <Link href={Routes.HOME}>
        <a className={styles.logo}>
          Philth Zine
        </a>
      </Link>
      <div className={styles.links}>
        <Link href={Routes.ABOUT}><a>About</a></Link>
        <Link href={Routes.ARTICLES}><a>Articles</a></Link>
        <Link href={Routes.REVIEWS}><a>Reviews</a></Link>
        <Link href={Routes.ORDER}><a>Order Physical</a></Link>
        <Link href={Routes.CONTACT}><a>Contact</a></Link>
      </div>
    </nav>
  );
}

export default Navigation;