import styles from "../../styles/Hero.module.css";
import Image from "next/image";
import HeroImage from "../../public/heroimage.png";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCoffee } from '@fortawesome/free-solid-svg-icons';

const Hero = () => {
  return (
    <div className={styles.wrapper}>
        <Image src={HeroImage} alt="EnquireQuizClub.png"/>
        <p className={styles.clubName}>Enquire Quiz Club, NIT Calicut</p>
        <p className={styles.motto}>"The official trivia club of NITC"</p>
        <div className={styles.socials}>
            <FontAwesomeIcon icon={faCoffee} className={styles.icon} />
            <FontAwesomeIcon icon={faCoffee} className={styles.icon} />
            <FontAwesomeIcon icon={faCoffee} className={styles.icon} />
            <FontAwesomeIcon icon={faCoffee} className={styles.icon} />
        </div>
        <p>(make sure to checkout our socials!)</p>
    </div>
  )
}

export default Hero