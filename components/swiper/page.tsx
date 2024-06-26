"use client"
import React from 'react';

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css/autoplay';
import 'swiper/css/navigation';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';
import ProductCard from '../products/page'
import './style.css';
import { FreeMode, Pagination } from 'swiper/modules';

export default function App() {
  return (
    <>
      <Swiper
        spaceBetween={50}
        slidesPerView={4}
        onSlideChange={() => console.log('slide change')}
        onSwiper={(swiper) => console.log(swiper)}
        pagination={{
          clickable: true,
        }}
        modules={[FreeMode, Pagination]}
        className="mySwiper "
      >
        <SwiperSlide><ProductCard/></SwiperSlide>
        <SwiperSlide><ProductCard/></SwiperSlide>
        <SwiperSlide><ProductCard/></SwiperSlide>
        <SwiperSlide><ProductCard/></SwiperSlide>
        <SwiperSlide><ProductCard/></SwiperSlide>
        <SwiperSlide><ProductCard/></SwiperSlide>
        <SwiperSlide><ProductCard/></SwiperSlide>
      </Swiper>
    </>
   
  );
}
