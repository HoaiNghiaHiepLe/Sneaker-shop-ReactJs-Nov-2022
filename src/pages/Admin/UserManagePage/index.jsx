import { useEffect } from "react";
import {
  Button,
  Table,
  Space,
  Pagination,
  Select,
  Row,
  Col,
  Image,
  Form,
} from "antd";
import { useSelector, useDispatch } from "react-redux";
import moment from "moment";
import { generatePath, useNavigate } from "react-router-dom";

import { getUserListAction, deleteUserAction } from "../../../redux/actions";

import LoadingWrapper from "../../../components/LoadingWrapper";
import { ADMIN_TABLE_LIMIT } from "../../../constants/pagination";
import { ROUTES, TITLES } from "../../../constants";

import * as S from "./styles";

export default function AdminUserManagePage() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { userList } = useSelector((state) => state.user);

  useEffect(() => {
    document.title = TITLES.ADMIN.USER_MANAGE;
    dispatch(
      getUserListAction({
        params: {
          page: 1,
          limit: ADMIN_TABLE_LIMIT,
          order: "id.desc",
        },
      })
    );
  }, []);

  const handleChangePage = (page) => {
    dispatch(
      getUserListAction({
        params: {
          page: page,
          limit: ADMIN_TABLE_LIMIT,
          order: "id.desc",
        },
      })
    );
  };
  const handleDeleteUser = (id) => {
    dispatch(deleteUserAction({ id: id }));
    dispatch(
      getUserListAction({
        params: {
          page: userList.meta.page,
          limit: ADMIN_TABLE_LIMIT,
          order: "id.desc",
        },
      })
    );
  };

  const tableColumn = [
    {
      title: "ID",
      dataIndex: "id",
      key: "id",
      sorter: (a, b) => a.id - b.id,
      render: (_, record) => {
        return (
          <Space>
            <h3>{record.id}</h3>
          </Space>
        );
      },
    },
    {
      title: "Vai trò",
      dataIndex: "role",
      key: "role",
      render: (_, record) => {
        return (
          <Space>
            <h3
              style={{
                maxWidth: 200,
                width: "fit-content",
                overflow: "hidden",
                textOverflow: "ellipsis",
                WebkitLineClamp: 2,
                WebkitBoxOrient: "vertical",
                wordBreak: "break-word",
              }}
            >
              {record.role}
            </h3>
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
            {/* <Image
              src={record.images[0]?.url}
              alt={record.images[0]?.name}
              style={{
                width: "80px",
                height: "auto",
                borderRadius: "10px",
              }}
            /> */}
            <h3
              style={{
                maxWidth: 200,
                width: "fit-content",
                overflow: "hidden",
                textOverflow: "ellipsis",
                WebkitLineClamp: 2,
                WebkitBoxOrient: "vertical",
                wordBreak: "break-word",
              }}
            >
              {record.fullName}
            </h3>
          </Space>
        );
      },
    },
    {
      title: "Email",
      dataIndex: "email",
      key: "email",
      render: (email) => email,
    },
    {
      title: "Thời gian",
      dataIndex: "time",
      key: "time",
      render: (_, record) => {
        return (
          <Space>
            <div>
              Ngày tạo
              <br />
              {moment(record.createdAt).format("kk:mm dddd DD/MM/YYYY")}
              <br />
              {record.updatedAt > record.createdAt + 1 && (
                <div>
                  <p style={{ margin: 0 }}>Đã cập nhật</p>
                  {moment(record.updatedAt).fromNow()} bởi {record.updatedBy}
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
                  generatePath(ROUTES.ADMIN.USER_UPDATE, { id: record.id })
                )
              }
            >
              Sửa
            </Button>
            <Button onClick={(id) => handleDeleteUser(record.id)}>Xoá</Button>
          </Space>
        );
      },
    },
  ];

  return (
    <>
      {userList.loading ? (
        <LoadingWrapper />
      ) : (
        <S.Wrapper>
          <S.TopWrapper>
            <h2>Quản lý user</h2>
          </S.TopWrapper>
          <Table
            rowKey="id"
            columns={tableColumn}
            dataSource={userList?.data}
            pagination={false}
            style={{ flex: 1 }}
          />
          <Pagination
            current={userList?.meta?.page}
            pageSize={ADMIN_TABLE_LIMIT}
            total={userList.meta.total}
            onChange={(page) => handleChangePage(page)}
            style={{ margin: "16px auto 0" }}
          />
        </S.Wrapper>
      )}
    </>
  );
}
