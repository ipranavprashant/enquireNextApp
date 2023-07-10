import { useState } from "react";
import styles from "../../styles/EventContainer.module.css";
import Image from "next/image";
import EventImage from "../../public/enquire.jpg";
import ImageModal from "./ImageModal";

const EventContainer = (props) => {
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);

  const openModal = () => {
    setSelectedImage(EventImage);
    setModalOpen(true);
  };

  const closeModal = () => {
    setSelectedImage(null);
    setModalOpen(false);
  };

  return (
    <div>
      <div className={styles.container}>
        <div className={styles.centering}>
          <Image
            src={props.imageLink}
            alt="Event.png"
            height={200}
            width={200}
            className={styles.image}
            onClick={openModal}
          />
        </div>
        <p className={styles.eventName}>{props.containerName}</p>
      </div>

      {modalOpen && (
        <ImageModal imageUrl="/enquire.jpg" onClose={closeModal} />
      )}
    </div>
  );
};

export default EventContainer;
