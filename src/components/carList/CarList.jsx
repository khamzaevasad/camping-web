import { campingCars } from '../../data/campingCars';
import CarCard from '../carCard/CarCard';
import './CarList.css';

const CarList = () => {
  return (
    <div className="car-list">
      {campingCars.length > 0 ? (
        campingCars.map((car) => <CarCard key={car.id} car={car} />)
      ) : (
        <p>No cars available.</p>
      )}
    </div>
  );
};

export default CarList;
