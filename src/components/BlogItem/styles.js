import styled, { css } from "styled-components";
import { Button } from "antd";
import { DEVICE } from "../../constants/device";

export const BlogListWrapper = styled.div`
  &:hover {
    .blog_img_col {
      padding-left: 34px;
    }
    .blog_list_img {
      transform: scale(1.2);
      transition: all 300ms cubic-bezier(0.34, 1.61, 0.7, 1);
    }
    .blog_list_content {
      margin-left: 40px;
      padding-right: 34px;
      transform: translateX(20px);
      transition: all 300ms cubic-bezier(0.34, 1.61, 0.7, 1);
    }
  }
  @media ${DEVICE.MOBILE_SM} {
    &:hover {
      .blog_img_col {
        padding: 2px 39px 0;
      }
      .blog_list_content {
        margin-top: 20px;
        padding-bottom: 20px;
        transform: translateY(20px);
        transition: all 300ms cubic-bezier(0.34, 1.61, 0.7, 1);
      }
    }
    .blog_list_content {
      & .btn_container {
        justify-content: center !important;
        align-items: center;
      }
    }
  }
  position: relative;
  width: 100%;
  padding: 1.5rem 0;
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);
  background-color: #fff;
  .blog_img_col {
    .blog_list_img_ratio {
      position: relative;
      padding-top: 66.66%;
      .blog_list_img {
        max-width: 100%;
        position: absolute;
        top: 0px;
        left: 0px;
        width: 100%;
        height: 100%;
        object-fit: cover;
      }
    }
  }
  .blog_list_content {
    margin-left: 20px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    & .blog_title {
      h4 {
        display: -webkit-box;
        -webkit-line-clamp: 2;
        -webkit-box-orient: vertical;
        margin: 5px 0;
        overflow: hidden;
        text-overflow: ellipsis;
        cursor: pointer;
      }
      p {
        margin: 5px 0;
        color: rgb(118, 118, 118);
        font-size: 14px;
      }
    }
    .blog_content {
      display: -webkit-box;
      font-size: 15px;
      margin-bottom: 1rem;
      padding-right: 0.5rem;
      color: rgb(118, 118, 118);
      width: 100%;
      overflow: hidden;
      text-overflow: ellipsis;
      -webkit-line-clamp: 3;
      -webkit-box-orient: vertical;
      word-break: break-word;
      img {
        width: 100%;
      }
    }
    .btn_container {
      display: flex;
      align-items: center;
      justify-content: flex-start;
    }
  }
`;

export const BlogListHomePageWrapper = styled.div`
  margin-top: 30px;
  color: rgba(0, 0, 0, 0.87);
  width: 100%;
  border: 0;
  display: flex;
  position: relative;
  font-size: 0.875rem;
  min-width: 0;
  word-wrap: break-word;
  background: #fff;
  box-shadow: 0 1px 4px 0 rgb(0 0 0 / 14%);
  margin-top: 20%;
  border-radius: 6px;
  margin-bottom: 30px;
  flex-direction: column;
  &:hover {
    .manage_listing_top {
      transform: translateY(-40%);
      transition: all 300ms cubic-bezier(0.34, 1.61, 0.7, 1);
    }
  }
  .manage_listing_top {
    position: relative;
    padding-top: 52.5%;
    margin-top: -30px;
    margin-left: 15px;
    margin-right: 15px;
    border-radius: 6px;
    color: #fff;
    margin: 0 15px;
    transition: all 300ms cubic-bezier(0.34, 1.61, 0.7, 1);
    z-index: 3;
    background: transparent;
    border-bottom: none;
    img {
      max-width: 100%;
      position: absolute;
      top: 0px;
      left: 0px;
      width: 100%;
      height: 100%;
      object-fit: cover;
      box-shadow: 0 5px 15px -8px rgb(0 0 0 / 24%),
        0 8px 10px -5px rgb(0 0 0 / 20%);
      border-radius: 6px;
      pointer-events: none;
      vertical-align: middle;
      border: 0;
    }
  }
  .manage_listing_middle {
    flex: 1 1 auto;
    padding: 0.9375rem 20px;
    position: relative;
    -webkit-box-flex: 1;
    .manage_listing_middle_btn_list {
      top: -70px;
      left: 17px;
      right: 17px;
      width: calc(100% - 30px);
      z-index: 1;
      position: absolute;
      text-align: center;
      .listing_middle_btn {
        width: 41px;
        height: 41px;
        font-size: 20px;
        min-width: 41px;
        padding: 6px 12px;
        color: inherit;
        background: transparent;
        box-shadow: none;
        border: none;
        cursor: pointer;
        margin: 0.3125rem 1px;
        padding: 12px 30px;
        min-height: auto;
        touch-action: manipulation;
        box-sizing: border-box;
        font-family: "Roboto", "Helvetica", "Arial", sans-serif;
        display: inline-flex;
        align-items: center;
        user-select: none;
        justify-content: center;
        .listing_middle_label {
          margin: 0 5 5 3;
          width: 100%;
          display: inherit;
          align-items: inherit;
          justify-content: inherit;
          font-size: 20px;
          color: inherit;
          cursor: pointer;
          text-align: center;
          font-weight: 400;
          line-height: 1.42857143;
          white-space: nowrap;
          text-transform: uppercase;
          user-select: none;
        }
      }
    }
    .blog_content {
      color: #3c4858;
      min-height: auto;
      text-align: center;
      font-family: "Roboto", "Helvetica", "Arial", sans-serif;
      font-weight: 300;
      text-decoration: none;
      width: 100%;
      color: #272727;
      display: -webkit-box;
      -webkit-line-clamp: 3;
      -webkit-box-orient: vertical;
      overflow: hidden;
      text-overflow: ellipsis;
      word-break: break-word;
      font-size: 14px;
      line-height: 1.4;
      img {
        width: 100%;
      }
    }
    .listing_middle_content {
      color: #999;
      text-align: center;
      margin: 0 0 10px;
    }
  }
  .blog_name {
    display: -webkit-box;
    color: #3c4858;
    margin-top: 0px;
    min-height: auto;
    text-align: center;
    font-family: "Roboto", "Helvetica", "Arial", sans-serif;
    font-weight: 300;
    margin-bottom: 3px;
    text-decoration: none;
    transition: all 0.2s linear 0s;
    width: fit-content;
    font-size: 18px;
    font-weight: 600;
    line-height: 1.4;
    -webkit-line-clamp: 1;
    -webkit-box-orient: vertical;
    overflow: hidden;
    text-overflow: ellipsis;
    word-break: break-word;
  }
`;

export const BlogFeatureWrapper = styled.div`
  &:hover {
    padding: 21px 31px;
    .img_100 {
      transform: scale(1.2);
      transition: all 300ms cubic-bezier(0.34, 1.61, 0.7, 1);
    }
    .blog_feature_content {
      margin-bottom: 30px;
      transform: translateY(30px);
      transition: all 300ms cubic-bezier(0.34, 1.61, 0.7, 1);
      .blog_content {
        display: -webkit-box;
        img {
          width: 100%;
        }
      }
    }
  }
  position: relative;
  background-color: #fff;
  padding: 1rem;
  width: 100%;
  .blog_list_img_ratio {
    position: relative;
    padding-top: 66.66%;
    .img_100 {
      max-width: 100%;
      position: absolute;
      top: 0px;
      left: 0px;
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }
  .blog_feature_content {
    display: flex;
    flex-direction: column;
    width: 100%;
    .font_size_16 {
      font-size: 16px;
    }
    .font_size_12 {
      font-size: 12px;
    }
    h5 {
      margin: 5px 0px;
      display: -webkit-box;
      -webkit-line-clamp: 2;
      -webkit-box-orient: vertical;
      font-size: 20px;
      overflow: hidden;
      text-overflow: ellipsis;
      cursor: pointer;
    }
    p {
      margin: 5px 0;
      padding-bottom: 0;
      padding-right: 0.5rem;
      color: rgb(118, 118, 118);
      font-size: 14px;
    }
    .blog_content {
      display: none;
      font-size: 15px;
      margin-bottom: 1rem;
      padding-right: 0.5rem;
      color: rgb(118, 118, 118);
      width: 100%;
      overflow: hidden;
      text-overflow: ellipsis;
      -webkit-line-clamp: 5;
      -webkit-box-orient: vertical;
      word-break: break-word;
      img {
        width: 100%;
      }
    }
  }
`;

export const SmBlogFeatureWrapper = styled.div`
  @media ${DEVICE.DESKTOP_XL} {
    & .blog_feature_content {
      :hover {
        p {
          font-size: 10px !important;
        }
      }
      h4 {
        font-size: 14px !important;
      }
      p {
        font-size: 12px !important;
      }
    }
  }
  &:hover {
    padding: 10px 12px;
    .img_35 {
      transform: scale(1.2);
      transition: all 300ms cubic-bezier(0.34, 1.61, 0.7, 1);
    }
    .blog_feature_content {
      transform: translateX(15px);
      transition: all 300ms cubic-bezier(0.34, 1.61, 0.7, 1);
    }
  }
  background-color: #fff;
  position: relative;
  width: 100%;
  padding: 0.5rem 0px;
  .blog_list_img_ratio {
    position: relative;
    padding-top: 66.66%;
    .img_35 {
      max-width: 100%;
      position: absolute;
      top: 0px;
      left: 0px;
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }
  .blog_feature_content {
    display: flex;
    flex-direction: column;
    padding: 5px 5px;
    width: 100%;
    .font_size_16 {
      font-size: 16px;
    }
    .font_size_12 {
      font-size: 12px;
    }
    h4 {
      display: -webkit-box;
      -webkit-line-clamp: 2;
      -webkit-box-orient: vertical;
      margin-bottom: 0px;
      font-size: 15px;
      overflow: hidden;
      text-overflow: ellipsis;
      cursor: pointer;
    }
    p {
      margin: 0;
      padding-bottom: 0;
      padding-right: 0.5rem;
      color: rgb(118, 118, 118);
      font-size: 12px;
    }
    .blog_content {
      display: -webkit-box;
      font-size: 15px;
      margin-bottom: 1rem;
      padding-right: 0.5rem;
      color: rgb(118, 118, 118);
      width: 100%;
      overflow: hidden;
      text-overflow: ellipsis;
      -webkit-line-clamp: 5;
      -webkit-box-orient: vertical;
      word-break: break-word;
      img {
        width: 100%;
      }
    }
  }
`;

export const ShowMoreBtn = styled(Button)`
  background-color: #fff;
  display: inline-flex;
  align-items: center;
  user-select: none;
  touch-action: manipulation;
  height: 32px;
  padding: 4px 15px;
  font-size: 14px;
  color: rgb(0, 40, 120);
  background-color: geekblue;
  border: 1px solid royalblue;
  &:hover {
    background-color: royalblue;
    color: #fff;
  }
`;
