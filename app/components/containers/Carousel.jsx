import React from 'react';
import { Navigation } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
// import Slider from './Slider';
import templates from '../../api/templates.json';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

export default function Carousel() {
  return (
    <div className="max-w-7xl mx-auto">
      <Swiper
        modules={[Navigation]}
        navigation
      >
        { templates.map(({ id, url, img }) => (
          <SwiperSlide>
            <div className="px-10 md:px-20 py-8 xl:py-20 max-w-5xl mx-auto" key={id}>
              <a
                href={url.demo}
                target="blank"
              >
                <img
                  className="object-cover"
                  src={img}
                  alt={`Template Example ${id}`}
                />
              </a>
            </div>
          </SwiperSlide>
        )) }
      </Swiper>
    </div>
  );
}
