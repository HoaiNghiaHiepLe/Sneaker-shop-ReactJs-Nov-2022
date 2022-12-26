import styled, { css } from "styled-components";
import { Button, Row, Menu } from "antd";

export const FormTitle = styled.h3`
  display: flex;
  justify-content: center;
  font-size: 20px;
  color: royalblue;
  margin: 0 0 16px;
`;
export const OrderHistoryContainer = styled.div`
  background-color: #fff;
  padding: 20px 10px;
  border: 1px solid #ccc;
`;
export const OrderStatus = styled.div`
  svg {
    font-size: 20px;
    margin-right: 4px;
  }

  .ant-tag {
    padding: 5px;
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;
export const ExpandTableRow = styled.div`
  max-height: 300px;
  overflow-y: auto;
  overflow-x: hidden;

  &::-webkit-scrollbar {
    width: 6px;
    background-color: #fafafa;
  }

  &::-webkit-scrollbar-thumb {
    background-color: #595959;
  }

  &::-webkit-scrollbar-track {
    -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
    background-color: #fafafa;
  }
`;
export const OrderItem = styled.div`
  display: flex;

  .order__item-name,
  .order__item-price,
  .order__item-quantity {
    display: flex;
    align-items: center;
  }
`;
export const OrderItemContentTop = styled.div`
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
export const OrderItemWrapper = styled.div`
  border: 1px solid rgb(222, 226, 230);
  border-radius: 2px;
  padding: 8px;
  margin-bottom: 16px;
  background-color: #fff;

  &:hover {
    box-shadow: var(--box-shadow);
    transition: all 0.5s cubic-bezier(0.175, 0.885, 0.32, 1) 0.15s;
    transition-duration: 1200ms;
  }
  .item_img {
    position: relative;
    width: 100%;
    padding-top: 100%;
    img {
      max-width: 100%;
      position: absolute;
      top: 0px;
      left: 0px;
      right: 0px;
      bottom: 0px;
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }
  .item_brand,
  .item_quantity,
  .item_size {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
  }
  .item_name {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    height: 100%;
    margin-left: 10px;
    h3 {
      font-size: 16px;
      cursor: pointer;
      display: -webkit-box;
      -webkit-line-clamp: 2;
      -webkit-box-orient: vertical;
      overflow: hidden;
      text-overflow: ellipsis;
      word-break: break-word;
      &:hover {
        color: royalblue;
        transition: all 0.5s cubic-bezier(0.175, 0.885, 0.32, 1) 0.15s;
        transition-duration: 1200ms;
      }
    }
  }
  .item_quantity {
    display: flex;
    flex-flow: row wrap;
    align-items: center;
    justify-content: center;
  }
  .item_price {
    height: 100%;
    display: flex;
    flex-flow: column wrap;
    justify-content: center;
    align-items: center;
    .prime_price {
      color: var(--text-disabled);
    }
    .item_discount {
      font-size: 14px;
      b {
        color: var(--primary-color);
      }
    }
    .final_price_each {
      font-size: 18px;
      color: var(--danger-color);
      font-weight: 600;
    }
    .final_price {
      font-size: 20px;
      color: var(--danger-color);
      font-weight: 600;
    }
  }
`;
