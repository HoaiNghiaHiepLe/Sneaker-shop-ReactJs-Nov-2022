import { useState } from "react";
import { useDispatch } from "react-redux";
import { generatePath, useNavigate, Link } from "react-router-dom";
import { Tooltip, notification, Modal, Button } from "antd";
import { deleteCartItemAction } from "../../../../../redux/actions";
import {
  calcTotalPrice,
  calcDiscount,
  calcPrice,
} from "../../../../../utils/function/product";
import { FaTrash } from "react-icons/fa";
import { ROUTES } from "../../../../../constants";
import * as S from "./styles";

const CartDropDown = ({ cartList }) => {
  const [showModal, setShowModal] = useState(false);
  const dispatch = useDispatch();

  const handleDeleteCartItem = (productId) => {
    setShowModal(true);
    if (showModal) {
      return Modal.confirm({
        title: "Bạn muốn xóa sản phẩm này khỏi giỏ hàng?",
        onOk: () => {
          dispatch(deleteCartItemAction({ productId: productId }));
          notification.warn({
            message: "Đã xoá sản phẩm khỏi giỏ hàng",
            placement: "top",
            top: 100,
            duration: 1,
          });
        },
      });
    }
  };

  const renderCartItems = () => {
    return cartList.map((item) => {
      return (
        <S.CartItemContainer key={item.productId}>
          <Link
            to={generatePath(ROUTES.USER.PRODUCT_DETAILS, {
              id: `${item.slug}.${item.productId}`,
            })}
            className="cart_item_link"
          >
            <div className="cart_item_image">
              <img alt="" src={item.image} />
            </div>
            <div className="cart_item_info">
              <Tooltip
                className="product_name"
                placement="topLeft"
                title={item.productName}
              >
                <h3 className="product_name">{item.productName}</h3>
              </Tooltip>
              <div className="product_quantity">
                <span className="product_amount">
                  Số lượng: {item.quantity}
                </span>
                <span className="product_price">
                  <span>
                    {`${calcPrice(
                      calcDiscount(item.price, item.discount),
                      item.quantity
                    ).toLocaleString()}`}
                    <sup>₫</sup>
                  </span>
                </span>
              </div>
            </div>
          </Link>
          <div
            className="cart_item_action"
            onClick={(e) => {
              e.stopPropagation();
              handleDeleteCartItem(item.productId);
            }}
          >
            <Tooltip title="Xóa sản phẩm khỏi giỏ">
              <div className="remove_product_btn">
                <FaTrash />
              </div>
            </Tooltip>
          </div>
        </S.CartItemContainer>
      );
    });
  };

  return (
    <S.CartContainer>
      {cartList.length === 0 ? (
        <div className="cart_empty">
          <img src="https://www.xanh.farm/assets/images/no-cart.png" alt="" />
          <p>Chưa có sản phẩm trong giỏ hàng</p>
        </div>
      ) : (
        <>
          <div className="cart_content">
            <p>Giỏ hàng</p>
            {renderCartItems()}
            <span className="cart_total_price">
              Tổng:
              {calcTotalPrice({
                cartList,
              }).toLocaleString()}
              <sup>₫</sup>
            </span>
          </div>
          <div className="cart_action_container">
            <Link className="cart_action" to={ROUTES.USER.CHECKOUT}>
              Xem giỏ hàng
            </Link>
          </div>
        </>
      )}
    </S.CartContainer>
  );
};

export default CartDropDown;
