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

import {
  updateUserAction,
  changeUserPasswordAction,
} from "../../../../../redux/actions";
import { ROUTES, TITLES } from "../../../../../constants/";
import * as S from "./styles";

const PasswordChange = () => {
  const { userInfo, changePasswordData } = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const [changePassForm] = Form.useForm();

  useEffect(() => {
    document.title = TITLES.USER.PASSWORD_CHANGE;
    if (changePasswordData.error) {
      changePassForm.setFields([
        {
          name: "password",
          errors: [changePasswordData.error],
        },
      ]);
    }
    return () => {
      changePassForm.resetFields();
    };
  }, [changePasswordData.error]);

  const handleChangeUserPassWord = (values) => {
    const { password, newPassword } = values;

    dispatch(
      changeUserPasswordAction({
        data: {
          email: userInfo.data.email,
          password,
        },
        newPassword,
        callback: {
          resetFields: () => {
            changePassForm.resetFields();
          },
          showMessage: () => {
            notification.success({
              message: "Thành công",
              description: "Mật khẩu của bạn đã được thay đổi",
            });
          },
        },
      })
    );
  };

  return (
    <S.PasswordChangeContainer>
      <S.FormTitle>Thay đổi mật khẩu</S.FormTitle>
      <Form
        form={changePassForm}
        name="changePassForm"
        layout="vertical"
        initialValues={{
          remember: true,
        }}
        onFinish={(values) => handleChangeUserPassWord(values)}
        autoComplete="off"
        style={{ padding: "0 2px" }}
      >
        <Form.Item
          label="Mật khẩu hiện tại"
          name="password"
          rules={[
            {
              required: true,
              message: "Please enter your password!",
            },
          ]}
        >
          <Input.Password />
        </Form.Item>
        <Form.Item
          label="Mật khẩu mới"
          name="newPassword"
          dependencies={["password"]}
          hasFeedback
          rules={[
            {
              required: true,
              message: "Hãy nhập mật khẩu mới của bạn",
            },
            {
              min: 6,
              message: "Mật khẩu phải có ít nhất 6 kí tự",
            },
            ({ getFieldValue }) => ({
              validator(_, value) {
                if (!value || getFieldValue("password") !== value) {
                  return Promise.resolve();
                }
                return Promise.reject(
                  new Error("Mật khẩu mới không được trùng với mật khẩu cũ!")
                );
              },
            }),
          ]}
        >
          <Input.Password />
        </Form.Item>
        <Form.Item
          label="Xác nhận mật khẩu mới"
          name="confirmNewPassword"
          dependencies={["newPassword"]}
          hasFeedback
          rules={[
            {
              required: true,
              message: "Hãy xác nhận mật khẩu mới!",
            },
            ({ getFieldValue }) => ({
              validator(_, value) {
                if (!value || getFieldValue("newPassword") === value) {
                  return Promise.resolve();
                }
                return Promise.reject(
                  new Error("Mật khẩu vừa nhập không trùng khớp!")
                );
              },
            }),
          ]}
        >
          <Input.Password />
        </Form.Item>
        <Form.Item>
          <Button type="primary" block htmlType="submit">
            Xác nhận
          </Button>
        </Form.Item>
      </Form>
    </S.PasswordChangeContainer>
  );
};

export default PasswordChange;
