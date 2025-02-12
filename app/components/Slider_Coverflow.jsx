import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCoverflow, Pagination, Navigation } from 'swiper/modules';
import Image from "next/image";

import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

const Slider = () => {
  return (
    <div className="slider-container">
      <Swiper
        effect={'coverflow'}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={4}
        initialSlide={1}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: false,
        }}
        pagination={{ clickable: true }}
        navigation={true}
        modules={[EffectCoverflow, Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>
          <div className="slide-image-container">
            <Image 
              src="/images/img1.jpg" 
              alt="Slide 1"
              fill
              style={{ objectFit: 'cover' }}
            />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="slide-image-container">
            <Image 
              src="/images/img2.jpg" 
              alt="Slide 2"
              fill
              style={{ objectFit: 'cover' }}
            />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="slide-image-container">
            <Image 
              src="/images/img3.jpg" 
              alt="Slide 3"
              fill
              style={{ objectFit: 'cover' }}
            />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="slide-image-container">
            <Image 
              src="/images/img4.jpg" 
              alt="Slide 4"
              fill
              style={{ objectFit: 'cover' }}
            />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="slide-image-container">
            <Image 
              src="/images/img5.jpg" 
              alt="Slide 5"
              fill
              style={{ objectFit: 'cover' }}
            />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="slide-image-container">
            <Image 
              src="/images/img6.jpg" 
              alt="Slide 6"
              fill
              style={{ objectFit: 'cover' }}
            />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="slide-image-container">
            <Image 
              src="/images/img7.jpg" 
              alt="Slide 7"
              fill
              style={{ objectFit: 'cover' }}
            />
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Slider;