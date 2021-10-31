
import Image from 'next/image';
import Head from 'next/head';
import styles from './style.module.scss';

const AboutPage = () => {
  return (
    <>
    <Head>
      <meta name='twitter:card' content='summary' key='twcard' />
      <meta name='twitter:creator' content='philthzine' key='twhandle' />

      <meta property='og:image' content='/logo.png' key='ogimage' />
      <meta property='og:title' content='About' key='ogtitle' />
      <meta property='og:site_name' content='Philth Zine' key='ogsitename' />
      <meta property='og:description' content='Documenting the music scene of Philadelphia' key='ogdesc' />
      <meta property='og:bert' content='https://ogbertthenerd.bandcamp.com/' key='ogbert' />
    </Head>

    <div className={styles.page}>
      <div className={styles.wrapper}>
        <div className={styles.info}>
          <Image src='/logo.png' className={styles.logo} alt='Philth Zine logo'
            width={273} height={242} priority />
        </div>

        <div className={styles.info}>
          <h2>About</h2>
          <p>What started as a college thesis project, focused around creating a physical media outlet for local bands, later would become a full blown, 
            independent, DIY focused, music magazine. Philth is a biannual physical zine and a weekly digital content platform. With an original focus on the 
            Philadelphia music community, Philth has since expanded to explore many other areas around the world; even going as far as California, England, and Poland. 
            Inspired by longstanding punk zine staples such as MaximumRocknRoll, Razor Cake, and Bikini Kill, Philth aims to be an inclusive genre-less publication 
            that uplifts independent voices in the music community.</p>

          <p>The zine focuses around advertising upcoming shows, releasing reviews and interviews from artists and labels, engaging with the local community through 
            events and fundraisers, crafting newly released music playlists, and premiering upcoming albums, music videos, and singles.</p>

          <p>Since its foundation in 2019 we have brought on board many talented writers, editors, and artists who have helped craft an incredible platform that we 
            continue to watch grow today. Our goal and hope is to continue creating worthwhile content that helps connect music lovers to new and exciting projects 
            around the world while also remaining grounded and engaged with the Philadelphia music community.</p>

          <p>- Beck</p> 
        </div>
      </div>
    </div>
    </>
  )
}

export default AboutPage;