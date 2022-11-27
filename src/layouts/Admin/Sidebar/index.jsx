import { Avatar, Image } from "antd";
import { useLocation } from "react-router-dom";
import { useSelector } from "react-redux";

import { SIDEBAR_ITEMS } from "./constants";
import * as S from "./styles";

function AdminSidebar() {
  const { pathname } = useLocation();

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
    <S.SidebarContainer>
      <S.SidebarContent>{renderSidebarItems()}</S.SidebarContent>
      <div className="background_image"></div>
    </S.SidebarContainer>
  );
}

export default AdminSidebar;
