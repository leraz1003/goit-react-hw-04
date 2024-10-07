import Modal from "react-modal";
import s from "./ImageModal.module.css";

const ImageModal = ({ image, isOpen, onClose }) => {
  //   const customStyles = {
  //     content: {
  //       //   top: "50%",
  //       //   left: "50%",
  //       // right: "auto",
  //       // bottom: "auto",
  //       // marginRight: "-50%",
  //       //   transform: "translate(-50%, -50%)",
  //     },
  //   };
  Modal.setAppElement("#root");
  if (!image) return;

  //   function afterOpenModal() {
  //     // references are now sync'd and can be accessed.
  //     subtitle.style.color = "#f00";
  //   }

  return (
    <>
      <Modal
        isOpen={isOpen}
        onRequestClose={onClose}
        // style={customStyles}
        className={s.modalContent}
        overlayClassName={s.modalOverlay}
        // onAfterOpen={afterOpenModal}
      >
        <img
          src={image.regularUrl}
          alt={image.alt_description}
          className={s.modalImage}
        />
        <div className={s.wrap}>
          <p className={s.description}>{image.alt_description}</p>
          <p>❤️ {image.likes}</p>
        </div>
      </Modal>
    </>
  );
};

export default ImageModal;
