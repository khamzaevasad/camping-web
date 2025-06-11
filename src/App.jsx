import './App.css';
import Footer from './components/footer/Footer';
import HeroSection from './components/herosection/HeroSection';
import Navbar from './components/navbar/Navbar';
import RecommendSection from './components/recommendSection/RecommendSection';
import Videos from './components/videosSection/Videos';

function App() {
  return (
    <>
      <Navbar />
      <HeroSection />
      <RecommendSection />
      <Videos />
      {/* <Footer /> */}
    </>
  );
}

export default App;
