import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import {
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
  Autoplay,
  FreeMode,
} from "swiper";

import { SLIDER_LINK } from "./constant";
import * as S from "./styles";

const BrandSlider = () => {
  const renderBrands = () => {
    return SLIDER_LINK?.map((item, i) => {
      return (
        <SwiperSlide key={i} className="swipper_wraper">
          <div className="ratio_img">
            <img src={item.path} alt="" />
          </div>
        </SwiperSlide>
      );
    });
  };
  return (
    <S.BrandSlider>
      <Swiper
        modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay, FreeMode]}
        loop={true}
        spaceBetween={30}
        speed={1500}
        freeMode={true}
        autoplay={{
          delay: 0,
          disableOnInteraction: false,
          pauseOnMouseEnter: true,
        }}
        grabCursor={true}
        breakpoints={{
          480: {
            slidesPerView: 2,
          },
          768: {
            slidesPerView: 3,
          },
          992: {
            slidesPerView: 4,
          },
          1280: {
            slidesPerView: 5,
          },
          1680: {
            slidesPerView: 6,
          },
        }}
      >
        {renderBrands()}
      </Swiper>
    </S.BrandSlider>
  );
};
export default BrandSlider;
