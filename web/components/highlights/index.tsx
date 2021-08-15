
import styles from './style.module.scss';

const Highlights = () => {
  return (
    <div className={styles.container}>
      <div className={styles.highlightsContainer}>
        <img
          src='daydrunks.jpg'
          alt='Daydrunks at Wharf Arts Center (2/28/2020)'
        />
        <div className={styles.highlightsOverlay}>
          Daydrunks at Wharf Arts Center (2/28/2020)
        </div>
      </div>
    </div>
  )
}

export default Highlights;