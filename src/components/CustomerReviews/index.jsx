import { useMemo } from "react";
import { Space, Rate, Col, Avatar } from "antd";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, FreeMode, A11y, Autoplay } from "swiper";
import moment from "moment";

import * as S from "./styles";

const CustomerReviews = ({ reviewList }) => {
  const renderReviewList = useMemo(() => {
    if (!reviewList.data.length) return null;
    return reviewList.data?.map((item) => {
      return (
        <SwiperSlide className="product_rating_slider" key={item.id}>
          <div className="product_rating_container">
            <Avatar
              shape="radio"
              className="product_rating_avatar"
              src="https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png"
            />
            <div className="product_rating_author_name">
              {item.user.fullName}
            </div>
            <Rate
              className="product_user_rating royalblue_color"
              value={item.rate}
              disabled
              style={{ fontSize: 14 }}
            />
            <p className="product_rating_time">
              {moment(item.createdAt).fromNow()}
            </p>
            <div className="product_rating_content">{item.comment}</div>
          </div>
        </SwiperSlide>
      );
    });
  }, [reviewList.data]);

  return (
    <>
      <S.ProductRatingSwiper
        style={{
          "--swiper-navigation-color": "royalblue",
        }}
        modules={[Navigation, A11y, Autoplay, FreeMode]}
        spaceBetween={0}
        grabCursor={true}
        autoplay={{ delay: 1500 }}
        speed={800}
        loop={true}
        navigation
        freeMode={true}
        breakpoints={{
          480: {
            slidesPerView: 2,
          },
          768: {
            slidesPerView: 3,
          },
          992: {
            slidesPerView: 4,
          },
          1280: {
            slidesPerView: 5,
          },
          1680: {
            slidesPerView: 6,
          },
        }}
      >
        {renderReviewList}
      </S.ProductRatingSwiper>
    </>
  );
};

export default CustomerReviews;
