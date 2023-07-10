import styles from "../../styles/Events.module.css";
import Header1 from "./Header1";
import EventContainer from "./EventContainer";

const Events = () => {
  return (
    <div>
        <Header1 title="EVENTS"/>
        <p className={styles.heading}>Some of the best events to look forward to are:</p>
        <div className={styles.wrapper}>
        <EventContainer containerName="Prahelika" imageLink="/enquire.jpg"/>
        <EventContainer containerName="Mela" imageLink="/enquire.jpg"/>
        <EventContainer containerName="Face Off" imageLink="/enquire.jpg"/>
        <EventContainer containerName="India Quiz" imageLink="/enquire.jpg"/>
        <EventContainer containerName="QFlix" imageLink="/enquire.jpg"/>
        <EventContainer containerName="Toon Quiz" imageLink="/enquire.jpg"/>
        <EventContainer containerName="Eco Quest" imageLink="/enquire.jpg"/>
        <EventContainer containerName="Pranav" imageLink="/enquire.jpg"/>
        <EventContainer containerName="Pranav Prashant" imageLink="/enquire.jpg"/>
        </div>
    </div>
  )
}

export default Events