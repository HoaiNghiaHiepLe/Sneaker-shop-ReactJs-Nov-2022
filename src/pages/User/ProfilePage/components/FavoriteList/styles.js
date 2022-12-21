import styled, { css } from "styled-components";
import { Button, Row, Menu } from "antd";

export const FormTitle = styled.h3`
  display: flex;
  justify-content: center;
  font-size: 20px;
  color: royalblue;
  margin: 0 0 16px;
`;
export const FavoriteProductContainer = styled.div`
  background-color: #fff;
  padding: 20px 10px;
  border: 1px solid #ccc;
  min-height: 383px;
`;
export const ProductItem = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  height: 100%;
  border: 1px solid #ddd;
  border-radius: 2px;
  transition: all 0.3s ease;

  .product_image {
    position: relative;
    width: 100%;
    padding-top: 70%;

    img {
      position: absolute;
      top: 0;
      right: 0;
      bottom: 0;
      left: 0;
      width: 100%;
      height: 100%;
      object-fit: cover;
      transition: all 0.5s ease;
    }
  }

  .product_info {
    flex: 1;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    padding: 4px;
    height: auto;
    color: var(--dark-text-color);
    background-color: rgba(51, 92, 103, 0.1);

    h3 {
      text-align: center;
      font-size: 16px;
      display: -webkit-box;
      -webkit-line-clamp: 2;
      -webkit-box-orient: vertical;
      overflow: hidden;
    }

    p {
      color: var(--primary-color);
      font-size: 16px;
      font-weight: 500;
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
    }
  }

  .product_action {
    position: absolute;
    top: 10px;
    right: 10px;

    button {
      display: flex;
      justify-content: center;
      align-items: center;
      padding: 6px;
      border: none;
      border-radius: 50%;
      background-color: #fff;
      transition: all 0.3s ease;
      cursor: pointer;
      i {
        color: #000;
        font-size: 18px;
        transition: all 0.3s ease;
      }
      :hover {
        background-color: var(--danger-color);
        .un_favorite_icon {
          color: #fff;
        }
      }
    }
  }
  :hover {
    box-shadow: 0 0 8px #ccc;
  }
`;
