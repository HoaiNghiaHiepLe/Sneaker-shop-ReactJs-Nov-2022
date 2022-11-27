import {
  Row,
  Button,
  Table,
  Input,
  Col,
  List,
  Space,
  Empty,
  Image,
} from "antd";
import { useNavigate, Link, generatePath } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { RiDeleteBin6Line } from "react-icons/ri";

import { ROUTES } from "../../../../../constants/routes";
import {
  updateCartItemAction,
  deleteCartItemAction,
} from "../../../../../redux/actions";
import CartItem from "../CartItem";

import * as S from "./styles";

const Cart = ({ setStep }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { cartList } = useSelector((state) => state.cart);
  const calcDiscount = (currentPrice, discount) => {
    return currentPrice - (currentPrice * discount) / 100;
  };

  const calcTotalPrice = () => {
    if (cartList.length > 0) {
      return cartList
        .map((item) => calcDiscount(item.price, item.discount) * item.quantity)
        .reduce((total, price) => total + price);
    } else {
      return 0;
    }
  };

  return (
    <>
      <Row style={{ marginTop: "24px" }}>
        <Col span={2}></Col>
        <Col span={20} >
          <Row  gutter={[16, 16]}>
            <Col  span={17}>
              {cartList.length > 0 ? (
                cartList.map((item) => {
                  return <CartItem style={{ backgroundColor: "#fff" }} key={item.productId} cartInfo={item} />;
                })
              ) : (
                <Empty
                  image={
                    <Image
                      style={{ position: "relative" }}
                      preview={false}
                      src="https://www.xanh.farm/assets/images/no-cart.png"
                    />
                  }
                  description={
                    <>
                      <S.EmptyDescription>Giỏ hàng trống</S.EmptyDescription>
                      <div
                        style={{
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          position: "absolute",
                          bottom: 60,
                          left: 0,
                          right: 0,
                        }}
                      >
                        <S.EmptyBtn
                          onClick={() => navigate(ROUTES.USER.PRODUCT_LIST)}
                        >
                          Mua sắm ngay
                        </S.EmptyBtn>
                      </div>
                    </>
                  }
                />
              )}
            </Col>
            <Col span={7}>
              <S.CartInfo>
                <List>
                  <List.Item>
                    <h3>Thống kê giỏ hàng</h3>
                  </List.Item>
                  <S.ListItem>
                    <span>Số lượng:</span>
                    <span>{`${cartList.length} sản phẩm`}</span>
                  </S.ListItem>
                  <S.ListItem>
                    <span>Đơn giá:</span>
                    <span>{`${calcTotalPrice().toLocaleString()}đ`}</span>
                  </S.ListItem>
                  <List.Item>
                    <Input addonBefore={"Mã giảm giá"} />
                    <span></span>
                  </List.Item>
                  <S.ListItem>
                    <span
                      style={{
                        fontSize: "16px",
                        fontWeight: 600,
                      }}
                    >
                      Tổng tiền tạm tính:
                    </span>
                    <span
                      style={{
                        fontSize: "16px",
                        fontWeight: 600,
                        color: "#f44336",
                      }}
                    >{`${calcTotalPrice().toLocaleString()}đ`}</span>
                  </S.ListItem>
                </List>
                {cartList.length === 0 ? (
                  <S.PayMentBtn disabled>Thanh toán</S.PayMentBtn>
                ) : (
                  <S.PayMentBtn onClick={() => setStep(1)}>
                    Mua hàng
                  </S.PayMentBtn>
                )}
              </S.CartInfo>
            </Col>
          </Row>
        </Col>
        <Col span={2}></Col>
      </Row>
    </>
  );
};

export default Cart;
