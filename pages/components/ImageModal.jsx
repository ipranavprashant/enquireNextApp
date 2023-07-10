import styles from "../../styles/ImageModal.module.css";

const ImageModal = ({ imageUrl, onClose }) => {
  return (
    <div className={styles.modal} onClick={onClose}>
      <div className={styles.modalContent} onClick={(e) => e.stopPropagation()}>
        <div className={styles.modalImageContainer}>
          <img src={imageUrl} alt="Image" className={styles.image} />
        </div>
      </div>
    </div>
  );
};

export default ImageModal;
