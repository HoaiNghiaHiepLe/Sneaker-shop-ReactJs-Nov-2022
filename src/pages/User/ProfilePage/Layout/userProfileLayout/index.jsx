import { useLocation } from "react-router-dom";
import { Outlet } from "react-router-dom";
import { Col, Row } from "antd";

import BreadCrumb from "../../../../../components/BreadCrumb";
import NavigateMenu from "../NavigateMenu";

import { ROUTES, TITLES } from "../../../../../constants/";

import * as S from "./styles";

const UserProfileLayout = (props) => {
  const { pathname } = useLocation();

  const handleChangeBreadCrumb = () => {
    switch (pathname) {
      case `${ROUTES.USER.ORDER_HISTORY}`: {
        return [
          {
            title: "Trang chủ",
            path: ROUTES.USER.HOME,
          },
          {
            title: TITLES.USER.ORDER_HISTORY,
          },
        ];
      }
      case ROUTES.USER.WISHLIST: {
        return [
          {
            title: "Trang chủ",
            path: ROUTES.USER.HOME,
          },
          {
            title: TITLES.USER.WISHLIST,
          },
        ];
      }
      case ROUTES.USER.PASSWORD_CHANGE: {
        return [
          {
            title: "Trang chủ",
            path: ROUTES.USER.HOME,
          },
          {
            title: TITLES.USER.PASSWORD_CHANGE,
          },
        ];
      }
      default:
        return [
          {
            title: "Trang chủ",
            path: ROUTES.USER.HOME,
          },
          {
            title: TITLES.USER.PROFILE,
          },
        ];
    }
  };

  return (
    <S.Wrapper>
      <S.UserPageContent>
        <Row gutter={16}>
          <S.BreadCrumbWrapper>
            <BreadCrumb breadCrumbItems={handleChangeBreadCrumb()} />
          </S.BreadCrumbWrapper>
          <Col xxl={6} lg={6} md={24} sm={24} xs={24}>
            <NavigateMenu />
          </Col>
          <Col xxl={18} lg={18} md={24} sm={24} xs={24}>
            <Outlet />
          </Col>
        </Row>
      </S.UserPageContent>
    </S.Wrapper>
  );
};

export default UserProfileLayout;
