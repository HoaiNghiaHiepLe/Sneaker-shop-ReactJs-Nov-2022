import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, EffectCoverflow } from "swiper";
import Ratio from "react-bootstrap/Ratio";

import { SLIDER_LINK } from "./constant";
import * as S from "./styles";

export const CustomerSlider = () => {
  const renderSlider = () => {
    return SLIDER_LINK?.map((item, i) => {
      return (
        <SwiperSlide key={i}>
          <img src={item.path} alt="" />
        </SwiperSlide>
      );
    });
  };
  return (
    <S.CustomerSlider>
      <Swiper
        modules={[Pagination]}
        direction={"vertical"}
        grabCursor={true}
        pagination={{
          clickable: true,
        }}
        autoplay={{ delay: 1500 }}
        speed={800}
        loop={true}
        className="mySwiper"
      >
        {renderSlider()}
      </Swiper>
    </S.CustomerSlider>
  );
};

export const CustomerSliderHomePage = () => {
  const renderSlider = () => {
    return SLIDER_LINK?.map((item, index) => {
      return (
        <SwiperSlide key={index} className="swipper_wraper">
          <div className="ratio_img">
            <img src={item.path} alt="" />
          </div>
        </SwiperSlide>
      );
    });
  };
  return (
    <S.CustomerSliderHomePage>
      <Swiper
        modules={[EffectCoverflow, Pagination]}
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={"auto"}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
        loop={true}
        pagination={{
          dynamicBullets: true,
        }}
        className="mySwiper"
      >
        {renderSlider()}
      </Swiper>
    </S.CustomerSliderHomePage>
  );
};
