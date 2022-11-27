import styled, { css } from "styled-components";

export const BlogListContainer = styled.div`
  margin: 15px auto;
  width: 90%;
  max-width: 1280px;
  & .breadcrumb_link:hover {
    color: royalblue;
  }
`;

export const BlogDetailContent = styled.div`
  padding: 20px;
  display: flex;
  flex-direction: column;
  -webkit-box-align: center;
  margin-top: 0.5rem;
  margin-bottom: 1rem;
  padding-top: 10px;
  background-color: rgb(255, 255, 255);
  border-radius: 4px;
  border-top: 2px solid rgb(217, 217, 217);
  img {
    width: 100%;
    padding: 5px;
  }
`;

export const RelatedBlogContainer = styled.div`
  margin-top: 49px;
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
`;
