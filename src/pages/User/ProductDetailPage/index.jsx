import { useEffect, useState } from "react";
import {
  Card,
  Row,
  Col,
  Space,
  Radio,
  InputNumber,
  Tabs,
  notification,
  Image,
  Form,
  Input,
  Rate,
  Badge,
} from "antd";
import { useParams, useLocation, Link, generatePath } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { AiOutlineShoppingCart } from "react-icons/ai";
import {
  CheckCircleTwoTone,
  HeartOutlined,
  HeartFilled,
} from "@ant-design/icons";
import { GiWalkingBoot } from "react-icons/gi";

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
import SyncSlider from "../../../components/SyncSlider";
import ReviewItem from "./components/ReviewItem";
import ImageSlider from "./components/ImageSlider";
import TopWrapper from "../../../components/TopWrapper";
import LoadingWrapper from "../../../components/LoadingWrapper";
import ProductItem from "../../../components/ProductItem";
import { ROUTES, TITLES } from "../../../constants";
import { BREADCRUMB } from "./constants";
import { calcDiscount } from "../../../utils/product";
import { PRODUCT_RELATED_LIMIT } from "../../../constants/pagination";

import * as S from "./styles";

const ProductDetailPage = () => {
  const { id } = useParams();
  const productId = parseInt(id.split(".")[1]);
  const dispatch = useDispatch();
  const [reviewForm] = Form.useForm();

  const [productInfos, setProductInfos] = useState({
    size: undefined,
    quantity: 1,
  });

  const [error, setError] = useState(false);
  const { productDetail, productList } = useSelector((state) => state.product);
  const { userInfo } = useSelector((state) => state.user);
  const { reviewList } = useSelector((state) => state.review);
  const { state } = useLocation();

  const isLike = userInfo.data.id
    ? productDetail.data.favorites?.some(
        (item) => item.userId === userInfo.data.id
      )
    : false;

  useEffect(() => {
    dispatch(getProductDetailAction({ id: productId }));
    dispatch(getReviewListAction({ productId: productId }));

    document.title = TITLES.USER.PRODUCT_DETAILS;
  }, [productId]);

  useEffect(() => {
    if (state?.categoryId?.length) {
      dispatch(
        getProductListAction({
          params: {
            categoryId: state.categoryId,
            page: 1,
            limit: PRODUCT_RELATED_LIMIT,
          },
        })
      );
    } else {
      dispatch(
        getProductListAction({
          params: {
            page: 1,
            limit: PRODUCT_RELATED_LIMIT,
          },
        })
      );
    }
    dispatch(
      getCategoryListAction({
        params: {
          page: 1,
        },
      })
    );
  }, [state]);

  const handleNotification = () => {
    notification.open({
      message: "Thông báo",
      description: "Đã thêm sản phẩm vào giỏ hàng",
      icon: (
        <CheckCircleTwoTone
          style={{
            color: "#11f924",
          }}
        />
      ),
    });
  };

  const handleAddToCart = () => {
    productInfos.size === undefined
      ? setError(true)
      : dispatch(
          addToCartAction({
            productId: productId,
            quantity: productInfos.quantity,
            size: productInfos.size,
            price: productDetail.data.price,
            productBrand: productDetail.data.category?.name,
            productName: productDetail.data.name,
            slug: productDetail.data.name,
            amount: productDetail.data.amount,
            discount: productDetail.data.discount,
            image: productDetail.data?.images[0]?.url,
          })
        ) && handleNotification();
  };

  const handleToggleFavorite = () => {
    if (userInfo.data.id) {
      if (isLike) {
        const favoriteData = productDetail.data.favorites?.find(
          (item) => item.userId === userInfo.data.id
        );
        if (favoriteData) {
          dispatch(
            unFavoriteProductAction({
              id: favoriteData.id,
              productId: productDetail.data.id,
            })
          );
        }
      } else {
        dispatch(
          favoriteProductAction({
            userId: userInfo.data.id,
            productId: productDetail.data.id,
          })
        );
      }
    } else {
      notification.warn({ message: "Bạn cần đăng nhập" });
    }
  };

  const handlePostReview = (values) => {
    dispatch(
      postReviewAction({
        ...values,
        userId: userInfo.data.id,
        productId: productDetail.data.id,
      })
    );
  };

  const handleRating = () => {
    const rating = reviewList.data.map((item) => {
      if (item.rate === undefined) {
        return 0;
      }
      return item.rate;
    });

    const sumRating = rating.reduce((a, b) => parseInt(a) + parseInt(b), 0);

    const avgRating = Math.round(sumRating / rating.length);
    return avgRating;
  };

  const renderProductList = () => {
    const compareProduct = productList.data.filter((item) => {
      return (
        item.categoryId === productDetail?.data?.categoryId &&
        item.id !== productId
      );
    });
    return compareProduct?.map((item) => {
      return (
        <Col
          style={{ marginTop: "20px" }}
          xs={24}
          sm={12}
          lg={24}
          xl={12}
          xxl={12}
          key={item.id}
        >
          {item.isNew ? (
            <Link
              to={generatePath(ROUTES.USER.PRODUCT_DETAILS, {
                id: `${item.slug}.${item.id}`,
              })}
            >
              <Badge.Ribbon color="red" text="Mới">
                <ProductItem item={item} />
              </Badge.Ribbon>
            </Link>
          ) : (
            <Link
              to={generatePath(ROUTES.USER.PRODUCT_DETAILS, {
                id: `${item.slug}.${item.id}`,
              })}
            >
              <ProductItem item={item} />
            </Link>
          )}
        </Col>
      );
    });
  };

  const TAB_ITEMS = [
    {
      label: <h2 style={{ color: "#333" }}>Mô tả</h2>,
      key: "1",
      children: (
        <S.ProductContent
          dangerouslySetInnerHTML={{ __html: productDetail.data.content }}
        />
      ),
    },
    {
      label: <h2 style={{ color: "#333" }}>Cách chọn size giày</h2>,
      key: "3",
      children: (
        <>
          <p style={{ color: "#333" }}>
            Để chọn size giày phù hợp với chân của mình, bạn có thể làm theo
            cách sau:
          </p>
          <p style={{ color: "#333" }}>
            <b style={{ color: "#333" }}>Bước 1: </b> Đo chiều dài bàn chân theo
            huớng dẫn ở hình dưới:
          </p>
          <Row justify="center">
            <Image
              preview={false}
              src="https://shopgiayreplica.com/wp-content/uploads/2018/07/cach-chon-size-giay-nike-adidas-1.jpg"
            />
          </Row>
          <p>
            <b>Bước 2: </b>Sau khi đo được chiều dài bàn chân, bạn có thể đối
            chiếu với bảng size giày dưới để chọn được size giày phù hợp cho
            mình. Ví dụ chiều dài bàn chân là 26.5cm thì size giày nam Adidas
            phù hợp là 42.
          </p>
          <Row justify="center">
            <Image
              preview={false}
              src="https://shopgiayreplica.com/wp-content/uploads/2018/07/cach-chon-size-giay-nike-adidas-2.jpg"
            />
          </Row>
          <p>Chúc các bạn lựa chọn được đôi giày ưng ý</p>
        </>
      ),
    },
    {
      label: <h2 style={{ color: "#333" }}>Đánh giá</h2>,
      key: "2",
      children: (
        <Row>
          <Col span={24}>
            {userInfo.data.id ? (
              <S.ProductRatingForm>
                <h2 className="rating_header">ĐÁNH GIÁ SẢN PHẨM</h2>
                <Form
                  form={reviewForm}
                  layout="vertical"
                  className="rating_form"
                  onFinish={(values) => {
                    handlePostReview(values);
                    reviewForm.resetFields();
                  }}
                >
                  <Form.Item label="Rate" name="rate">
                    <Rate />
                  </Form.Item>
                  <Form.Item label="Comment" name="comment">
                    <Input.TextArea autoSize={{ maxRows: 6, minRows: 2 }} />
                  </Form.Item>
                  <S.CustomBtn htmlType="submit" block>
                    Đánh giá
                  </S.CustomBtn>
                </Form>
              </S.ProductRatingForm>
            ) : (
              <h2 className="rating_header">Đăng nhập để đánh giá sản phẩm</h2>
            )}
            <S.ProductRatingContainer>
              <div className="rating_overview">
                <div className="rating_overview_briefing">
                  <Rate
                    className="royalblue_color"
                    value={handleRating()}
                    disabled
                  />
                </div>
                {handleRating() > 0 ? (
                  <div className="rating_overview_filter">
                    <span
                      className="royalblue_color"
                      style={{ fontSize: "1.875rem" }}
                    >
                      {handleRating()}
                    </span>{" "}
                    <span
                      className="royalblue_color"
                      style={{ fontSize: "1.125rem" }}
                    >
                      trên 5 sao
                    </span>
                  </div>
                ) : (
                  <div className="rating_overview_filter">
                    <span
                      className="royalblue_color"
                      style={{ fontSize: "1.875rem" }}
                    ></span>{" "}
                    <span
                      className="royalblue_color"
                      style={{ fontSize: "1.125rem" }}
                    >
                      Chưa có đánh giá
                    </span>
                  </div>
                )}
              </div>
              <ReviewItem reviewList={reviewList} />
            </S.ProductRatingContainer>
          </Col>
        </Row>
      ),
    },
  ];
  return (
    <>
      <TopWrapper
        breadcrumb={[
          ...BREADCRUMB,
          {
            title: productDetail.data.category?.name,
            path: ROUTES.USER.PRODUCT_LIST,
            state: { categoryId: [productDetail.data.category?.id] },
            icon: <GiWalkingBoot style={{ fontSize: 20 }} />,
          },
          {
            title: productDetail.data.name,
          },
        ]}
        height={200}
      />
      {productDetail.data.loading ? (
        <LoadingWrapper />
      ) : (
        <Row gutter={[16, 16]}>
          <Col span={2}></Col>
          <Col span={20}>
            <S.ProductInfo>
              <Row gutter={[16, 16]}>
                <Col
                  xs={24}
                  sm={24}
                  lg={24}
                  xl={12}
                  xxl={12}
                  className="product_img"
                >
                  <SyncSlider images={productDetail.data.images} />
                  {/* <ImageSlider item={productDetail.data} /> */}
                </Col>
                <Col
                  xs={24}
                  sm={24}
                  lg={24}
                  xl={12}
                  xxl={12}
                  className="product_discription"
                >
                  <Col>
                    <div className="product_name">
                      {productDetail.data.name}
                    </div>
                    <div className="product_rate">
                      <Rate
                        className="royalblue_color"
                        value={handleRating()}
                        disabled
                      />{" "}
                      <p> {reviewList.data.length} khách hàng đã đánh giá</p>
                    </div>
                    {productDetail.data.discount > 0 ? (
                      <div className="product_price">
                        <p className="new_price">
                          {`${calcDiscount(
                            productDetail.data.price,
                            productDetail.data.discount
                          ).toLocaleString()} ₫ -`}
                        </p>{" "}
                        <p className="price_old">
                          {`  ${productDetail.data.price?.toLocaleString()} ₫`}
                        </p>
                      </div>
                    ) : (
                      <p className="new_price">{`${productDetail.data.price?.toLocaleString()} ₫`}</p>
                    )}
                    <Space>
                      {productDetail.data.category?.id ===
                        productDetail.data.categoryId && (
                        <div className="product_detail">
                          {`Thương hiệu: ${productDetail.data.category?.name.toUpperCase()}`}
                        </div>
                      )}
                      <div
                        className="product_detail"
                        style={{ marginLeft: "50px" }}
                      >
                        {`Giới tính: ${
                          productDetail.data.gender === 1 ? "Nam" : "Nữ"
                        }`}
                      </div>
                    </Space>
                    <div className="product_detail">{`Số lượng còn lại: ${productDetail.data.amount}`}</div>
                    <div className="product_size">
                      <b>Size: </b>
                      <div className="size_select">
                        {productDetail.data.size?.map((item) => {
                          return (
                            <Radio.Group
                              style={{ paddingRight: "10px" }}
                              key={item}
                              size="large"
                              buttonStyle="solid"
                              value={productInfos.size}
                              onChange={(e) => {
                                setError(false);
                                setProductInfos({
                                  ...productInfos,
                                  size: e.target.value,
                                });
                              }}
                            >
                              <Radio.Button value={item}>{item}</Radio.Button>
                            </Radio.Group>
                          );
                        })}
                      </div>
                      <div>
                        {error ? (
                          <S.MessageError>Vui lòng chọn size</S.MessageError>
                        ) : (
                          ""
                        )}
                      </div>
                    </div>
                    <div className="action_container">
                      <Row gutter={(0, 0)}>
                        <Col flex={3}>
                          <Row>
                            <InputNumber
                              style={{
                                marginRight: "10px",
                                marginTop: "10px",
                                marginBottom: "10px",
                              }}
                              defaultValue={1}
                              size="large"
                              onChange={(value) =>
                                setProductInfos({
                                  ...productInfos,
                                  quantity: value,
                                })
                              }
                              value={productInfos.quantity}
                              min={1}
                              max={productDetail.data.amount}
                            />
                            <S.CustomBtn
                              style={{
                                marginTop: "10px",
                                marginBottom: "10px",
                              }}
                              size="large"
                              onClick={() => handleAddToCart()}
                            >
                              <AiOutlineShoppingCart
                                style={{ marginRight: 8 }}
                              />
                              Thêm vào giỏ hàng
                            </S.CustomBtn>
                          </Row>
                        </Col>
                        <Col style={{ flex: "0 2 auto" }} flex={2}>
                          <S.FavoritetBtn
                            style={{ marginTop: "10px", marginBottom: "10px" }}
                            ghost={isLike}
                            danger={isLike}
                            size="large"
                            onClick={() => handleToggleFavorite()}
                            icon={isLike ? <HeartFilled /> : <HeartOutlined />}
                          >
                            <span className="liked_count">
                              {!isLike ? (
                                <p>
                                  {" "}
                                  {productDetail.data?.favorites?.length ||
                                    " "}{" "}
                                  Thêm yêu thích
                                </p>
                              ) : (
                                <p>
                                  {" "}
                                  {productDetail.data?.favorites?.length ||
                                    " "}{" "}
                                  Đã yêu thích
                                </p>
                              )}
                            </span>
                          </S.FavoritetBtn>
                        </Col>
                      </Row>
                    </div>
                  </Col>
                  <Col>
                    <div className="policy_content">
                      <div className="policy_title">Chính sách</div>
                      <ul className="policy_content">
                        <li className="policy_item">
                          <S.CheckIcon />
                          Ship COD toàn quốc
                        </li>
                        <li className="policy_item">
                          <S.CheckIcon />
                          Giảm Giá Toàn Bộ Sản Phẩm Lên Đến 60%
                        </li>
                        <li className="policy_item">
                          <S.CheckIcon />
                          Nhận hàng và kiểm tra trước khi thanh toán
                        </li>
                        <li className="policy_item">
                          <S.CheckIcon />
                          Miễn phí vận chuyển trong nội thành Đà Nẵng
                        </li>
                      </ul>
                    </div>
                  </Col>
                </Col>
              </Row>
            </S.ProductInfo>
            <S.ProductDetail>
              <Row>
                <Col
                  className="product_review"
                  xs={24}
                  sm={24}
                  lg={16}
                  xl={13}
                  xxl={14}
                >
                  <Card>
                    <Tabs centered defaultActiveKey="1" items={TAB_ITEMS} />
                  </Card>
                </Col>
                <Col
                  className="product_related_col"
                  xs={24}
                  sm={24}
                  lg={8}
                  xl={11}
                  xxl={10}
                >
                  <div className="product_related">
                    <div className="product_related_title">
                      <p>Giày {productDetail.data?.category?.name}</p>
                      <h2>Sản phẩm tương tự</h2>
                    </div>
                    <Row style={{ marginTop: "-20px" }} gutter={(16, 16)}>
                      {renderProductList()}
                    </Row>
                  </div>
                </Col>
              </Row>
            </S.ProductDetail>
          </Col>
          <Col span={2}></Col>
        </Row>
      )}
    </>
  );
};

export default ProductDetailPage;
