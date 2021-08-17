
import Link from 'next/link';
import * as Routes from 'variables/routes';
import styles from './style.module.scss';
import RouterLink from 'components/router-link';

const Navigation = () => {
  return (
    <nav className={styles.nav}>
      <Link href={Routes.HOME}>
        <a className={styles.logo}>
          Philth Zine
        </a>
      </Link>
      <div className={styles.links}>
        <RouterLink href={Routes.ABOUT}>About</RouterLink>
        <RouterLink href={Routes.ARTICLES}>Articles</RouterLink>
        <RouterLink href={Routes.REVIEWS}>Reviews</RouterLink>
        <RouterLink href={Routes.ORDER}>Order Physical</RouterLink>
        <RouterLink href={Routes.CONTACT}>Contact</RouterLink>
      </div>
    </nav>
  );
}

export default Navigation;