import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, A11y, Autoplay, FreeMode, Thumbs } from "swiper";
import Ratio from "react-bootstrap/Ratio";

import { SLIDER_LINK } from "./constant";
import * as S from "./styles";

const VideoSlider = () => {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);

  const renderLargeSlider = () => {
    return SLIDER_LINK?.map((item, i) => {
      return (
        <SwiperSlide key={i}>
          <iframe
            loading="lazy"
            className="iframe_large"
            src={item.path}
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            srcDoc={item.srcDoc}
          ></iframe>
        </SwiperSlide>
      );
    });
  };
  const renderSmallSlider = () => {
    return SLIDER_LINK?.map((item, i) => {
      return (
        <SwiperSlide key={i}>
          <iframe
            className="iframe_small"
            src={item.path}
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            srcDoc={item.srcDoc}
          ></iframe>
        </SwiperSlide>
      );
    });
  };
  return (
    <S.VideoSlider>
      <Swiper
        style={{
          "--swiper-navigation-color": "royalblue",
          "--swiper-pagination-color": "royalblue",
        }}
        loop={true}
        spaceBetween={10}
        navigation={true}
        thumbs={{ swiper: thumbsSwiper }}
        modules={[FreeMode, Navigation, Thumbs]}
        className="mySwiper2"
      >
        <Ratio aspectRatio="16x9">{renderLargeSlider()}</Ratio>
      </Swiper>
      <Swiper
        onSwiper={setThumbsSwiper}
        loop={true}
        spaceBetween={10}
        slidesPerView={4}
        freeMode={true}
        watchSlidesProgress={true}
        modules={[FreeMode, Navigation, Thumbs]}
        className="mySwiper"
        breakpoints={{
          0: {
            slidesPerView: 1,
          },
          480: {
            slidesPerView: 1,
          },
          768: {
            slidesPerView: 2,
          },
          992: {
            slidesPerView: 3,
          },
          1280: {
            slidesPerView: 4,
          },
        }}
      >
        <Ratio aspectRatio="4x3">{renderSmallSlider()}</Ratio>
      </Swiper>
    </S.VideoSlider>
  );
};

export default VideoSlider;
