import styles from "../../styles/Footer.module.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCoffee } from '@fortawesome/free-solid-svg-icons';

const Footer = () => {
  const date = new Date();
  
  return (
    <div className={styles.wrapper}>
      <div className={styles.footerLeft}>
        <p className={styles.title}>SOCIALS</p>
        <div className={styles.socials}>
          <FontAwesomeIcon icon={faCoffee} className={styles.icon} />
          <FontAwesomeIcon icon={faCoffee} className={styles.icon} />
          <FontAwesomeIcon icon={faCoffee} className={styles.icon} />
          <FontAwesomeIcon icon={faCoffee} className={styles.icon} />
        </div>
        <p className={styles.copyright}>© {date.getFullYear()} EnquireQuizClub</p>
      </div>
    </div>
  );
}

export default Footer;
