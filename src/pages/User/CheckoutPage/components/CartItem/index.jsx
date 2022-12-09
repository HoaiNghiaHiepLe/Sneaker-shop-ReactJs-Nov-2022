import { Row, Col, Image, Modal, Button, InputNumber, Space } from "antd";
import { useDispatch } from "react-redux";
import { Link, generatePath } from "react-router-dom";
import { useState } from "react";

import {
  deleteCartItemAction,
  updateCartItemAction,
} from "../../../../../redux/actions";
import { calcPrice, calcDiscount } from "../../../../../utils/function/product";
import { ROUTES, TITLES } from "../../../../../constants/";
import { FaTrash } from "react-icons/fa";
import { TiMinus, TiPlus } from "react-icons/ti";

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

  const handleChangeQuantityBtn = (productId, quantity, type) => {
    dispatch(
      updateCartItemAction({
        productId: productId,
        quantity: type === "plus" ? quantity + 1 : quantity - 1,
      })
    );
  };
  const handleChangeQuantityInput = (productId, quantity) => {
    dispatch(
      updateCartItemAction({
        productId: productId,
        quantity: quantity,
      })
    );
  };

  return (
    <>
      <S.CartItemWrapper>
        <Row>
          <Col span={7}>
            <Link
              to={generatePath(ROUTES.USER.PRODUCT_DETAILS, {
                id: `${cartInfo.slug}.${cartInfo.productId}`,
              })}
            >
              <Row>
                <Col span={8}>
                  <div className="item_img">
                    <img alt="" src={cartInfo.image} />
                  </div>
                </Col>
                <Col span={16}>
                  <div className="item_name">
                    <h3>{cartInfo.productName}</h3>
                  </div>
                </Col>
              </Row>
            </Link>
          </Col>
          <Col span={3}>
            <div className="item_brand">{cartInfo.productBrand}</div>
          </Col>
          <Col span={3}>
            <div className="item_size">{cartInfo.size}</div>
          </Col>
          <Col span={3}>
            <div className="item_price">
              <s className="prime_price">{cartInfo.price.toLocaleString()} đ</s>
              <span className="item_discount">
                Tiết kiệm <b> {cartInfo.discount}%</b>
              </span>
              <span className="final_price_each">
                {calcDiscount(
                  cartInfo.price,
                  cartInfo.discount
                ).toLocaleString()}
                đ
              </span>
            </div>
          </Col>
          <Col span={3}>
            <div className="item_quantity">
              <S.ChangeQuantityBtn
                icon={<TiMinus />}
                onClick={() => {
                  if (cartInfo.quantity === 1) return null;
                  handleChangeQuantityBtn(
                    cartInfo.productId,
                    cartInfo.quantity,
                    "minus"
                  );
                }}
              ></S.ChangeQuantityBtn>
              <S.ChangeQuantityInput
                min={1}
                max={cartInfo.amount}
                defaultValue={cartInfo.quantity}
                value={cartInfo.quantity}
                onChange={(quantity) => {
                  if (quantity > cartInfo.amount) return null;
                  handleChangeQuantityInput(cartInfo.productId, quantity);
                }}
              />
              <S.ChangeQuantityBtn
                icon={<TiPlus />}
                onClick={() => {
                  if (cartInfo.quantity > cartInfo.amount - 1) return null;
                  handleChangeQuantityBtn(
                    cartInfo.productId,
                    cartInfo.quantity,
                    "plus"
                  );
                }}
              ></S.ChangeQuantityBtn>
            </div>
          </Col>
          <Col span={3}>
            <div className="item_price">
              <span className="final_price">{`${calcPrice(
                calcDiscount(cartInfo.price, cartInfo.discount),
                cartInfo.quantity
              ).toLocaleString()}đ`}</span>
            </div>
          </Col>
          <Col span={2}>
            <div className="item_action">
              <Button onClick={() => handleDeleteCartItem(cartInfo.productId)}>
                <FaTrash className="delete_icon" />
              </Button>
            </div>
          </Col>
        </Row>
      </S.CartItemWrapper>
    </>
  );
};

export default CartItem;
