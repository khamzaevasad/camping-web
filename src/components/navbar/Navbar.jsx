import './Navbar.css';
import navBottomIcon from '../assets/navbottom.svg'; // svg faylingiz src/components/navbar ichida bo'lishi kerak
import { FaShoppingCart, FaUser } from 'react-icons/fa';
import Modal from '../modal/Modal';
import { useState } from 'react';
import SignUp from '../signUp/SignUp';

const Navbar = () => {
  const [showModal, setShowmodal] = useState(false);

  const handleUser = () => {
    setShowmodal(true);
  };

  return (
    <nav className="navbar">
      <div className="navbar-container ">
        <div className="nav-left">
          <h3 className="logo">Camper</h3>
          <div className="nav-item ">
            Motor <img src={navBottomIcon} alt="dropdown" />
          </div>
          <div className="nav-item">
            Caravan <img src={navBottomIcon} alt="dropdown" />
          </div>
          <div className="nav-item">
            Tuning <img src={navBottomIcon} alt="dropdown" />
          </div>
          <div className="nav-item">
            Used Car <img src={navBottomIcon} alt="dropdown" />
          </div>
          <div className="nav-item">Camping Place</div>
        </div>

        <div className="nav-right">
          <FaShoppingCart className="icon" />
          <FaUser onClick={handleUser} className="icon" />
          <div className="nav-item">
            En <img src={navBottomIcon} alt="dropdown" />
          </div>
        </div>
      </div>
      {showModal && (
        <Modal setShowmodal={setShowmodal}>
          <SignUp setShowmodal={setShowmodal} />
        </Modal>
      )}
    </nav>
  );
};

export default Navbar;
