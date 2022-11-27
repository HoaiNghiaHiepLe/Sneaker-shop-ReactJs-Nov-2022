import { useEffect, useState } from "react";
import {
  Row,
  Col,
  Card,
  Badge,
  Input,
  Space,
  Select,
  Button,
  Collapse,
  Checkbox,
  Tag,
  Radio,
  Slider,
} from "antd";
import { useSelector, useDispatch } from "react-redux";
import { generatePath, Link, useLocation } from "react-router-dom";

import {
  getProductListAction,
  getCategoryListAction,
} from "../../../redux/actions";

import { VscFilterFilled } from "react-icons/vsc";
import TopWrapper from "../../../components/TopWrapper";
import { PRODUCT_LIST_LIMIT } from "../../../constants/pagination";
import {
  MAX_PRICE,
  MIN_PRICE,
  STEP_PRICE,
  PRICE_MARKS,
  BREADCRUMB,
} from "./constant";
import LoadingWrapper from "../../../components/LoadingWrapper";
import ProductItem from "../../../components/ProductItem";
import * as S from "./styles";
import { ROUTES, TITLES } from "../../../constants/";
import { SIZE_OPTIONS } from "../../Admin//CreateProductPage/constants";

const UserProductListPage = () => {
  const [filterParams, setFilterParams] = useState({
    categoryId: [],
    gender: undefined,
    keyword: "",
    price: [MIN_PRICE, MAX_PRICE],
    order: undefined,
    // size: [],
  });

  const dispatch = useDispatch();
  const { productList } = useSelector((state) => state.product);
  const { state, search } = useLocation();

  const { categoryList } = useSelector((state) => state.category);

  useEffect(() => {
    document.title = TITLES.USER.PRODUCT_LIST;
    if (state?.categoryId?.length) {
      dispatch(
        getProductListAction({
          params: {
            categoryId: state.categoryId,
            page: 1,
            limit: PRODUCT_LIST_LIMIT,
          },
        })
      );
      setFilterParams({ ...filterParams, categoryId: state.categoryId });
    }
    if (search === "?gender=1") {
      dispatch(
        getProductListAction({
          params: {
            gender: 1,
            page: 1,
            limit: PRODUCT_LIST_LIMIT,
          },
        })
      );
      setFilterParams({ ...filterParams, gender: 1 });
    }
    if (search === "?gender=2") {
      dispatch(
        getProductListAction({
          params: {
            gender: 2,
            page: 1,
            limit: PRODUCT_LIST_LIMIT,
          },
        })
      );
      setFilterParams({ ...filterParams, gender: 2 });
    } else {
      dispatch(
        getProductListAction({
          params: {
            page: 1,
            limit: PRODUCT_LIST_LIMIT,
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

  const handleShowMore = () => {
    dispatch(
      getProductListAction({
        params: {
          page: productList.meta.page + 1,
          limit: PRODUCT_LIST_LIMIT,
        },
        more: true,
      })
    );
  };

  const handleFilter = (key, value) => {
    setFilterParams({
      ...filterParams,
      [key]: value,
    });
    dispatch(
      getProductListAction({
        params: {
          ...filterParams,
          [key]: value,
          page: 1,
          limit: PRODUCT_LIST_LIMIT,
        },
      })
    );
  };

  const handleClearCategoryFilter = (id) => {
    const newCategoryId = filterParams.categoryId.filter((item) => item !== id);
    setFilterParams({
      ...filterParams,
      categoryId: newCategoryId,
    });
    dispatch(
      getProductListAction({
        params: {
          ...filterParams,
          categoryId: newCategoryId,
          page: 1,
          limit: PRODUCT_LIST_LIMIT,
        },
      })
    );
  };

  const handleClearKeywordFilter = () => {
    setFilterParams({
      ...filterParams,
      keyword: "",
    });
    dispatch(
      getProductListAction({
        params: {
          ...filterParams,
          keyword: "",
          page: 1,
          limit: PRODUCT_LIST_LIMIT,
        },
      })
    );
  };

  const handleClearGenderFilter = () => {
    setFilterParams({
      ...filterParams,
      gender: undefined,
    });
    dispatch(
      getProductListAction({
        params: {
          ...filterParams,
          gender: undefined,
          page: 1,
          limit: PRODUCT_LIST_LIMIT,
        },
      })
    );
  };

  const handleClearPriceFilter = () => {
    setFilterParams({
      ...filterParams,
      price: [MIN_PRICE, MAX_PRICE],
    });
    dispatch(
      getProductListAction({
        params: {
          ...filterParams,
          price: [MIN_PRICE, MAX_PRICE],
          page: 1,
          limit: PRODUCT_LIST_LIMIT,
        },
      })
    );
  };

  const handleClearSizeFilter = () => {
    setFilterParams({
      ...filterParams,
      size: [],
    });
    dispatch(
      getProductListAction({
        params: {
          ...filterParams,
          size: [],
          page: 1,
          limit: PRODUCT_LIST_LIMIT,
        },
      })
    );
  };

  const renderFilterCategory = () => {
    return filterParams.categoryId.map((filterItem) => {
      const categoryData = categoryList.data.find(
        (categoryItem) => categoryItem.id === filterItem
      );
      if (!categoryData) return null;
      return (
        <S.FilterTag
          style={{ marginTop: 10 }}
          color="royalblue"
          key={filterItem}
          closable
          onClose={() => handleClearCategoryFilter(filterItem)}
        >
          {categoryData.name}
        </S.FilterTag>
      );
    });
  };

  const renderFilterGender = () => {
    if (filterParams.gender === undefined) return <></>;
    else if (filterParams.gender === 1)
      return (
        <S.FilterTag
          color="royalblue"
          key={filterParams.gender}
          closable
          onClose={() => handleClearGenderFilter(filterParams.gender)}
        >
          Nam
        </S.FilterTag>
      );
    return (
      <S.FilterTag
        color="royalblue"
        key={filterParams.gender}
        closable
        onClose={() => handleClearGenderFilter(filterParams.gender)}
      >
        Nữ
      </S.FilterTag>
    );
  };

  // const renderFilterSize = () => {
  //   return filterParams.size?.map((filterItem) => {
  //     const sizeData = productList.data.find((item) => {
  //       return item.size === filterItem;
  //     });
  //     if (!sizeData) return null;
  //     return (
  //       <S.FilterTag
  //         style={{ marginTop: 10 }}
  //         color="royalblue"
  //         key={filterItem}
  //         closable
  //         onClose={() => handleClearSizeFilter(filterItem)}
  //       >
  //         {sizeData.size}
  //       </S.FilterTag>
  //     );
  //   });
  // };

  const renderFilterPrice = () => {
    if (
      filterParams.price[0] === MIN_PRICE &&
      filterParams.price[1] === MAX_PRICE
    )
      return null;
    return (
      <S.FilterTag
        color="royalblue"
        key={filterParams.price}
        closable
        onClose={() => handleClearPriceFilter(filterParams.price)}
      >
        {`Từ ${filterParams.price[0].toLocaleString()} VND - ${filterParams.price[1].toLocaleString()} VND`}
      </S.FilterTag>
    );
  };

  const renderProductList = () => {
    return productList.data.map((item) => {
      return (
        <Col xs={24} sm={12} lg={12} xl={8} xxl={6} key={item.id}>
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

  const renderCategoryOptions = () => {
    return categoryList.data.map((item) => {
      return (
        <Col span={24} key={item.id}>
          <Checkbox value={item.id}>{item.name}</Checkbox>
        </Col>
      );
    });
  };

  const renderSizeOptions = () => {
    return SIZE_OPTIONS?.map((item, index) => {
      return (
        <Col span={24} key={index}>
          <Checkbox value={item.value}>{item.label}</Checkbox>
        </Col>
      );
    });
  };

  return (
    <>
      <TopWrapper breadcrumb={[...BREADCRUMB]} height={200} />
      <S.Wrapper>
        <Row>
          <Col span={2} />
          <Col span={20}>
            <Row gutter={[16, 16]}>
              <Col xs={0} lg={8} xl={6} xxl={6}>
                <S.CustomCard
                  size="small"
                  style={{
                    position: "sticky",
                    position: "-webkit-sticky",
                    top: "0",
                  }}
                >
                  <p
                    style={{
                      fontSize: "16px",
                      borderBottom: "3px solid royalblue",
                      margin: 0,
                      paddingBottom: 10,
                    }}
                  >
                    <VscFilterFilled
                      style={{
                        margin: "-5 5",
                        color: "royalblue",
                        fontSize: 25,
                      }}
                    />
                    Filter
                  </p>
                  <Space wrap style={{ marginBottom: 16 }}>
                    {renderFilterCategory()}
                    {renderFilterGender()}
                    {renderFilterPrice()}
                    {/* {renderFilterSize()} */}
                    {filterParams.keyword && (
                      <S.FilterTag
                        color="royalblue"
                        closable
                        onClose={() => handleClearKeywordFilter()}
                      >
                        Keyword: {filterParams.keyword}
                      </S.FilterTag>
                    )}
                  </Space>
                  <Collapse expandIconPosition="end">
                    <Collapse.Panel
                      style={{ position: "relative" }}
                      header={"Thương hiệu"}
                    >
                      <Checkbox.Group
                        onChange={(value) => handleFilter("categoryId", value)}
                        value={filterParams.categoryId}
                      >
                        <Row>{renderCategoryOptions()}</Row>
                      </Checkbox.Group>
                    </Collapse.Panel>
                    <Collapse.Panel header={"Giới tính"}>
                      <Radio.Group
                        onChange={(e) => handleFilter("gender", e.target.value)}
                        value={filterParams.gender}
                      >
                        <Space
                          direction="vertical"
                          style={{
                            display: "flex",
                            rowGap: 0,
                          }}
                        >
                          <Radio value={1}>Nam</Radio>
                          <Radio value={2}>Nữ</Radio>
                        </Space>
                      </Radio.Group>
                    </Collapse.Panel>
                    <Collapse.Panel header={"Giá"}>
                      <Slider
                        range
                        min={MIN_PRICE}
                        max={MAX_PRICE}
                        step={STEP_PRICE}
                        value={filterParams.price}
                        defaultValue={[(MIN_PRICE, MAX_PRICE)]}
                        marks={PRICE_MARKS}
                        onChange={(value) => handleFilter("price", value)}
                      />
                    </Collapse.Panel>
                    {/* <Collapse.Panel
                      style={{ position: "relative" }}
                      header={"Size"}
                    >
                      <Checkbox.Group
                        onChange={(value) => handleFilter("size", value)}
                        value={filterParams.size}
                      >
                        <Row>{renderSizeOptions()}</Row>
                      </Checkbox.Group>
                    </Collapse.Panel> */}
                  </Collapse>
                </S.CustomCard>
              </Col>
              <Col xs={24} lg={16} xl={18} xxl={18}>
                <Row style={{ marginBottom: "16px" }} gutter={[16, 16]}>
                  <Col xs={24} lg={16} xl={18} xxl={18}>
                    <Input.Search
                      placeholder="Tìm sản phẩm"
                      enterButton
                      onChange={(e) => handleFilter("keyword", e.target.value)}
                      value={filterParams.keyword}
                    />
                  </Col>
                  <Col xs={24} lg={8} xl={6} xxl={6}>
                    <Select
                      defaultValue={{
                        label: "Sắp xếp theo...",
                      }}
                      style={{ width: "100%" }}
                      onChange={(value) => handleFilter("order", value)}
                    >
                      <Select.Option value={"price.asc"}>
                        Giá từ thấp đến cao
                      </Select.Option>
                      <Select.Option value={"price.desc"}>
                        Giá từ cao đến thấp
                      </Select.Option>
                      <Select.Option value={"id.desc"}>Mới nhất</Select.Option>
                    </Select>
                  </Col>
                </Row>
                {productList.loading ? (
                  <LoadingWrapper />
                ) : (
                  <>
                    <h3 style={{ color: "royalblue" }}>
                      Có {productList.meta.total} sản phẩm
                    </h3>
                    <Row style={{ marginTop: "20px" }} gutter={[16, 16]}>
                      {renderProductList()}
                    </Row>
                    {productList.data.length !== productList.meta.total && (
                      <Row justify="center">
                        <Button
                          style={{ marginTop: 16 }}
                          onClick={() => handleShowMore()}
                        >
                          Xem thêm
                        </Button>
                      </Row>
                    )}
                  </>
                )}
              </Col>
            </Row>
          </Col>
          <Col span={2} />
        </Row>
      </S.Wrapper>
    </>
  );
};

export default UserProductListPage;
