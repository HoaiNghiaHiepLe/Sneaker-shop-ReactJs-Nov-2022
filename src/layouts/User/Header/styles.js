import styled, { css } from "styled-components";
import { Link } from "react-router-dom";
import { Button, Menu } from "antd";
import { DEVICE } from "../../../constants/device";

export const HeaderContainer = styled.header`
  position: fixed;
  top: ${(props) => (props.sticky ? "-100%" : "0px")};
  left: 0px;
  right: 0px;
  width: 100%;
  height: 70px;
  background-color: #fff;
  transition: all 0.3s ease-in-out 0s;
  box-shadow: rgb(0 0 0 / 5%) 0px 4px 12px 0px;
  z-index: 100;
  & .header_content .navbar_Logo {
    @media ${DEVICE.TABLET} {
      span a {
        font-size: 20px;
      }
      span .logo_img {
        height: 46px;
      }
    }
    @media ${DEVICE.DESKTOP_XL} {
      span a {
        font-size: 18px;
      }
      span .logo_img {
        height: 40px;
      }
    }
    @media ${DEVICE.MOBILE} {
      span a {
        font-size: 16px;
      }
      span .logo_img {
        display: none;
      }
    }
  }
  & .header_content .user_container {
    .user_info {
      @media ${DEVICE.TABLET} {
        display: none !important;
      }
      @media ${DEVICE.DESKTOP_XL} {
        & {
          h2 {
            font-size: 16px;
          }
          .user_avatar {
            width: 30px;
          }
        }
      }
    }
  }

  & .header_content .navbar_menu {
    @media ${DEVICE.DESKTOP_XL} {
      ul {
        li {
          margin: 0 5px !important;
          a span {
            font-size: 16px !important;
          }
        }
      }
    }
    @media ${DEVICE.TABLET} {
      display: none;
    }
  }
  .mobile_menu {
    display: none;
    @media ${DEVICE.TABLET} {
      display: block;
    }
    & button {
      border: none;
      svg {
        font-size: 27px;
      }
    }
  }
  .header_content {
    display: flex;
    -webkit-box-align: center;
    align-items: center;
    -webkit-box-pack: justify;
    justify-content: space-between;
    flex-flow: row nowrap;
    height: 70px;
    margin: 0px auto;
    & .navbar_Logo {
      & span {
        font-family: "Gill Sans", "Gill Sans MT", Calibri, "Trebuchet MS",
          sans-serif;
        position: relative;
        display: inline-flex;
        -webkit-box-align: center;
        align-items: center;
        height: 70px;
        font-size: 30px;
        text-decoration: none;
        text-transform: uppercase;
        font-weight: 1000;
        letter-spacing: 3px;
        cursor: pointer;
        & a {
          position: relative;
          display: flex;
          align-items: center;
          color: royalblue;
          overflow: hidden;
          background: linear-gradient(
            to right,
            #f6432e,
            midnightblue 50%,
            royalblue 50%
          );
          background-clip: text;
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-size: 200% 100%;
          background-position: 100%;
          transition: background-position 275ms ease;
          text-decoration: none;
          &:hover {
            background-position: 0 100%;
          }
        }
      }
      .logo_img {
        margin-right: 10px;
        height: 56px;
        width: auto;
      }
    }
    .navbar_menu {
      & ul {
        display: flex;
        list-style-type: none;
        margin: 0;
        & li {
          margin: 0 12px;
          & span {
            position: relative;
            display: inline-flex;
            -webkit-box-align: center;
            align-items: center;
            height: 70px;
            text-decoration: none;
            font-size: 18px;
            color: rgb(39, 39, 39);
            text-transform: uppercase;
            font-weight: 700;
            letter-spacing: 2px;
            cursor: pointer;
            &::before {
              right: 50%;
              content: "";
              position: absolute;
              bottom: 0px;
              width: 0%;
              height: 4px;
              background-color: #4285f4;
              transition: all 0.3s ease-in-out 0s;
            }
            &::after {
              left: 50%;
              content: "";
              position: absolute;
              bottom: 0px;
              width: 0%;
              height: 4px;
              background-color: #f6432e;
              transition: all 0.3s ease-in-out 0s;
            }
            &:hover::after,
            &:hover::before {
              width: 50%;
            }
            & a {
              color: #000;
            }
          }
        }
      }
    }
    .user_container {
      display: flex;
      align-items: center;
      & .user_info {
        display: flex;
        justify-content: space-between;
        align-items: center;
        h2 {
          user-select: none;
          margin: 0 10px;
        }
      }
      .cart_btn {
        display: flex;
        align-items: center;
        justify-content: center;
        height: 40px;
        padding: 4.9px 0;
        font-size: 18px;
        min-width: 40px;
        border-radius: 50%;
        background-color: #fff;
        touch-action: manipulation;
        cursor: pointer;
        border: 2px solid #d9d9d9;
      }
    }
  }
`;

export const HeaderItem = styled(Link)`
  & span {
    ${(props) =>
      props.$active &&
      css`
        &::before {
          padding-right: 50%;
        }
        &::after {
          padding-left: 50%;
        }
        &:active::after,
        &:active::before {
          width: 50%;
        }
      `}
  }
`;
export const LoginBtn = styled(Button)`
  display: inline-flex;
  align-items: center;
  font-size: 18px;
  padding: 18px 20px;
  margin: 20px;
  color: rgb(0, 40, 120);
  background-color: geekblue;
  border: 1px solid royalblue;
  &:hover {
    background-color: royalblue;
    color: #fff;
  }
`;
export const DropdownMenu = styled(Menu)`
  &:hover .menu_item {
    background-color: royalblue;
  }
`;
