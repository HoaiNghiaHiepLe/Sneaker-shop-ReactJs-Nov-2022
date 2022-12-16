import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { Avatar } from "antd";
import { LogoutOutlined, UserOutlined } from "@ant-design/icons";
import { logoutAction } from "../../../../../redux/actions";
import { ROUTES } from "../../../../../constants";
import * as S from "./styles";

const UserDropDown = ({ userInfo }) => {
  const dispatch = useDispatch();

  return (
    <S.UserContainer>
      <div className="user_info_img">
        <Avatar size={100}>
          <UserOutlined />
        </Avatar>

        <p>{userInfo.data.email}</p>
      </div>

      {userInfo.data.role === "admin" ? (
        <>
          <div className="user_action_container">
            <Link to={ROUTES.USER.PROFILE} className="user_action">
              Thông tin tài khoản
            </Link>
          </div>
          <div className="user_action_container">
            <Link to={ROUTES.ADMIN.DASHBOARD} className="user_action">
              Tới trang quản trị
            </Link>
          </div>
        </>
      ) : (
        <>
          <div className="user_action_container">
            <Link to={ROUTES.USER.PROFILE} className="user_action">
              Thông tin tài khoản
            </Link>
          </div>
          <div className="user_action_container">
            <Link to={ROUTES.USER.PROFILE} className="user_action">
              Đơn hàng của bạn
            </Link>
          </div>
          <div className="user_action_container">
            <Link to={ROUTES.USER.PROFILE} className="user_action">
              Sản phẩm đã thích
            </Link>
          </div>
        </>
      )}
      {userInfo.data.id && (
        <div className="user_logout_container">
          <Link
            className="user_logout_btn"
            to={null}
            onClick={() => dispatch(logoutAction())}
          >
            <span>
              <LogoutOutlined style={{ marginRight: "5px" }} />
              Đăng xuất
            </span>
          </Link>
        </div>
      )}
    </S.UserContainer>
  );
};

export default UserDropDown;
