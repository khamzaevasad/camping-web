// CampGrid.jsx
import './CampLocation.css';
import CampLocation from './CampLocation';
import campingImage1 from '../assets/campingLocation1.png';
import campingImage2 from '../assets/campingLocation2.png';
import campingImage3 from '../assets/campingLocation3.png'; // Boshqa rasmlaringiz

const campingData = [
  { image: campingImage1, title: 'Lake View Camp', location: 'Lake Tahoe' },
  { image: campingImage2, title: 'Pine Forest Camp', location: 'Seoraksan' },
  { image: campingImage3, title: 'Mountain Camp', location: 'Alps' },
  { image: campingImage1, title: 'Lake View Camp', location: 'Lake Tahoe' },
  { image: campingImage2, title: 'Pine Forest Camp', location: 'Seoraksan' },
  { image: campingImage3, title: 'Mountain Camp', location: 'Alps' },
  { image: campingImage1, title: 'Mountain Camp', location: 'Swiss Alps' },
  { image: campingImage2, title: 'Mountain Camp', location: 'Rocky Mountains' },
  { image: campingImage3, title: 'Mountain Camp', location: 'Tian Shan' },
  { image: campingImage1, title: 'Mountain Camp', location: 'Andes Mountains' },
  { image: campingImage2, title: 'Mountain Camp', location: 'Himalayas' },
  { image: campingImage3, title: 'Mountain Camp', location: 'Altai Mountains' },
];

const CampGrid = () => {
  return (
    <div className="camp-grid">
      {campingData.map((camp, index) => (
        <CampLocation
          key={index}
          image={camp.image}
          title={camp.title}
          location={camp.location}
        />
      ))}
    </div>
  );
};

export default CampGrid;
