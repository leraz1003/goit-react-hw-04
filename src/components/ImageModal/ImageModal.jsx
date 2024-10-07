import Modal from "react-modal";
import s from "./ImageModal.module.css";

const ImageModal = ({ image, isOpen, onClose }) => {
  const customStyles = {
    content: {
      top: "50%",
      left: "50%",
      right: "auto",
      bottom: "auto",
      marginRight: "-50%",
      transform: "translate(-50%, -50%)",
    },
  };
  Modal.setAppElement("#root");
  if (!image) return;

  return (
    <>
      <Modal
        isOpen={isOpen}
        onRequestClose={onClose}
        style={customStyles}
        className={s.modalContent}
        overlayClassName={s.modalOverlay}
      >
        <img
          src={image.regularUrl}
          alt={image.alt_description}
          className={s.modalImage}
        />
        <p>{image.alt_description}</p>
        <p>Likes: {image.likes}</p>
        <button onClick={onClose} className={s.closeButton}>
          Close
        </button>
      </Modal>
    </>
  );
};

export default ImageModal;
