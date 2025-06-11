import './App.css';
import CardRecommend from './components/cardRecommend/CardRecommend';
import Footer from './components/footer/Footer';
import HeroSection from './components/herosection/HeroSection';
import Navbar from './components/navbar/Navbar';
import RecommendSection from './components/recommendSection/RecommendSection';

function App() {
  return (
    <>
      <Navbar />
      <HeroSection />
      <RecommendSection />
      {/* <Footer /> */}
    </>
  );
}

export default App;
