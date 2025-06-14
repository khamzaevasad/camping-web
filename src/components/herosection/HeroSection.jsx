// images
import bg1 from '../assets/bg1.png';
import bg2 from '../assets/bg2.png';
import bg3 from '../assets/bg3.png';
//swiper
import React, { useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay } from 'swiper/modules';
//styles
import 'swiper/css';
import 'swiper/css/navigation';
import './HeroSection.css';

const HeroSection = () => {
  const prevRef = useRef(null);
  const nextRef = useRef(null);

  const images = [bg1, bg2, bg3];

  return (
    <div className="hero-carousel-container">
      <button ref={prevRef} className="custom-swiper-button prev">
        &#8592;
      </button>
      <button ref={nextRef} className="custom-swiper-button next">
        &#8594;
      </button>

      <Swiper
        modules={[Navigation, Autoplay]}
        navigation={{
          prevEl: prevRef.current,
          nextEl: nextRef.current,
        }}
        onInit={(swiper) => {
          swiper.params.navigation.prevEl = prevRef.current;
          swiper.params.navigation.nextEl = nextRef.current;
          swiper.navigation.init();
          swiper.navigation.update();
        }}
        autoplay={{ delay: 4000, disableOnInteraction: false }}
        loop={true}
        className="hero-swiper custom-hero-swiper"
      >
        {images.map((img, index) => (
          <SwiperSlide key={index}>
            <img
              src={img}
              alt={`Slide ${index + 1}`}
              className="carousel-image"
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default HeroSection;
