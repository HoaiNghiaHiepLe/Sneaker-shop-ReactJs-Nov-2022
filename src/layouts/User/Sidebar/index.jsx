import { Avatar, Image } from "antd";
import { useLocation, useNavigate, Link } from "react-router-dom";
import { useSelector } from "react-redux";

import { ROUTES } from "../../../constants/";
import { SIDEBAR_ITEMS } from "./constants";

import * as S from "./styles";

function UserSidebar(props) {
  const { isShowSidebar } = props;
  const { pathname } = useLocation();
  const { userInfo } = useSelector((state) => state.user);
  const navigate = useNavigate();

  const renderSidebarItems = () => {
    return SIDEBAR_ITEMS.map((item, index) => {
      return (
        <S.SidebarItem
          key={index}
          to={item.path}
          $active={pathname === item.path}
        >
          {item.icon}
          {item.title}
        </S.SidebarItem>
      );
    });
  };

  return (
    <S.SidebarContainer isShowSidebar={isShowSidebar}>
      {userInfo.data.id ? (
        <div className="user_info">
          <Avatar
            shape="radio"
            className="user_avatar"
            src="https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png"
          />
          <h2>{userInfo.data.fullName}</h2>
        </div>
      ) : (
        <div className="login_btn">
          <S.LoginBtn onClick={() => navigate(ROUTES.LOGIN)}>
            Đăng nhập
          </S.LoginBtn>
        </div>
      )}
      <S.SidebarContent>{renderSidebarItems()}</S.SidebarContent>
      <div className="background_image"></div>
    </S.SidebarContainer>
  );
}

export default UserSidebar;
