import styled, { css } from "styled-components";
import { FaFacebookSquare } from "react-icons/fa";

import { DEVICE } from "../../constants/device";
export const FooterContainer = styled.footer`
  border-top: 5px solid royalblue;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  background-color: #fff;
  .footer_content {
    margin: 40px auto 20px;
    @media ${DEVICE.DESKTOP_XL}, ${DEVICE.TABLET}, ${DEVICE.MOBILE} {
      h4 {
        margin-top: 15px;
      }
    }

    h4 {
      color: royalblue;
      font-size: 15px;
      line-height: 22px;
      letter-spacing: 0.02em;
      margin-bottom: 15px;
      text-transform: uppercase;
      font-weight: 600;
      word-break: break-all;
    }
    .footer_introduce {
      p {
        padding-right: 20%;
        margin-bottom: 10px;
        font-size: 14px;
        line-height: 21px;
        word-break: break-all;
      }
      a {
        display: block;
        width: 150px;
        transform: translateX(-8px);
        img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }
      }
    }
    .footer_social {
      display: flex;
      -webkit-box-align: center;
      align-items: center;
      gap: 10px;
      margin-top: 20px;
      a {
        :hover {
          margin: 0 5px;
          background-color: rgb(255, 255, 255);
          color: rgb(0, 0, 0);
          ::after {
            opacity: 1;
            transform: scale(1.15);
          }
        }
        touch-action: manipulation;
        position: relative;
        display: inline-flex;
        -webkit-box-align: center;
        align-items: center;
        -webkit-box-pack: center;
        justify-content: center;
        width: 35px;
        height: 35px;
        color: rgb(255, 255, 255);
        font-size: 15px;
        background-color: royalblue;
        transition: all 300ms ease 0s;
        outline: none;
        cursor: pointer;
        &::after {
          content: "";
          position: absolute;
          top: 0px;
          left: 0px;
          width: 100%;
          height: 100%;
          pointer-events: none;
          box-sizing: content-box;
          box-shadow: rgb(158 172 202) 0px 0px 0px 4.2px;
          opacity: 0;
          transition: all 300ms ease 0s;
        }
        span {
          display: inline-block;
          color: inherit;
          font-style: normal;
          line-height: 0;
          text-align: center;
          text-transform: none;
          vertical-align: -0.125em;
          text-rendering: optimizeLegibility;
          -webkit-font-smoothing: antialiased;
          .social_icon {
            font-size: 24px;
          }
        }
      }
    }
    .footer_list {
      ul {
        list-style: none;
        li {
          line-height: 28px;
          padding-left: 20px;
          font-size: 14px;
          word-break: break-all;
          span {
            position: relative;
            display: block;
            width: fit-content;
            text-decoration: none;
            text-transform: capitalize;
            color: unset;
            font-size: 14px;
            word-break: break-all;
            &::before {
              content: "";
              position: absolute;
              top: 50%;
              bottom: 0px;
              left: -18px;
              width: 8px;
              height: 1px;
              background-color: rgb(39, 39, 39);
            }
          }
        }
      }
    }
    .youtube_channel {
      .footer_video {
        position: relative;
        padding-top: 62.5%;
        iframe {
          position: absolute;
          inset: 0px;
          width: 100%;
          height: 100%;
        }
      }
    }
  }
  .footer_copyright {
    border-top: 1px dashed rgb(224, 217, 214);
    padding: 24px 15px;
    text-align: center;
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;
