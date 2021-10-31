
import Head from 'next/head';
import Image from 'next/image';
import classnames from 'classnames';
import styles from './style.module.scss';

const OrderPage = () => {
  return (
    <>
    <Head>
      <meta name='twitter:card' content='summary' key='twcard' />
      <meta name='twitter:creator' content='philthzine' key='twhandle' />

      <meta property='og:image' content='/order.jpg' key='ogimage' />
      <meta property='og:title' content='Order a copy' key='ogtitle' />
      <meta property='og:site_name' content='Philth Zine' key='ogsitename' />
      <meta property='og:description' content='Documenting the music scene of Philadelphia' key='ogdesc' />
      <meta property='og:bert' content='https://ogbertthenerd.bandcamp.com/' key='ogbert' />
    </Head>

    <div className={styles.page}>
      <div className={styles.wrapper}>
        <Image src='/order.jpg' width={900} height={506} alt='Printed copies of the zine stacked on a record shelf' priority />
        <div className={styles.info}>
          <div className={classnames(styles.right, styles.order)}>
            <h2>Free!</h2>
            <p>If you live in Philadelphia and want a printed copy of Philth, 
              send us an email and we’ll deliver it to you for free! You must 
              be living within the boundaries of Philadelphia County for delivery. 
              If you live in the surrounding area and wish to pick up a copy let us 
              know and when the issue is printed we will set a copy aside!</p>
          </div>

          <div className={classnames(styles.left, styles.order)}>
            <h2>$5</h2>
            <p>If you live outside of the Philadelphia area and wish to own a physical 
              copy we request $5 for shipping and packaging. Please send us an email 
              with your address and name. We will ship anywhere in the US or outside, 
              however, depending on location, international prices might increase.</p>
          </div>

        </div>
        <p>Email philthzine@gmail.com for a physical copy</p>
      </div>
    </div>
    </>
  );
};

export default OrderPage;