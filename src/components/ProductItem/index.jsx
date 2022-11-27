import React, { useMemo, useState } from "react";
import { Tooltip, Image, Tag } from "antd";

import * as S from "./styles";

const ProductItem = ({ item }) => {
  const [imageChange, setImageChange] = useState(null);
  const calcDiscount = (currentPrice, discount) => {
    return currentPrice - (currentPrice * discount) / 100;
  };

  const renderProductListImages = useMemo(() => {
    if (!item.images?.length) return null;
    return (
      <div className="product_list_img_ratio" key={item.id}>
        {item.images?.slice(0, 1).map((item) => {
          return (
            <img
              key={item.id}
              className="product_list_img visible_img"
              src={item.url}
              alt={item.name}
            />
          );
        })}
        {item.images.length > 1
          ? item.images?.slice(1, 2).map((item) => {
              return (
                <img
                  key={item.id}
                  className="product_list_img hidden_img"
                  src={item.url}
                  alt={item.name}
                />
              );
            })
          : item.images?.map((item) => {
              return (
                <img
                  key={item.id}
                  className="product_list_img hidden_img"
                  src={item.url}
                  alt={item.name}
                />
              );
            })}
      </div>
    );
  }, [item]);

  return (
    <S.ProductContainer
      imageChange={imageChange}
      onMouseOver={() => setImageChange(true)}
      onMouseOut={() => setImageChange(false)}
    >
      {renderProductListImages}
      <div className="product_content">
        <Tooltip className="product_name" placement="topLeft" title={item.name}>
          <h3>{item.name}</h3>
        </Tooltip>
        <div className="size_amount">
          <Tooltip
            className="product_size"
            placement="topLeft"
            title={item.size?.join(" - ")}
          >
            <Tag color="geekblue" key={item.size}>
              Có {item.size?.length} size
            </Tag>
          </Tooltip>
          <Tag className="product_amount" color="geekblue" key={item.amount}>
            Còn {item.amount} sản phẩm
          </Tag>
        </div>
        <div className="product_price">
          <span>
            <s>{`${item.price.toLocaleString()} ₫`}</s>
            {` -${item.discount}%`}
          </span>
          <p>
            {`${calcDiscount(item.price, item.discount).toLocaleString()} ₫`}
          </p>
        </div>
        <div className="product_category">
          <Tag className="product_gender" color="geekblue" key={item.gender}>
            {item.gender === 1 ? "Nam" : "Nữ"}
          </Tag>
          <h4>{item.category.name.toUpperCase()}</h4>
        </div>
      </div>
    </S.ProductContainer>
  );
};

export default ProductItem;
