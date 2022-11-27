import styled, { css } from "styled-components";
import Slider from "react-slick";
import { Swiper, SwiperSlide } from "swiper/react";

export const BrandSlider = styled.div`
  user-select: none;
  .swiper {
    margin-left: auto;
    margin-right: auto;
    position: relative;
    overflow: hidden;
    list-style: none;
    padding: 0;
    z-index: 1;
    width: 100%;
    .swiper_wrapper {
      position: relative;
      width: 100%;
      height: 100%;
      z-index: 1;
      display: flex;
      transition-property: -webkit-transform;
      transition-property: transform;
      transition-property: transform, -webkit-transform;
      box-sizing: content-box;
    }
    .swiper-pagination-bullet-active {
      background-color: royalblue;
    }
  }

  .swiper-slide {
    .ratio_img {
      background-color: #fff;
      position: relative;
      padding-top: 62.5%;
      & img {
        max-width: 100%;
        position: absolute;
        top: 0px;
        left: 0px;
        width: 100%;
        height: 100%;
        object-fit: cover;
      }
    }
  }
`;
