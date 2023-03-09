import React from 'react'
import { Navigation } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import CardProjects from './CardProjects';

export default function Carousel() {
  return (
    <Swiper
      modules={[Navigation]}
      navigation
    >
      <SwiperSlide>
        <CardProjects />
      </SwiperSlide>
      <SwiperSlide>
        <CardProjects />
      </SwiperSlide>
      <SwiperSlide>
        <CardProjects />
      </SwiperSlide>
      <SwiperSlide>
        <CardProjects />
      </SwiperSlide>

    </Swiper>
  )
}
