import styled from "styled-components";
import { DEVICE } from "../../constants/device";

export const CustomerSlider = styled.div`
  cursor: pointer;
  height: 70vh;
  @media ${DEVICE.DESKTOP_XXL} {
    height: 70vh;
  }
  @media ${DEVICE.DESKTOP_XL} {
    height: 60vh;
  }
  @media ${DEVICE.TABLET} {
    height: 40vh;
  }
  @media ${DEVICE.MOBILE} {
    height: 30vh;
  }
  @media (min-width: 1280) {
    height: 70vh;
  }
  width: 100%;
  .swiper {
    width: 100%;
    height: 100%;
    .swiper-pagination-bullet {
      padding: 8px;
    }
    .swiper-pagination-bullet-active {
      background-color: royalblue;
    }
  }
  .swiper-slide {
    text-align: center;
    font-size: 18px;

    /* Center slide text vertically */
    display: -webkit-box;
    display: -ms-flexbox;
    display: -webkit-flex;
    display: flex;
    -webkit-box-pack: center;
    -ms-flex-pack: center;
    -webkit-justify-content: center;
    justify-content: center;
    -webkit-box-align: center;
    -ms-flex-align: center;
    -webkit-align-items: center;
    align-items: center;
  }

  .swiper-slide img {
    display: block;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;
export const CustomerSliderHomePage = styled.div`
  max-width: 1280px;
  margin: 20px auto;
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
