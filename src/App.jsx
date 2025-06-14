import { useState } from 'react';
import './App.css';
import Navbar from './components/navbar/Navbar';
import Modal from './components/modal/Modal';
import SignUp from './components/signUp/SignUp';
import RegisterForm from './components/register/RegisterForm';
import { Route, Routes } from 'react-router-dom';
import Home from './components/pages/Home';
import Caravan from './components/pages/Caravan';
import Tuning from './components/pages/Tuning';
import Motor from './components/pages/Motor';
import UsedCar from './components/pages/UsedCar';
import CampingPlace from './components/pages/CampingPlace';
import Footer from './components/footer/Footer';

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
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/motor" element={<Motor />} />
        <Route path="/caravan" element={<Caravan />} />
        <Route path="/tuning" element={<Tuning />} />
        <Route path="/usedcar" element={<UsedCar />} />
        <Route path="/campingplase" element={<CampingPlace />} />
      </Routes>
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
