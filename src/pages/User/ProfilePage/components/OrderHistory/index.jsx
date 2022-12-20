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
import moment from "moment";
import {
  getUserDetailAction,
  updateUserAction,
  getOrderListAction,
  getFavoriteList,
} from "../../../../../redux/actions";
import { ROUTES, TITLES } from "../../../../../constants/";
import * as S from "./styles";

const OrderHistory = () => {
  const dispatch = useDispatch();
  const { userInfo } = useSelector((state) => state.user);
  const { orderList } = useSelector((state) => state.order);
  useEffect(() => {
    document.title = TITLES.USER.ORDER_HISTORY;
    if (userInfo.data.id) {
      dispatch(getUserDetailAction({ id: userInfo.data.id }));
    }
  }, [userInfo.data.id]);

  useEffect(() => {
    if (userInfo.data.id) {
      dispatch(getOrderListAction({ userId: userInfo.data.id }));
    }
  }, [userInfo.data.id]);

  const calcDiscount = (currentPrice, discount) => {
    return currentPrice - (currentPrice * discount) / 100;
  };

  const calcTotal = (price, quantity) => price * quantity;

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
  const tableData = orderList?.data?.map((item) => ({ ...item, key: item.id }));
  return (
    <S.OrderHistoryContainer>
      <S.FormTitle>Lịch sử giao dịch</S.FormTitle>
      <Table
        columns={tableColumns}
        dataSource={tableData}
        pagination={false}
        expandable={{
          expandedRowRender: (record) => (
            <Row gutter={[16, 16]}>
              <Col span={12}>
                <Card>
                  {record.orderProducts.map((item) => (
                    <Card key={item.id}>
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
    </S.OrderHistoryContainer>
  );
};

export default OrderHistory;
