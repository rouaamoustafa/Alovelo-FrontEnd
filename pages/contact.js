import styles from "../styles/Contact.module.css";

export default function Contact() {
  return (
    <div className={styles.container}>
      <h2>HAVE AN EVENT COMING UP?</h2>
      <p>Contact us today to book your tricycle bar experience.</p>

      <form className={styles.form}>
        <div className={styles.formGroup}>
          <input type="text" placeholder="Full Name" className={styles.input} />
          <input type="email" placeholder="Email" className={styles.input} />
        </div>
        <input type="text" placeholder="Message Subject" className={styles.input} />
        <textarea placeholder="Message" className={styles.textarea}></textarea>
        <button type="submit" className={styles.button}>SEND</button>
      </form>

      {/* Footer */}
      <footer className={styles.footer}>
        <div className={styles.footerContent}>
          <div>
            <h3>Navigation</h3>
            <p>Home | About Us | Services | Contact</p>
          </div>
          <div>
            <h3>Quick Action</h3>
            <p>Booking | Contact Us</p>
          </div>
          <div>
            <h3>Platform</h3>
            <p>📷 Instagram | 📘 Facebook | 💬 WhatsApp</p>
          </div>
        </div>
        <p className={styles.copyright}>Copyright © All Rights Reserved</p>
      </footer>
    </div>
  );
}
