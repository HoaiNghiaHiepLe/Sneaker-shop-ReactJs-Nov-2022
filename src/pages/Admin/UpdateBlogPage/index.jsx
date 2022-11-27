import { useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import ReactQuill from "react-quill";
import { Button, Form, Input, Spin, Card, Select, Upload, Modal } from "antd";
import { PlusOutlined } from "@ant-design/icons";
import slug from "slug";

import * as S from "./styles";

import {
  onPreview,
  convertBase64ToImage,
  convertImageToBase64,
} from "../../../utils/file";
import { ROUTES, TITLES } from "../../../constants/";
import {
  updateBlogAction,
  getBlogDetailAction,
  clearBlogDetailAction,
} from "../../../redux/actions";

const AdminUpdateBlogPage = () => {
  const { id } = useParams();

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [updateForm] = Form.useForm();

  const { blogDetail } = useSelector((state) => state.blog);

  const { userInfo } = useSelector((state) => state.user);

  useEffect(() => {
    dispatch(getBlogDetailAction({ id: id }));
    document.title = TITLES.ADMIN.UPDATE_BLOG;
  }, [id]);

  useEffect(() => {
    if (blogDetail.data.id) {
      updateForm.resetFields();
      setImagesField(blogDetail.data.blogImages);
    }
  }, [blogDetail.data]);

  useEffect(() => {
    return () => dispatch(clearBlogDetailAction());
  }, []);

  const initialValues = {
    title: blogDetail.data.title,
    content: blogDetail.data.content,
    composer: blogDetail.data.composer,
    categoryId: blogDetail.data.categoryId,
  };
  const setImagesField = async (blogImages) => {
    const newImages = [];

    for (let i = 0; i < blogImages.length; i++) {
      const imageFile = await convertBase64ToImage(
        blogImages[i].url,
        blogImages[i].name,
        blogImages[i].type
      );
      await newImages.push({
        id: blogImages[i].id,
        lastModified: imageFile.lastModified,
        lastModifiedDate: imageFile.lastModifiedDate,
        name: imageFile.name,
        size: imageFile.size,
        type: imageFile.type,
        thumbUrl: blogImages[i].thumbUrl,
        originFileObj: imageFile,
      });
    }
    await updateForm.setFieldValue("blogImages", newImages);
  };

  const handleUpdateBlog = async (values) => {
    const { blogImages, ...blogValues } = values;
    const newImages = [];
    for (let i = 0; i < blogImages.length; i++) {
      const imgBase64 = await convertImageToBase64(blogImages[i].originFileObj);
      await newImages.push({
        ...(blogImages[i].id && { id: blogImages[i].id }),
        name: blogImages[i].name,
        type: blogImages[i].type,
        thumbUrl: blogImages[i].thumbUrl,
        url: imgBase64,
      });
    }
    dispatch(
      updateBlogAction({
        id: id,
        values: {
          ...blogValues,
          composer: userInfo.data.fullName,
          slug: slug(values.title),
        },
        blogImages: newImages,
        initialImageIds: blogDetail.data.blogImages.map((item) => item.id),
        callback: {
          goToList: () => navigate(ROUTES.ADMIN.BLOG_LIST),
        },
      })
    );
  };

  return (
    <S.Wrapper>
      <S.TopWrapper>
        <h3>Cập nhật bài viết</h3>
        <Button
          type="primary"
          onClick={() => {
            updateForm.submit();
          }}
        >
          Cập nhật
        </Button>
      </S.TopWrapper>
      <Spin spinning={blogDetail.loading}>
        <Card>
          <Form
            form={updateForm}
            name="updateBlogForm"
            layout="vertical"
            initialValues={initialValues}
            labelCol={{ span: 2 }}
            onFinish={(values) => handleUpdateBlog(values)}
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
            <Form.Item label="Nội dung" name="content">
              <ReactQuill
                theme="snow"
                onChange={(value) => updateForm.setFieldValue("content", value)}
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
          </Form>
        </Card>
      </Spin>
    </S.Wrapper>
  );
};

export default AdminUpdateBlogPage;
