import { useState, useEffect } from "react";
import {
  Row,
  Col,
  Form,
  Menu,
  Table,
  Image,
  Input,
  Button,
  Card,
  Space,
  notification,
} from "antd";
import { useSelector, useDispatch } from "react-redux";
import {
  getUserDetailAction,
  updateUserAction,
  getOrderListAction,
  getFavoriteList,
} from "../../../../../redux/actions";
import { ROUTES, TITLES } from "../../../../../constants";

import * as S from "./styles";

const FavoriteProduct = () => {
  const dispatch = useDispatch();
  const { userInfo } = useSelector((state) => state.user);
  // const { wishlist } = useSelector((state) => state.wishlist);
  const { productList } = useSelector((state) => state.product);
  useEffect(() => {
    document.title = TITLES.USER.FAVORITE_PRODUCT;
  }, []);

  return (
    <S.FavoriteProductContainer>
      <S.FormTitle>Wish List</S.FormTitle>
    </S.FavoriteProductContainer>
  );
};

export default FavoriteProduct;
