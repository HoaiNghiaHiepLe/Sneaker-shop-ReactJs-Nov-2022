import styled, { css } from "styled-components";
import { Button, Row, Menu } from "antd";

export const InfoWrapper = styled.div`
  background-color: #fff;
  padding: 8px;
  border: 1px solid #ccc;
`;

export const AvatarWrapper = styled(Row)`
  display: flex;
  justify-content: center;
  position: relative;
`;

export const UserName = styled.span`
  display: flex;
  justify-content: center;
  font-size: 18px;
  font-weight: 500;
  margin-top: 16px;
`;

export const TabWrapper = styled(Row)`
  display: flex;
  justify-content: center;
  margin-top: 16px;
`;

export const EditBtn = styled(Button)`
  position: absolute;
  right: 75px;
  bottom: 0;
  font-size: 20px;
  z-index: 1;
  border-radius: 50%;
  padding: 0;
  width: 30px;
  height: 30px;
`;

export const FormTitle = styled.h3`
  display: flex;
  justify-content: center;
  font-size: 20px;
  color: royalblue;
  margin: 0 0 16px;
`;

export const MenuItem = styled(Menu.Item)`
  display: flex;
  align-items: center;
  font-size: 16px;

  ${(props) =>
    props.active &&
    css`
      border-right: 3px solid royalblue;
    `}
`;
