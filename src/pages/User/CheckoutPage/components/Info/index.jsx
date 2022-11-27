import { useEffect, useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  Row,
  Col,
  Button,
  Card,
  Form,
  Select,
  Input,
  Table,
  Image,
  Space,
} from "antd";

import {
  getCityListAction,
  getDistrictListAction,
  getWardListAction,
  setCheckoutInfoAction,
} from "../../../../../redux/actions";

import * as S from "./styles";

const Info = ({ setStep }) => {
  const [infoForm] = Form.useForm();
  const dispatch = useDispatch();

  const { cityList, districtList, wardList } = useSelector(
    (state) => state.location
  );
  const { userInfo } = useSelector((state) => state.user);
  const { cartList } = useSelector((state) => state.cart);

  const productInfo = cartList.map((item) => item);

  const calcDiscount = (currentPrice, discount) => {
    return currentPrice - (currentPrice * discount) / 100;
  };

  const calcPrice = (price, quantity) => price * quantity;

  const calcTotalPrice = () => {
    if (cartList.length > 0) {
      return cartList
        .map((item) => calcDiscount(item.price, item.discount) * item.quantity)
        .reduce((total, price) => total + price);
    } else {
      return 0;
    }
  };

  const initialValues = {
    fullName: userInfo.data?.fullName || "",
    email: userInfo.data.email || "",
    phone: "",
    address: "",
    cityCode: undefined,
    DistrictCode: undefined,
    WardCode: undefined,
  };

  useEffect(() => {
    dispatch(getCityListAction());
  }, []);

  useEffect(() => {
    if (userInfo.data.id) {
      infoForm.resetFields();
    }
  }, [userInfo.data]);

  const handleSubmitInfoForm = (values) => {
    const { cityCode, districtCode, wardCode, ...otherValues } = values;
    const cityData = cityList.data.find((item) => item.code === cityCode);
    const districtData = districtList.data.find(
      (item) => item.code === districtCode
    );
    const wardData = wardList.data.find((item) => item.code === wardCode);
    dispatch(
      setCheckoutInfoAction({
        ...otherValues,
        cityId: cityData.id,
        cityName: cityData.name,
        districtId: districtData.id,
        districtName: districtData.name,
        wardId: wardData.id,
        wardName: wardData.name,
      })
    );
    setStep(2);
  };

  const renderCityOptions = useMemo(() => {
    return cityList.data.map((item) => {
      return (
        <Select.Option key={item.id} value={item.code}>
          {item.name}
        </Select.Option>
      );
    });
  }, [cityList.data]);

  const renderDistrictOptions = useMemo(() => {
    return districtList.data.map((item) => {
      return (
        <Select.Option key={item.id} value={item.code}>
          {item.name}
        </Select.Option>
      );
    });
  }, [districtList.data]);

  const renderWardListOptions = useMemo(() => {
    return wardList.data.map((item) => {
      return (
        <Select.Option key={item.id} value={item.code}>
          {item.name}
        </Select.Option>
      );
    });
  }, [wardList.data]);

  const tableColumns = [
    {
      title: "Tên sản phẩm",
      dataIndex: "productName",
      key: "productName",
      render: (_, record) => {
        return (
          <Space key={record.productId}>
            <Image
              src={record?.image}
              alt={record?.productName}
              style={{
                width: "80px",
                height: "auto",
                borderRadius: "10px",
              }}
            />
            <h4>{record?.productName}</h4>
          </Space>
        );
      },
    },
    {
      title: "Size",
      dataIndex: "size",
      key: "size",
    },
    {
      title: "Số lượng",
      dataIndex: "quantity",
      key: "quantity",
    },
    {
      title: "Giá",
      dataIndex: "price",
      key: "price",
      render: (_, record) => {
        return `${calcDiscount(
          record.price,
          record.discount
        ).toLocaleString()}đ`;
      },
    },

    {
      title: "Thành tiền",
      dataIndex: "totalPrice",
      key: "totalPrice",
      render: (_, record) =>
        `${calcPrice(
          record.quantity,
          calcDiscount(record.price, record.discount)
        ).toLocaleString()}đ`,
    },
  ];

  return (
    <>
      <Row gutter={[16, 16]}>
        <Col span={2}></Col>
        <Col span={20}>
          <Table
            style={{ marginTop: "28px" }}
            bordered
            pagination={false}
            columns={tableColumns}
            dataSource={productInfo}
            rowKey="productId"
            expandable={{
              expandedRowRender: (record) => (
                <>
                  <Space>
                    <p>
                      Thương hiệu: <b>{record.productBrand.toUpperCase()}</b>
                    </p>
                    <p>{`Giảm giá: ${record.discount}%`}</p>
                  </Space>
                </>
              ),
            }}
          />
          <h3
            style={{ marginTop: "8px" }}
          >{`Tổng tiền: ${calcTotalPrice().toLocaleString()}đ`}</h3>
        </Col>
        <Col span={2}></Col>
      </Row>
      <br></br>
      <Row gutter={[16, 16]}>
        <Col span={8}></Col>
        <Col span={8}>
          <Card
            size="small"
            style={{
              boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px",
              margin: "20px 0",
            }}
            title={<h3>Thông tin người nhận</h3>}
          >
            <Form
              name="infoForm"
              form={infoForm}
              initialValues={initialValues}
              labelCol={{
                span: 7,
              }}
              onFinish={(values) => handleSubmitInfoForm(values)}
            >
              <Form.Item
                label={<b>Họ và tên</b>}
                name="fullName"
                rules={[
                  {
                    required: true,
                    message: "Đây là trường bắt buộc!",
                  },
                ]}
              >
                <Input
                  style={{
                    boxShadow: "rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px",
                  }}
                />
              </Form.Item>
              <Form.Item
                label={<b>Email</b>}
                name="email"
                rules={[
                  {
                    required: true,
                    message: "Đây là trường bắt buộc!",
                  },
                ]}
              >
                <Input
                  style={{
                    boxShadow: "rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px",
                  }}
                />
              </Form.Item>
              <Form.Item
                label={<b>phone</b>}
                name="phone"
                rules={[
                  {
                    required: true,
                    message: "Đây là trường bắt buộc!",
                  },
                ]}
              >
                <Input
                  style={{
                    boxShadow: "rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px",
                  }}
                />
              </Form.Item>
              <Form.Item
                label={<b>Tỉnh/Thành phố</b>}
                name="cityCode"
                rules={[
                  {
                    required: true,
                    message: "Đây là trường bắt buộc!",
                  },
                ]}
              >
                <Select
                  style={{
                    boxShadow: "rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px",
                  }}
                  onChange={(value) => {
                    dispatch(getDistrictListAction({ cityCode: value }));
                    infoForm.setFieldsValue({
                      districtCode: undefined,
                      wardCode: undefined,
                    });
                  }}
                >
                  {renderCityOptions}
                </Select>
              </Form.Item>
              <Form.Item
                label={<b>Quận/Huyện</b>}
                name="districtCode"
                rules={[
                  {
                    required: true,
                    message: "Đây là trường bắt buộc!",
                  },
                ]}
              >
                <Select
                  style={{
                    boxShadow: "rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px",
                  }}
                  onChange={(value) => {
                    dispatch(getWardListAction({ districtCode: value }));
                    infoForm.setFieldsValue({
                      wardCode: undefined,
                    });
                  }}
                  disabled={!infoForm.getFieldValue("cityCode")}
                >
                  {renderDistrictOptions}
                </Select>
              </Form.Item>
              <Form.Item
                label={<b>Phường/Xã</b>}
                name="wardCode"
                rules={[
                  {
                    required: true,
                    message: "Đây là trường bắt buộc!",
                  },
                ]}
              >
                <Select
                  style={{
                    boxShadow: "rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px",
                  }}
                  disabled={!infoForm.getFieldValue("districtCode")}
                >
                  {renderWardListOptions}
                </Select>
              </Form.Item>
              <Form.Item
                label={<b>Địa chỉ</b>}
                name="address"
                rules={[
                  {
                    required: true,
                    message: "Đây là trường bắt buộc!",
                  },
                ]}
              >
                <Input
                  style={{
                    boxShadow: "rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px",
                  }}
                />
              </Form.Item>
              <Row justify="space-between">
                <Button
                  style={{
                    boxShadow:
                      "rgba(14, 30, 37, 0.12) 0px 2px 4px 0px, rgba(14, 30, 37, 0.32) 0px 2px 16px 0px",
                  }}
                  onClick={() => setStep(0)}
                >
                  Quay lại
                </Button>
                <Button
                  style={{
                    boxShadow:
                      "rgba(14, 30, 37, 0.12) 0px 2px 4px 0px, rgba(14, 30, 37, 0.32) 0px 2px 16px 0px",
                  }}
                  type="primary"
                  onClick={() => infoForm.submit()}
                >
                  Thanh toán
                </Button>
              </Row>
            </Form>
          </Card>
        </Col>

        <Col span={8}></Col>
      </Row>
    </>
  );
};

export default Info;
