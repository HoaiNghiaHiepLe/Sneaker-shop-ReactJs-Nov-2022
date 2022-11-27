import { useEffect, useState } from "react";
import { Row, Col, Form, Input, Button } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";

import TopWrapper from "../../../components/TopWrapper";
import { ROUTES, TITLES } from "../../../constants/";
import { BREADCRUMB } from "./constants";
import { registerAction } from "../../../redux/actions";
import { getReviewListAction } from "../../../redux/actions";
import LoadingWrapper from "../../../components/LoadingWrapper";
import CustomerReviews from "../../../components/CustomerReviews";
import VideoSlider from "./components/VideoSlider";
import { CustomerSlider } from "../../../components/CustomerSlider";

import * as S from "./styles";

export default function AboutPage() {
  const [contactForm] = Form.useForm();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { id } = useParams();

  const { reviewList } = useSelector((state) => state.review);

  useEffect(() => {
    document.title = TITLES.USER.ABOUT;
    dispatch(getReviewListAction({ productId: id }));
  }, [id]);

  const handleRegister = (values) => {
    dispatch(
      registerAction({
        data: {
          fullName: values.fullName,
          email: values.email,
          password: values.password,
          role: "user",
        },
        callback: {
          goToLogin: () => navigate(ROUTES.LOGIN),
        },
      })
    );
  };
  return (
    <>
      <TopWrapper breadcrumb={[...BREADCRUMB]} height={200} />
      {reviewList.loading ? (
        <LoadingWrapper />
      ) : (
        <S.AboutContainer>
          <S.IntroduceContainer>
            <p>
              Sneaker World là ... Lorem ipsum dolor, sit amet consectetur
              adipisicing elit. Neque adipisci sit unde pariatur minima nulla?
              Error omnis at iste voluptate iusto commodi quam, illo impedit
              dignissimos, eveniet pariatur sapiente porro. Sneaker World là ...
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Neque
              adipisci sit unde pariatur minima nulla? Error omnis at iste
              voluptate iusto commodi quam, illo impedit dignissimos, eveniet
              pariatur sapiente porro. Sneaker World là ... Lorem ipsum dolor,
              sit amet consectetur adipisicing elit. Neque adipisci sit unde
              pariatur minima nulla? Error omnis at iste voluptate iusto commodi
              quam, illo impedit dignissimos, eveniet pariatur sapiente porro.
              Sneaker World là ... Lorem ipsum dolor, sit amet consectetur
              adipisicing elit. Neque adipisci sit unde pariatur minima nulla?
              Error omnis at iste voluptate iusto commodi quam, illo impedit
              dignissimos, eveniet pariatur sapiente porro.
            </p>
          </S.IntroduceContainer>

          <S.SliderContainer>
            <CustomerSlider />
          </S.SliderContainer>
          <S.ReviewContainer>
            <h1 className="form_title">review của khách hàng</h1>
            <CustomerReviews reviewList={reviewList} />
          </S.ReviewContainer>
          <S.MapContainer>
            <div className="ratio_img">
              <iframe
                className="location_map"
                title="gg_map"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d61349.62126488034!2d108.17168657577378!3d16.047248394438395!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x314219c792252a13%3A0xfc14e3a044436487!2zxJDDoCBO4bq1bmcsIEjhuqNpIENow6J1LCDEkMOgIE7hurVuZywgVmnhu4d0IE5hbQ!5e0!3m2!1svi!2s!4v1668495073150!5m2!1svi!2s"
                frameBorder="0"
                allowFullScreen=""
                aria-hidden="false"
                tabIndex="0"
              />
            </div>
          </S.MapContainer>
          <S.ContactForm>
            <Row>
              <Col
                lg={{ span: 9, order: 1 }}
                sm={{ span: 24, order: 2 }}
                xs={{ span: 24, order: 2 }}
              >
                <div className="contact_info_content">
                  <h1 className="form_title">Thông tin liên hệ</h1>
                  <p>
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    Asperiores, eum. Repudiandae blanditiis consequuntur
                  </p>
                  <Row style={{ rowGap: 0 }}>
                    <Col className="info_col" lg={24} md={12} xs={24} sm={24}>
                      <span>Email: sneakerWorld@gmail.com</span>
                    </Col>
                    <Col className="info_col" lg={24} md={12} xs={24} sm={24}>
                      <span>Phone: 0909999888</span>
                    </Col>
                    <Col className="info_col" lg={24} md={12} xs={24} sm={24}>
                      <span>
                        Address: Lorem ipsum dolor sit amet consectetur
                        adipisicing elit.
                      </span>
                    </Col>
                    <Col className="info_col" lg={24} md={12} xs={24} sm={24}>
                      <span>Github: https://github.com/</span>
                    </Col>
                  </Row>
                </div>
                <div className="contact_info_background"> </div>
              </Col>
              <Col
                lg={{ span: 15, order: 2 }}
                sm={{ span: 24, order: 1 }}
                xs={{ span: 24, order: 1 }}
                className="contact_form"
              >
                <h1 className="form_title">Gửi liên hệ</h1>
                <>
                  <Form
                    form={contactForm}
                    name="registerForm"
                    layout="vertical"
                    initialValues={{ remember: true }}
                    onFinish={(values) => handleRegister(values)}
                    autoComplete="off"
                    style={{ padding: "0 2px" }}
                  >
                    <Form.Item
                      label="Họ và tên"
                      name="fullName"
                      rules={[
                        {
                          required: true,
                          message: "Please input your fullName!",
                        },
                      ]}
                    >
                      <Input />
                    </Form.Item>
                    <Row>
                      <Col
                        className="respon_padding_0"
                        lg={12}
                        sm={24}
                        xs={24}
                        style={{ paddingRight: 12 }}
                      >
                        <Form.Item
                          label="Email"
                          name="email"
                          rules={[
                            {
                              required: true,
                              message: "Please input your email!",
                            },
                            { type: "email", message: "Email không hợp lệ" },
                          ]}
                        >
                          <Input />
                        </Form.Item>
                      </Col>
                      <Col
                        className="respon_padding_0"
                        lg={12}
                        sm={24}
                        xs={24}
                        style={{ paddingLeft: 12 }}
                      >
                        <Form.Item
                          label="Số điện thoại"
                          name="phoneNumber"
                          rules={[
                            {
                              required: true,
                              message: "Please input your phone number!",
                            },
                            {
                              type: "phoneNumber",
                              message: "số điện thoại không hợp lệ",
                            },
                          ]}
                        >
                          <Input />
                        </Form.Item>
                      </Col>
                    </Row>

                    <Form.Item
                      label="Tiêu đề"
                      name="title"
                      rules={[
                        {
                          required: true,
                          message: "Please input your title!",
                        },
                      ]}
                    >
                      <Input.Password />
                    </Form.Item>

                    <Form.Item
                      label="Nội dung"
                      name="content"
                      rules={[
                        {
                          required: true,
                          message: "Please input your content!",
                        },
                      ]}
                    >
                      <Input.TextArea autoSize={{ maxRows: 6, minRows: 2 }} />
                    </Form.Item>

                    <Button
                      type="primary"
                      htmlType="submit"
                      block
                      // loading={registerData.loading}
                    >
                      Đăng ký
                    </Button>
                  </Form>
                </>
              </Col>
            </Row>
          </S.ContactForm>
          <S.SliderContainer>
            <h1 className="form_title">các kênh của chúng tôi</h1>
            <VideoSlider />
          </S.SliderContainer>
        </S.AboutContainer>
      )}
    </>
  );
}
