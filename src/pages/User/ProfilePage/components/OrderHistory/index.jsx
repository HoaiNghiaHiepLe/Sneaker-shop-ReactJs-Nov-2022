import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  Row,
  Col,
  Form,
  Menu,
  Table,
  Image,
  Popconfirm,
  Button,
  Card,
  notification,
  Tag,
} from "antd";
import moment from "moment";
import {
  getOrderListAction,
  changeOrderStatusAction,
} from "../../../../../redux/actions";
import { calcPrice, calcDiscount } from "../../../../../utils/function/product";
import { ROUTES, TITLES } from "../../../../../constants/";
import { FaShippingFast } from "react-icons/fa";
import { GiCancel } from "react-icons/gi";
import { TbCircleCheck } from "react-icons/tb";
import { BsClockHistory } from "react-icons/bs";
import * as S from "./styles";

const OrderHistory = () => {
  const dispatch = useDispatch();
  const { userInfo } = useSelector((state) => state.user);
  const { orderList } = useSelector((state) => state.order);
  useEffect(() => {
    document.title = TITLES.USER.ORDER_HISTORY;
  }, []);

  useEffect(() => {
    dispatch(getOrderListAction({ userId: userInfo.data.id }));
  }, [userInfo.data]);

  const handleCancelOrder = (status, id) => {
    if (status === "userCancel" || status === "cancel") {
      notification.warn({
        message: "Không thể thực hiện",
        description: "Đơn hàng này đã được hủy trước đó",
      });
    } else if (status === "delivering" || status === "done") {
      notification.error({
        message: "Thất bại",
        description: "Đơn hàng này không thể hủy được nữa",
      });
    } else {
      const selectedOrder = orderList.data.find((item) => item.id === id);
      const { orderProducts, ...originalOrderData } = selectedOrder;
      dispatch(
        changeOrderStatusAction({
          id: id,
          data: {
            ...originalOrderData,
            status: "userCancel",
          },
          callback: {
            getOrderList: () => {
              dispatch(getOrderListAction({ userId: userInfo.data.id }));
            },
          },
        })
      );
      notification.success({
        message: "Thành công",
        description: "Đơn hàng này đã bị hủy",
      });
    }
  };

  const tableColumns = [
    {
      title: "ID đơn hàng",
      dataIndex: "id",
      key: "id",
    },
    {
      title: "Tổng sản phẩm",
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
              calcPrice(calcDiscount(item.price, item.discount), item.quantity)
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
    {
      title: "Trạng thái",
      dataIndex: "status",
      key: "status",
      align: "center",
      render: (_, record) => {
        switch (record.status) {
          case "delivering": {
            return (
              <S.OrderStatus>
                <Tag color="blue">
                  <FaShippingFast />
                  Đang giao
                </Tag>
              </S.OrderStatus>
            );
          }
          case "cancel": {
            return (
              <S.OrderStatus>
                <Tag color="red">
                  <GiCancel />
                  Admin hủy
                </Tag>
              </S.OrderStatus>
            );
          }
          case "userCancel": {
            return (
              <S.OrderStatus>
                <Tag color="red">
                  <GiCancel />
                  User hủy
                </Tag>
              </S.OrderStatus>
            );
          }
          case "done": {
            return (
              <S.OrderStatus>
                <Tag color="green">
                  <TbCircleCheck />
                  Hoàn thành
                </Tag>
              </S.OrderStatus>
            );
          }
          default: {
            return (
              <S.OrderStatus>
                <Tag>
                  <BsClockHistory />
                  Chờ xử lý
                </Tag>
              </S.OrderStatus>
            );
          }
        }
      },
    },
    {
      title: "Tùy chọn",
      dataIndex: "actions",
      align: "center",
      key: "actions",
      render: (_, record) => {
        return (
          <>
            {record.status === "pending" && (
              <Popconfirm
                title="Xóa sản phẩm khỏi giỏ?"
                okText="Ok"
                cancelText="Hủy"
                onConfirm={() => handleCancelOrder(record.status, record.id)}
              >
                <Button type="danger" size="small" onClick={() => null}>
                  Hủy đơn
                </Button>
              </Popconfirm>
            )}
          </>
        );
      },
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
            <S.ExpandTableRow>
              <Row>
                <Col span={24}>
                  <Card>
                    <h3>Thông tin giao hàng</h3>
                    <p>{`Tên khách hàng: ${record.fullName}`}</p>
                    <p>{`Email: ${record.email}`}</p>
                    <p>{`Số điện thoại: ${record.phone}`}</p>
                    <p>{`Địa chỉ: ${record.address}, ${record.wardName}, ${record.districtName}, ${record.cityName}`}</p>
                  </Card>
                </Col>
                <Col span={24}>
                  <S.OrderItemContentTop>
                    <Col span={7}>
                      <div className="item_name">Sản phẩm</div>
                    </Col>
                    <Col span={3}>
                      <div className="item_brand">hãng</div>
                    </Col>
                    <Col span={3}>
                      <div className="item_size">Size</div>
                    </Col>
                    <Col span={3}>
                      <div className="item_price_each">Đơn giá</div>
                    </Col>
                    <Col span={3}>
                      <div className="item_quantity">Số lượng</div>
                    </Col>
                    <Col span={5}>
                      <div className="item_price_total">Thành tiền</div>
                    </Col>
                  </S.OrderItemContentTop>
                </Col>
                <Col span={24}>
                  {record.orderProducts.map((item) => {
                    return (
                      <S.OrderItemWrapper key={item.id}>
                        <Row>
                          <Col span={7}>
                            <Row>
                              <Col span={8}>
                                <div className="item_img">
                                  <img alt="" src={item.productImage} />
                                </div>
                              </Col>
                              <Col span={16}>
                                <div className="item_name">
                                  <h3>{item.productName}</h3>
                                </div>
                              </Col>
                            </Row>
                          </Col>
                          <Col span={3}>
                            <div className="item_brand">
                              {item.productBrand}
                            </div>
                          </Col>
                          <Col span={3}>
                            <div className="item_size">
                              <span>{item.size}</span>
                            </div>
                          </Col>
                          <Col span={3}>
                            <div className="item_price">
                              <s className="prime_price">
                                {item.price.toLocaleString()} đ
                              </s>
                              <span className="item_discount">
                                Đã giảm <b> {item.discount}%</b>
                              </span>
                              <span className="final_price_each">
                                {calcDiscount(
                                  item.price,
                                  item.discount
                                ).toLocaleString()}
                                đ
                              </span>
                            </div>
                          </Col>
                          <Col span={3}>
                            <div className="item_quantity">
                              <span>{item.quantity}</span>
                            </div>
                          </Col>
                          <Col span={5}>
                            <div className="item_price">
                              <span className="final_price">{`${calcPrice(
                                calcDiscount(item.price, item.discount),
                                item.quantity
                              ).toLocaleString()}đ`}</span>
                            </div>
                          </Col>
                        </Row>
                      </S.OrderItemWrapper>
                    );
                  })}
                </Col>
              </Row>
            </S.ExpandTableRow>
          ),
        }}
      />
    </S.OrderHistoryContainer>
  );
};

export default OrderHistory;
