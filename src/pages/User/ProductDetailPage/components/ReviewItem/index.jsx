import { useMemo } from "react";
import { Image, Space, Rate, Col } from "antd";
import moment from "moment";

import * as S from "./styles";

const ReviewItem = ({ reviewList }) => {
  const renderReviewList = useMemo(() => {
    if (!reviewList.data.length) return null;
    return reviewList.data?.map((item) => {
      return (
        <S.ProductRating key={item.id}>
          <div className="product_ratings_list">
            <div className="product_comment_list">
              <div className="product_rating">
                <div className="product_rating_avata">
                  <S.RatingAvatarImg
                    className="guest_img"
                    shape="radius"
                    src="https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png"
                  />
                </div>
                <div className="product_rating_main">
                  <div className="product_rating_main_author-name">
                    {item.user.fullName}
                  </div>
                  <div className="product_user_rating">
                    <Rate
                      className="royalblue_color"
                      value={item.rate}
                      disabled
                      style={{ fontSize: 14 }}
                    />
                  </div>
                  <div className="product_rating_time">
                    {moment(item.createdAt).fromNow()}
                  </div>
                  <div className="product_rating_content">{item.comment}</div>
                  <div className="product_rating_images"></div>
                </div>
              </div>
            </div>
          </div>
        </S.ProductRating>
      );
    });
  }, [reviewList.data]);
  return <>{renderReviewList}</>;
};

export default ReviewItem;
