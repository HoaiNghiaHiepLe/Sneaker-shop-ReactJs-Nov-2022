import styled, { css } from "styled-components";
import { Button, Row, Menu } from "antd";

export const Wrapper = styled.div`
  min-height: 100vh;
  background-color: var(--bgr-color);
  padding-bottom: 12px;
`;

export const UserPageContent = styled.div`
  max-width: 1200px;
  width: 100%;
  min-height: calc(100vh - var(--header-height));
  margin: 12px auto;
`;

export const UserSideBar = styled.div`
  border-right: 1px solid #ddd;
  background-color: #fff;
  .user__avatar {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 12px;
  }

  .user_sidebar {
    list-style: none;
  }

  .user_sidebar-item-link {
    color: var(--dark-text-color);
  }

  .user_sidebar-item {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    padding: 8px;
    svg {
      font-size: 24px;
      margin-right: 8px;
    }
    p {
      font-size: 16px;
    }
  }
`;

export const UserSidebarItem = styled.li`
  ${(props) =>
    props.$active &&
    css`
      border-right: 4px solid var(--primary-color);
      background-color: rgb(51, 92, 103, 0.3);

      .user_sidebar-item-link {
        color: var(--primary-color);
      }
    `}
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
