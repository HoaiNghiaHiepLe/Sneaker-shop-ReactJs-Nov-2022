import React, { useMemo, useEffect, useState } from "react";
import { Row, Col } from "antd";
import moment from "moment";

import * as S from "./styles";

const BlogItem = ({ item }) => {
  const renderBlogImages = useMemo(() => {
    if (!item.blogImages?.length) return null;
    return item.blogImages?.map((item) => {
      return (
        <img
          className="blog_list_img"
          key={item.blogId}
          src={item.url}
          alt={item.name}
        />
      );
    });
  }, [item]);

  return (
    <S.BlogListWrapper key={item.id}>
      <Row gutter={(16, 0)}>
        <Col className="blog_img_col" xs={24} sm={10} lg={10} xl={10} xxl={10}>
          <div className="blog_list_img_ratio">{renderBlogImages}</div>
        </Col>
        <Col xs={24} sm={14} lg={14} xl={14} xxl={14}>
          <Col span={24}>
            <div className="blog_list_content">
              <div className="blog_title">
                <h2>{item.title}</h2>
                <p>
                  Đã đăng vào lúc{" "}
                  {moment(item.createdAt).format("kk:mm dddd DD/MM/YYYY")}
                </p>
              </div>
              <div
                className="blog_content"
                dangerouslySetInnerHTML={{ __html: item.content }}
              ></div>
              <div className="btn_container">
                <S.ShowMoreBtn className="show_btn">Xem thêm</S.ShowMoreBtn>
              </div>
            </div>
          </Col>
        </Col>
      </Row>
    </S.BlogListWrapper>
  );
};

const BlogItemHomePage = ({ item }) => {
  const renderBlogImages = useMemo(() => {
    if (!item.blogImages?.length) return null;
    return item.blogImages?.map((item) => {
      return (
        <img
          className="blog_list_img"
          key={item.blogId}
          src={item.url}
          alt={item.name}
        />
      );
    });
  }, [item]);

  return (
    <S.BlogListHomePageWrapper>
      <div className="manage_listing_top">{renderBlogImages}</div>
      <div className="manage_listing_middle">
        <div className="manage_listing_middle_btn_list">
          <span className="listing_middle_label">
            <div
              className="blog_content"
              dangerouslySetInnerHTML={{ __html: item.content }}
            />
          </span>
        </div>
        <h4 className="blog_name">{item.title}</h4>
        <p className="listing_middle_content">
          Khoảng {moment(item.createdAt).fromNow()}
        </p>
      </div>
    </S.BlogListHomePageWrapper>
  );
};

const RelatedBlogItem = ({ item }) => {
  const renderBlogImages = useMemo(() => {
    if (!item.blogImages?.length) return null;
    return item.blogImages?.map((item) => {
      return (
        <img
          className="img_100"
          key={item.blogId}
          src={item.url}
          alt={item.name}
        />
      );
    });
  }, [item]);
  return (
    <S.BlogFeatureWrapper key={item.id}>
      <div className="blog_list_img_ratio">{renderBlogImages}</div>
      <div className="blog_feature_content">
        <p>{moment(item.createdAt).format("kk:mm dddd DD/MM/YYYY")}</p>
        <h3>{item.title}</h3>
        <div
          className="blog_content"
          dangerouslySetInnerHTML={{ __html: item.content }}
        />
      </div>
    </S.BlogFeatureWrapper>
  );
};

const RelatedBlogDetailItem = ({ item }) => {
  const renderBlogImages = useMemo(() => {
    if (!item.blogImages?.length) return null;
    return item.blogImages?.map((item) => {
      return (
        <img
          className="img_35"
          key={item.blogId}
          src={item.url}
          alt={item.name}
        />
      );
    });
  }, [item]);

  return (
    <S.SmBlogFeatureWrapper key={item.id}>
      <Row>
        <Col xs={8} sm={10} lg={10} xl={8} xxl={8}>
          <div className="blog_list_img_ratio">{renderBlogImages}</div>
        </Col>
        <Col xs={16} sm={14} lg={14} xl={16} xxl={16}>
          <div className="blog_feature_content">
            <h4>{item.title}</h4>
            <p>{moment(item.createdAt).format("kk:mm dddd DD/MM/YYYY")}</p>
          </div>
        </Col>
      </Row>
    </S.SmBlogFeatureWrapper>
  );
};

export { BlogItem, BlogItemHomePage, RelatedBlogItem, RelatedBlogDetailItem };
