import styled from "styled-components";
import topWrapperImage from "../../assets/images/topwrapper-background.png";
import { DEVICE } from "../../constants/device";

export const TopContainer = styled.div`
  user-select: none;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: ${({ height }) => (height ? `${height}px` : "200px")};
  background-image: url(${topWrapperImage});
  background-size: cover;
  background-position: 50% 40%;
  background-repeat: no-repeat;
  @media ${DEVICE.MOBILE_SM} {
    .breadcrumb_container {
      ol {
        flex-flow: column wrap;
      }
    }
  }

  &::after {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 71, 79, 0.5);
  }
  & li {
    display: flex;
    align-items: center;
  }
  a {
    color: #fff;
    display: flex;
    justify-content: center;
    align-items: center;
    &:hover {
      color: #5cdbd3;
    }
  }
  .ant-breadcrumb li:last-child a {
    color: #fff;
    &:hover {
      color: #5cdbd3;
    }
  }
  & .ant-breadcrumb-link {
    display: flex;
    align-items: center;
    justify-content: center;
    span {
      margin-left: 5px;
    }
  }
  & .ant-breadcrumb-link,
  & .ant-breadcrumb-separator {
    position: relative;
    color: white;
    z-index: 1;
    font-size: 20px;
  }
`;

export const TopTitle = styled.h2`
  margin-top: 24px;
  font-size: 32px;
  color: white;
  z-index: 1;
`;
