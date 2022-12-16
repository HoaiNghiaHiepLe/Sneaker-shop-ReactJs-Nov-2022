import styled, { css, keyframes } from "styled-components";
import { Button, InputNumber } from "antd";
import { RiArrowDownSLine } from "react-icons/ri";

// export const CustomOutlinePlus = styled(AiOutlinePlus)`
//   cursor: pointer;

//   &:hover {
//     border: 1px solid royalblue;
//   }
// `;

// export const CustomOutlineMinus = styled(AiOutlineMinus)`
//   cursor: pointer;

//   &:hover {
//     border: 1px solid royalblue;
//   }
// `;

export const CartItemWrapper = styled.div`
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
  .item_action {
    text-align: end;
    text-align: center;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
    button {
      border: none;
      &:hover .delete_icon {
        color: var(--danger-color);
        transform: scale(1.3);
        transition: all 1200ms cubic-bezier(0.34, 1.61, 0.7, 1) 0.2s;
      }
      .delete_icon {
        font-size: 20px;
      }
    }
  }
  .item_size {
    cursor: pointer;
    .size_selector {
    }
  }
`;

export const CartItemContent = styled.div`
  display: flex;
  flex-direction: column;
  padding: 8px;
`;

export const CartItemContentTop = styled.div`
  display: flex;
  justify-content: space-between;
  font-size: 16px;
  font-weight: 700;
`;

export const CartItemContentMid = styled.div`
  margin-top: 8px;
  flex: 1;
`;

export const CartItemContentBot = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const ChangeQuantityBtn = styled(Button)`
  display: flex;
  justify-content: center;
  align-items: center;
  max-width: 32px;
`;

export const ChangeQuantityInput = styled(InputNumber)`
  display: flex;
  justify-content: center;
  align-items: center;
  max-width: 42px;
  .ant-input-number-handler-wrap {
    display: none;
  }
  .ant-input-number-input {
    text-align: center;
  }
`;
export const SizeSelectorIcon = styled(RiArrowDownSLine)`
  margin-left: 3px;
  margin-top: 3px;
  font-size: 18px;
  color: var(--primary-color);
  ${(props) =>
    props.$showModal &&
    css`
      transform: rotate(-180deg);
      animation: ${rotation} 0.5s linear;
    `};
`;
const rotation = keyframes`
  0% {
    transform: rotate(0deg);
    transform: scale(1);
  }
  25% {
    transform: rotate(-30deg);
    transform: scale(2);
  }
  50% {
    transform: rotate(-60deg);
    transform: scale(3);
  }
  75% {
    transform: rotate(-90deg);
    transform: scale(2);
  }
  100%{
    transform: scale(1);
    transform: rotate(-150deg);
  }
`;
