import styled from "styled-components";

export const SliderContainer = styled.div`
  position: relative;
  width: 100%;
  height: auto;
  .mySwiper {
    width: 100%;
    margin-left: auto;
    margin-right: auto;
    height: 100%;
    box-sizing: border-box;
    .swiper-slide {
      width: auto;
      height: 100%;
      opacity: 1;
      flex-shrink: 0;
      width: 100%;
      height: 100%;
      position: relative;
      transition-property: -webkit-transform;
      transition-property: transform;
      transition-property: transform, -webkit-transform;
      .ant-image {
        position: relative;
        padding-top: 62.5%;
        width: 100%;
        display: inline-block;
        img {
          position: absolute;
          inset: 0px;
          width: 100%;
          height: 100%;
          display: block;
          object-position: center center;
          object-fit: cover;
        }
      }
    }
  }
  .mySwiper2 {
    width: 100%;
    height: 100%;
    margin-left: auto;
    margin-right: auto;
    position: relative;
    overflow: hidden;
    list-style: none;
    padding: 0;
    z-index: 1;
    .swiper-slide {
      padding: 0 5px;
      flex-shrink: 0;
      width: 100%;
      height: 100%;
      position: relative;
      transition-property: -webkit-transform;
      transition-property: transform;
      transition-property: transform, -webkit-transform;
      .ant-image {
        position: relative;
        padding-top: 80%;
        width: 100%;
        display: inline-block;
        .ant-image-img {
          position: absolute;
          inset: 0px;
          width: 100%;
          height: 100%;
          display: block;
          object-position: center center;
          object-fit: cover;
        }
      }
    }
  }
`;
