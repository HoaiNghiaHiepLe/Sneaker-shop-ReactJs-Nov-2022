import styled, { css } from "styled-components";

export const MainContainer = styled.div`
  margin-top: ${(props) => (props.sticky ? "0px" : "70px")};
  position: relative;
  display: flex;
  flex: 1;
`;

export const MainContent = styled.div`
  width: 100%;
  transition: all 0.3s;
  background-color: rgb(239, 239, 239);
`;

export const LoadingWrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const DrawerOverlay = styled.div`
  z-index: 998;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: ${(props) => (props.isShowSidebar ? "block" : "none")};
  width: 100%;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.5);
  cursor: pointer;
`;
