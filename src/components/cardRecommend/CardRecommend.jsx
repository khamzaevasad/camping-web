//style
import './CardRecommend.css';
import recomCar from '../assets/recom-car.png';

const CardRecommend = () => {
  return (
    <div className="recommend-card-con">
      <div className="card-con">
        <img src={recomCar} alt="recom-car" />
        <p>Knaus</p>
      </div>
      <div className="card-items">
        <button>Discover the range</button>
        <p>Choose a model</p>
      </div>
    </div>
  );
};

export default CardRecommend;
