import './Modal.css';

const Modal = ({ children, closeModal }) => {
  return (
    <div onClick={closeModal} className="modal-backdrop">
      <div className="modal">{children}</div>
    </div>
  );
};

export default Modal;
