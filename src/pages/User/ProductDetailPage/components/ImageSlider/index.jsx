import React, { useState, useMemo } from "react";
import { Image, Row, Col } from "antd";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, A11y, Autoplay, FreeMode, Thumbs } from "swiper";
import * as S from "./styles";

const ImageSlider = ({ item }) => {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);

  const renderLargeImage = useMemo(() => {
    if (!item.images?.length) return null;
    return item?.images?.map((item) => {
      return (
        <SwiperSlide key={item.id}>
          <Image src={item.url} alt={item.name} />
        </SwiperSlide>
      );
    });
  }, [item]);

  const renderSmallImage = useMemo(() => {
    if (!item.images?.length) return null;
    return item?.images?.map((item) => {
      return (
        <SwiperSlide key={item.id}>
          <Image preview={false} src={item.url} alt={item.name} />
        </SwiperSlide>
      );
    });
  }, [item]);

  return (
    <>
      {item.images == null ? (
        <></>
      ) : (
        <S.SliderContainer key={item.id}>
          <Swiper
            style={{
              "--swiper-navigation-color": "royalblue",
              "--swiper-pagination-color": "royalblue",
            }}
            loop={true}
            spaceBetween={10}
            navigation={true}
            thumbs={{
              swiper:
                thumbsSwiper && !thumbsSwiper.destroyed ? thumbsSwiper : null,
            }}
            modules={[FreeMode, Navigation, Thumbs]}
            className="mySwiper2"
          >
            {renderLargeImage}
          </Swiper>
          <Swiper
            onSwiper={setThumbsSwiper}
            loop={true}
            spaceBetween={10}
            slidesPerView={4}
            watchSlidesProgress={true}
            modules={[Navigation, Thumbs]}
            className="mySwiper"
            breakpoints={{
              0: {
                slidesPerView: 2,
              },
              480: {
                slidesPerView: 3,
              },
              768: {
                slidesPerView: 4,
              },
              992: {
                slidesPerView: 4,
              },
              1280: {
                slidesPerView: 4,
              },
            }}
          >
            {renderSmallImage}
          </Swiper>
        </S.SliderContainer>
      )}
    </>
  );
};

export default ImageSlider;
