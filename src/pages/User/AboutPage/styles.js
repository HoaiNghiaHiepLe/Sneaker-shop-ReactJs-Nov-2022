import styled, { css } from "styled-components";
import { DEVICE } from "../../../constants/device";

export const AboutContainer = styled.div`
  padding: 0.5rem 0px;
  background-color: rgb(239, 239, 239);
  .form_title {
    text-align: center;
    vertical-align: center;
    margin-bottom: 0.5rem;
    font-size: 28px;
    font-weight: 500;
    text-align: center;
  }
`;
export const IntroduceContainer = styled.div`
  p {
    font-size: 16px;
  }
  background-color: #fff;
  padding: 20px;
  max-width: 1280px;
  margin: 0px auto;
  margin-top: 20px;
`;
export const ContactForm = styled.div`
  padding: 20px 0;
  margin: 1rem 0;
  max-width: 1280px;
  margin: 0px auto;
  & {
    .contact_info_content {
      z-index: 999;
      color: white;
      padding: 1rem 3rem;
      position: relative;
      h1 {
        color: #fff;
        margin-bottom: 10px;
      }
      p {
        color: #fff;
      }
      span {
        color: #fff;
      }
    }
    .contact_info_background {
      z-index: 998;
      display: block;
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      border-top-left-radius: 4px;
      border-bottom-left-radius: 4px;
      filter: brightness(40%);
      background-image: url(https://wallpaperaccess.com/full/281072.jpg);
      background-attachment: fixed;
      background-position: 60% bottom;
      background-size: cover;
    }

    .contact_form {
      & .respon_padding_0 {
        @media ${DEVICE.TABLET} {
          padding: 0 !important;
        }
      }
      background-color: #fff;
      h1 {
        color: royalblue;
      }
      form label {
        color: royalblue;
      }
      padding: 2rem 3rem;
    }
    .info_col {
      display: flex;
      -webkit-box-align: center;
      align-items: center;
      margin: 1.5rem 0px;
      & span {
        font-size: 15px;
        cursor: pointer;
      }
    }
  }
`;
export const SliderContainer = styled.div`
  position: relative;
  margin: 2rem 0;
  max-width: 1280px;
  margin: 0px auto;
  height: 100%;
`;
export const ReviewContainer = styled.div`
  padding: 20px 40px;
`;
export const MapContainer = styled.div`
  margin: 2rem 0;
  max-width: 1280px;
  margin: 0px auto;
  .ratio_img {
    position: relative;
    padding-top: 52.5%;
    .location_map {
      max-width: 100%;
      position: absolute;
      top: 0px;
      left: 0px;
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }
`;
