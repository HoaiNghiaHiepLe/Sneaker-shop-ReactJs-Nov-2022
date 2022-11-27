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
import { AiOutlineEdit } from "react-icons/ai";
import { CheckCircleTwoTone } from "@ant-design/icons";
import moment from "moment";

import { MENU_ITEMS } from "./constant";

import {
  getUserDetailAction,
  updateUserAction,
  getOrderList,
  getFavoriteList,
} from "../../../redux/actions";

import * as S from "./styles";

const ProfilePage = () => {
  const { userInfo } = useSelector((state) => state.user);
  console.log(
    "🚀 ~ file: index.jsx ~ line 33 ~ ProfilePage ~ userInfo",
    userInfo.data.password
  );

  const { orderList } = useSelector((state) => state.order);

  const { cartList } = useSelector((state) => state.cart);

  const { productDetail } = useSelector((state) => state.product);

  const [available, setAvailable] = useState(false);
  const [currentKey, setCurrentKey] = useState(undefined);
  const dispatch = useDispatch();
  const [editForm] = Form.useForm();
  const [changePassForm] = Form.useForm();

  useEffect(() => {
    if (userInfo.data.id) {
      dispatch(getUserDetailAction({ id: userInfo.data.id }));
    }
  }, [userInfo.data.id]);

  useEffect(() => {
    if (userInfo.data.id) {
      dispatch(getFavoriteList());
    }
  }, [userInfo.data.id]);

  useEffect(() => {
    if (userInfo.data.id) {
      dispatch(getOrderList({ userId: userInfo.data.id }));
    }
  }, [userInfo.data.id]);

  useEffect(() => {
    if (userInfo.data.id) {
      changePassForm.resetFields();
    }
  }, []);

  const initialInfoValues = {
    fullName: userInfo.data.fullName,
    email: userInfo.data.email,
  };

  const initialUserInfoValues = {
    email: userInfo.data.email,
    password: "",
    newPassword: "",
    confirmNewPassword: "",
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

  const renderMenuItem = () => {
    return MENU_ITEMS.map((item, index) => {
      const key = index + 1;
      return (
        <S.MenuItem
          key={key}
          icon={item.icon}
          onClick={() => setCurrentKey(key)}
          active={key === currentKey}
        >
          {<span>{item.label}</span>}
        </S.MenuItem>
      );
    });
  };

  const tableColumns = [
    {
      title: "ID đơn hàng",
      dataIndex: "id",
      key: "id",
    },
    {
      title: "Số lượng sản phẩm",
      dataIndex: "orderProducts",
      key: "orderProducts",
      render: (orderProducts) => `${orderProducts.length} sản phẩm`,
    },
    {
      title: "Tổng tiền",
      dataIndex: "totalPrice",
      key: "totalPrice",
      render: (_, record) => {
        return (
          record.orderProducts
            .map((item) =>
              calcTotal(calcDiscount(item.price, item.discount), item.quantity)
            )
            .reduce((total, price) => total + price)
            .toLocaleString() + "đ"
        );
      },
    },
    {
      title: "Thời gian giao dịch",
      dataIndex: "createdAt",
      key: "createdAt",
      render: (createdAt) => moment(createdAt).format("DD/MM/YYYY HH:mm"),
    },
  ];

  const calcDiscount = (currentPrice, discount) => {
    return currentPrice - (currentPrice * discount) / 100;
  };

  const calcTotal = (price, quantity) => price * quantity;

  const calcTotalPrice = () => {
    if (cartList.length > 0) {
      return cartList
        .map((item) => calcDiscount(item.price, item.discount) * item.quantity)
        .reduce((total, price) => total + price);
    } else {
      return 0;
    }
  };

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

  const renderMenuContent = (key) => {
    switch (key) {
      default:
        return (
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
        );
        break;
      case 2:
        return (
          <>
            <S.FormTitle>Lịch sử giao dịch</S.FormTitle>
            <Table
              columns={tableColumns}
              dataSource={orderList.data}
              rowKey="id"
              pagination={false}
              expandable={{
                expandedRowRender: (record) => (
                  <Row gutter={[16, 16]}>
                    <Col span={12}>
                      <Card>
                        {record.orderProducts.map((item) => (
                          <>
                            <Card>
                              <p>{`Tên sản phẩm: ${item.productName}`}</p>
                              <p>{`Số lượng: ${item.quantity}`}</p>
                              <p>{`Giá tiền: ${calcDiscount(
                                item.price,
                                item.discount
                              ).toLocaleString()}đ`}</p>
                              <p>{`Tổng tiền: ${calcTotal(
                                calcDiscount(item.price, item.discount),
                                item.quantity
                              ).toLocaleString()}đ `}</p>
                            </Card>
                          </>
                        ))}
                      </Card>
                    </Col>
                    <Col span={12}>
                      <Card>
                        <p>{`Tên khách hàng: ${record.fullName}`}</p>
                        <p>{`Email: ${record.email}`}</p>
                        <p>{`Số điện thoại: ${record.phone}`}</p>
                        <p>{`Địa chỉ: ${record.address}, ${record.wardName}, ${record.districtName}, ${record.cityName}`}</p>
                      </Card>
                    </Col>
                  </Row>
                ),
              }}
            />
          </>
        );
        break;
      case 3:
        return (
          <>
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
                        new Error(
                          "The two passwords that you entered do not match!"
                        )
                      );
                    },
                  }),
                ]}
              >
                <Input type="password" />
              </Form.Item>
              {available === false && (
                <Button
                  type="primary"
                  block
                  onClick={() => changePassForm.submit()}
                >
                  Lưu thay đổi
                </Button>
              )}
            </Form>
          </>
        );
    }
  };

  return (
    <>
      <Row gutter={[16, 16]}>
        <Col span={2}></Col>
        <Col span={20}>
          <Row style={{ marginTop: "28px" }} gutter={[16, 16]}>
            <Col span={6}>
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
              <Menu>{renderMenuItem()}</Menu>
            </Col>
            <Col span={18}>
              <Card>{renderMenuContent(currentKey)}</Card>
            </Col>
          </Row>
        </Col>
        <Col span={2}></Col>
      </Row>
    </>
  );
};

export default ProfilePage;
