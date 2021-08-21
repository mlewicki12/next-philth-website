
import Link from 'next/link';
import styles from './style.module.scss';
import RouterLink from 'components/router-link';

const Navigation = () => {
  return (
    <nav className={styles.nav}>
      <Link href='/home'>
        <a className={styles.logo}>
          Philth Zine
        </a>
      </Link>
      <div className={styles.links}>
        <RouterLink href='/about'>About</RouterLink>
        <RouterLink href='/articles'>Articles</RouterLink>
        <RouterLink href='/reviews'>Reviews</RouterLink>
        <RouterLink href='/order'>Order Physical</RouterLink>
        <RouterLink href='/contact'>Contact</RouterLink>
      </div>
    </nav>
  );
}

export default Navigation;