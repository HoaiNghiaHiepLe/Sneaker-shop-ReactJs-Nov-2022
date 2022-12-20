import { Row, Input, Col, List, Empty, Image } from "antd";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

import { ROUTES } from "../../../../../constants/routes";
import CartItem from "../CartItem";
import {
  calcTotalPrice,
  calcDiscount,
} from "../../../../../utils/function/product";

import * as S from "./styles";

const Cart = ({ setStep }) => {
  const navigate = useNavigate();
  const { cartList } = useSelector((state) => state.cart);
  const { productList } = useSelector((state) => state.product);

  return (
    <>
      <Row style={{ marginTop: "24px" }}>
        <Col span={0}></Col>
        <Col span={24}>
          <Row gutter={[16, 16]}>
            <Col span={17}>
              {cartList.length > 0 ? (
                <>
                  <Row>
                    <Col span={24}>
                      <S.CartItemContentTop>
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
                        <Col span={3}>
                          <div className="item_price_total">Thành tiền</div>
                        </Col>
                        <Col span={2}>
                          <div className="item_action">Thao tác</div>
                        </Col>
                      </S.CartItemContentTop>
                    </Col>
                  </Row>
                  <S.CartItemContainer>
                    {cartList.map((item, index) => {
                      return (
                        <CartItem
                          style={{ backgroundColor: "#fff" }}
                          key={index}
                          cartInfo={item}
                          cartList={cartList}
                          productList={productList}
                        />
                      );
                    })}
                  </S.CartItemContainer>
                </>
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
                    <span>Tạm tính:</span>
                    <span>{`${calcTotalPrice({
                      cartList,
                    }).toLocaleString()}đ`}</span>
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
                      Tổng tiền:
                    </span>
                    <span
                      style={{
                        fontSize: "16px",
                        fontWeight: 600,
                        color: "#f44336",
                      }}
                    >{`${calcTotalPrice({
                      cartList,
                    }).toLocaleString()}đ`}</span>
                  </S.ListItem>
                </List>
                {cartList.length === 0 ? (
                  <S.PayMentBtn disabled>Thanh toán</S.PayMentBtn>
                ) : (
                  <S.PayMentBtn onClick={() => setStep(1)}>
                    <span>Mua hàng</span>
                  </S.PayMentBtn>
                )}
              </S.CartInfo>
            </Col>
          </Row>
        </Col>
        <Col span={0}></Col>
      </Row>
    </>
  );
};

export default Cart;
