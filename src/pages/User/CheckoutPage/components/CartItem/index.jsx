import { Row, Col, Image, Modal, Button, InputNumber, Space } from "antd";
import { useDispatch } from "react-redux";
import { useState } from "react";

import {
  deleteCartItemAction,
  updateCartItemAction,
} from "../../../../../redux/actions";
import { RiDeleteBinLine } from "react-icons/ri";
import { AiOutlinePlus, AiOutlineMinus } from "react-icons/ai";
import { QuestionCircleOutlined } from "@ant-design/icons";

import * as S from "./styles";

const CartItem = ({ cartInfo }) => {
  const dispatch = useDispatch();
  const [showModal, setShowModal] = useState(false);

  const handleDeleteCartItem = (productId) => {
    setShowModal(true);
    if (showModal) {
      return Modal.confirm({
        title: "Bạn muốn xóa sản phẩm này khỏi giỏ hàng?",
        onOk: () => {
          dispatch(deleteCartItemAction({ productId: productId }));
        },
      });
    }
  };

  const handleChangeQuantity = (productId, value) => {
    dispatch(
      updateCartItemAction({
        productId: productId,
        quantity: value,
      })
    );
  };
  const calcDiscount = (currentPrice, discount) => {
    return currentPrice - (currentPrice * discount) / 100;
  };

  const calcPrice = (price, quantity) => price * quantity;

  return (
    <S.CartItemWrapper>
      <Row>
        <Col span={6}>
          <Image
            src={cartInfo.image}
            width={"100%"}
            height={"160px"}
            preview={false}
            style={{
              backgroundPosition: "center",
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat",
            }}
          />
        </Col>
        <Col span={18}>
          <S.CartItemContent>
            <S.CartItemContentTop>
              <S.CartItemTittle>{cartInfo.productName}</S.CartItemTittle>
              <span
                style={{ fontSize: "20px", color: "#f44336" }}
              >{`${calcPrice(
                calcDiscount(cartInfo.price, cartInfo.discount),
                cartInfo.quantity
              ).toLocaleString()}đ`}</span>
            </S.CartItemContentTop>
            <S.CartItemContentMid>
              <span>
                Thương hiệu:{" "}
                <span style={{ fontWeight: "bold" }}>
                  {cartInfo.productBrand}
                </span>
              </span>
              <br />
              <span>
                Size:{" "}
                <span style={{ fontWeight: "bold" }}>{cartInfo.size}</span>
              </span>
            </S.CartItemContentMid>
            <S.CartItemContentBot>
              <div
                style={{
                  width: "100px",
                }}
              >
                <InputNumber
                  min={1}
                  max={cartInfo.amount}
                  defaultValue={cartInfo.quantity}
                  onChange={(value) =>
                    handleChangeQuantity(cartInfo.productId, value)
                  }
                />
              </div>
              <Button
                danger
                ghost
                onClick={() => handleDeleteCartItem(cartInfo.productId)}
              >
                <RiDeleteBinLine />
              </Button>
            </S.CartItemContentBot>
          </S.CartItemContent>
        </Col>
      </Row>
    </S.CartItemWrapper>
  );
};

export default CartItem;
