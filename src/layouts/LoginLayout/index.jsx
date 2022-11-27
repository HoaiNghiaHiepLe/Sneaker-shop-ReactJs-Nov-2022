import { Fragment } from "react";
import { Outlet, Navigate } from "react-router-dom";
import { ROUTES } from "../../constants/routes";
export default function LoginLayout() {
  const accessToken = localStorage.getItem("accessToken");

  if (accessToken) return <Navigate to={ROUTES.USER.HOME} />;
  return (
    <Fragment>
      <Outlet />
    </Fragment>
  );
}
