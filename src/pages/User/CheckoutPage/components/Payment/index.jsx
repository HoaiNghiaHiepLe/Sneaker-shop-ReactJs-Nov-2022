import {
  Row,
  Button,
  Col,
  Card,
  Radio,
  Image,
  Space,
  Form,
  Input,
  List,
} from "antd";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { BiCheck } from "react-icons/bi";

import {
  orderProductAction,
  guestOrderProductAction,
} from "../../../../../redux/actions";
import { BANK_LIST } from "./constants";
import * as S from "./styles";

const Payment = ({ setStep }) => {
  const [paymentForm] = Form.useForm();
  const [cardNumberColor, setCardNumberColor] = useState("");
  const [cardNameColor, setCardNameColor] = useState("");
  const [cardExpiryColor, setCardExpiryColor] = useState("");
  const [checked, setChecked] = useState("");
  const dispatch = useDispatch();
  const { cartList, checkoutInfo } = useSelector((state) => state.cart);
  console.log("🚀 ~ file: index.jsx:32 ~ Payment ~ cartList", cartList);
  const { userInfo } = useSelector((state) => state.user);

  const totalPrice = cartList
    .map((item) => item.price * item.quantity)
    .reduce((total, price) => total + price, 0);

  const handleSubmitPaymentForm = (values) => {
    if (userInfo.data.id) {
      dispatch(
        orderProductAction({
          ...checkoutInfo,
          ...values,
          userId: userInfo.data.id,
          totalPrice: totalPrice,
          status: "pending",
          products: cartList.map((item) => ({
            productId: item.productId,
            productName: item.productName,
            productBrand: item.productBrand,
            productImage: item.image,
            optionId: item.optionId,
            optionName: item.optionName,
            size: item.size,
            price: item.price,
            discount: item.discount,
            quantity: item.quantity,
          })),
        })
      );
    } else {
      dispatch(
        guestOrderProductAction({
          ...checkoutInfo,
          ...values,
          totalPrice: totalPrice,
          status: "pending",
          products: cartList.map((item) => ({
            productId: item.productId,
            productName: item.productName,
            productBrand: item.productBrand,
            productImage: item.image,
            optionId: item.optionId,
            optionName: item.optionName,
            size: item.size,
            price: item.price,
            discount: item.discount,
            quantity: item.quantity,
          })),
        })
      );
    }
    setStep(3);
  };

  const renderBankList = () => {
    return BANK_LIST.map((item) => {
      return (
        <Col span={3} key={item.name}>
          <S.BankItem value={item.value} active={item.value === checked}>
            <S.ImageContainer>
              <Image
                style={{
                  height: "55px",
                  width: "100%",
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                  backgroundRepeat: "no-repeat",
                }}
                src={item.url}
                alt={item.name}
                preview={false}
              />
            </S.ImageContainer>
            <BiCheck className="icon" />
          </S.BankItem>
        </Col>
      );
    });
  };

  return (
    <>
      <Row gutter={[16, 16]}>
        <Col span={17}>
          <Form
            form={paymentForm}
            layout="vertical"
            name="paymentForm"
            onFinish={(values) => handleSubmitPaymentForm(values)}
          >
            <Card style={{ marginTop: 28 }} size="small">
              <Form.Item
                label={
                  <h3
                    style={{ fontSize: 18, fontWeight: 700, marginBottom: 16 }}
                  >
                    Chọn hình thức thanh toán
                  </h3>
                }
                name="method"
              >
                <Radio.Group size="large">
                  <Row>
                    <Col span={24}>
                      <div
                        style={{
                          height: "60px",
                          display: "flex",
                          alignItems: "center",
                        }}
                      >
                        <Radio value="cod" style={{ padding: "18px 0" }}>
                          <Space>
                            <Image
                              src="https://frontend.tikicdn.com/_desktop-next/static/img/icons/checkout/icon-payment-method-cod.svg"
                              width={32}
                              height={32}
                              alt="icon"
                              preview={false}
                            />
                            <span style={{ marginLeft: 8 }}>
                              Thanh toán tiền mặt khi nhận hàng
                            </span>
                          </Space>
                        </Radio>
                      </div>
                    </Col>
                    <Col span={24}>
                      <div
                        style={{
                          height: "60px",
                          display: "flex",
                          alignItems: "center",
                        }}
                      >
                        <Radio value="visa" style={{ padding: "4px 0" }}>
                          <Space>
                            <Image
                              src="https://frontend.tikicdn.com/_desktop-next/static/img/icons/checkout/icon-payment-method-credit.svg"
                              width={32}
                              height={32}
                              alt="icon"
                              preview={false}
                            />
                            <span
                              style={{
                                marginLeft: 8,
                                display: "flex",
                                flexDirection: "column",
                              }}
                            >
                              Thanh toán bằng thẻ quốc tế Visa, Master, JCB
                              <Space>
                                <Image
                                  src="https://frontend.tikicdn.com/_desktop-next/static/img/icons/checkout/icon-payment-credit-type-tiki-card.svg"
                                  width={24}
                                  height={24}
                                  alt="icon"
                                  preview={false}
                                />
                                <Image
                                  src="https://frontend.tikicdn.com/_desktop-next/static/img/icons/checkout/icon-visa.png"
                                  width={24}
                                  height={24}
                                  alt="icon"
                                  preview={false}
                                />
                                <Image
                                  src="https://frontend.tikicdn.com/_desktop-next/static/img/icons/checkout/icon-payment-credit-type-mastercard.svg?v=1"
                                  width={24}
                                  height={24}
                                  alt="icon"
                                  preview={false}
                                />
                                <Image
                                  src="https://frontend.tikicdn.com/_desktop-next/static/img/icons/checkout/icon-payment-credit-type-jcb.svg"
                                  width={24}
                                  height={24}
                                  alt="icon"
                                  preview={false}
                                />
                              </Space>
                            </span>
                          </Space>
                        </Radio>
                      </div>
                      <Form.Item
                        noStyle
                        shouldUpdate={(prevValues, currentValues) =>
                          prevValues.method !== currentValues.method
                        }
                      >
                        {({ getFieldValue }) =>
                          getFieldValue("method") === "visa" && (
                            <Row>
                              <Col span={24}>
                                <Card>
                                  <span
                                    style={{
                                      margin: "0 0 16px 8px",
                                      display: "flex",
                                      flexDirection: "column",
                                    }}
                                  >
                                    Thanh toán bằng thẻ quốc tế Visa, Master,
                                    JCB
                                    <Space>
                                      <Image
                                        src="https://frontend.tikicdn.com/_desktop-next/static/img/icons/checkout/icon-payment-credit-type-tiki-card.svg"
                                        width={24}
                                        height={24}
                                        alt="icon"
                                        preview={false}
                                      />
                                      <Image
                                        src="https://frontend.tikicdn.com/_desktop-next/static/img/icons/checkout/icon-visa.png"
                                        width={24}
                                        height={24}
                                        alt="icon"
                                        preview={false}
                                      />
                                      <Image
                                        src="https://frontend.tikicdn.com/_desktop-next/static/img/icons/checkout/icon-payment-credit-type-mastercard.svg?v=1"
                                        width={24}
                                        height={24}
                                        alt="icon"
                                        preview={false}
                                      />
                                      <Image
                                        src="https://frontend.tikicdn.com/_desktop-next/static/img/icons/checkout/icon-payment-credit-type-jcb.svg"
                                        width={24}
                                        height={24}
                                        alt="icon"
                                        preview={false}
                                      />
                                    </Space>
                                  </span>
                                  <Row gutter={[16, 16]}>
                                    <Col span={12}>
                                      <Form.Item
                                        label="Số thẻ"
                                        name="cardNumber"
                                        // rules={[
                                        //   {
                                        //     required: true,
                                        //     message: "Đây là trường bắt buộc!",
                                        //   },
                                        // ]}
                                      >
                                        <Input
                                          style={{ padding: "6px 11px" }}
                                          placeholder="VD: 1546 8456 2563 4859"
                                          onFocus={() =>
                                            setCardNumberColor("#fff")
                                          }
                                          onBlur={() =>
                                            setCardNumberColor("#ccc")
                                          }
                                        />
                                      </Form.Item>
                                      <Form.Item
                                        label="Tên in trên thẻ"
                                        name="cardName"
                                        // rules={[
                                        //   {
                                        //     required: true,
                                        //     message: "Đây là trường bắt buộc!",
                                        //   },
                                        //   {
                                        //     pattern:
                                        //       "/^(0[1-9]|1[0-2])/?([0-9]{4}|[0-9]{2})$/",
                                        //     message: "Vui lòng nhập đúng dữ liệu",
                                        //   },
                                        // ]}
                                      >
                                        <Input
                                          style={{ padding: "6px 11px" }}
                                          placeholder="VD: NGUYEN VAN A"
                                          onFocus={() =>
                                            setCardNameColor("#fff")
                                          }
                                          onBlur={() =>
                                            setCardNameColor("#ccc")
                                          }
                                        />
                                      </Form.Item>
                                      <Form.Item
                                        label="Ngày hết hạn"
                                        name="expirationDate"
                                        // rules={[
                                        //   {
                                        //     required: true,
                                        //     message: "Đây là trường bắt buộc!",
                                        //   },
                                        //   {
                                        //     pattern:
                                        //       "/^(0[1-9]|1[0-2])/?([0-9]{4}|[0-9]{2})$/",
                                        //     message: "Vui lòng nhập đúng dữ liệu",
                                        //   },
                                        // ]}
                                      >
                                        <Input
                                          style={{ padding: "6px 11px" }}
                                          placeholder="MM/YY"
                                          onFocus={() =>
                                            setCardExpiryColor("#fff")
                                          }
                                          onBlur={() =>
                                            setCardExpiryColor("#ccc")
                                          }
                                        />
                                      </Form.Item>
                                      <Form.Item
                                        label="Mã bảo mật"
                                        name="securityCode"
                                      >
                                        <Space>
                                          <Input
                                            style={{ padding: "6px 11px" }}
                                            placeholder="VD: 123"
                                          />
                                          <Image
                                            src="https://frontend.tikicdn.com/_desktop-next/static/img/icons/checkout/checkout-img-cvv-hint.jpg"
                                            width={61}
                                            style={{ marginLeft: "24px" }}
                                            preview={false}
                                          />
                                        </Space>
                                      </Form.Item>
                                    </Col>
                                    <Col span={12}>
                                      <S.Card>
                                        <S.CardFront>
                                          <S.CardChip />
                                          <S.CardNumber
                                            changeColor={cardNumberColor}
                                          >
                                            <Space>
                                              <span style={{ marginRight: 6 }}>
                                                ••••
                                              </span>
                                              <span style={{ marginRight: 6 }}>
                                                ••••
                                              </span>
                                              <span style={{ marginRight: 6 }}>
                                                ••••
                                              </span>
                                              <span style={{ marginRight: 6 }}>
                                                ••••
                                              </span>
                                            </Space>
                                          </S.CardNumber>
                                          <S.CardName
                                            changeColor={cardNameColor}
                                          >
                                            Tên chủ thẻ
                                          </S.CardName>
                                          <S.CardExpiry>
                                            <S.CardExpiryTittle
                                              changeColor={cardExpiryColor}
                                            >
                                              Hiệu lực đến
                                            </S.CardExpiryTittle>
                                            <S.CardExpiryValue
                                              changeColor={cardExpiryColor}
                                            >
                                              ••/••
                                            </S.CardExpiryValue>
                                          </S.CardExpiry>
                                        </S.CardFront>
                                      </S.Card>
                                    </Col>
                                  </Row>
                                  <Row justify="end">
                                    <Button
                                      type="primary"
                                      onClick={() => paymentForm.submit()}
                                    >
                                      Xác nhận
                                    </Button>
                                  </Row>
                                </Card>
                              </Col>
                            </Row>
                          )
                        }
                      </Form.Item>
                    </Col>
                    <Col span={24}>
                      <div
                        style={{
                          height: "60px",
                          display: "flex",
                          alignItems: "center",
                        }}
                      >
                        <Radio value="atm" style={{ padding: "18px 0" }}>
                          <Space>
                            <Image
                              src="https://frontend.tikicdn.com/_desktop-next/static/img/icons/checkout/icon-payment-method-atm.svg"
                              width={32}
                              height={32}
                              alt="icon"
                              preview={false}
                            />
                            <span style={{ marginLeft: 8 }}>
                              Thẻ ATM nội địa/Internet Banking (Hỗ trợ Internet
                              Banking)
                            </span>
                          </Space>
                        </Radio>
                      </div>
                    </Col>
                    <Form.Item
                      noStyle
                      shouldUpdate={(prevValues, currentValues) =>
                        prevValues.method !== currentValues.method
                      }
                    >
                      {({ getFieldValue }) =>
                        getFieldValue("method") === "atm" && (
                          <Row>
                            <Col span={24}>
                              <Card size="small">
                                <Form.Item label="Bank" name="bank">
                                  <Radio.Group
                                    onChange={(e) => setChecked(e.target.value)}
                                  >
                                    <Row>
                                      <Col span={24}>
                                        <Row gutter={[16, 16]}>
                                          {renderBankList()}
                                        </Row>
                                      </Col>
                                    </Row>
                                  </Radio.Group>
                                </Form.Item>
                              </Card>
                            </Col>
                          </Row>
                        )
                      }
                    </Form.Item>
                  </Row>
                </Radio.Group>
              </Form.Item>
            </Card>
          </Form>
        </Col>
        <Col span={7}>
          <div
            style={{
              marginTop: "28px",
              position: "-webkit-sticky",
              position: "sticky",
              top: 0,
            }}
          >
            <h3
              style={{
                backgroundColor: "royalblue",
                padding: "4px 8px",
                color: "#fff",
              }}
            >
              Thông tin khách hàng
            </h3>
            <List>
              <List.Item>
                <p
                  style={{ padding: "4px 8px" }}
                >{`Tên khách hàng: ${checkoutInfo.fullName}`}</p>
              </List.Item>
              <List.Item>
                <p
                  style={{ padding: "4px 8px" }}
                >{`Email: ${checkoutInfo.email}`}</p>
              </List.Item>
              <List.Item>
                <p
                  style={{ padding: "4px 8px" }}
                >{`Số điện thoại: ${checkoutInfo.phone}`}</p>
              </List.Item>
              <List.Item>
                <p
                  style={{ padding: "4px 8px" }}
                >{`Địa chỉ: ${checkoutInfo.address}, ${checkoutInfo.wardName}, ${checkoutInfo.districtName}, ${checkoutInfo.cityName}`}</p>
              </List.Item>
            </List>
          </div>
        </Col>
      </Row>
      <Row justify="space-between">
        <Button onClick={() => setStep(1)}>Quay lại</Button>
        <Button type="primary" onClick={() => paymentForm.submit()}>
          Đặt hàng
        </Button>
      </Row>
    </>
  );
};

export default Payment;
