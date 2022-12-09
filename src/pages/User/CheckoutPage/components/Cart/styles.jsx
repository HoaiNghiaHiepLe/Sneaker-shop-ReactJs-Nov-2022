import styled from "styled-components";
import { Button, List } from "antd";

export const CartInfo = styled.div`
  position: -webkit-sticky;
  position: sticky;
  top: 0;
  display: flex;
  flex-direction: column;
  padding: 8px 16px;
  border: 1px solid rgb(222, 226, 230);
  background-color: #fff;
`;

export const CartInfoContent = styled.div`
  display: flex;
  flex-direction: column;
`;

export const PayMentBtn = styled(Button)`
  margin-top: 16px;
  background-color: royalblue;
  color: #fff;
  width: 100%;
  height: 36px;

  &:hover {
    background-color: #6486ed;
    span {
      color: #fff;
      transform: scale(1.2);
      transition: all 0.5s cubic-bezier(0.175, 0.885, 0.32, 1) 0.15s;
      transition-duration: 1200ms;
    }
    transition: all 0.5s cubic-bezier(0.175, 0.885, 0.32, 1) 0.15s;
    transition-duration: 1200ms;
  }
`;

export const ListItem = styled(List.Item)`
  display: flex;
  justify-content: space-between;
`;

export const EmptyDescription = styled.span`
  position: absolute;
  bottom: 110px;
  left: 0;
  right: 0;
  font-size: 20px;
`;

export const EmptyBtn = styled(Button)`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 200px;
  height: 40px;
  font-size: 20px;
  background-color: royalblue;
  color: #fff;

  &:hover {
    background-color: #6486ed;
    color: #fff;
  }
`;
export const CartItemContentTop = styled.div`
  display: flex;
  align-items: center;
  box-shadow: 0 1px 1px 0 rgb(0 0 0 / 5%);
  border-radius: 0.125rem;
  overflow: hidden;
  border-radius: 3px;
  height: 60px;
  font-size: 16px;
  background: #fff;
  color: rgba(0, 0, 0, 0.8);
  margin-bottom: 12px;
  padding: 0 20px;
  .item_brand,
  .item_quantity,
  .item_price_each,
  .item_price_total,
  .item_size {
    text-align: center;
    font-weight: 600;
    letter-spacing: 1px;
    text-transform: capitalize;
  }
  .item_name {
    font-weight: 600;
    letter-spacing: 1px;
    text-transform: capitalize;
  }
  .item_action {
    text-align: end;
    font-weight: 600;
    letter-spacing: 1px;
    text-transform: capitalize;
  }
`;
export const CartItemContainer = styled.div`
  max-height: 550px;
  overflow: auto;
  ::-webkit-scrollbar {
    width: 6px;
  }
  ::-webkit-scrollbar-track {
    background: rgb(65, 105, 225, 20%);
  }
  ::-webkit-scrollbar-thumb {
    background: royalblue;
    border-radius: 3px;
  }
  ::-webkit-scrollbar-thumb:hover {
    background: #92c8af;
  }
  ::-webkit-scrollbar-track:hover {
    background: rgb(146, 200, 175, 20%);
  }
`;
