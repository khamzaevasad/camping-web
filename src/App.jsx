import { useState } from 'react';
import './App.css';
import Blog from './components/blogs/Blog';
import Footer from './components/footer/Footer';
import HeroSection from './components/herosection/HeroSection';
import Navbar from './components/navbar/Navbar';
import RecommendSection from './components/recommendSection/RecommendSection';
import Videos from './components/videosSection/Videos';
import Modal from './components/modal/Modal';
import SignUp from './components/signUp/SignUp';
import RegisterForm from './components/register/RegisterForm';

function App() {
  const [modalType, setModaltype] = useState(null);
  const [showModal, setShowModal] = useState(false);

  // closeModal
  const closeModal = (e) => {
    if (e.target.className === 'modal-backdrop') {
      setShowModal(false);
      setModaltype(null);
    }
  };

  return (
    <>
      <Navbar setModaltype={setModaltype} setShowModal={setShowModal} />
      <HeroSection />
      <RecommendSection />
      <Videos />
      <Blog />
      <Footer />
      {showModal && (
        <Modal closeModal={closeModal}>
          {modalType === 'signup' && (
            <SignUp setModalType={setModaltype} setShowModal={setShowModal} />
          )}
          {modalType === 'register' && (
            <RegisterForm setShowModal={setShowModal} />
          )}
        </Modal>
      )}
    </>
  );
}

export default App;
