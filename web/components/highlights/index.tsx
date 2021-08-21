
import Image from 'next/image';
import styles from './style.module.scss';

const Highlights = () => {
  return (
    <div className={styles.container}>
      <div className={styles.highlightsContainer}>
        <Image src='/daydrunks.jpg' alt='Daydrunks at Wharf Arts Center (2/28/2020)' width={1142} height={744} objectFit='contain' objectPosition='center top' priority />
        <div className={styles.highlightsOverlay}>
          Daydrunks at Wharf Arts Center (2/28/2020)
        </div>
      </div>
    </div>
  )
}

export default Highlights;