import React, { useEffect } from "react";
import { ROUTES, TITLES } from "../../../constants";
import { Row, Col, Form, Tooltip, Button, Rate, Input } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";

import {
  AiFillWarning,
  AiFillEdit,
  AiFillDelete,
  AiFillEye,
} from "react-icons/ai";
import {
  getProductDetailAction,
  addToCartAction,
  favoriteProductAction,
  unFavoriteProductAction,
  postReviewAction,
  getReviewListAction,
  getProductListAction,
  getCategoryListAction,
} from "../../../redux/actions";

import ReviewItem from "../../User/ProductDetailPage/components/ReviewItem";
import { HiLocationMarker } from "react-icons/hi";
import { BsFillCartCheckFill } from "react-icons/bs";
import { BiCommentDetail } from "react-icons/bi";
import { GoTasklist } from "react-icons/go";
import { MdOutlineAttachMoney } from "react-icons/md";
import * as S from "./styles";
const AdminDashboard = () => {
  const [reviewForm] = Form.useForm();
  const { id } = useParams();
  const { reviewList } = useSelector((state) => state.review);
  const { productDetail, productList } = useSelector((state) => state.product);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getProductDetailAction({ id: id }));
    dispatch(getReviewListAction({ productId: id }));
    document.title = TITLES.ADMIN.DASHBOARD;
  }, []);
  return (
    <>
      <S.DashboardPage>
        <Row>
          <Col span={6}>
            <S.InformContainer>
              <div className="inform_content">
                <div className="inform_Top">
                  <div className="inform_symbol golden_background">
                    <span className="material_icon">
                      <MdOutlineAttachMoney />
                    </span>
                  </div>
                  <p className="inform_title">Trung bình doanh thu mỗi đơn</p>
                  <h3 className="inform_info">
                    Từ 3.000.000 - 5.000.000 ₫
                    <br />
                    <b style={{ fontWeight: 400, fontSize: 15 }}>
                      Số lượng mua trung bình <b> 1 đôi</b> <small>/ đơn</small>
                    </b>
                  </h3>
                </div>
                <div className="inform_bottom">
                  <div className="inform_bottom_content">
                    <b className="inform_bottom_icon">10.000.000 ₫</b>
                    <p className="inform_bottom_title ">Doanh thu trong ngày</p>
                  </div>
                </div>
              </div>
            </S.InformContainer>
          </Col>
          <Col span={6}>
            <S.InformContainer>
              <div className="inform_content">
                <div className="inform_Top">
                  <div className="inform_symbol green_background">
                    <span className="material_icon">
                      <GoTasklist />
                    </span>
                  </div>
                  <p className="inform_title">Đã xử lý 20 đơn</p>
                  <h3 className="inform_info">
                    Chờ xử lý
                    <b style={{ fontWeight: 400, fontSize: 15 }}>
                      <b> 15</b> <small>đơn</small>
                    </b>
                  </h3>
                </div>
                <div className="inform_bottom">
                  <div className="inform_bottom_content">
                    <b className="inform_bottom_icon">25</b>
                    <p className="inform_bottom_title ">Đơn hàng trong ngày</p>
                  </div>
                </div>
              </div>
            </S.InformContainer>
          </Col>
          <Col span={6}>
            <S.InformContainer>
              <div className="inform_content">
                <div className="inform_Top">
                  <div className="inform_symbol orange_background">
                    <span className="material_icon">
                      <BsFillCartCheckFill />
                    </span>
                  </div>
                  <p className="inform_title">Bán chạy nhất</p>
                  <h3 className="inform_info">
                    Future Z 4.2 TT Soccer Cleats JR
                    <br />
                    <b style={{ fontWeight: 400, fontSize: 15 }}>
                      50 /<b> 100</b> <small>đôi</small>
                    </b>
                  </h3>
                </div>
                <div className="inform_bottom">
                  <div className="inform_bottom_content">
                    <b className="inform_bottom_icon">35</b>
                    <p className="inform_bottom_title ">
                      Sản phẩm bán được trong ngày
                    </p>
                  </div>
                </div>
              </div>
            </S.InformContainer>
          </Col>
          <Col span={6}>
            <S.InformContainer>
              <div className="inform_content">
                <div className="inform_Top">
                  <div className="inform_symbol blue_background">
                    <span className="material_icon">
                      <BiCommentDetail />
                    </span>
                  </div>
                  <p className="inform_title">Đánh giá trung bình</p>

                  <h3 className="inform_info">
                    <Rate value={4} disabled />
                    <br />
                    <b style={{ fontWeight: 400, fontSize: 15 }}>
                      50 / 100 <small> review tích cực</small>
                    </b>
                  </h3>
                </div>
                <div className="inform_bottom">
                  <div className="inform_bottom_content">
                    <b className="inform_bottom_icon">35</b>
                    <p className="inform_bottom_title ">
                      phản hồi đánh giá trong ngày
                    </p>
                  </div>
                </div>
              </div>
            </S.InformContainer>
          </Col>
        </Row>
        <Row>
          <Col span={16}>
            <Col span={24}>
              <S.TrackBoardSection>
                <div className="trackBoard_container">
                  <div className="trackBoard_content">
                    <div className="trackBoard_top">
                      <div className="trackBoard_symbol golden_background">
                        <MdOutlineAttachMoney className="trackBoard_svg" />
                      </div>
                      <h4 className="trackBoard_title">Thống kê doanh thu</h4>
                    </div>
                    <div className="trackBoard_bottom"></div>
                  </div>
                </div>
              </S.TrackBoardSection>
            </Col>
            <Col span={24}>
              <S.TrackBoardSection>
                <div className="trackBoard_container">
                  <div className="trackBoard_content">
                    <div className="trackBoard_top">
                      <div className="trackBoard_symbol green_background">
                        <GoTasklist className="trackBoard_svg" />
                      </div>
                      <h4 className="trackBoard_title">Thống kê đơn hàng</h4>
                    </div>
                    <div className="trackBoard_bottom"></div>
                  </div>
                </div>
              </S.TrackBoardSection>
            </Col>
            <Col span={24}>
              <S.TrackBoardSection>
                <div className="trackBoard_container">
                  <div className="trackBoard_content">
                    <div className="trackBoard_top">
                      <div className="trackBoard_symbol orange_background">
                        <BsFillCartCheckFill className="trackBoard_svg" />
                      </div>
                      <h4 className="trackBoard_title">Thống kê sản phẩm</h4>
                    </div>
                    <div className="trackBoard_bottom"></div>
                  </div>
                </div>
              </S.TrackBoardSection>
            </Col>
          </Col>
          <Col span={8}>
            <S.TrackBoardSection>
              <div className="trackBoard_container">
                <div className="trackBoard_content">
                  <div className="trackBoard_top">
                    <div className="trackBoard_symbol blue_background">
                      <BiCommentDetail className="trackBoard_svg" />
                    </div>
                    <h4 className="trackBoard_title">Trả lời bình luận</h4>
                  </div>
                  <div className="trackBoard_bottom">
                    <ReviewItem reviewList={reviewList} />
                    <Form
                      form={reviewForm}
                      layout="vertical"
                      className="rating_form"
                      onFinish={(values) => {
                        reviewForm.resetFields();
                      }}
                    >
                      <Form.Item label="Trả lời bình luận" name="comment">
                        <Input.TextArea autoSize={{ maxRows: 6, minRows: 2 }} />
                      </Form.Item>
                      <S.CustomBtn htmlType="submit" block>
                        Phản hồi
                      </S.CustomBtn>
                    </Form>
                  </div>
                </div>
              </div>
            </S.TrackBoardSection>
          </Col>
        </Row>
        <Row style={{ width: "calc(100% + 30px)", margin: "0 -15px" }}>
          <Col span={8} style={{ padding: "0 15px " }}>
            <S.ManageListingContainer>
              <div className="manage_listing_top">
                <img
                  className="manage_listing_img"
                  src="https://cdn.shopify.com/s/files/1/2358/2817/articles/wethenew-snkrs-day_1600x.png?v=1660056550"
                  alt="..."
                />
              </div>
              <div className="manage_listing_middle">
                <div className="manage_listing_middle_btn_list">
                  <Tooltip placement="bottom" title="view">
                    <Button className="listing_middle_btn">
                      <span className="listing_middle_btn_label">
                        <AiFillEye className="listing_middle_btn_svg blue_text" />
                      </span>
                    </Button>
                  </Tooltip>
                  <Tooltip placement="bottom" title="edit">
                    <Button className="listing_middle_btn">
                      <span className="listing_middle_btn_label">
                        <AiFillEdit className="listing_middle_btn_svg green_text" />
                      </span>
                    </Button>
                  </Tooltip>
                  <Tooltip placement="bottom" title="remove">
                    <Button className="listing_middle_btn">
                      <span className="listing_middle_btn_label">
                        <AiFillDelete className="listing_middle_btn_svg red_text" />
                      </span>
                    </Button>
                  </Tooltip>
                </div>
                <h4 className="listing_middle_title">
                  <a href="#a">Quản lý hãng sản phẩm</a>
                </h4>
                <p className="listing_middle_content">
                  Thêm, sửa, xoá các hãng sản phẩm
                </p>
              </div>
              <div className="manage_listing_bottom">
                <div className="listing_bottom_title">
                  <h4></h4>
                </div>
                <div className="listing_bottom_sub_title">
                  <div className="listing_bottom_svg"></div>
                  <p></p>
                </div>
              </div>
            </S.ManageListingContainer>
          </Col>
          <Col span={8} style={{ padding: "0 15px " }}>
            <S.ManageListingContainer>
              <div className="manage_listing_top">
                <img
                  className="manage_listing_img"
                  src="https://asapkerala.gov.in/wp-content/uploads/2021/10/Clinical-Data-Management.jpg"
                  alt="..."
                />
              </div>
              <div className="manage_listing_middle">
                <div className="manage_listing_middle_btn_list">
                  <Tooltip placement="bottom" title="view">
                    <Button className="listing_middle_btn">
                      <span className="listing_middle_btn_label">
                        <AiFillEye className="listing_middle_btn_svg blue_text" />
                      </span>
                    </Button>
                  </Tooltip>
                  <Tooltip placement="bottom" title="edit">
                    <Button className="listing_middle_btn">
                      <span className="listing_middle_btn_label">
                        <AiFillEdit className="listing_middle_btn_svg green_text" />
                      </span>
                    </Button>
                  </Tooltip>
                  <Tooltip placement="bottom" title="remove">
                    <Button className="listing_middle_btn">
                      <span className="listing_middle_btn_label">
                        <AiFillDelete className="listing_middle_btn_svg red_text" />
                      </span>
                    </Button>
                  </Tooltip>
                </div>
                <h4 className="listing_middle_title">
                  <a href="#a">Quản lý tài khoản người dùng</a>
                </h4>
                <p className="listing_middle_content">
                  Thêm, sửa, xoá các tài khoản
                </p>
              </div>
              <div className="manage_listing_bottom">
                <div className="listing_bottom_title">
                  <h4></h4>
                </div>
                <div className="listing_bottom_sub_title">
                  <div className="listing_bottom_svg"></div>
                  <p></p>
                </div>
              </div>
            </S.ManageListingContainer>
          </Col>
          <Col span={8} style={{ padding: "0 15px " }}>
            <S.ManageListingContainer>
              <div className="manage_listing_top">
                <img
                  className="manage_listing_img"
                  src="https://rare-gallery.com/thumbs/585568-apple-caffeine.jpg"
                  alt="..."
                />
              </div>
              <div className="manage_listing_middle">
                <div className="manage_listing_middle_btn_list">
                  <Tooltip placement="bottom" title="view">
                    <Button className="listing_middle_btn">
                      <span className="listing_middle_btn_label">
                        <AiFillEye className="listing_middle_btn_svg blue_text" />
                      </span>
                    </Button>
                  </Tooltip>
                  <Tooltip placement="bottom" title="edit">
                    <Button className="listing_middle_btn">
                      <span className="listing_middle_btn_label">
                        <AiFillEdit className="listing_middle_btn_svg green_text" />
                      </span>
                    </Button>
                  </Tooltip>
                  <Tooltip placement="bottom" title="remove">
                    <Button className="listing_middle_btn">
                      <span className="listing_middle_btn_label">
                        <AiFillDelete className="listing_middle_btn_svg red_text" />
                      </span>
                    </Button>
                  </Tooltip>
                </div>
                <h4 className="listing_middle_title">
                  <a href="#a">Quản lý các chủ đề bài viết</a>
                </h4>
                <p className="listing_middle_content">
                  Thêm, sửa, xoá các chủ đề
                </p>
              </div>
              <div className="manage_listing_bottom">
                <div className="listing_bottom_title">
                  <h4></h4>
                </div>
                <div className="listing_bottom_sub_title">
                  <div className="listing_bottom_svg"></div>
                  <p></p>
                </div>
              </div>
            </S.ManageListingContainer>
          </Col>
        </Row>
      </S.DashboardPage>
    </>
  );
};

export default AdminDashboard;
