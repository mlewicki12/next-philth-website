
import Image from 'next/image';
import Head from 'next/head';
import classnames from 'classnames';
import styles from 'pages/order/style.module.scss';

const ContactPage = () => {
  return (
    <>
    <Head>
      <meta name='twitter:card' content='summary' key='twcard' />
      <meta name='twitter:creator' content='philthzine' key='twhandle' />

      <meta property='og:image' content='/contact.jpg' key='ogimage' />
      <meta property='og:title' content='Contact us' key='ogtitle' />
      <meta property='og:site_name' content='Philth Zine' key='ogsitename' />
      <meta property='og:description' content='Documenting the music scene of Philadelphia' key='ogdesc' />
      <meta property='og:bert' content='https://ogbertthenerd.bandcamp.com/' key='ogbert' />
    </Head>

    <div className={styles.page}>
      <div className={styles.wrapper}>
        <Image src='/contact.jpg' width={900} height={366} alt={`Stylized image with the text 'Get in Touch'`} priority />
        <div className={styles.info}>
          <div className={classnames(styles.right, styles.order)}>
            <h2>Contact</h2>
            <p>Interested in being reviewed or interviewed?</p>
            <p>Want to be added to a playlist or have an interesting idea for an article?</p>
            <p>Want to know how you can get involved?</p>
            <p>We&apos;re always looking for new writers, editors, artists, and more!</p>
            <p>Send us an email!</p>
          </div>

          <div className={classnames(styles.left, styles.order)}>
            <h2>Email / Social media</h2>
            <p>philthzine@gmail.com / @philthzine</p>
          </div>
        </div>
      </div>
    </div>
    </>
  );
}

export default ContactPage;