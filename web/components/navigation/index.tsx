
import Link from 'next/link';
import { useState } from 'react';
import styles from './style.module.scss';
import RouterLink from 'components/router-link';
import Hamburger from 'components/hamburger';

const Navigation = () => {
  const [open, setOpen] = useState<boolean>(false);

  return (
    <>
      <div className={styles.mobileMenu} style={{height: open ? '100vh' : '0vh'}}>
        <div className={styles.mobileLinks} style={{display: open ? 'flex' : 'none'}}>
          <RouterLink className={styles.link} href='/about'>About</RouterLink>
          <RouterLink className={styles.link} href='/articles'>Articles</RouterLink>
          <RouterLink className={styles.link} href='/reviews'>Reviews</RouterLink>
          <RouterLink className={styles.link} href='/order'>Order Physical</RouterLink>
          <RouterLink className={styles.link} href='/contact'>Contact</RouterLink>
        </div>
      </div>
      <nav className={styles.nav}>
        <Hamburger onClick={() => setOpen(!open)} />
        <Link href='/home'>
          <a className={styles.logo}>
            Philth Zine
          </a>
        </Link>
        <div className={styles.links}>
          <RouterLink className={styles.link} href='/about'>About</RouterLink>
          <RouterLink className={styles.link} href='/articles'>Articles</RouterLink>
          <RouterLink className={styles.link} href='/reviews'>Reviews</RouterLink>
          <RouterLink className={styles.link} href='/order'>Order Physical</RouterLink>
          <RouterLink className={styles.link} href='/contact'>Contact</RouterLink>
        </div>
      </nav>
    </>
  );
}

export default Navigation;