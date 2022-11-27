import { useState } from "react";
import { Image, Space, Row, Col } from "antd";
import Slider from "react-slick";
import { SlArrowLeft, SlArrowRight } from "react-icons/sl";
import { SLIDER_IMAGE } from "./constant";

import * as S from "./styles";
const SyncSlider = ({ images }) => {
  const [nav1, setNav1] = useState();
  const [nav2, setNav2] = useState();
  const [visible, setVisible] = useState(false);

  const renderSliderImages = (height, width) => {
    if (!images?.length) return null;
    return images.map((item) => {
      return (
        <div className="swiper-slide" key={item.productId}>
          <Image
            height={height}
            width={width}
            src={item.url}
            preview={{
              visible: false,
            }}
            onClick={() => setVisible(true)}
          />
          <div
            style={{
              display: "none",
            }}
          >
            <Image.PreviewGroup
              preview={{
                visible,
                onVisibleChange: (vis) => setVisible(vis),
              }}
            >
              {images.map((item) => {
                return <Image key={item.id} src={item.url} alt={item.name} />;
              })}
              ;
            </Image.PreviewGroup>
          </div>
        </div>
      );
    });
  };
  const renderSliderImages2 = (height, width) => {
    if (!images?.length) return null;
    return images.map((item) => {
      return (
        <div className="swiper-slide" key={item.productId}>
          <Image height={height} width={width} src={item.url} preview={false} />
        </div>
      );
    });
  };

  const SampleNextArrow = (props) => {
    const { className, style, onClick } = props;
    return (
      <SlArrowRight
        style={{
          ...style,
          position: "absolute",
          top: "43%",
          right: "-10px",
          display: "flex",
          fontSize: "50px",
          cursor: "pointer",
          color: "royalblue",
        }}
        onClick={onClick}
      />
    );
  };

  const SamplePrevArrow = (props) => {
    const { className, style, onClick } = props;
    return (
      <SlArrowLeft
        style={{
          ...style,
          position: "absolute",
          zIndex: "1",
          top: "43%",
          left: "-10px",
          display: "flex",
          fontSize: "50px",
          cursor: "pointer",
          color: "royalblue",
        }}
        onClick={onClick}
      />
    );
  };

  const settings = {
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
  };
  const settings2 = {
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <S.SliderContainer>
      <Slider
        className="mySwiper"
        {...settings}
        asNavFor={nav2}
        focusOnSelect={true}
        swipeToSlide={true}
        ref={(slider1) => setNav1(slider1)}
      >
        {renderSliderImages()}
      </Slider>
      <br></br>
      <br></br>
      <Slider
        className="mySwiper2"
        {...settings2}
        asNavFor={nav1}
        ref={(slider2) => setNav2(slider2)}
        swipeToSlide={true}
        focusOnSelect={true}
      >
        {renderSliderImages2()}
      </Slider>
    </S.SliderContainer>
  );
};

export default SyncSlider;
