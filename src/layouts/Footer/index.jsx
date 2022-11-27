import { Row, Col } from "antd";

import { TfiFacebook, TfiTwitterAlt } from "react-icons/tfi";
import { FaTiktok, FaYoutube, FaGithub } from "react-icons/fa";
import footer_img from "../../assets/images/footer_img.png";
import * as S from "./styles";

export default function Footer() {
  return (
    <S.FooterContainer>
      <Row>
        <Col xs={1} sm={1} lg={1} xl={1} xxl={1}></Col>
        <Col xs={22} sm={22} lg={22} xl={22} xxl={22}>
          <Row gutter={(16, 16)} className="footer_content">
            <Col
              xs={{ span: 24, order: 1 }}
              sm={{ span: 12, order: 1 }}
              lg={{ span: 12, order: 1 }}
              xl={{ span: 7, order: 1 }}
              xxl={7}
            >
              <div className="footer_introduce">
                <h4>GIỚI THIỆU</h4>
                <p>
                  Sneaker world trang mua sắm trực tuyến của thương hiệu giày,
                  thời trang nam, nữ, phụ kiện, giúp bạn tiếp cận xu hướng thời
                  trang mới nhất
                </p>
                <a href="https://moit.gov.vn/">
                  <img src={footer_img} alt="" />
                </a>
              </div>
              <div className="footer_social">
                <a href="/">
                  <span role="img">
                    <TfiFacebook className="social_icon" />
                  </span>
                </a>
                <a href="/">
                  <span role="img">
                    <TfiTwitterAlt className="social_icon" />
                  </span>
                </a>
                <a href="/">
                  <span role="img">
                    <FaTiktok className="social_icon" />
                  </span>
                </a>
                <a href="/">
                  <span role="img">
                    <FaYoutube className="social_icon" />
                  </span>
                </a>
                <a href="/">
                  <span role="img">
                    <FaGithub className="social_icon" />
                  </span>
                </a>
              </div>
            </Col>
            <Col
              xs={{ span: 24, order: 3 }}
              sm={{ span: 12, order: 3 }}
              lg={{ span: 12, order: 3 }}
              xl={{ span: 4, order: 2 }}
              xxl={4}
            >
              <div className="footer_list">
                <h4>Pháp lý & câu hỏi</h4>
                <ul>
                  <li>
                    <span href="/">Tìm Kiếm</span>
                  </li>
                  <li>
                    <span href="/">Giới Thiệu</span>
                  </li>
                  <li>
                    <span href="/">Chính Sách Đổi Trả</span>
                  </li>
                  <li>
                    <span href="/">Chính Sách Bảo Mật</span>
                  </li>
                  <li>
                    <span href="/">Điều Khoản Dịch Vụ</span>
                  </li>
                </ul>
              </div>
            </Col>
            <Col
              xs={{ span: 24, order: 4 }}
              sm={{ span: 12, order: 4 }}
              lg={{ span: 12, order: 4 }}
              xl={{ span: 7, order: 3 }}
              xxl={7}
            >
              <div className="footer_list">
                <h4>THÔNG TIN LIÊN HỆ</h4>
                <ul>
                  <li>
                    <span href="/">
                      999 Ngô Quyền, An Hải Bắc, Sơn Trà, Đà Nẵng
                    </span>
                  </li>
                  <li>
                    <span href="/">Điện thoại: 0236.333.666</span>
                  </li>
                  <li>
                    <span href="/">Fax: 0236.333.666</span>
                  </li>
                  <li>
                    <span href="/">Hộp thư: sneakerwolrld@gmail.com</span>
                  </li>
                </ul>
              </div>
            </Col>
            <Col
              xs={{ span: 24, order: 2 }}
              sm={{ span: 12, order: 2 }}
              lg={{ span: 12, order: 2 }}
              xl={{ span: 6, order: 4 }}
              xxl={6}
            >
              <div className="youtube_channel">
                <h4>KÊNH YOUTUBE</h4>
                <div className="footer_video">
                  <iframe
                    width="560"
                    height="315"
                    src="https://www.youtube.com/embed/uH4F7mgts1A"
                    title="YouTube video player"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    srcDoc="
                    <style>
          * {
          padding: 0;
          margin: 0;
          overflow: hidden;
          }
          
          body, html {
            height: 100%;
          }
          
          img, svg {
            position: absolute;
            width: 100%;
            top: 0;
            bottom: 0;
            margin: auto;
          }
          svg {
            filter: drop-shadow(1px 1px 10px hsl(206.5, 70.7%, 8%));
            transition: all 250ms ease-in-out;
          }
          
          body:hover svg {
            filter: drop-shadow(1px 1px 10px hsl(206.5, 0%, 10%));
            transform: scale(1.2);
          }
        </style>
        <a href='https://www.youtube.com/embed/uH4F7mgts1A'>
          <img src='http://i3.ytimg.com/vi/uH4F7mgts1A/hqdefault.jpg' alt=''>
          <svg xmlns='http://www.w3.org/2000/svg' width='64' height='64' viewBox='0 0 24 24' fill='none' stroke='royalblue' stroke-width='2' stroke-linecap='round' stroke-linejoin='round' class='feather feather-play-circle'><circle cx='12' cy='12' r='10'></circle><polygon points='10 8 16 12 10 16 10 8'></polygon></svg>
        </a>
        
        "
                  ></iframe>
                </div>
              </div>
            </Col>
          </Row>
          <Row>
            <Col span={24}>
              <div className="footer_copyright">
                <span>Copyright © 2022 Sneaker World.</span>
              </div>
            </Col>
          </Row>
        </Col>
        <Col xs={1} sm={1} lg={1} xl={1} xxl={1}></Col>
      </Row>
    </S.FooterContainer>
  );
}
