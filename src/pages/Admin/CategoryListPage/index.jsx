import { useEffect, useState, useMemo } from "react";
import { Button, Table, Space, Pagination, notification } from "antd";
import { useSelector, useDispatch } from "react-redux";
import { generatePath, useNavigate } from "react-router-dom";

import {
  getCategoryListAction,
  deleteCategoryAction,
} from "../../../redux/actions";
import moment from "moment";
import { WarningFilled } from "@ant-design/icons";

import LoadingWrapper from "../../../components/LoadingWrapper";
import { ADMIN_TABLE_LIMIT } from "../../../constants/pagination";
import { ROUTES, TITLES } from "../../../constants";
import * as S from "./styles";

const AdminCategoryListPage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { categoryList } = useSelector((state) => state.category);

  useEffect(() => {
    dispatch(
      getCategoryListAction({
        params: {
          page: 1,
          limit: ADMIN_TABLE_LIMIT,
        },
      })
    );
    document.title = TITLES.ADMIN.CATEGORY_LIST;
  }, []);

  const handleChangePage = (page) => {
    dispatch(
      getCategoryListAction({
        params: {
          page: page,
          limit: ADMIN_TABLE_LIMIT,
        },
      })
    );
  };

  const handleDeleteCategory = async (id) => {
    dispatch(deleteCategoryAction({ id: id }));
    dispatch(
      getCategoryListAction({
        params: {
          page: categoryList.meta.page,
          limit: ADMIN_TABLE_LIMIT,
        },
      })
    );
  };

  const handleNotification = () => {
    notification.open({
      message: "Thông báo",
      description: "Bạn cần xoá hết sản phẩm của hãng này trước",
      icon: (
        <WarningFilled
          style={{
            color: "#e53935",
          }}
        />
      ),
    });
  };

  const tableData = categoryList.data.map((item) => ({
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
            <h3>{record.id}</h3>
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
          <Space>
            <h4>{record.name.toUpperCase()}</h4>
          </Space>
        );
      },
    },
    {
      title: "Sản phẩm cùng hãng",
      dataIndex: "linkedProducts",
      key: "linkedProducts",
      render: (_, record) => {
        return (
          <>
            {record.products?.slice(0, 1)?.map((item) => {
              return (
                <Space key={item.id}>
                  <h4>
                    {record.id === item.categoryId && record.products.length}
                  </h4>
                </Space>
              );
            })}
          </>
        );
      },
    },
    {
      title: "Thời gian",
      dataIndex: "time",
      key: "time",
      render: (_, record) => {
        return (
          <Space>
            <div>
              Đã tạo bởi <b>{record.author}</b>
              <br />
              {moment(record.createdAt).format("kk:mm dddd DD/MM/YYYY")}
              <br />
              {record.updatedAt > record.createdAt + 1 && (
                <div>
                  <p>
                    Đã cập nhật bởi <b>{record.author}</b>
                  </p>
                  {moment(record.updatedAt).fromNow()}
                </div>
              )}
            </div>
          </Space>
        );
      },
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
                  generatePath(ROUTES.ADMIN.UPDATE_CATEGORY, { id: record.id })
                )
              }
            >
              Sửa
            </Button>
            <Button
              onClick={() => (
                <>
                  {record.products.length === 0
                    ? handleDeleteCategory(record.id)
                    : handleNotification()}
                </>
              )}
            >
              Xoá
            </Button>
          </Space>
        );
      },
    },
  ];

  return (
    <>
      {categoryList.loading ? (
        <LoadingWrapper />
      ) : (
        <S.Wrapper>
          <S.TopWrapper>
            <h2>Quản lý hãng nhãn hàng</h2>
            <Button
              type="primary"
              onClick={() => navigate(ROUTES.ADMIN.CREATE_CATEGORY)}
            >
              Tạo nhãn hàng
            </Button>
          </S.TopWrapper>
          <Table
            rowKey="id"
            columns={tableColumn}
            dataSource={tableData || null}
            pagination={false}
            style={{ flex: 1 }}
          />
          <Pagination
            current={categoryList.meta.page}
            pageSize={ADMIN_TABLE_LIMIT}
            total={categoryList.meta.total}
            onChange={(page) => handleChangePage(page)}
            style={{ margin: "16px auto 0" }}
          />
        </S.Wrapper>
      )}
    </>
  );
};

export default AdminCategoryListPage;
