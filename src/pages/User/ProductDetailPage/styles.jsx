import styled from "styled-components";
import { Button } from "antd";
import { BiCheck } from "react-icons/bi";
import { DEVICE } from "../../../constants/device";

export const ProductInfo = styled.div`
  margin: 20px 0px;
  background-color: #fff;
  .royalblue_color {
    color: royalblue;
  }
  .product_discription {
    & {
      @media ${DEVICE.DESKTOP_XXL} {
        padding-left: 10px;
        padding-right: 10px;
      }
      @media ${DEVICE.DESKTOP_XL} {
        padding: 0px 20px !important;
        .product_name {
          font-size: 25px;
          margin: 3px 0px;
        }
        .product_rate,
        .product_price,
        .product_detail,
        .product_size,
        .action_container,
        .policy_content {
          margin: 3px 0px;
        }
        .action_container {
          flex-flow: column wrap;
        }
      }
      @media ${DEVICE.TABLET} {
        padding: 0px 20px !important;
      }
      @media ${DEVICE.MOBILE} {
        padding: 0px 10px !important;
        .product_name {
          font-size: 25px;
          margin: 3px 0px;
        }
        .product_rate,
        .product_price,
        .product_detail,
        .product_size,
        .action_container,
        .policy_content {
          margin: 5px 0px;
        }
      }
    }
  }

  .product_img {
  }
  .product_discription {
    display: flex;
    flex-flow: column wrap;
    justify-content: center;
    height: 100%;
  }
  .product_name {
    color: #333;
    font-size: 28px;
    font-weight: 700;
    margin: 10px 0px;
    line-height: 1.5;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    overflow: hidden;
    text-overflow: ellipsis;
    word-break: break-word;
  }
  .product_rate {
    display: flex;
    -webkit-box-align: center;
    align-items: center;
    flex-wrap: wrap;
    gap: 10px;
    margin: 10px 0px;
    p {
      color: #333;
      padding-top: 8px;
      font-size: 15px;
    }
  }
  .product_detail {
    font-size: 16px;
    font-weight: 500;
    color: #333;
    margin: 10px 0px;
  }
  .product_price {
    margin: 10px 0px;

    display: flex;
    justify-content: flex-start;
    align-items: center;
    .new_price {
      font-size: 28px;
      font-weight: 700;
      color: #f44336;
    }
    .price_old {
      font-size: 20px;
      font-weight: 600;
      color: rgba(0, 0, 0, 0.85);
    }
  }
  .product_size {
    display: flex;
    flex-flow: column wrap;
    align-items: flex-start;
    margin: 10px 0px;

    b {
      color: #333;
      font-size: 20px;
    }
    .size_select {
      margin-left: -5px;
      margin: 10px 0;
    }
  }
  .action_container {
    margin: 10px 0px;
    padding: 10px 10px 10px 0px;
    border-top: 1px solid rgba(0, 0, 0, 0.08);
    border-bottom: 1px solid rgba(0, 0, 0, 0.08);
  }
  .policy_content {
    padding: 10px 10px 10px 0px;
    height: 100%;
    margin: 20px 0;
    .policy_title {
      font-size: 24px;
      font-weight: 500;
      padding: 0;
    }
    .policy_content {
      list-style-type: none;
      padding: 0;
      margin: 8px 0 0 0;
    }
    .policy_item {
      color: #333;
      display: flex;
      align-items: center;
      list-style: none;
      margin: 10px 0px;
      font-size: 16px;
      font-weight: 400;
      svg {
        margin-right: 10px;
      }
    }
  }
`;

export const ProductDetail = styled.div`
  padding-bottom: 30px;
  .royalblue_color {
    color: royalblue;
  }
  .product_related_col {
    padding-left: 15px;

    @media ${DEVICE.TABLET} {
      padding-left: 0px !important;
      padding-top: 20px;
    }
    @media ${DEVICE.MOBILE} {
      padding-left: 0px !important;
      padding-top: 20px;
    }
    .product_related {
      background-color: #fff;
      padding: 20px 15px 15px;
      .product_related_title {
        display: flex;
        flex-flow: column wrap;
        justify-content: center;
        align-items: center;
        p {
          font-weight: 600;
          font-size: 16px;
          color: royalblue;
        }
        h2 {
          margin: 10px 0px;
          font-weight: 700;
          color: #333;
        }
      }
    }
  }
`;

export const ProductContent = styled.div`
  display: flex;
  flex-direction: column;
  -webkit-box-align: center;
  align-items: center;
  margin-top: 0.5rem;
  margin-bottom: 1rem;
  padding-top: 10px;
  background-color: rgb(255, 255, 255);
  border-radius: 4px;
  border-top: 2px solid rgb(217, 217, 217);
  img {
    @media ${DEVICE.DESKTOP_XXL} {
      padding: 30px;
    }
    @media ${DEVICE.DESKTOP_XL} {
      padding: 20px;
    }
    @media ${DEVICE.TABLET} {
      padding: 10px;
    }
    @media ${DEVICE.MOBILE} {
    }
    max-width: 100%;
    height: auto;
  }
`;

export const ProductRatingForm = styled.div`
  .rating_form {
  }
  .rating_header {
    margin-bottom: 1em;
    text-transform: capitalize;
    font-size: 1.125rem;
    color: #333;
  }
`;
export const ProductRatingContainer = styled.div`
  .rating_overview {
    @media ${DEVICE.TABLET} {
      display: flex;
      flex-direction: column;
    }
    @media ${DEVICE.MOBILE} {
      display: flex;
      flex-direction: column;
    }
    background-color: rgb(65, 105, 225, 10%);
    min-height: 5rem;
    border: 1px solid rgb(65, 105, 225, 30%);
    margin: 1rem 0;
    display: flex;
    align-items: center;
    border-radius: 2px;
    -moz-box-sizing: border-box;
    box-sizing: border-box;
    padding: 1.875rem;
  }
  .rating_overview_briefing {
    text-align: center;
    margin-right: 1.875rem;
  }
  .rating_overview_filter {
    flex: 1;
    margin-left: 0.9375rem;
  }
`;

export const CustomBtn = styled(Button)`
  font-size: 16px;
  color: #fff;
  background-color: royalblue;
  display: flex;
  align-items: center;
  justify-content: space-around;
  &:hover {
    background-color: #6486ed;
    color: #fff;
  }
`;
export const FavoritetBtn = styled(Button)`
  font-size: 16px;
  color: #fff;
  background-color: royalblue;
  display: flex;
  align-items: center;
  justify-content: space-around;
  &:hover {
    background-color: #6486ed;
    color: #fff;
  }
  .favourite_icon {
    margin-right: 8px;
  }
  .liked_count {
    display: flex;
    line-height: 40px;
  }
`;

export const CheckIcon = styled(BiCheck)`
  color: #fff;
  background-color: green;
  border-radius: 50%;
  font-size: 20px;
  margin-right: 4px;
  text-align: center;
`;

export const MessageError = styled.span`
  color: red;
`;
