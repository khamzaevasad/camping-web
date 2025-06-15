import CampGrid from '../campLocation/CampGrid';
import CampLocation from '../campLocation/CampLocation';
import './CampingPlace.css';
const CampingPlace = () => {
  return (
    <div>
      <div className="camping-places">
        <div className="camping-item">
          <p>Home / Camping place</p>
          <h2>Camping places</h2>
        </div>
      </div>
      <CampGrid />
    </div>
  );
};

export default CampingPlace;
