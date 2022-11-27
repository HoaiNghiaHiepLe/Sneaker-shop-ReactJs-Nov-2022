import { Outlet } from "react-router-dom";
import { useSelector } from "react-redux";
import { useState } from "react";
import { Spin } from "antd";

import Header from "../User/Header";
import Footer from "../Footer";
import UserSidebar from "../User/Sidebar";

import LoadingWrapper from "../../components/LoadingWrapper";
import * as S from "./styles";

export default function UserLayout(props) {
  const [sticky, setSticky] = useState(false);
  const [isShowSidebar, setIsShowSidebar] = useState(false);

  const accessToken = localStorage.getItem("accessToken");
  const { userInfo } = useSelector((state) => state.user);

  const setHeader = () => {
    if (window.scrollY > 400) {
      setSticky(true);
    } else {
      setSticky(false);
    }
  };
  window.addEventListener("scroll", setHeader);

  return (
    <>
      <Header
        sticky={sticky}
        setSticky={setSticky}
        isShowSidebar={isShowSidebar}
        setIsShowSidebar={setIsShowSidebar}
      />
      {accessToken && userInfo.loading ? (
        <LoadingWrapper />
      ) : (
        <>
          <S.MainContainer sticky={sticky}>
            <UserSidebar isShowSidebar={isShowSidebar} />
            <S.DrawerOverlay
              isShowSidebar={isShowSidebar}
              onClick={() => setIsShowSidebar(!isShowSidebar)}
            />
            <S.MainContent>
              <Outlet />
            </S.MainContent>
          </S.MainContainer>
          <Footer />
        </>
      )}
    </>
  );
}
