import { useState, useEffect, useMemo } from "react";
import { Row, Col, Spin, Tooltip, notification } from "antd";
import { generatePath, Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import {
  getProductListAction,
  getFavoriteList,
  unFavoriteProductAction,
} from "../../../../../redux/actions";
import { ROUTES, TITLES } from "../../../../../constants";
import {
  calcDiscount,
  getSimilar,
} from "../../../../../utils/function/product";
import { FaHeartBroken } from "react-icons/fa";
import * as S from "./styles";

const FavoriteList = () => {
  const dispatch = useDispatch();
  const { userInfo } = useSelector((state) => state.user);
  const { productList } = useSelector((state) => state.product);
  const { favoriteList } = useSelector((state) => state.favoriteList);

  useEffect(() => {
    document.title = TITLES.USER.FAVORITE_LIST;
  }, []);

  const favoriteProductIds = favoriteList?.data?.map((item) => item.productId);

  const favoriteProduct = getSimilar(productList.data, favoriteProductIds);

  useEffect(() => {
    if (userInfo.data.id) {
      dispatch(getFavoriteList({ userId: userInfo.data.id }));
    }
  }, [userInfo.data]);

  useEffect(() => {
    if (favoriteProductIds.length !== 0)
      dispatch(
        getProductListAction({
          params: {
            page: 1,
            limit: 99,
            productId: favoriteProductIds,
          },
        })
      );
  }, [favoriteList.data]);

  const handleUnFavorite = (productId) => {
    const deletedWishlist = Object.assign(
      {},
      ...favoriteList.data.filter((item) => item.productId === productId)
    );
    console.log(
      "🚀 ~ file: index.jsx:56 ~ handleUnFavorite ~ deletedWishlist",
      deletedWishlist
    );
    dispatch(
      unFavoriteProductAction({
        id: deletedWishlist.id,
        userId: userInfo?.data?.id,
        callback: {
          getFavoriteList: () => {
            dispatch(getFavoriteList({ userId: userInfo.data.id }));
          },
          getFavoriteProductList: () => {
            dispatch(
              getProductListAction({
                params: {
                  page: 1,
                  limit: 99,
                  productId: favoriteProductIds,
                },
              })
            );
          },
        },
      })
    );
    notification.warn({
      message: "Đã xóa sản phẩm khỏi mục yêu thích",
      placement: "top",
      top: 100,
      duration: 2,
    });
  };

  const renderFavoriteProduct = () => {
    return favoriteProduct?.map((item) => {
      return (
        <Col xxl={6} lg={6} md={6} sm={8} xs={12} key={item.id}>
          <Link
            to={generatePath(ROUTES.USER.PRODUCT_DETAILS, {
              id: `${item.slug}.${item.id}`,
            })}
          >
            <S.ProductItem>
              <div className="product_image">
                <img alt="product" src={item.images[0].url} />
              </div>

              <div className="product_info">
                <Tooltip
                  className="product_name"
                  placement="topLeft"
                  title={item.name}
                >
                  <h3>{item.name}</h3>
                </Tooltip>
                <div className="item_price">
                  <s className="prime_price">{item.price.toLocaleString()} đ</s>
                  <span className="final_price_each">
                    {calcDiscount(item.price, item.discount).toLocaleString()}đ
                  </span>
                </div>
              </div>

              <div className="product_action">
                <Tooltip title="Xóa khỏi yêu thích">
                  <button
                    onClick={(e) => {
                      e.preventDefault();
                      handleUnFavorite(item.id);
                    }}
                  >
                    <FaHeartBroken className="un_favorite_icon" />
                  </button>
                </Tooltip>
              </div>
            </S.ProductItem>
          </Link>
        </Col>
      );
    });
  };

  return (
    <S.FavoriteProductContainer>
      <S.FormTitle>Sản phẩm yêu thích</S.FormTitle>
      {favoriteList.data.length === 0 ? (
        <Row gutter={[8, 8]}>
          <Col
            style={{
              height: "100%",
              display: "flex",
              justifyContent: "center",
              alignItem: "center",
            }}
            span={24}
          >
            <h3>Chưa có sản phẩm nào</h3>
          </Col>
        </Row>
      ) : (
        <Spin spinning={productList.loading}>
          <Row gutter={[8, 8]}>{renderFavoriteProduct()}</Row>
        </Spin>
      )}
    </S.FavoriteProductContainer>
  );
};

export default FavoriteList;
