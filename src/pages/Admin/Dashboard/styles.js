import styled from "styled-components";
import { Button } from "antd";

export const DashboardPage = styled.div`
  .material_icon {
    font-family: "Material Icons";
    font-weight: normal;
    font-style: normal;
    font-size: 24px;
    line-height: 1;
    letter-spacing: normal;
    text-transform: none;
    display: inline-block;
    white-space: nowrap;
    word-wrap: normal;
    direction: ltr;
    -webkit-font-feature-settings: "liga";
    -webkit-font-smoothing: antialiased;
  }
  .golden_background {
    background: linear-gradient(60deg, #d8c154, #d2b254);
    box-shadow: 0 4px 20px 0 rgb(0 0 0 / 14%),
      0 7px 10px -5px rgb(255 152 0 / 40%);
  }
  .golden_text {
    color: #d2b254;
  }
  .orange_background {
    background: linear-gradient(60deg, #ffa726, #fb8c00);
    box-shadow: 0 4px 20px 0 rgb(0 0 0 / 14%),
      0 7px 10px -5px rgb(255 152 0 / 40%);
  }
  .orange_text {
    color: #ffa726;
  }
  .green_background {
    background: linear-gradient(60deg, #66bb6a, #43a047);
    box-shadow: 0 4px 20px 0 rgb(0 0 0 / 14%),
      0 7px 10px -5px rgb(76 175 80 / 40%);
  }
  .green_text {
    color: #4caf50;
  }
  .red_background {
    background: linear-gradient(60deg, #ef5350, #e53935);
    box-shadow: 0 4px 20px 0 rgb(0 0 0 / 14%),
      0 7px 10px -5px rgb(244 67 54 / 40%);
  }
  .red_text {
    color: #f44336;
  }
  .blue_background {
    background: linear-gradient(60deg, #26c6da, #00acc1);
    box-shadow: 0 4px 20px 0 rgb(0 0 0 / 14%),
      0 7px 10px -5px rgb(0 172 193 / 40%);
  }
  .blue_text {
    color: #00acc1;
  }
`;

export const InformContainer = styled.div`
  padding: 0 15px;
  cursor: pointer;
  &:hover {
    .inform_symbol {
      transform: scale(1.3);
      transition: all 300ms cubic-bezier(0.34, 1.61, 0.7, 1);
    }
  }
  .inform_content {
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
    margin-top: 30px;
    border-radius: 6px;
    margin-bottom: 30px;
    flex-direction: column;
    .inform_Top {
      min-height: 100px;
      text-align: right;
      background: transparent;
      box-shadow: none;
      color: #fff;
      margin: 0 15px;
      padding: 0;
      position: relative;
      .inform_symbol {
        float: left;
        padding: 15px;
        margin-top: -20px;
        margin-right: 15px;
        border-radius: 3px;
        background-color: #999;

        span {
          width: 56px;
          height: 56px;
          overflow: unset;
          font-size: 36px;
          text-align: center;
          line-height: 56px;
          margin-bottom: 1px;
          user-select: none;
          flex-shrink: 0;
        }
      }
      .inform_title {
        color: #999;
        margin: 0;
        font-size: 14px;
        margin-top: 0;
        padding-top: 10px;
        margin-bottom: 0;
      }
      .inform_info {
        color: #3c4858;
        margin-top: 0px;
        min-height: auto;
        font-family: "Roboto", "Helvetica", "Arial", sans-serif;
        font-weight: 300;
        margin-bottom: 3px;
        text-decoration: none;
      }
    }
    .inform_bottom {
      border-top: 1px solid #eee;
      margin-top: 20px;
      border: 0;
      margin: 0 15px 10px;
      display: flex;
      padding: 0;
      align-items: center;
      padding-top: 10px;
      border-radius: 0;
      justify-content: space-between;
      background-color: transparent;
      .inform_bottom_content {
        color: #999;
        display: inline-flex;
        font-size: 12px;
        line-height: 22px;
        .inform_bottom_icon {
          position: relative;
          margin-right: 5px;
          fill: currentColor;
          display: inline-block;
          font-size: 1rem;
          transition: fill 200ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
          flex-shrink: 0;
          user-select: none;
        }
        .inform_bottom_title {
          font-size: 12px;
          line-height: 22px;
        }
      }
    }
  }
`;

export const TrackBoardSection = styled.div`
  width: calc(100% + 30px);
  margin: 0 -15px;
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  box-sizing: border-box;
  &:hover {
    .trackBoard_symbol {
      transform: scale(1.2);
      transition: all 300ms cubic-bezier(0.34, 1.61, 0.7, 1);
    }
  }
  .trackBoard_container {
    padding: 0 15px;
    flex-grow: 0;
    max-width: 100%;
    flex-basis: 100%;
    margin: 0;
    box-sizing: border-box;
    .trackBoard_content {
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
      margin-top: 30px;
      border-radius: 6px;
      margin-bottom: 30px;
      flex-direction: column;
      .trackBoard_top {
        background: transparent;
        box-shadow: none;
        border-radius: calc(0.25rem - 1px) calc(0.25rem - 1px) 0 0;
        color: #fff;
        margin: 0 15px;
        padding: 0;
        position: relative;
        .trackBoard_symbol {
          float: left;
          padding: 15px;
          margin-top: -20px;
          margin-right: 15px;
          border-radius: 3px;
          background-color: #999;
          color: #fff;
          font-size: 0.875rem;
          word-wrap: break-word;
          .trackBoard_svg {
            width: 24px;
            height: 24px;
            margin: 5px 4px 0px;
            text-align: center;
            line-height: 33px;
            fill: currentColor;
            display: inline-block;
            font-size: 1.5rem;
            transition: fill 200ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
            flex-shrink: 0;
            user-select: none;
            color: #fff;
          }
        }
        .trackBoard_title {
          color: #3c4858;
          margin-top: 15px;
          min-height: auto;
          font-family: "Roboto", "Helvetica", "Arial", sans-serif;
          font-weight: 300;
          margin-bottom: 0px;
          text-decoration: none;
        }
      }
      .trackBoard_bottom {
        flex: 1 1 auto;
        padding: 0.9375rem 20px;
        position: relative;
        -webkit-box-flex: 1;
        color: rgba(0, 0, 0, 0.87);
        font-size: 0.875rem;
        word-wrap: break-word;
      }
    }
    .img_ratio {
      margin-top: 100px;
      position: relative;
      padding-top: 40%;
      img {
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
`;

export const ManageListingContainer = styled.div`
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
      transform: translateY(-30%);
      transition: all 300ms cubic-bezier(0.34, 1.61, 0.7, 1);
    }
  }
  .manage_listing_top {
    margin-top: -30px;
    margin-left: 15px;
    margin-right: 15px;
    border-radius: 6px;
    color: #fff;
    margin: 0 15px;
    padding: 0;
    position: relative;
    transition: all 300ms cubic-bezier(0.34, 1.61, 0.7, 1);
    z-index: 3;
    background: transparent;
    border-bottom: none;
    img {
      max-height: 280px;
      width: 100%;
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
      top: -50px;
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
        .listing_middle_btn_label {
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
          .listing_middle_btn_svg {
            margin-right: 0px;
            top: 0;
            width: 18px;
            height: 18px;
            display: inline-block;
            position: relative;
            vertical-align: middle;
            font-size: 1.5rem;
            transition: fill 200ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
            flex-shrink: 0;
            user-select: none;
            fill: currentColor;
            touch-action: none;
            overflow: hidden;
          }
        }
      }
    }
    .listing_middle_title {
      color: #3c4858;
      margin-top: 0px;
      min-height: auto;
      text-align: center;
      font-family: "Roboto", "Helvetica", "Arial", sans-serif;
      font-weight: 300;
      margin-bottom: 3px;
      text-decoration: none;
      a {
        color: #3c4858;
        margin-top: 0.625rem;
        min-height: auto;
        font-family: "Roboto", "Helvetica", "Arial", sans-serif;
        font-weight: 300;
        margin-bottom: 0.75rem;
        text-decoration: none;
      }
    }
    .listing_middle_content {
      color: #999;
      text-align: center;
      margin: 0 0 10px;
    }
  }
  .manage_listing_bottom {
    border-top: 1px solid #eee;
    border: 0;
    margin: 0 15px 10px;
    display: flex;
    padding: 0;
    align-items: center;
    padding-top: 10px;
    border-radius: 0;
    justify-content: space-between;
    background-color: transparent;
    .listing_bottom_title {
      color: inherit;
      h4 {
        margin-top: 0px;
        margin-bottom: 0px;
      }
    }
    .listing_bottom_sub_title {
      margin: 0;
      padding-top: 7px;
      padding-bottom: 7px;
      color: #999;
      display: inline-flex;
      font-size: 12px;
      line-height: 22px;
      .listing_bottom_svg {
        top: 4px;
        width: 16px;
        height: 16px;
        position: relative;
        margin-right: 5px;
        display: inline-block;
        font-size: 1.5rem;
        transition: fill 200ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
        flex-shrink: 0;
        user-select: none;
        fill: currentColor;
        touch-action: none;
      }
      p {
        margin: 0;
      }
    }
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
