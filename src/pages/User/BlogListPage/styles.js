import styled, { css } from "styled-components";
import { DEVICE } from "../../../constants/device";
export const BlogListContainer = styled.div`
  background-color: rgb(239, 239, 239);
  margin: 10px auto;
  width: 90%;
  max-width: 1280px;
  & .breadcrumb_link:hover {
    color: royalblue;
  }
`;

export const BlogListContent = styled.div`
  display: flex;
  flex-direction: column;
  -webkit-box-align: center;
  align-items: center;
  margin-top: 0.5rem;
  margin-bottom: 1rem;
  background-color: rgb(255, 255, 255);
  border-radius: 4px;
  border: 1px solid rgb(217, 217, 217);
`;

export const RelatedBlogContainer = styled.div`
  @media ${DEVICE.TABLET}, ${DEVICE.MOBILE} {
    display: none;
  }
  margin-top: 11.5px;
  & .related_tag {
    position: relative;
    margin: 0px auto 3px;
    width: 100%;
    &::before {
      position: absolute;
      content: "";
      bottom: 0px;
      width: 100%;
      height: 3px;
      background-color: royalblue;
    }
  }
  .related_title {
    display: inline-block;
    margin-right: 10px;
    padding: 6px 12px;
    width: fit-content;
    background-color: royalblue;
    color: white;
    font-size: 17px;
    font-weight: 400;
    border-top-left-radius: 2px;
    border-top-right-radius: 2px;
  }
`;

export const RelatedBlogContent = styled.div`
  background-color: rgb(255, 255, 255);
  border-bottom-left-radius: 4px;
  border-bottom-right-radius: 4px;
  border: 1px solid rgb(217, 217, 217);
`;
