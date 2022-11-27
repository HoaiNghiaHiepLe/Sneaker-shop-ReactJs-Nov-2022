import React, { Fragment, useEffect, useMemo } from "react";
import { Col, Row, Badge } from "antd";
import {
  useNavigate,
  Link,
  generatePath,
  useParams,
  createSearchParams,
  Navigate,
} from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { useSelector, useDispatch } from "react-redux";
import {
  getProductListAction,
  getCategoryListAction,
  getBlogListAction,
  getReviewListAction,
} from "../../../redux/actions";

import { CustomerSliderHomePage } from "../../../components/CustomerSlider";
import CustomerReviews from "../../../components/CustomerReviews";
import BrandSlider from "../../../components/BrandSlider";
import ProductItem from "../../../components/ProductItem";
import LoadingWrapper from "../../../components/LoadingWrapper";
import { BlogItemHomePage } from "../../../components/BlogItem";
import { CAROUSEL_LINK } from "./constant";
import video_carousel from "../../../assets/videos/video_carousel.mp4";
import {
  HOMEPAGE_PRODUCT_LIST_LIMIT,
  BLOG_LIST_LIMIT,
} from "../../../constants/pagination";

import { ROUTES, TITLES } from "../../../constants/";
import * as S from "./styles";

const UserHomePage = () => {
  const { productList } = useSelector((state) => state.product);
  const { blogList } = useSelector((state) => state.blog);
  const { reviewList } = useSelector((state) => state.review);

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { id } = useParams();

  useEffect(() => {
    document.title = TITLES.USER.HOME;
    dispatch(
      getProductListAction({
        params: {
          page: 1,
          limit: HOMEPAGE_PRODUCT_LIST_LIMIT,
        },
      })
    );
    dispatch(
      getBlogListAction({
        params: {
          page: 1,
          limit: BLOG_LIST_LIMIT,
        },
      })
    );

    dispatch(
      getCategoryListAction({
        params: {
          page: 1,
        },
      })
    );
    dispatch(getReviewListAction({ productId: id }));
  }, [id]);

  const useNavigateSearch = () => {
    const navigate = useNavigate();
    return (pathname, params) =>
      navigate(`${pathname}?${createSearchParams(params)}`);
  };
  const navigateSearch = useNavigateSearch();

  const renderNewProductList = () => {
    return productList.data.map((item) => {
      return (
        item.isNew && (
          <Col xs={24} sm={12} lg={8} xl={6} xxl={6} key={item.id}>
            <Link
              to={generatePath(ROUTES.USER.PRODUCT_DETAILS, {
                id: `${item.slug}.${item.id}`,
              })}
            >
              <Badge.Ribbon color="red" text="Mới">
                <ProductItem item={item} />
              </Badge.Ribbon>
            </Link>
          </Col>
        )
      );
    });
  };

  const renderBestSellerList = () => {
    return productList.data.map((item) => {
      return (
        item.discount > 0 && (
          <Col xs={24} sm={12} lg={8} xl={6} xxl={6} key={item.id}>
            <Link
              to={generatePath(ROUTES.USER.PRODUCT_DETAILS, {
                id: `${item.slug}.${item.id}`,
              })}
            >
              {item.isNew ? (
                <Badge.Ribbon color="red" text="Mới">
                  <ProductItem item={item} />
                </Badge.Ribbon>
              ) : (
                <ProductItem item={item} />
              )}
            </Link>
          </Col>
        )
      );
    });
  };
  const renderBlogList = useMemo(() => {
    return blogList.data?.map((item) => {
      return (
        <Col xs={24} sm={12} lg={12} xl={8} xxl={8} key={item.id}>
          <Link
            to={generatePath(ROUTES.USER.BLOG_DETAILS, {
              id: `${item.slug}.${item.id}`,
            })}
            key={item.id}
            style={{ width: "100%" }}
          >
            <BlogItemHomePage item={item} />
          </Link>
        </Col>
      );
    });
  }, [blogList.data]);

  const renderCarousel = () => {
    return CAROUSEL_LINK?.map((item, i) => {
      return (
        <SwiperSlide key={i}>
          <img src={item.path} alt="" />
        </SwiperSlide>
      );
    });
  };

  return (
    <Fragment>
      {productList.loading ? (
        <LoadingWrapper />
      ) : (
        <S.Container>
          <S.CarouselContainer>
            <Swiper
              modules={[]}
              centeredSlides={true}
              slidesPerView={1}
              allowSlideNext={false}
              allowSlidePrev={false}
              coverflowEffect={{
                rotate: 50,
                stretch: 0,
                depth: 100,
                modifier: 1,
                slideShadows: true,
              }}
              loop={true}
              className="mySwiper"
            >
              <div className="swipper_wraper">
                <SwiperSlide>
                  <div className="ratio_video">
                    <video src={video_carousel} autoPlay muted loop />
                  </div>
                </SwiperSlide>
              </div>
            </Swiper>
          </S.CarouselContainer>

          <S.ProductListContainer>
            <S.ContainerTiltle>
              <span className="title_underline">Sản phẩm mới</span>
            </S.ContainerTiltle>
            <Row style={{ textAlign: "center", marginTop: "20px" }}>
              <Col span={2}></Col>
              <Col span={20}>
                <Row gutter={[16, 16]}>{renderNewProductList()}</Row>
                <S.ShowMoreBtn
                  style={{ margin: "20px" }}
                  onClick={() => navigate(ROUTES.USER.PRODUCT_LIST)}
                >
                  Xem thêm
                </S.ShowMoreBtn>
              </Col>
              <Col span={2}></Col>
            </Row>
          </S.ProductListContainer>
          <S.BestSellerContainer>
            <S.ContainerTiltle>
              <span className="title_underline">Sản phẩm đang khuyến mãi</span>
            </S.ContainerTiltle>
            <Row style={{ textAlign: "center", marginTop: "20px" }}>
              <Col span={2}></Col>
              <Col span={20}>
                <Row gutter={[16, 16]}>{renderBestSellerList()}</Row>
                <S.ShowMoreBtn
                  style={{ margin: "20px" }}
                  onClick={() => navigate(ROUTES.USER.PRODUCT_LIST)}
                >
                  Xem thêm
                </S.ShowMoreBtn>
              </Col>
              <Col span={2}></Col>
            </Row>
          </S.BestSellerContainer>
          <S.BrandsContainer>
            <S.ContainerTiltle>
              <span className="title_underline">Các thương hiệu</span>
            </S.ContainerTiltle>
            <S.CarouselBrands>
              <Row>
                <Col span={2}></Col>
                <Col span={20} style={{ width: "100%" }}>
                  <BrandSlider />
                </Col>
                <Col span={2}></Col>
              </Row>
            </S.CarouselBrands>
          </S.BrandsContainer>
          <S.CollectionContainer>
            <S.ContainerTiltle>
              <span className="title_underline">Bộ sưu tập</span>
            </S.ContainerTiltle>
            <Row gutter={[8, 8]}>
              <Col xs={24} lg={8} xl={8} xxl={8}>
                <div
                  className="collection_content"
                  onClick={() =>
                    navigateSearch(ROUTES.USER.PRODUCT_LIST, { gender: "1" })
                  }
                >
                  <img
                    src="https://runner-web.surge.sh/static/media/categorymen.17448f1d.jpeg"
                    alt=""
                  />
                  <div className="collection_title">
                    <h2>Giày nam</h2>
                  </div>
                </div>
              </Col>
              <Col xs={24} lg={8} xl={8} xxl={8}>
                <div
                  className="collection_content"
                  onClick={() =>
                    navigateSearch(ROUTES.USER.PRODUCT_LIST, { gender: "2" })
                  }
                >
                  <img
                    src="https://runner-web.surge.sh/static/media/categorywoman.ad01e00d.jpeg"
                    alt=""
                  />
                  <div className="collection_title">
                    <h2>Giày nữ</h2>
                  </div>
                </div>
              </Col>
              <Col xs={24} lg={8} xl={8} xxl={8}>
                <Link>
                  <div className="collection_content">
                    <img
                      src="https://cf.shopee.vn/file/e21671f7f4520e3e9668278dec07aaad"
                      alt=""
                    />
                    <div className="collection_title">
                      <h2>Giày theo hãng</h2>
                    </div>
                  </div>
                </Link>
              </Col>
            </Row>
          </S.CollectionContainer>
          <S.RegisterContainer>
            <div className="register_content">
              <S.ContainerTiltle to={ROUTES.REGISTER}>
                <span className="title_underline white_text text_shadow">
                  Đăng ký ngay
                </span>
              </S.ContainerTiltle>
              <p>
                Để trở thành thành viên của gia đình Sneaker World để nhận được
                thông báo về những sản phẩm mới nhất và những ưu đãi đặc biệt.
              </p>
            </div>
            <div className="register_background"> </div>
          </S.RegisterContainer>
          <S.BlogContainer>
            <S.ContainerTiltle>
              <span className="title_underline">Bài Viết mới nhất</span>
            </S.ContainerTiltle>
            <Row style={{ textAlign: "center" }}>
              <Col span={2}></Col>
              <Col span={20}>
                <Row gutter={[16, 16]}>{renderBlogList}</Row>
                <S.ShowMoreBtn onClick={() => navigate(ROUTES.USER.BLOG_LIST)}>
                  Xem thêm
                </S.ShowMoreBtn>
              </Col>
              <Col span={2}></Col>
            </Row>
          </S.BlogContainer>
          <S.ReviewContainer>
            <S.ContainerTiltle>
              <span className="title_underline">
                Khách hàng và sneakerWorld
              </span>
              <CustomerSliderHomePage />
              <CustomerReviews reviewList={reviewList} />
            </S.ContainerTiltle>
          </S.ReviewContainer>
        </S.Container>
      )}
    </Fragment>
  );
};

export default UserHomePage;
