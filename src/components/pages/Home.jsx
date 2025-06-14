import Blog from '../blogs/Blog';
import HeroSection from '../herosection/HeroSection';
import RecommendSection from '../recommendSection/RecommendSection';
import Videos from '../videosSection/Videos';

const Home = () => {
  return (
    <div>
      <HeroSection />
      <RecommendSection />
      <Videos />
      <Blog />
    </div>
  );
};

export default Home;
