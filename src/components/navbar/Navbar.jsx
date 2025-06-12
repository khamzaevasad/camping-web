import './Navbar.css';
import navBottomIcon from '../assets/navbottom.svg'; // svg faylingiz src/components/navbar ichida bo'lishi kerak
import { FaShoppingCart, FaUser } from 'react-icons/fa';

const Navbar = ({ setModaltype, setShowModal }) => {
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
          <FaUser
            onClick={() => {
              console.log('iconClick');
              setModaltype('signup');
              setShowModal(true);
            }}
            className="icon"
          />
          <div className="nav-item">
            En <img src={navBottomIcon} alt="dropdown" />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
