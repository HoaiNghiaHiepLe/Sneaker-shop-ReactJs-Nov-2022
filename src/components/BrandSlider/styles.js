import styled, { css } from "styled-components";

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
    .swiper-wrapper {
      transition-timing-function: linear;
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
