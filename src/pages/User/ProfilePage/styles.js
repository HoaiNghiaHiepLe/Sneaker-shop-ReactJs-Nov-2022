import styled, { css } from "styled-components";
import { Button, Row, Menu } from "antd";

export const ProfileContainer = styled.div`
  background-color: #fff;
  padding: 20px 10px;
  border: 1px solid #ccc;
  .user_info {
    width: 90%;
    margin: 0 auto;
    padding: 12px;
    border: var(--boder-basic);
    border-radius: 4px;
    .user_info_row {
      display: flex;
      align-items: center;
      justify-content: flex-start;
      p {
        min-width: 120px;
        font-size: 16px;
        color: var(--dark-text-color);
      }
      span {
        flex: 1;
        font-weight: 500;
        font-size: 16px;
      }
    }
  }

  .user_action {
    margin-top: 24px;
  }
`;

export const FormTitle = styled.h3`
  display: flex;
  justify-content: center;
  font-size: 20px;
  color: royalblue;
  margin: 0 0 16px;
`;
