import { useEffect } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import jwtDecode from "jwt-decode";
import { useDispatch } from "react-redux";

import LoginLayout from "./layouts/LoginLayout";
import UserLayout from "./layouts/UserLayout";
import AdminLayout from "./layouts/AdminLayout";

import AdminDashboard from "./pages/Admin/Dashboard";
import AdminProductListPage from "./pages/Admin/ProductListPage";
import AdminCreateProductPage from "./pages/Admin/CreateProductPage";
import AdminUpdateProductPage from "./pages/Admin/UpdateProductPage";
import AdminCategoryListPage from "./pages/Admin/CategoryListPage";
import AdminCreateCategoryPage from "./pages/Admin/CreateCategoryPage";
import AdminUpdateCategoryPage from "./pages/Admin/UpdateCategoryPage";
import AdminBlogListPage from "./pages/Admin/BlogListPage";
import AdminCreateBlogPage from "./pages/Admin/CreateBlogPage";
import AdminUpdateBlogPage from "./pages/Admin/UpdateBlogPage";
import AdminUserManagePage from "./pages/Admin/UserManagePage";
import AdminUserUpdatePage from "./pages/Admin/UserUpdatePage";

import UserHomePage from "./pages/User/HomePage";
import AboutPage from "./pages/User/AboutPage";
import BlogListPage from "./pages/User/BlogListPage";
import BlogDetailPage from "./pages/User/BlogDetailPage";
import CheckoutPage from "./pages/User/CheckoutPage";
import UserProductListPage from "./pages/User/ProductListPage";
import ProductDetailPage from "./pages/User/ProductDetailPage";
import ProfilePage from "./pages/User/ProfilePage";

import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";

import { ROUTES } from "./constants/";
import { getUserInfoAction } from "./redux/actions/";

import * as S from "./styles";

function App() {
  const dispatch = useDispatch();
  const { pathname } = useLocation();

  useEffect(() => {
    const accessToken = localStorage.getItem("accessToken");

    if (accessToken) {
      const decodeInfo = jwtDecode(accessToken);

      dispatch(getUserInfoAction({ id: decodeInfo.sub }));
    }
  }, []);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <S.GlobalContainer>
      <Routes>
        <Route element={<AdminLayout />}>
          <Route
            path={ROUTES.ADMIN.DASHBOARD}
            element={<AdminDashboard />}
          ></Route>
          <Route
            path={ROUTES.ADMIN.PRODUCT_LIST}
            element={<AdminProductListPage />}
          ></Route>
          <Route
            path={ROUTES.ADMIN.CREATE_PRODUCT}
            element={<AdminCreateProductPage />}
          ></Route>
          <Route
            path={ROUTES.ADMIN.UPDATE_PRODUCT}
            element={<AdminUpdateProductPage />}
          ></Route>
          <Route
            path={ROUTES.ADMIN.CATEGORY_LIST}
            element={<AdminCategoryListPage />}
          ></Route>
          <Route
            path={ROUTES.ADMIN.CREATE_CATEGORY}
            element={<AdminCreateCategoryPage />}
          ></Route>
          <Route
            path={ROUTES.ADMIN.UPDATE_CATEGORY}
            element={<AdminUpdateCategoryPage />}
          ></Route>
          <Route
            path={ROUTES.ADMIN.BLOG_LIST}
            element={<AdminBlogListPage />}
          ></Route>
          <Route
            path={ROUTES.ADMIN.CREATE_BLOG}
            element={<AdminCreateBlogPage />}
          ></Route>
          <Route
            path={ROUTES.ADMIN.UPDATE_BLOG}
            element={<AdminUpdateBlogPage />}
          ></Route>
          <Route
            path={ROUTES.ADMIN.USER_MANAGE}
            element={<AdminUserManagePage />}
          ></Route>
          <Route
            path={ROUTES.ADMIN.USER_UPDATE}
            element={<AdminUserUpdatePage />}
          ></Route>
        </Route>
        <Route element={<UserLayout />}>
          <Route path={ROUTES.USER.HOME} element={<UserHomePage />}></Route>
          <Route path={ROUTES.USER.ABOUT} element={<AboutPage />}></Route>
          <Route
            path={ROUTES.USER.BLOG_LIST}
            element={<BlogListPage />}
          ></Route>
          <Route
            path={ROUTES.USER.BLOG_DETAILS}
            element={<BlogDetailPage />}
          ></Route>
          <Route path={ROUTES.USER.CHECKOUT} element={<CheckoutPage />}></Route>
          <Route
            path={ROUTES.USER.PRODUCT_LIST}
            element={<UserProductListPage />}
          ></Route>
          <Route
            path={ROUTES.USER.PRODUCT_DETAILS}
            element={<ProductDetailPage />}
          ></Route>
          <Route path={ROUTES.USER.PROFILE} element={<ProfilePage />}></Route>
        </Route>
        <Route element={<LoginLayout />}>
          <Route path={ROUTES.LOGIN} element={<LoginPage />}></Route>
          <Route path={ROUTES.REGISTER} element={<RegisterPage />}></Route>
        </Route>
      </Routes>
    </S.GlobalContainer>
  );
}

export default App;
