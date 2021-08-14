
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

          <span style={{fontWeight: 'bold'}}>Bryce:</span> My name is Bryce Nagy but my stage name is Karl Roy and I've been doing music since I was about 15, when I started learning guitar. I was really into bands like Nirvana and The Smashing Pumpkins, and they made me want to write songs. Especially like Nirvana and Green Day because they wrote such simple songs that made me think I could pull that off. From there I formed my first band when I was a junior in high school and by senior year I was doing solo stuff and creating my own studio, but I didn’t put together anything I really liked until I was 22 when Another Day Another Life came out in December. That’s when I really started figuring out Ableton and recording, but Toys was when I took those ideas and began expanding on it.  
        </p>
        <Link href='articles'><a className={styles.link}>Read more</a></Link>
      </div>
      <iframe style={{marginTop: 'auto'}}
        src="https://open.spotify.com/embed/playlist/62fIu2JEnJLKIfqVYWDfWT?theme=0" title='playlist' width="100%" height="380" frameBorder="0" allowTransparency={true} allow="encrypted-media"></iframe>
    </div>
  );
}

export default Home;