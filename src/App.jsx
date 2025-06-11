import './App.css';
import Blog from './components/blogs/Blog';
import Footer from './components/footer/Footer';
import HeroSection from './components/herosection/HeroSection';
import Navbar from './components/navbar/Navbar';
import RecommendSection from './components/recommendSection/RecommendSection';
import RegisterForm from './components/register/RegisterForm';
import Videos from './components/videosSection/Videos';

function App() {
  return (
    <>
      <Navbar />
      <HeroSection />
      <RecommendSection />
      <Videos />
      <Blog />
      <Footer />
    </>
  );
}

export default App;
