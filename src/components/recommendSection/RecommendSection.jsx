// style
import 'swiper/css/navigation';
import './RecommendSection.css';
import 'swiper/css/pagination'; //
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';

import CardRecommend from '../cardRecommend/CardRecommend';

const RecommendSection = () => {
  const cards = [1, 2, 3, 4, 5]; // Demo uchun
  return (
    <section className="recommend-section">
      <h2 className="main-heading">Recommend</h2>
      <Swiper
        modules={[Navigation, Autoplay, Pagination]}
        navigation
        pagination={{ clickable: true }}
        autoplay={{ delay: 4000, disableOnInteraction: false }}
        loop={true}
        spaceBetween={20}
        slidesPerView={4} // ekran o'lchamiga qarab o'zgaruvchi qilsang ham bo'ladi
        className="recommend-swiper"
      >
        {cards.map((_, index) => (
          <SwiperSlide key={index}>
            <CardRecommend />
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default RecommendSection;
