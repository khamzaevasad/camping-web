import './Motor.css';
import SideBar from '../sidebar/SideBar';
import CarList from '../carList/CarList';

const Motor = () => {
  return (
    <>
      <div className="motor-bg">
        <div className="motor-item">
          <p>Home / Motors</p>
          <h3>Our Ranges</h3>
          <h2>Motors</h2>
        </div>
      </div>

      <div className="motor-content">
        <div className="sidebar-wrapper">
          <SideBar />
        </div>

        <div className="car-section">
          <div className="car-controls">
            <span className="car-count">
              Item <b>25,156</b>
            </span>
            <div className="car-filters">
              <label htmlFor="sort">Sort by</label>
              <select id="sort">
                <option value="default">Select</option>
                <option value="price-low">Price: Low to High</option>
                <option value="price-high">Price: High to Low</option>
              </select>
              <select>
                <option>60</option>
                <option>30</option>
              </select>
              <button className="view-icon active">▦</button>
              <button className="view-icon">☰</button>
            </div>
          </div>

          <CarList />
        </div>
      </div>
    </>
  );
};

export default Motor;
