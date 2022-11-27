import styled, { css } from "styled-components";
import { Link } from "react-router-dom";

export const SidebarContainer = styled.div`
  z-index: 1;
  position: fixed;
  top: 70px;
  left: 0;
  bottom: 0;
  width: 200px;
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
`;

export const SidebarContent = styled.div`
  display: flex;
  flex-direction: column;
`;

export const SidebarItem = styled(Link)`
  display: flex;
  align-items: center;
  padding: 16px;
  color: white;
  cursor: pointer;

  &:hover {
    background-color: rgb(210, 178, 84, 80%);
    color: rgb(40, 40, 40);
  }

  ${(props) =>
    props.$active &&
    css`
      background-color: rgba(0, 0, 0, 0.8);
    `}
`;
