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
  Modal,
  message,
  notification,
} from "antd";
import { useSelector, useDispatch } from "react-redux";
import { CheckCircleTwoTone } from "@ant-design/icons";

import { MENU_ITEMS } from "./constant";

import { getUserInfoAction, updateUserAction } from "../../../redux/actions";

import { ROUTES, TITLES } from "../../../constants/";
import * as S from "./styles";

const ProfilePage = () => {
  const { userInfo, updateUserData } = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const [editForm] = Form.useForm();
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    document.title = TITLES.USER.PROFILE;
  }, []);

  const initialInfoValues = {
    fullName: userInfo.data.fullName,
  };

  const handleChangeUserInfo = (values) => {
    dispatch(
      updateUserAction({
        id: userInfo.data.id,
        values: values,
        callback: {
          openMessage: () => {
            message.success("Thay đổi thông tin thành công");
          },
          closeModal: () => {
            setShowModal(false);
          },
          getUserInfo: () => {
            dispatch(getUserInfoAction({ id: userInfo.data.id }));
          },
        },
      })
    );
  };
  return (
    <S.ProfileContainer>
      <Row gutter={[16, 16]}>
        <Col span={2}></Col>
        <Col span={20}>
          <>
            <S.FormTitle>Thông tin tài khoản</S.FormTitle>
            <div className="user_info">
              <div className="user_info_row">
                <p className="user_name">Tên người dùng:</p>
                <span>{userInfo.data?.fullName}</span>
              </div>
              <div className="user_info_row">
                <p className="user_email">Email:</p>
                <span>{userInfo.data?.email}</span>
              </div>
            </div>
            <div className="user_action">
              <Col offset={10}>
                <Button type="primary" onClick={() => setShowModal(true)}>
                  Sửa thông tin
                </Button>

                <Modal
                  open={showModal}
                  title="Thay đổi thông tin tài khoản"
                  okText="Cập nhật"
                  cancelText="Hủy"
                  onCancel={() => setShowModal(false)}
                  confirmLoading={updateUserData.loading}
                  onOk={() => {
                    editForm
                      .validateFields()
                      .then((values) => {
                        handleChangeUserInfo(values);
                      })
                      .catch((info) => {
                        console.log("Validate Failed:", info);
                      });
                  }}
                >
                  <Form
                    form={editForm}
                    name="editForm"
                    layout="vertical"
                    initialValues={initialInfoValues}
                  >
                    <Form.Item
                      name="fullName"
                      label="Tên người dùng"
                      rules={[
                        {
                          required: true,
                          message: "Bạn phải nhập tên người dùng",
                        },
                      ]}
                    >
                      <Input />
                    </Form.Item>
                  </Form>
                </Modal>
              </Col>
            </div>
          </>
        </Col>
        <Col span={2}></Col>
      </Row>
    </S.ProfileContainer>
  );
};

export default ProfilePage;
