import { useEffect } from "react";
import { Button, Table, Space, Pagination, Image } from "antd";
import { useSelector, useDispatch } from "react-redux";
import moment from "moment";
import { generatePath, useNavigate } from "react-router-dom";

import { getBlogListAction, deleteBlogAction } from "../../../redux/actions";

import LoadingWrapper from "../../../components/LoadingWrapper";
import { ADMIN_BLOG_TABLE_LIMIT } from "../../../constants/pagination";
import { ROUTES, TITLES } from "../../../constants/";
import * as S from "./styles";

const AdminBlogListPage = () => {
  const dispatch = useDispatch();

  const { blogList } = useSelector((state) => state.blog);

  const navigate = useNavigate();

  useEffect(() => {
    dispatch(
      getBlogListAction({
        params: {
          page: 1,
          limit: ADMIN_BLOG_TABLE_LIMIT,
          order: "id.desc",
        },
      })
    );
    document.title = TITLES.ADMIN.BLOG_LIST;
  }, []);

  const handleChangePage = (page) => {
    dispatch(
      getBlogListAction({
        params: {
          page: page,
          limit: ADMIN_BLOG_TABLE_LIMIT,
          order: "id.desc",
        },
      })
    );
  };

  const handleDeleteBlog = (id) => {
    dispatch(deleteBlogAction({ id: id }));
    dispatch(
      getBlogListAction({
        params: {
          page: blogList.meta.page,
          limit: ADMIN_BLOG_TABLE_LIMIT,
          order: "id.desc",
        },
      })
    );
  };

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
      title: "Tiêu đề",
      dataIndex: "title",
      key: "title",
      render: (_, record) => {
        return record.blogImages?.map((item) => {
          return (
            <Space key={item.id}>
              <Image
                src={item?.url}
                alt={item?.name}
                style={{
                  width: "80px",
                  height: "auto",
                  borderRadius: "10px",
                }}
              />
              <h3
                style={{
                  display: "-webkit-box",
                  maxWidth: 200,
                  width: "fit-content",
                  overflow: "hidden",
                  textOverflow: "ellipsis",
                  WebkitLineClamp: 2,
                  WebkitBoxOrient: "vertical",
                  wordBreak: "break-word",
                }}
              >
                {record.title}
              </h3>
            </Space>
          );
        });
      },
    },
    {
      title: "Tác giả",
      dataIndex: "composer",
      key: "composer",
      render: (composer) => composer,
    },
    {
      title: "Chuyên mục",
      dataIndex: "categoryId",
      key: "categoryId",
      render: (categoryId) =>
        categoryId === 1 ? "Chia sẻ kinh nghiệm" : "Review sản phẩm",
    },
    {
      title: "Thời gian",
      dataIndex: "time",
      key: "time",
      render: (_, record) => {
        return (
          <Space>
            <div>
              Đã xuất bản
              <br />
              {moment(record.createdAt).format("kk:mm dddd DD/MM/YYYY")}
              <br />
              {record.updatedAt > record.createdAt + 1 && (
                <div>
                  <p>Đã cập nhật</p>
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
                  generatePath(ROUTES.ADMIN.UPDATE_BLOG, { id: record.id })
                )
              }
            >
              Sửa
            </Button>
            <Button onClick={(id) => handleDeleteBlog(record.id)}>Xoá</Button>
          </Space>
        );
      },
    },
  ];

  const tableData = blogList.data.map((item) => ({ ...item, key: item.id }));

  return (
    <>
      {blogList.loading ? (
        <LoadingWrapper />
      ) : (
        <S.Wrapper>
          <S.TopWrapper>
            <h2>Quản lý bài viết</h2>
            <Button
              type="primary"
              onClick={() => navigate(ROUTES.ADMIN.CREATE_BLOG)}
            >
              Tạo bài viết
            </Button>
          </S.TopWrapper>
          <Table
            columns={tableColumn}
            dataSource={tableData}
            pagination={false}
            style={{ flex: 1 }}
          />
          <Pagination
            current={blogList.meta.page}
            pageSize={ADMIN_BLOG_TABLE_LIMIT}
            total={blogList.meta.total}
            onChange={(page) => handleChangePage(page)}
            style={{ margin: "16px auto 0" }}
          />
        </S.Wrapper>
      )}
    </>
  );
};

export default AdminBlogListPage;
