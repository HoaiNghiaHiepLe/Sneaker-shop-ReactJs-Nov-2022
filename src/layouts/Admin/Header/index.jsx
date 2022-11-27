import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { Dropdown, Menu, Input, Avatar, Image, Row, Col } from "antd";
import { FaHome } from "react-icons/fa";
import { LogoutOutlined } from "@ant-design/icons";
import { FaUser } from "react-icons/fa";

import {
  getBlogListAction,
  getProductListAction,
} from "../../../redux/actions";
import {
  BLOG_LIST_LIMIT,
  PRODUCT_LIST_LIMIT,
} from "../../../constants/pagination";

import logoImage from "../../../assets/images/sneaker-world-golden.png";
import { ROUTES } from "../../../constants/routes";
import { logoutAction } from "../../../redux/actions";
import * as S from "./styles";

export default function Header() {
  const { userInfo } = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const [filterParams, setFilterParams] = useState({
    keyword: "",
    order: undefined,
  });
  const menu = (
    <Menu
      items={[
        {
          key: "Homepage",
          label: (
            <Link to={ROUTES.USER.HOME}>
              <span style={{ color: "royalblue" }}>Trang chủ</span>
            </Link>
          ),
          icon: <FaHome style={{ color: "royalblue" }} />,
        },
        {
          key: "userProfile",
          label: (
            <Link to={null}>
              <span style={{ color: "royalblue" }}>thông tin tài khoản</span>
            </Link>
          ),
          icon: <FaUser style={{ color: "royalblue" }} />,
        },
        {
          key: "logout",
          label: (
            <Link to={null} onClick={() => dispatch(logoutAction())}>
              <span>Đăng xuất</span>
            </Link>
          ),
          icon: <LogoutOutlined />,
          danger: true,
        },
      ]}
    />
  );
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
    dispatch(
      getProductListAction({
        params: {
          ...filterParams,
          [key]: value,
          page: 1,
          limit: PRODUCT_LIST_LIMIT,
        },
      })
    );
  };
  return (
    <S.HeaderContainer>
      <S.HeaderContent>
        <Col span={6} style={{ paddingRight: 4, paddingLeft: 4 }}>
          <div className="navBarLogo">
            <span>
              <Link to={ROUTES.ADMIN.DASHBOARD}>
                <img className="logo_img" src={logoImage} alt="" />
                SneakerWorld Admin
              </Link>
            </span>
          </div>
        </Col>
        <Col
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            paddingRight: 4,
            paddingLeft: 4,
          }}
          span={14}
        >
          <Input.Search
            style={{ width: "100%" }}
            placeholder="Tìm kiếm ..."
            enterButton
            allowClear
            onChange={(e) => handleFilter("keyword", e.target.value)}
            value={filterParams.keyword}
          />
        </Col>
        <Col span={4}>
          <S.DropdownContainer>
            <Dropdown style={{ width: 200 }} overlay={menu}>
              <div className="userInfo">
                <h2>{userInfo.data.fullName}</h2>
                <FaUser className="user_icon" />
              </div>
            </Dropdown>
          </S.DropdownContainer>
        </Col>
      </S.HeaderContent>
      <div className="background_image"></div>
    </S.HeaderContainer>
  );
}
