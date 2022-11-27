import styled from "styled-components";
import { Button, Avatar } from "antd";

export const ProductRating = styled.div`
  box-shadow: 0 1px 1px 0 rgb(0 0 0 / 5%);
  border-radius: 0.125rem;
  padding: 1.5625rem;
  margin-top: 0.9375rem;
  overflow: visible;
  &:hover {
    .product_rating {
      box-shadow: 0 10px 10px 0 rgb(65, 105, 225, 40%);
    }
    .product_rating_avata {
      width: 6rem;
      transform: translateX(20px);
      transition: all 300ms cubic-bezier(0.34, 1.61, 0.7, 1);
    }
    .product_rating_main {
      margin-left: 10px;
      padding-right: 34px;
      transform: translateX(15px);
      transition: all 300ms cubic-bezier(0.34, 1.61, 0.7, 1);
    }
  }
  .product_rating_list {
    display: block;
  }
  .product_comment_list {
    display: block;
  }
  .product_rating {
    border-bottom: 3px solid rgba(0, 0, 0, 0.09);
    display: flex;
    padding: 1rem 0 1rem 1.25rem;
  }
  .product_rating_avata {
    width: 3rem;
    margin-right: 0.625rem;
    text-align: center;
    display: block;
  }
  .product_rating_main {
    display: block;
    flex: 1;
  }
  .product_rating_main_author-name {
    text-decoration: none;
    color: rgba(0, 0, 0, 0.87);
    font-size: 1rem;
  }
  .product_rating_time {
    margin-top: 0.75rem;
    font-size: 0.75rem;
    color: rgba(0, 0, 0, 0.54);
  }
  .product_rating_content {
    position: relative;
    -moz-box-sizing: border-box;
    box-sizing: border-box;
    margin: 0.9375rem 0;
    font-size: 0.875rem;
    line-height: 1.25rem;
    color: rgba(0, 0, 0, 0.87);
    word-break: break-word;
    white-space: pre-wrap;
  }
  .product_rating_images {
    margin-top: 0.9375rem;
    display: flex;
    width: 100%;
    flex-wrap: wrap;
  }
`;

export const RatingAvatarImg = styled(Avatar)`
  border-radius: 50%;
  width: 100%;
  height: auto;
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
