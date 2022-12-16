import styled, { css } from "styled-components";
import { Link } from "react-router-dom";

export const UserContainer = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  border-radius: 2px;
  background-color: #fff;
  box-shadow: var(--box-shadow);
  color: var(--dark-text-color);
  transform-origin: 95% top;
  z-index: 999;
  &::before {
    display: block;
    content: "";
    position: absolute;
    top: 0;
    height: 40px;
    width: 100%;
  }

  .user_info_img {
    padding-top: 20px;
    display: flex;
    flex-direction: column;
    align-items: center;
    p {
      margin-top: 10px;
      font-size: 16px;
    }
  }

  .user_action_container {
    margin: 5px 0px;
    &:hover {
      a {
        transform: scale(1.2);
        transition: all 0.5s cubic-bezier(0.175, 0.885, 0.32, 1) 0.15s;
        transition-duration: 1200ms;
      }
    }
    .user_action {
      display: flex;
      justify-content: center;
      align-items: center;
      border-radius: 2px;
      width: 100%;
      height: 48px;
      background-color: transparent;
      border: none;
      border-radius: 2px;
      font-size: 18px;
      transition: all 0.2s ease;
      cursor: pointer;
      a {
        color: #fff;
      }
    }
  }
  .user_logout_container {
    .user_logout_btn {
      display: flex;
      justify-content: center;
      align-items: center;
      width: 100%;
      height: 48px;
      border: none;
      font-size: 18px;
      transition: all 0.2s ease;
      cursor: pointer;
      a {
        color: #fff;
      }
      &:hover {
        background-color: #a8071a;
        span {
          transform: scale(1.2);
          transition: all 0.5s cubic-bezier(0.175, 0.885, 0.32, 1) 0.15s;
          transition-duration: 1200ms;
        }
      }
      background-color: var(--primary-color);
      color: #fff;
    }
  }
`;
