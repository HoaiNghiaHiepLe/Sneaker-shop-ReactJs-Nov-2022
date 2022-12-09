import styled, { css } from "styled-components";
import { Link } from "react-router-dom";

export const CartContainer = styled.div`
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
    top: -40px;
    height: 40px;
    width: 100%;
  }
  .cart_content {
    display: flex;
    flex-direction: column;
    padding: 8px;
    height: 360px;
    max-height: 400px;
    overflow-y: auto;
    p {
      font-size: 18px;
      padding: 8px;
      text-transform: uppercase;
      font-weight: 600;
      letter-spacing: 1.5px;
    }

    .cart_total_price {
      width: 100%;
      margin: 20px 0;
      padding-right: 12px;
      text-align: right;
      font-size: 20px;
    }
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
  }
  .cart_action_container {
    background-color: royalblue;
    &:hover {
      background-color: #6486ed;
      a {
        transform: scale(1.2);
        transition: all 0.5s cubic-bezier(0.175, 0.885, 0.32, 1) 0.15s;
        transition-duration: 1200ms;
      }
      transition: all 0.5s cubic-bezier(0.175, 0.885, 0.32, 1) 0.15s;
      transition-duration: 1200ms;
    }
    .cart_action {
      display: flex;
      justify-content: center;
      align-items: center;
      border-radius: 2px;
      width: 100%;
      height: 48px;
      background-color: transparent;
      color: #fff;
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
  .cart_empty {
    padding: 12px;
    img {
      width: 100%;
      display: flex;
      justify-content: center;
    }
    p {
      text-align: "center";
      margin: "24px 0 12px";
      font-size: 16;
    }
  }
`;
export const CartItemContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 8px;
  &:hover {
    box-shadow: var(--box-shadow);
  }
  .cart_item_link {
    display: flex;
    flex: 1;
    align-items: center;
    padding: 8px 4px;

    .cart_item_image {
      position: relative;
      padding-top: 80px;
      width: 100px;
      border: var(--boder-basic);
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
    .cart_item_info {
      display: flex;
      flex-flow: column wrap;
      justify-content: space-around;
      flex: 1;
      height: 100%;
      margin-left: 8px;
      .product_name {
        display: -webkit-box;
        -webkit-box-orient: vertical;
        overflow: hidden;
        -webkit-line-clamp: 1;
      }
      .product_quantity {
        display: flex;
        justify-content: space-between;
        .product_amount {
          margin-right: 40px;
          font-size: 16px;
        }
        .product_price {
          font-size: 16px;
          font-weight: 500;
          color: red;
        }
      }
    }
  }
  .cart_item_action {
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    margin: 0 8px;
    .remove_product_btn {
      display: flex;
      justify-content: center;
      align-items: center;
      color: #575757;
      padding: 10px;
      font-size: 16px;
      :hover {
        color: #ff4d4f;
      }
    }
  }
`;
