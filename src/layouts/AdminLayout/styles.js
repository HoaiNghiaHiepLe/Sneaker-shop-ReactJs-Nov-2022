import styled, { css } from "styled-components";

export const MainContainer = styled.div`
  position: relative;
  display: flex;
  flex: 1;
`;

export const MainContent = styled.div`
  margin-top: 70px;
  margin-left: 200px;
  padding: 30px 15px;
  width: 100%;
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
