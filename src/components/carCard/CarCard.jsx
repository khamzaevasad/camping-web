import './CarCard.css';
import { Button } from '@mui/material';
import StarIcon from '@mui/icons-material/Star';

const CarCard = ({ car }) => {
  return (
    <div className="car-card">
      <img src={car.image} alt={car.name} className="car-image" />

      <div className="car-top-row">
        <h4 className="car-name">{car.name}</h4>
        <div className="car-rating">
          <StarIcon fontSize="small" style={{ color: 'orange' }} />
          <span>{car.rating || 5.3}</span>
        </div>
      </div>

      <p className="car-brand">{car.brand}</p>

      <h3 className="car-price">{car.price} $</h3>
      <div className="car-buttons">
        <Button variant="outlined" size="small">
          Order
        </Button>
        <Button variant="outlined" size="small">
          Compare
        </Button>
      </div>
    </div>
  );
};

export default CarCard;
