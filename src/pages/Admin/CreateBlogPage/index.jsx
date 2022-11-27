import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import ReactQuill from "react-quill";
import { Button, Card, Form, Input, Select, Upload } from "antd";
import { PlusOutlined } from "@ant-design/icons";
import slug from "slug";

import { onPreview, convertImageToBase64 } from "../../../utils/file";
import { createBlogAction } from "../../../redux/actions";
import { ROUTES, TITLES } from "../../../constants/";
import * as S from "./styles";

const AdminCreateBlogPage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [createForm] = Form.useForm();
  const { userInfo } = useSelector((state) => state.user);

  useEffect(() => {
    document.title = TITLES.ADMIN.CREATE_BLOG;
  }, []);

  const handleCreateBlog = async (values) => {
    const { blogImages, ...blogValues } = values;
    const newImages = [];
    for (let i = 0; i < blogImages.length; i++) {
      const imgBase64 = await convertImageToBase64(blogImages[i].originFileObj);
      await newImages.push({
        name: blogImages[i].name,
        type: blogImages[i].type,
        thumbUrl: blogImages[i].thumbUrl,
        url: imgBase64,
      });
    }
    await dispatch(
      createBlogAction({
        values: {
          ...blogValues,
          composer: userInfo.data.fullName,
          slug: slug(values.title),
        },
        blogImages: newImages,
        callback: {
          goToList: () => navigate(ROUTES.ADMIN.BLOG_LIST),
        },
      })
    );
  };
  const initialValues = {
    title: "",
    content: "",
    composer: "",
    categoryId: undefined,
    blogImages: [],
  };

  return (
    <>
      <h2>Tạo bài viết mới</h2>
      <Card>
        <Form
          form={createForm}
          name="createBlogForm"
          layout="vertical"
          labelCol={{ span: 2 }}
          onFinish={(values) => handleCreateBlog(values)}
          initialValues={initialValues}
        >
          <Form.Item
            label="Tiêu đề"
            name="title"
            rules={[
              {
                required: true,
                message: "This field is required!",
              },
            ]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            label="Chuyên mục"
            name="categoryId"
            rules={[
              {
                required: true,
                message: "This field is required!",
              },
            ]}
          >
            <Select>
              <Select.Option value={1}>Chia sẻ kinh nghiệm</Select.Option>
              <Select.Option value={2}>Review sản phẩm</Select.Option>
            </Select>
          </Form.Item>
          <Form.Item
            label="Nội dung"
            name="content"
            rules={[
              {
                required: true,
                message: "This field is required!",
              },
            ]}
          >
            <ReactQuill
              theme="snow"
              onChange={(value) => {
                createForm.setFieldsValue({ content: value });
              }}
            />
          </Form.Item>
          <Form.Item
            label="Hình ảnh"
            name="blogImages"
            valuePropName="fileList"
            getValueFromEvent={(e) => {
              if (Array.isArray(e)) return e;
              return e?.fileList;
            }}
            rules={[
              {
                required: true,
                message: "This field is required!",
              },
            ]}
          >
            <Upload
              onPreview={onPreview}
              maxCount={1}
              listType="picture-card"
              beforeUpload={Upload.LIST_IGNORE}
            >
              <div>
                <PlusOutlined />
                <div
                  style={{
                    marginTop: 8,
                  }}
                >
                  Tải ảnh lên
                </div>
              </div>
            </Upload>
          </Form.Item>

          <Button type="primary" htmlType="submit">
            Tạo bài viết
          </Button>
        </Form>
      </Card>
    </>
  );
};

export default AdminCreateBlogPage;
