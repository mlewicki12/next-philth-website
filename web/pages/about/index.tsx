
import { loadGetInitialProps } from 'next/dist/next-server/lib/utils';
import Image from 'next/image';
import styles from './style.module.scss';

const AboutPage = () => {
  return (
    <div className={styles.page}>
      <div className={styles.wrapper}>
        <div className={styles.info}>
          <Image src='/logo.png' className={styles.logo} alt='Philth Zine logo'
            width={273} height={242} />
        </div>

        <div className={styles.info}>
          <h2>About</h2>
          <p>Like any music community the Philadelphia DIY community has shifted and changed since my arrival on the scene over eight years ago, 
            but what hasn’t changed is the attitude of the people involved and the community it builds. 
            Started as a creative thesis project for my senior year of college, Philth is inspired by MaximumRocknRoll, 
            The Riot Grrrl movement, the D.C. punk archives, and The Bob (a fantastic Punk zine from Philadelphia in the 90’s). 
            After reading two other interesting books on my own, Larry Livermore’s How to Ruin a Record Label and Going Underground: 
            American Punk: 1979-1999, I was really intrigued and influenced by the energy and motivation of the late 80’s and early 90’s 
            punk scene, so this zine reflects that.</p>

          <p>Moving forward, when I started this project, I had a clear vision on what I wanted. 
            Recently, down in Delaware they’ve been making a scene report zine called Disturbance that’s been absolutely fantastic. 
            It includes upcoming shows, album/ep releases, ads for local record stores, band profiles, etc…</p>

          <p>Currently, the DIY community here has a few great zines but I wanted to contribute in a new and unique way.</p>

          <p>Philth is a bi-monthly scene report containing insightful articles, upcoming gig calendars, 
            release reviews, playlists, and local profiles of bands, venues, and labels.</p>

          <p>-Beck</p> 
        </div>
      </div>
    </div>
  )
}

export default AboutPage;