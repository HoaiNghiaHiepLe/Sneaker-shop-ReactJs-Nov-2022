import { Fragment } from "react";
import {
  Row,
  Col,
  Button,
  notification,
  Popconfirm,
  Radio,
  Modal,
  Tooltip,
} from "antd";
import { useDispatch } from "react-redux";
import { Link, generatePath } from "react-router-dom";
import { useState } from "react";

import {
  changeCartItemAction,
  deleteCartItemAction,
  updateCartItemAction,
} from "../../../../../redux/actions";
import {
  calcPrice,
  calcDiscount,
  getDifference,
  getDifference2,
} from "../../../../../utils/function/product";
import { ROUTES } from "../../../../../constants/";
import { FaTrash } from "react-icons/fa";
import { TiMinus, TiPlus } from "react-icons/ti";

import * as S from "./styles";

const CartItem = ({ cartList, cartInfo, productList }) => {
  const dispatch = useDispatch();
  const [onClickId, setOnClickId] = useState();

  const [showModal, setShowModal] = useState(false);
  const [selectedOptionId, setSelectedOptionId] = useState("");

  const selectedProduct = productList.data?.find(
    (item) => item.id === cartInfo.productId
  );
  const selectedOptionData = selectedProduct?.options?.find(
    (item) => item.id === selectedOptionId
  );

  const handleDeleteCartItem = (productId, optionId) => {
    dispatch(
      deleteCartItemAction({
        productId: productId,
        optionId: optionId,
      })
    );
    notification.warn({
      message: "Đã xóa sản phẩm vào giỏ hàng",
      placement: "top",
      top: 100,
      duration: 2,
    });
  };
  const handleChangeProductOptions = (productId, optionId) => {
    dispatch(
      changeCartItemAction({
        productId: productId,
        quantity: 1,
        ...(selectedOptionData
          ? {
              optionId: selectedOptionData.id,
              size: selectedOptionData.size,
              sizeQuantity: selectedOptionData.sizeQuantity,
              optionName: selectedOptionData.name,
              onClickId: parseInt(onClickId),
            }
          : {
              optionId: optionId,
            }),
      })
    );
  };
  const handleChangeQuantityBtn = (productId, optionId, quantity, type) => {
    if (quantity > cartInfo?.sizeQuantity) return null;
    else {
      dispatch(
        updateCartItemAction({
          productId: productId,
          optionId: optionId,
          quantity: type === "plus" ? quantity + 1 : quantity - 1,
        })
      );
    }
  };
  const handleChangeQuantityInput = (productId, optionId, quantity) => {
    if (quantity > cartInfo?.sizeQuantity) return null;
    else {
      dispatch(
        updateCartItemAction({
          productId: productId,
          optionId: optionId,
          quantity: quantity,
        })
      );
    }
  };
  const renderProductOptions = () => {
    const availableProduct = selectedProduct?.options?.map((item) => item);
    const availableOptions = getDifference(availableProduct, cartList);
    const disableOptionns = getDifference2(availableProduct, availableOptions);
    if (!cartList?.length) return null;
    if (!availableOptions?.length) return null;
    return (
      <>
        <Radio.Group
          optionType="button"
          buttonStyle="solid"
          onChange={(e) => {
            setSelectedOptionId(e.target.value);
          }}
        >
          {availableOptions?.map((item) => {
            return (
              <Radio key={item.id} value={item.id}>
                {item.size}
              </Radio>
            );
          })}
          {disableOptionns?.map((item) => {
            return (
              <Radio key={item.id} disabled value={item.id}>
                {item.size}
              </Radio>
            );
          })}
        </Radio.Group>
      </>
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
            <div
              id={cartInfo.optionId}
              onClick={(event) => {
                setShowModal(true);
                setOnClickId(event.currentTarget.id);
              }}
              className="item_size"
            >
              <Tooltip className="size_tooltip" title="Đổi size sản phẩm">
                <span>{cartInfo.size}</span>
                <S.SizeSelectorIcon $showModal={showModal} />
              </Tooltip>
            </div>
            <Modal
              title="Chọn size sản phẩm"
              centered
              open={showModal}
              onOk={() => {
                setShowModal(false);
                handleChangeProductOptions(
                  cartInfo.productId,
                  cartInfo.optionId
                );
              }}
              onCancel={() => setShowModal(false)}
            >
              <div className="size_selector">{renderProductOptions()}</div>
            </Modal>
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
                icon={<TiMinus style={{ color: "var(--primary-color)" }} />}
                onClick={() => {
                  if (cartInfo.quantity === 1) return null;
                  handleChangeQuantityBtn(
                    cartInfo.productId,
                    cartInfo.optionId,
                    cartInfo.quantity,
                    "minus"
                  );
                }}
              ></S.ChangeQuantityBtn>
              <S.ChangeQuantityInput
                min={1}
                defaultValue={cartInfo.quantity}
                value={cartInfo.quantity}
                onChange={(quantity) => {
                  if (quantity > selectedOptionData?.sizeQuantity) return null;
                  handleChangeQuantityInput(
                    cartInfo.productId,
                    cartInfo.optionId,
                    quantity
                  );
                }}
              />
              <S.ChangeQuantityBtn
                icon={<TiPlus style={{ color: "var(--primary-color)" }} />}
                onClick={() => {
                  if (cartInfo.quantity >= cartInfo?.sizeQuantity) return null;
                  else {
                    handleChangeQuantityBtn(
                      cartInfo.productId,
                      cartInfo.optionId,
                      cartInfo.quantity,
                      "plus"
                    );
                  }
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
              <Popconfirm
                title="Xóa sản phẩm khỏi giỏ?"
                okText="Ok"
                cancelText="Hủy"
                onConfirm={() =>
                  handleDeleteCartItem(cartInfo.productId, cartInfo.optionId)
                }
              >
                <Button onClick={() => null}>
                  <FaTrash className="delete_icon" />
                </Button>
              </Popconfirm>
            </div>
          </Col>
        </Row>
      </S.CartItemWrapper>
    </>
  );
};

export default CartItem;
