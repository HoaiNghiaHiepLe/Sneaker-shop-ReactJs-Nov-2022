import styled, { css } from "styled-components";
import { Link } from "react-router-dom";
import { Button } from "antd";

export const SidebarContainer = styled.div`
  display: block;
  z-index: 999;
  position: fixed;
  transform: translateX(-100%);
  top: 0;
  left: 0;
  bottom: 0;
  width: 256px;
  height: 100%;
  background-image: url(https://wallpapercave.com/wp/wp3340286.jpg);
  background-attachment: cover;
  background-position: center center;
  background-size: cover;
  overflow: hidden;
  transition: all 0.3s;
  .background_image {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    display: block;
    z-index: -1;
    opacity: 0.5;
    background: #000;
  }
  ${(props) =>
    props.isShowSidebar &&
    css`
      transform: translateX(0);
    `}
  .user_info {
    user-select: none;
    padding: 30px 10px 5px;
    display: flex;
    flex-flow: column wrap;
    align-items: center;
    h2 {
      margin: 10px;
      color: #fff;
      font-size: 24px;
    }
    .user_avatar {
      width: 150px;
      height: auto;
      img {
        width: 150px;
        height: auto;
      }
    }
  }
  .login_btn {
    display: flex;
    flex-flow: column;
    justify-content: center;
    align-items: center;
    color: #fff;
  }
`;

export const SidebarContent = styled.div`
  display: flex;
  flex-direction: column;
`;

export const SidebarItem = styled(Link)`
  font-size: 18px;
  display: flex;
  align-items: center;
  padding: 16px;
  color: white;
  cursor: pointer;
  &:hover {
    background-color: rgb(65, 105, 225, 80%);
    color: #fff;
    letter-spacing: 5px;
    font-size: 22px;
    transform: translateX(40px);
    transition: all 300ms cubic-bezier(0.34, 1.61, 0.7, 1);
    margin-left: -40px;
  }
  ${(props) =>
    props.$active &&
    css`
      background-color: rgba(0, 0, 0, 0.8);
    `}
`;
export const LoginBtn = styled(Button)`
  display: inline-flex;
  align-items: center;
  font-size: 18px;
  padding: 18px 20px;
  margin: 20px auto;
  color: rgb(0, 40, 120);
  background-color: geekblue;
  border: 1px solid royalblue;
  &:hover {
    background-color: royalblue;
    color: #fff;
  }
`;
