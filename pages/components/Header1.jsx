import styles from "../../styles/Header1.module.css";
import Image from "next/image";
import LogoHeader1 from "../../public/LogoHeader1.png";

const Header1 = (props) => {
  return (
    <div>
        <div className={styles.wrapper}>
        <Image src={LogoHeader1} alt="EnquireQuizClub.png"/>
        <p className={styles.events}><u>{props.title}</u></p>
        </div>
        <div></div>
    </div>
  )
}

export default Header1