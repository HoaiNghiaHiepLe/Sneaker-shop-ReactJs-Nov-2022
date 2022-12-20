import { Navigate, Link, useLocation } from "react-router-dom";
import { useSelector } from "react-redux";
import { Image } from "antd";
import { AiOutlineEdit } from "react-icons/ai";
import { MENU_ITEMS } from "../../constant";
import { ROUTES } from "../../../../../constants";

// import userImg from "../../../../assets/user/user.png";

import * as S from "./styles";

const NavigateMenu = () => {
  const location = useLocation();
  const { pathname } = location;
  const { userInfo } = useSelector((state) => state.user);

  const accessToken = localStorage.getItem("accessToken");

  if (!accessToken) return <Navigate to={ROUTES.USER.HOME} />;

  const renderUserSidebar = () => {
    return MENU_ITEMS.map((item, index) => {
      return (
        <Link className="user_sidebar-item-link" to={item.path} key={index}>
          <S.UserSidebarItem
            className="user_sidebar-item"
            $active={pathname === item.path}
          >
            {item.icon}
            <p>{item.title}</p>
          </S.UserSidebarItem>
        </Link>
      );
    });
  };

  return (
    <S.UserSideBar>
      <div className="user__avatar">
        <S.AvatarWrapper>
          <Image
            style={{
              borderRadius: "50%",
            }}
            width={150}
            height={150}
            src="https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png"
            preview={false}
          />
          <S.EditBtn>
            <AiOutlineEdit
              style={{
                backgroundPosition: "center",
                backgroundSize: "cover",
                padding: 0,
              }}
            />
          </S.EditBtn>
        </S.AvatarWrapper>
        <S.UserName>{userInfo.data?.fullName}</S.UserName>

        <h3>{userInfo.data.userName}</h3>
      </div>
      <ul className="user_sidebar">{renderUserSidebar()}</ul>
    </S.UserSideBar>
  );
};

export default NavigateMenu;
