import styles from "../../styles/EventPage.module.css";
import Header1 from "./Header1";
import EventContainer from "./EventContainer";

const EventPage = (props) => {
  return (
    <div>
        {/* <Header1 title={props.title}/> */}
        <Header1 title="REWIND" />
        {/* <p className={styles.description}>{props.description}</p> */}
        <p className={styles.description}>2022 was undoubtedly an eventful year. As the year wraps up, let's take a moment to run through the key events that made the year. Enquire Quiz Club is here with a year rundown through 'Rewind', a 2022 - Themed Quiz. Join us on Instagram at 7pm on Dec 29 and 30 and stand a chance to win cash prizes🏆!Let's Rewind!⏪</p>
        <div className={styles.wrapper}>
        <EventContainer containerName="Rules" imageLink="/enquire.jpg" />
        <EventContainer containerName="Questions" imageLink="/enquire.jpg" />
        <EventContainer containerName="Answers" imageLink="/enquire.jpg" />
        </div>
    </div>
  )
}

export default EventPage