import { useState, useEffect } from "react";
import {
  Row,
  Col,
  Form,
  Menu,
  Table,
  Image,
  Input,
  Button,
  Card,
  Space,
  notification,
} from "antd";
import { useSelector, useDispatch } from "react-redux";
import { CheckCircleTwoTone } from "@ant-design/icons";

import { MENU_ITEMS } from "./constant";

import {
  getUserDetailAction,
  updateUserAction,
  getOrderListAction,
  getFavoriteList,
} from "../../../redux/actions";

import { ROUTES, TITLES } from "../../../constants/";
import * as S from "./styles";

const ProfilePage = () => {
  const { userInfo } = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const [editForm] = Form.useForm();
  const [available, setAvailable] = useState(false);

  useEffect(() => {
    document.title = TITLES.USER.PROFILE;
    if (userInfo.data.id) {
      dispatch(getUserDetailAction({ id: userInfo.data.id }));
    }
  }, [userInfo.data.id]);

  useEffect(() => {
    if (userInfo.data.id) {
      dispatch(getFavoriteList());
    }
  }, [userInfo.data.id]);

  const initialInfoValues = {
    fullName: userInfo.data.fullName,
    email: userInfo.data.email,
  };

  const handleNotification = (description) => {
    notification.open({
      message: "Thông báo",
      description: description,
      icon: <CheckCircleTwoTone />,
    });
  };
  const handleEditUserInfo = (values) => {
    dispatch(
      updateUserAction({
        id: userInfo.data.id,
        values: values,
      })
    );
    setAvailable(false);
    handleNotification("Thay đổi thông tin thành công!");
  };

  return (
    <S.ProfileContainer>
      <Row gutter={[16, 16]}>
        <Col span={2}></Col>
        <Col span={20}>
          <>
            <S.FormTitle>Thông tin cá nhân</S.FormTitle>
            <Form
              form={editForm}
              name="editForm"
              layout="vertical"
              initialValues={initialInfoValues}
              onFinish={(values) => handleEditUserInfo(values)}
              autoComplete="off"
              style={{ padding: "0 2px" }}
            >
              <Form.Item
                label="Họ và tên"
                name="fullName"
                rules={[
                  { required: true, message: "Please input your fullName!" },
                ]}
              >
                <Input onChange={() => setAvailable(true)} />
              </Form.Item>

              <Form.Item
                label="Email"
                name="email"
                rules={[
                  { required: true, message: "Please input your email!" },
                  { type: "email", message: "Email không hợp lệ" },
                ]}
              >
                <Input onChange={() => setAvailable(true)} />
              </Form.Item>

              {available === true && (
                <Button type="primary" onClick={() => editForm.submit()} block>
                  Lưu thay đổi
                </Button>
              )}
            </Form>
          </>
        </Col>
        <Col span={2}></Col>
      </Row>
    </S.ProfileContainer>
  );
};

export default ProfilePage;
