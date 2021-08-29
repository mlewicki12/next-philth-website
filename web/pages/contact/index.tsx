
import styles from './style.module.scss';

const ContactPage = () => {
  return (
    <div className={styles.page}>
      <div className={styles.column} style={{textAlign: 'right'}}>
        <h2>Contact</h2>
        <p>Interested in being reviewed or interviewed?</p>
        <p>Want to be added to a playlist or have an interesting idea for an article?</p>
        <p>Want to know how you can get involved?</p>
        <p>We&apos;re always looking for new writers, editors, artists, and more!</p>
        <p>Send us an email!</p>
      </div>

      <div className={styles.column}>
        <h2>Email</h2>
        <p>philthzine@gmail.com</p>

        <h2>Instagram / Facebook / Twitter</h2>
        <p>@philthzine</p>
      </div>
    </div>
  );
}

export default ContactPage;