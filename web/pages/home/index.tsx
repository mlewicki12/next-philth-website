
import Link from 'next/link';
import Highlights from 'components/highlights';

import styles from './style.module.scss';

const Home = () => {
  return (
    <div className={styles.homePage}>
      <Highlights />
      <div className={styles.article}>
        <h2 className={styles.title}>An Interview with Karl Roy on his new EP “Toys”</h2>
        <p className={styles.date}>July 24th, 2021</p>
        <p className={styles.content}>
          <span style={{fontWeight: 'bold'}}>Beck:</span> Why don’t we start with telling me a little bit about yourself and your background as a musician?<br /><br />
        </p>
        <Link href='articles'><a className={styles.link}>Read more</a></Link>
      </div>
      <iframe style={{marginTop: 'auto'}}
        src="https://open.spotify.com/embed/playlist/62fIu2JEnJLKIfqVYWDfWT?theme=0" title='playlist' width='100%' height='380' frameBorder='0' allow='encrypted-media'></iframe>
    </div>
  );
}

export default Home;