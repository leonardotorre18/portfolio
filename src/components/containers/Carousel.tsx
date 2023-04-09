import React from 'react'
import { Navigation } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import CardProjects from './CardProjects';
import { LangContext } from '../Providers/LangProvider';
import projectsES from '../lang/es-Carousel.json';
import projectsEN from '../lang/en-Carousel.json';
import useValidateLang from '../hooks/useValidateLang';

export default function Carousel() {

  const lang: any = useValidateLang({
    es: projectsES,
    en: projectsEN
  });

  return (
    <Swiper
      modules={[Navigation]}
      navigation
    >
      { lang.map((data: any) => (

      <SwiperSlide key={data.id}>
        <CardProjects data={data} />
      </SwiperSlide>

      )) }

    </Swiper>
  )
}
