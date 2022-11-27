import React, { useEffect, useState, useMemo } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Row, Col, Input, Select, Pagination } from "antd";
import { Link, generatePath } from "react-router-dom";

import {
  getBlogListAction,
  getBlogListFeatureAction,
} from "../../../redux/actions";

import TopWrapper from "../../../components/TopWrapper";
import { BREADCRUMB } from "./constants";
import { BLOG_LIST_LIMIT } from "../../../constants/";
import { BlogItem, RelatedBlogItem } from "../../../components/BlogItem";
import LoadingWrapper from "../../../components/LoadingWrapper";
import { ROUTES, TITLES } from "../../../constants/";
import * as S from "./styles";

const BlogListPage = () => {
  const dispatch = useDispatch();
  const { blogList, blogListFeature } = useSelector((state) => state.blog);

  const [filterParams, setFilterParams] = useState({
    keyword: "",
    order: undefined,
  });

  useEffect(() => {
    dispatch(
      getBlogListAction({
        params: {
          page: 1,
          limit: BLOG_LIST_LIMIT,
          order: "id.desc",
        },
      })
    );
    dispatch(
      getBlogListFeatureAction({
        params: {
          page: 1,
          limit: BLOG_LIST_LIMIT,
          order: "id.desc",
        },
      })
    );
    document.title = TITLES.USER.BLOG_LIST;
  }, []);

  const handleFilter = (key, value) => {
    setFilterParams({
      ...filterParams,
      [key]: value,
    });
    dispatch(
      getBlogListAction({
        params: {
          ...filterParams,
          [key]: value,
          page: 1,
          limit: BLOG_LIST_LIMIT,
        },
      })
    );
  };

  const handleChangePage = (page) => {
    dispatch(
      getBlogListAction({
        params: {
          page: page,
          limit: BLOG_LIST_LIMIT,
        },
      })
    );
  };
  
  const renderBlogList = () => {
    return blogList.data?.map((item) => {
      return (
        <Link
          to={generatePath(ROUTES.USER.BLOG_DETAILS, {
            id: `${item.slug}.${item.id}`,
          })}
          key={item.id}
          style={{ width: "100%" }}
        >
          <BlogItem item={item} />
        </Link>
      );
    });
  };

  const renderRelatedBlogList1 = () => {
    const newBlogListFeature = blogListFeature.data.filter(
      (item) => item.categoryId === 1
    );
    return newBlogListFeature?.slice(0, 2)?.map((item) => {
      return (
        <Link
          to={generatePath(ROUTES.USER.BLOG_DETAILS, {
            id: `${item.slug}.${item.id}`,
          })}
          style={{ width: "100%" }}
          key={item.id}
        >
          <RelatedBlogItem item={item} />
        </Link>
      );
    });
  };

  const renderRelatedBlogList2 = () => {
    const newBlogListFeature2 = blogListFeature.data.filter(
      (item) => item.categoryId === 2
    );
    return newBlogListFeature2?.slice(0, 2)?.map((item) => {
      return (
        <Link
          to={generatePath(ROUTES.USER.BLOG_DETAILS, {
            id: `${item.slug}.${item.id}`,
          })}
          style={{ width: "100%" }}
          key={item.id}
        >
          <RelatedBlogItem item={item} />
        </Link>
      );
    });
  };

  return (
    <>
      <TopWrapper breadcrumb={[...BREADCRUMB]} height={200} />
      <S.BlogListContainer>
        {blogList.loading ? (
          <></>
        ) : (
          <h3 style={{ color: "royalblue" }}>
            Có {blogList.meta.total} Bài viết
          </h3>
        )}
        <Row
          style={{
            marginLeft: "-8px",
            marginRight: "-8px",
            marginTop: "-5px",
          }}
          gutter={[16, 16]}
        >
          <Col
            xs={24}
            sm={24}
            lg={17}
            xl={17}
            xxl={17}
            style={{ paddingRight: 8, paddingLeft: 8 }}
          >
            <Row
              style={{
                marginLeft: "-4px",
                marginRight: "-4px",
                marginBottom: 10,
                marginTop: 10,
              }}
              gutter={[8, 8]}
            >
              <Col
                xs={{ span: 24, order: 2 }}
                sm={{ span: 6, order: 1 }}
                style={{ paddingRight: 4, paddingLeft: 4 }}
              >
                <Select
                  defaultValue={{
                    label: "Sắp xếp theo...",
                  }}
                  style={{ width: "100%" }}
                  onChange={(value) => handleFilter("order", value)}
                >
                  <Select.Option value={"id.desc"}>Mới nhất</Select.Option>
                  <Select.Option value={"id.asc"}>Cũ nhất</Select.Option>
                </Select>
              </Col>
              <Col
                xs={{ span: 24, order: 1 }}
                sm={{ span: 18, order: 2 }}
                style={{ paddingRight: 4, paddingLeft: 4 }}
              >
                <Input.Search
                  placeholder="Tìm bài viết ..."
                  enterButton
                  allowClear
                  onChange={(e) => handleFilter("keyword", e.target.value)}
                  value={filterParams.keyword}
                />
              </Col>
            </Row>
            {blogList.loading ? (
              <LoadingWrapper />
            ) : (
              <>
                <S.BlogListContent>
                  {renderBlogList()}
                  <Pagination
                    current={blogList.meta.page}
                    pageSize={BLOG_LIST_LIMIT}
                    total={blogList.meta.total}
                    onChange={(page) => handleChangePage(page)}
                    style={{ margin: "16px auto 0" }}
                  />
                </S.BlogListContent>
              </>
            )}
          </Col>
          <Col xs={24} sm={24} lg={7} xl={7} xxl={7}>
            <Row
              style={{
                marginLeft: "-8px",
                marginRight: "-8px",
              }}
              gutter={[16, 16]}
            >
              {blogList.loading ? (
                <LoadingWrapper />
              ) : (
                <>
                  <S.RelatedBlogContainer>
                    <Row>
                      <Col xs={24} sm={24} lg={24} xl={24} xxl={24}>
                        <div className="related_tag">
                          <div className="related_title">
                            Chia sẻ kinh nghiệm
                          </div>
                        </div>
                        <S.RelatedBlogContent>
                          {renderRelatedBlogList1()}
                        </S.RelatedBlogContent>
                      </Col>
                      <Col xs={24} sm={24} lg={24} xl={24} xxl={24}>
                        <div style={{ marginTop: 20 }} className="related_tag">
                          <div className="related_title">Review sản phẩm</div>
                        </div>
                        <S.RelatedBlogContent>
                          {renderRelatedBlogList2()}
                        </S.RelatedBlogContent>
                      </Col>
                    </Row>
                  </S.RelatedBlogContainer>
                </>
              )}
            </Row>
          </Col>
        </Row>
      </S.BlogListContainer>
    </>
  );
};

export default BlogListPage;
