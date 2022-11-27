import { useEffect } from "react";
import { Row, Button, Image, Space, Col } from "antd";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import { resetCartListAction } from "../../../../redux/actions";
import { ROUTES } from "../../../../constants";

const Success = ({ setStep }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(resetCartListAction());
  }, []);

  return (
    <>
      <Row justify="center" style={{ marginTop: "28px" }}>
        <Col span={8}></Col>
        <Col span={8}>
          <Image
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              borderRadius: "50%",
              backgroundPosition: "center",
              backgroundSize: "cover",
            }}
            width={"100%"}
            // height={300}
            preview={false}
            src="https://img.freepik.com/premium-vector/success-payment-icon-flat-style-approved-money-vector-illustration-isolated-background-successful-pay-sign-business-concept_157943-1354.jpg?w=2000"
          />
          <h3
            style={{
              display: "flex",
              justifyContent: "center",
              fontSize: "36px",
            }}
          >
            Đặt hàng thành công!
          </h3>
        </Col>
        <Col span={8}></Col>
      </Row>
    </>
  );
};

export default Success;
