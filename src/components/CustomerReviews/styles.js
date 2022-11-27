import styled from "styled-components";
import { Swiper } from "swiper/react";
import { DEVICE } from "../../constants/device";

export const ProductRatingSwiper = styled(Swiper)`
  .royalblue_color {
    color: royalblue;
  }
  :hover {
    .product_rating_slider {
      margin-top: 100px;
      margin-bottom: 50px;
    }
  }
  font-family: "Roboto", "Helvetica", "Arial", sans-serif;
  .product_rating_container {
    border-radius: 10px;
    box-shadow: 0 1px 1px 0 rgb(0 0 0 / 5%);
    background-color: #fff;
    padding: 1.5rem;
    margin: 0 1.5rem;
    overflow: visible;
    border: 1px solid rgba(0, 0, 0, 0.09);
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    min-height: 200px;
    user-select: none;
    :hover {
      margin: 0 2rem;
      padding: 1rem;
      transform: scale(1.3);
      transition: all 300ms cubic-bezier(0.34, 1.61, 0.7, 1);
      box-shadow: 0 5px 15px -8px rgb(0 0 0 / 24%),
        0 8px 10px -5px rgba(0 0 0 / 100%);
    }
    &:hover {
      background-image: url(https://wallpapercave.com/wp/wp3340286.jpg);
      background-position: center top;
      background-attachment: cover;
      background-size: fixed;
      .product_rating_time,
      .product_rating_content {
        color: #fff;
        transform: scale(1.2);
        transition: all 300ms cubic-bezier(0.34, 1.61, 0.7, 1);
      }
      .product_rating_avatar {
        box-shadow: 0 5px 15px -8px rgb(0 0 0 / 24%),
          0 8px 10px -5px rgba(0 0 0 / 100%);
        margin: -50px 0 10px 0;
        transform: scale(1.8);
        transition: all 300ms cubic-bezier(0.34, 1.61, 0.7, 1);
      }
      .product_rating_author_name {
        filter: brightness(200%);
        margin: 25px 0 10px 0;
        text-shadow: 2px 2px 3px rgb(0 0 0 / 100%);
        transform: scale(1.5);
        transition: all 300ms cubic-bezier(0.34, 1.61, 0.7, 1);
      }
      .product_user_rating {
        margin: 0px 0 10px 0;
        transform: scale(1.8);
        transition: all 300ms cubic-bezier(0.34, 1.61, 0.7, 1);
        .anticon-star {
          cursor: grab;
          box-shadow: 0 5px 15px -8px rgb(0 0 0 / 24%),
            0 8px 10px -5px rgba(0 0 0 / 100%);
        }
      }
      .product_rating_time {
        margin: 5px 0px;
        transform: scale(1.2);
        transition: all 300ms cubic-bezier(0.34, 1.61, 0.7, 1);
        text-shadow: 2px 2px 3px rgb(0 0 0 / 100%);
        color: rgba(255, 255, 255, 80%);
      }
      .product_rating_content {
        margin: 5px 0 5px 0;
        transform: scale(1.1);
        transition: all 300ms cubic-bezier(0.34, 1.61, 0.7, 1);
        text-shadow: 2px 2px 3px rgb(0 0 0 / 100%);
        font-size: 0.75rem;
        -webkit-line-clamp: 2;
      }
    }

    .product_rating_avata {
      margin: 5px 0;
      text-align: center;
      display: flex;
      justify-content: flex-start;
      align-items: center;
      .product_rating_main_author-name {
        margin-left: 5px;
        font-size: 15px;
      }
    }
    .product_user_rating {
      margin: 5px auto;
    }
    .product_rating_main {
      flex: 1;
    }
    .product_rating_author_name {
      margin-top: 10px;
      text-decoration: none;
      color: royalblue;
    }
    .product_rating_time {
      margin: 5px auto;

      font-size: 0.75rem;
      color: rgba(0, 0, 0, 0.54);
    }
    .product_rating_content {
      display: -webkit-box;
      position: relative;
      -moz-box-sizing: border-box;
      box-sizing: border-box;
      margin: 0.9375rem 0;
      font-size: 0.875rem;
      line-height: 1.25rem;
      color: rgba(0, 0, 0, 0.87);
      white-space: pre-wrap;
      width: fit-content;
      overflow: hidden;
      text-overflow: ellipsis;
      -webkit-line-clamp: 1;
      -webkit-box-orient: vertical;
      word-break: break-word;
    }
    .product_rating_images {
      margin-top: 0.9375rem;
      display: flex;
      width: 100%;
      flex-wrap: wrap;
    }
    .product_rating_avatar {
      width: 50px;
      height: 50px;
    }
  }
`;
