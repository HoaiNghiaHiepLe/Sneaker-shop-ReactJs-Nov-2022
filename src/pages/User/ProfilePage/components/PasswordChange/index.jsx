import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
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
import { CheckCircleTwoTone } from "@ant-design/icons";

import moment from "moment";
import {
  getUserDetailAction,
  updateUserAction,
  getOrderListAction,
  getFavoriteList,
} from "../../../../../redux/actions";
import { ROUTES, TITLES } from "../../../../../constants/";
import * as S from "./styles";

const PasswordChange = () => {
  const { userInfo } = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const [available, setAvailable] = useState(false);
  const [changePassForm] = Form.useForm();
  useEffect(() => {
    document.title = TITLES.USER.PASSWORD_CHANGE;
    if (userInfo.data.id) {
      changePassForm.resetFields();
    }
  }, []);
  const handleNotification = (description) => {
    notification.open({
      message: "Thông báo",
      description: description,
      icon: <CheckCircleTwoTone />,
    });
  };
  const handleSubmitChangePass = (values) => {
    dispatch(
      updateUserAction({
        id: userInfo.data.id,
        password: values,
      })
    );
    setAvailable(true);
    changePassForm.resetFields();
    handleNotification("Thay đổi mật khẩu thành công!");
  };
  const initialUserInfoValues = {
    email: userInfo.data.email,
    password: "",
    newPassword: "",
    confirmNewPassword: "",
  };
  return (
    <S.PasswordChangeContainer>
      <S.FormTitle>Thay đổi mật khẩu</S.FormTitle>
      <Form
        form={changePassForm}
        name="changePassForm"
        layout="vertical"
        initialValues={initialUserInfoValues}
        onFinish={(values) => handleSubmitChangePass(values.newPassword)}
        autoComplete="off"
        style={{ padding: "0 2px" }}
      >
        <Form.Item label="Email" name="email">
          <Input disabled />
        </Form.Item>

        <Form.Item
          label="Mật khẩu hiện tại"
          name="password"
          dependencies={["password"]}
          rules={[
            {
              required: true,
              message: "Please enter your password!",
            },
            ({ getFieldValue }) => ({
              validator(_, value) {
                if (
                  value &&
                  getFieldValue("password") === userInfo.data.password
                ) {
                  return Promise.resolve();
                }
                return Promise.reject(new Error("Password is wrong!"));
              },
            }),
          ]}
        >
          <Input type="password" />
        </Form.Item>
        <Form.Item
          label="Mật khẩu mới"
          name="newPassword"
          rules={[
            {
              required: true,
              message: "This field is required!",
            },
            {
              min: 6,
              message: "This field must contain at least 6 character!",
            },
          ]}
        >
          <Input type="password" />
        </Form.Item>
        <Form.Item
          label="Xác nhận mật khẩu mới"
          name="confirmNewPassword"
          dependencies={["newPassword"]}
          rules={[
            {
              required: true,
              message: "Please confirm your password!",
            },
            ({ getFieldValue }) => ({
              validator(_, value) {
                if (!value || getFieldValue("newPassword") === value) {
                  return Promise.resolve();
                }
                return Promise.reject(
                  new Error("The two passwords that you entered do not match!")
                );
              },
            }),
          ]}
        >
          <Input type="password" />
        </Form.Item>
        {available === false && (
          <Button type="primary" block onClick={() => changePassForm.submit()}>
            Lưu thay đổi
          </Button>
        )}
      </Form>
    </S.PasswordChangeContainer>
  );
};

export default PasswordChange;
