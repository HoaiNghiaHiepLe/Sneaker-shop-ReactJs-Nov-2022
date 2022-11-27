import { useEffect, useState, useMemo } from "react";
import { Button, Table, Space, Pagination, Tag, Image } from "antd";
import { useSelector, useDispatch } from "react-redux";
import { generatePath, useNavigate } from "react-router-dom";

import {
  getProductListAction,
  getCategoryListAction,
  deleteProductAction,
} from "../../../redux/actions";
import LoadingWrapper from "../../../components/LoadingWrapper";
import { ADMIN_TABLE_LIMIT } from "../../../constants/pagination";
import { ROUTES, TITLES } from "../../../constants/";
import * as S from "./styles";

const AdminProductListPage = () => {
  const dispatch = useDispatch();
  const [visible, setVisible] = useState(false);
  const { productList } = useSelector((state) => state.product);

  const navigate = useNavigate();

  useEffect(() => {
    dispatch(
      getProductListAction({
        params: {
          page: 1,
          limit: ADMIN_TABLE_LIMIT,
          order: "id.desc",
        },
      })
    );
    dispatch(getCategoryListAction());
    document.title = TITLES.ADMIN.PRODUCT_LIST;
  }, []);

  const handleChangePage = (page) => {
    dispatch(
      getProductListAction({
        params: {
          page: page,
          limit: ADMIN_TABLE_LIMIT,
          order: "id.desc",
        },
      })
    );
  };

  const handleDeleteProduct = (id) => {
    dispatch(deleteProductAction({ id: id }));
    dispatch(
      getProductListAction({
        params: {
          page: productList.meta.page,
          limit: ADMIN_TABLE_LIMIT,
          order: "id.desc",
        },
      })
    );
  };

  const tableData = productList.data.map((item) => ({
    ...item,
    key: item.id,
  }));

  const tableColumn = [
    {
      title: "Thứ tự",
      dataIndex: "stt",
      key: "stt",
      sorter: (a, b) => a.id - b.id,
      render: (_, record) => {
        return (
          <Space
            style={{
              justifyContent: "center",
              alignItems: "center",
              width: 50,
            }}
          >
            <h4>{record.id}</h4>
          </Space>
        );
      },
    },
    {
      title: "Tên",
      dataIndex: "name",
      key: "name",
      render: (_, record) => {
        return (
          <>
            <Space>
              {record.images?.slice(0, 1).map((item) => {
                return (
                  <Image
                    key={item.id}
                    preview={{
                      visible: false,
                    }}
                    onClick={() => setVisible(true)}
                    src={item?.url}
                    alt={item?.name}
                    style={{
                      width: "80px",
                      height: "auto",
                      borderRadius: "10px",
                    }}
                  />
                );
              })}
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
                  {record.images.map((item) => {
                    return (
                      <Image key={item.id} src={item.url} alt={item.name} />
                    );
                  })}
                  ;
                </Image.PreviewGroup>
              </div>
              <h4>{record.name}</h4>
            </Space>
          </>
        );
      },
    },
    {
      title: "Hãng",
      dataIndex: "category",
      key: "category",
      render: (category) => category.name.toUpperCase(),
    },
    {
      title: "Giá",
      dataIndex: "price",
      key: "price",
      render: (price) => `${price.toLocaleString()} VND`,
    },
    {
      title: "Giới tính",
      dataIndex: "gender",
      key: "gender",
      render: (gender) => (gender === 1 ? "Nam" : "Nữ"),
    },
    {
      title: "Size",
      dataIndex: "size",
      key: "size",
      render: (sizes) => (
        <>
          {sizes.map((size) => {
            return (
              <Tag color="geekblue" key={size}>
                {size}
              </Tag>
            );
          })}
        </>
      ),
    },
    {
      title: "Số lượng",
      dataIndex: "amount",
      key: "amount",
    },
    {
      title: "Sản phẩm mới",
      dataIndex: "isNew",
      key: "isNew",
      render: (isNew) =>
        isNew === true && (
          <Tag color="royalblue" key={isNew}>
            Mới
          </Tag>
        ),
    },
    {
      title: "Giảm giá",
      dataIndex: "discount",
      key: "discount",
      render: (discount) => (discount === undefined ? 0 : `${discount}%`),
    },
    {
      title: "Hành động",
      dataIndex: "action",
      key: "action",
      render: (_, record) => {
        return (
          <Space>
            <Button
              onClick={() =>
                navigate(
                  generatePath(ROUTES.ADMIN.UPDATE_PRODUCT, { id: record.id })
                )
              }
            >
              Sửa
            </Button>
            <Button onClick={(id) => handleDeleteProduct(record.id)}>
              Xoá
            </Button>
          </Space>
        );
      },
    },
  ];

  return (
    <>
      {productList.loading ? (
        <LoadingWrapper />
      ) : (
        <S.Wrapper>
          <S.TopWrapper>
            <h2>Quản lý sản phẩm</h2>
            <Button
              type="primary"
              onClick={() => navigate(ROUTES.ADMIN.CREATE_PRODUCT)}
            >
              Tạo sản phẩm
            </Button>
          </S.TopWrapper>
          <Table
            rowKey="id"
            columns={tableColumn}
            dataSource={tableData}
            pagination={false}
            style={{ flex: 1 }}
          />
          <Pagination
            current={productList.meta.page}
            pageSize={ADMIN_TABLE_LIMIT}
            total={productList.meta.total}
            onChange={(page) => handleChangePage(page)}
            style={{ margin: "16px auto 0" }}
          />
        </S.Wrapper>
      )}
    </>
  );
};

export default AdminProductListPage;
