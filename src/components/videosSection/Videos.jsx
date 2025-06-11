import './Videos.css';
import car1 from '../assets/vcar1.png';
import car2 from '../assets/vcar2.png';
import car3 from '../assets/vcar3.png';
import car4 from '../assets/vcar4.png';
import Modal from '../modal/Modal';
import { useState } from 'react';
import { FaTimes, FaPlay } from 'react-icons/fa';

const Videos = () => {
  const [showModal, setShowModal] = useState(false);
  const closeModal = (e) => {
    if (e.target.className === 'modal-backdrop') setShowModal(false);
  };

  return (
    <div className="videos-container">
      <h2 className="main-heading">Videos</h2>
      <div className="videos">
        <div onClick={() => setShowModal(true)} className="video-thumb">
          <img src={car1} alt="car" />
          <FaPlay className="play-icon" />
        </div>
        <div onClick={() => setShowModal(true)} className="video-thumb">
          <img src={car2} alt="car" />
          <FaPlay className="play-icon" />
        </div>
        <div onClick={() => setShowModal(true)} className="video-thumb">
          <img src={car3} alt="car" />
          <FaPlay className="play-icon" />
        </div>
        <div onClick={() => setShowModal(true)} className="video-thumb">
          <img src={car4} alt="car" />
          <FaPlay className="play-icon" />
        </div>
      </div>
      <div className="videos">
        <div onClick={() => setShowModal(true)} className="video-thumb">
          <img src={car1} alt="car" />
          <FaPlay className="play-icon" />
        </div>
        <div onClick={() => setShowModal(true)} className="video-thumb">
          <img src={car2} alt="car" />
          <FaPlay className="play-icon" />
        </div>
        <div onClick={() => setShowModal(true)} className="video-thumb">
          <img src={car3} alt="car" />
          <FaPlay className="play-icon" />
        </div>
        <div onClick={() => setShowModal(true)} className="video-thumb">
          <img src={car4} alt="car" />
          <FaPlay className="play-icon" />
        </div>
      </div>

      {showModal && (
        <Modal closeModal={closeModal}>
          <div className="video-name">
            <p>Name of the video</p>
            <button onClick={() => setShowModal(false)}>
              <FaTimes style={{ fontSize: '20px' }} />
            </button>
          </div>
          <div className=" video-con">
            <iframe
              src="https://www.youtube.com/embed/MwylcbyOiMw?si=OuRObv4mlrMAlUyo"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerpolicy="strict-origin-when-cross-origin"
              allowfullscreen
            ></iframe>
          </div>
        </Modal>
      )}
    </div>
  );
};

export default Videos;
