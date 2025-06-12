import './Modal.css';

const Modal = ({ children, closeModal }) => {
  return (
    <div onClick={closeModal} className="modal-backdrop">
      <div className="modal" onClick={(e) => e.stopPropagation()}>
        {children}
      </div>
    </div>
  );
};

export default Modal;
