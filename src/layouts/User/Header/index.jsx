import { useSelector, useDispatch } from "react-redux";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { Dropdown, Menu, Button, Badge, Avatar, Image, Row, Col } from "antd";
import { ShoppingCartOutlined, LogoutOutlined } from "@ant-design/icons";
import { MdSpaceDashboard } from "react-icons/md";
import { FaUser } from "react-icons/fa";

import logoImage from "../../../assets/images/sneaker-world-golden.png";
import { HEADER_ITEMS } from "./constants";
import { ROUTES } from "../../../constants/routes";
import { logoutAction } from "../../../redux/actions";
import { FaBars } from "react-icons/fa";
import * as S from "./styles";

export default function Header(props) {
  const { isShowSidebar, setIsShowSidebar } = props;

  const { sticky } = props;
  const { pathname } = useLocation();

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { userInfo } = useSelector((state) => state.user);
  const { cartList } = useSelector((state) => state.cart);

  const renderHeaderItems = () => {
    return HEADER_ITEMS.map((item, index) => {
      return (
        <li key={index}>
          <S.HeaderItem to={item.path} $active={pathname === item.path}>
            <span>{item.title}</span>
          </S.HeaderItem>
        </li>
      );
    });
  };

  const menu = (
    <Menu
      items={[
        userInfo.data.role === "admin" && {
          key: "dashboard",
          label: (
            <Link to={ROUTES.ADMIN.DASHBOARD}>
              <span style={{ color: "royalblue" }}>Trang quản lý</span>
            </Link>
          ),
          icon: <MdSpaceDashboard style={{ color: "royalblue" }} />,
        },
        {
          key: "userProfile",
          label: (
            <Link to={ROUTES.USER.PROFILE}>
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

  return (
    <S.HeaderContainer sticky={sticky}>
      <Row>
        <Col xs={1} lg={1} xl={1} xxl={2} />
        <Col xs={22} lg={22} xl={22} xxl={20}>
          <div className="header_content">
            <div className="mobile_menu">
              <Button
                icon={<FaBars />}
                onClick={() => setIsShowSidebar(!isShowSidebar)}
              ></Button>
            </div>
            <div className="navbar_Logo">
              <span>
                <Link to={ROUTES.USER.HOME}>
                  <img className="logo_img" src={logoImage} alt="" />
                  SneakerWorld
                </Link>
              </span>
            </div>
            <div className="navbar_menu">
              <ul>{renderHeaderItems()}</ul>
            </div>
            <div className="user_container">
              <Badge count={cartList.length}>
                <Button
                  className="cart_btn"
                  type="text"
                  icon={<ShoppingCartOutlined />}
                  onClick={() => navigate(ROUTES.USER.CHECKOUT)}
                ></Button>
              </Badge>
              {userInfo.data.id ? (
                <Dropdown overlay={menu}>
                  <div className="user_info">
                    <h2>{userInfo.data.fullName}</h2>
                    <Avatar
                      className="user_avatar"
                      src={<Image src="https://joeschmoe.io/api/v1/random" />}
                    />
                  </div>
                </Dropdown>
              ) : (
                <S.LoginBtn onClick={() => navigate(ROUTES.LOGIN)}>
                  Đăng nhập
                </S.LoginBtn>
              )}
            </div>
          </div>
        </Col>
        <Col xs={1} lg={1} xl={1} xxl={2} />
      </Row>
      <div className="background_image"></div>
    </S.HeaderContainer>
  );
}
