import React, { useState, useMemo, useEffect } from "react";
import {
  Button,
  Steps,
  Table,
  InputNumber,
  Col,
  Row,
  Carousel,
  Select,
} from "antd";
import { useNavigate, Link, generatePath } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

import TopWrapper from "../../../components/TopWrapper";
import { BREADCRUMB } from "./constants";
import { ROUTES, TITLES } from "../../../constants/";
import { FaShoppingCart, FaCheckCircle } from "react-icons/fa";
import { BsBagCheckFill } from "react-icons/bs";
import { HiInformationCircle } from "react-icons/hi";

import {
  updateCartItemAction,
  deleteCartItemAction,
} from "../../../redux/actions";

import Cart from "./components/Cart";
import Info from "./components/Info";
import Payment from "./components/Payment";
import Success from "./components/Success";
import * as S from "./styles";

const CheckoutPage = () => {
  useEffect(() => {
    document.title = TITLES.USER.CHECKOUT;
  }, []);

  const [step, setStep] = useState(0);

  const renderCheckoutContent = useMemo(() => {
    switch (step) {
      case 1: {
        return <Info setStep={setStep} />;
      }
      case 2: {
        return <Payment setStep={setStep} />;
      }
      case 3: {
        return <Success setStep={setStep} />;
      }
      case 0:
      default: {
        return <Cart setStep={setStep} />;
      }
    }
  }, [step]);

  return (
    <>
      <TopWrapper breadcrumb={[...BREADCRUMB]} height={300} />
      <S.Wrapper>
        <Row>
          <Col span={2}></Col>
          <Col
            style={{ backgroundColor: "#fff", padding: "12px 20px" }}
            span={20}
          >
            <Steps current={step}>
              <Steps.Step
                className="step_items"
                title="Giỏ hàng"
                icon={<FaShoppingCart />}
              />
              <Steps.Step
                title="Thông tin khách hàng"
                icon={<HiInformationCircle />}
              />
              <Steps.Step title="Thanh Toán" icon={<BsBagCheckFill />} />
              <Steps.Step title="Hoàn tất" icon={<FaCheckCircle />} />
            </Steps>
          </Col>
          <Col span={2}></Col>
        </Row>
        <Row>
          <Col span={2}></Col>
          <Col span={20}>{renderCheckoutContent}</Col>
          <Col span={2}></Col>
        </Row>
      </S.Wrapper>
    </>
  );
};

export default CheckoutPage;
