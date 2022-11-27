import styled, { css } from "styled-components";

export const ProductContainer = styled.div`
  display: flex;
  flex-flow: column nowrap;
  width: 100%;
  background-color: #fff;
  &:hover {
    box-shadow: rgb(149 157 165 / 50%) 0px 8px 24px;
    &:hover {
      h3,
      .product_category h4 {
        color: royalblue;
      }
    }
  }
  & .ant-card-body {
    padding: 0;
  }
  .product_list_img_ratio {
    position: relative;
    padding-top: 100%;
    .visible_img {
      display: ${(props) => (props.imageChange ? "none" : "block")};
      opacity: ${(props) => (props.imageChange ? 0 : 1)};
      transition: all 0.5s cubic-bezier(0.175, 0.885, 0.32, 1) 0.15s;
    }
    .hidden_img {
      display: ${(props) => (props.imageChange ? "block" : "none")};
      opacity: ${(props) => (props.imageChange ? 1 : 0)};
    }
    .product_list_img {
      max-width: 100%;
      position: absolute;
      top: 0px;
      left: 0px;
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }
  .product_content {
    background-color: #fff;
    display: flex;
    width: 100%;
    flex-flow: column wrap;
    align-items: flex-start;
    padding: 10px 10px 15px;
    user-select: none;
    cursor: pointer;

    h3 {
      font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
      display: -webkit-box;
      color: #333;
      font-size: 16px;
      font-weight: 500;
      transition: all 0.2s linear 0s;
      width: fit-content;
      overflow: hidden;
      text-overflow: ellipsis;
      -webkit-line-clamp: 1;
      -webkit-box-orient: vertical;
      word-break: break-word;
      cursor: pointer;
    }

    .size_amount {
      margin: 10px 0;
      width: 100%;
      flex-flow: row wrap;
      display: flex;
      justify-content: space-between;
    }
    & .product_size,
    .product_amount,
    .product_gender,
    .product_amount {
      margin: 0;
      color: rgb(0, 40, 120);
      background-color: geekblue;
      border: 1px solid royalblue;
    }
    .product_size:hover {
      border: 1px solid royalblue;
      color: #fff;
      background-color: royalblue;
    }
    .product_amount:hover {
      border: 1px solid royalblue;
      color: #fff;
      background-color: royalblue;
    }
    .product_gender:hover {
      border: 1px solid royalblue;
      color: #fff;
      background-color: royalblue;
    }
    & .product_price {
      margin: 10px 0;
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      span {
        color: rgb(0, 40, 120);
        font-size: 14px;
      }
      & s {
        letter-spacing: 1px;
      }
      & p {
        font-weight: 700;
        font-size: 18px;
        letter-spacing: 1px;
        color: #f44336;
      }
    }
    .product_category {
      width: 100%;
      flex-flow: row wrap;
      justify-content: space-between;
      align-items: center;
      display: flex;
      & h4 {
        font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
        font-size: 16px;
        letter-spacing: px;
        color: #333;
      }
    }
  }
`;
