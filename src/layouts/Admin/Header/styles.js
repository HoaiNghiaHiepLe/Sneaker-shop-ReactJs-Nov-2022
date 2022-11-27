import styled, { css } from "styled-components";
import { Link } from "react-router-dom";
import { Button, Menu } from "antd";

export const HeaderContainer = styled.header`
  z-index: 999;
  position: fixed;
  width: 100%;
  padding: 0 20px;
  top: 0px;
  left: 0px;
  right: 0px;
  width: 100%;
  height: 70px;
  .background_image {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    display: block;
    z-index: -1;
    opacity: 0.4;
    background: #000;
  }
  background-image: url(https://wallpapercave.com/wp/wp3340286.jpg);
  background-position: center top;
  background-size: cover;
  overflow: hidden;
  transition: all 0.3s ease-in-out 0s;
`;

export const HeaderContent = styled.div`
  display: flex;
  -webkit-box-align: center;
  align-items: center;
  -webkit-box-pack: justify;
  justify-content: space-between;
  flex-flow: row nowrap;
  height: 70px;
  margin: 0px auto;
  & .navBarLogo {
    display: flex;
    justify-content: flex-start;
    & span {
      font-family: "Gill Sans", "Gill Sans MT", Calibri, "Trebuchet MS",
        sans-serif;
      position: relative;
      display: inline-flex;
      -webkit-box-align: center;
      align-items: center;
      height: 70px;
      font-size: 22px;
      text-decoration: none;
      text-transform: uppercase;
      font-weight: 1000;
      letter-spacing: 5px;
      cursor: pointer;
      & a {
        position: relative;
        display: flex;
        align-items: center;
        color: royalblue;
        overflow: hidden;
        background: linear-gradient(to right, #f6432e, royalblue 50%, #fff 50%);
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
      height: 40px;
      width: auto;
    }
  }
`;

export const DropdownContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  & .userInfo {
    display: flex;
    justify-content: space-between;
    align-items: center;
    :hover {
      .user_icon,
      h2 {
        color: rgb(210, 178, 84, 80%);
      }
    }
    .user_icon {
      font-size: 24px;
      color: #fff;
    }
    h2 {
      margin-bottom: -5px;
      margin-right: 10px;
      color: #fff;
    }
  }
`;

export const NavBar = styled.div`
  & ul {
    display: flex;
    list-style-type: none;
    margin: 0;
    & li {
      margin: 0 20px;
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

export const MobileMenu = styled.div``;
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
