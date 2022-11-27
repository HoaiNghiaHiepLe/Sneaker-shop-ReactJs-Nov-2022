import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useLocation, useNavigate, Link } from "react-router-dom";
import {
  Button,
  Card,
  Checkbox,
  Form,
  Input,
  InputNumber,
  Radio,
  Select,
  Upload,
} from "antd";
import slug from "slug";
import ReactQuill from "react-quill";
import { PlusOutlined } from "@ant-design/icons";

import {
  getProductListAction,
  getCategoryListAction,
  createProductAction,
} from "../../../redux/actions";
import { SIZE_OPTIONS } from "./constants";
import { ROUTES, TITLES } from "../../../constants/";
import {
  onPreview,
  convertBase64ToImage,
  convertImageToBase64,
} from "../../../utils/file";
import * as S from "./styles";

const AdminCreateProductPage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [createForm] = Form.useForm();
  const { categoryList } = useSelector((state) => state.category);

  useEffect(() => {
    dispatch(getCategoryListAction());
    document.title = TITLES.ADMIN.CREATE_PRODUCT;
  }, []);

  const renderCategoryListOptions = () => {
    return categoryList.data.map((item) => {
      return (
        <Select.Option key={item.id} value={item.id}>
          {item.name}
        </Select.Option>
      );
    });
  };

  const handleCreateProduct = async (values) => {
    const { images, ...productValues } = values;

    const newImages = [];

    for (let i = 0; i < images.length; i++) {
      const imgBase64 = await convertImageToBase64(images[i].originFileObj);
      await newImages.push({
        name: images[i].name,
        type: images[i].type,
        thumbUrl: images[i].thumbUrl,
        url: imgBase64,
      });
    }
    await dispatch(
      createProductAction({
        values: {
          ...productValues,
          categoryId: parseInt(productValues.categoryId),
          slug: slug(productValues.name),
        },
        images: newImages,
        callback: {
          goToList: () => navigate(ROUTES.ADMIN.PRODUCT_LIST),
        },
      })
    );
  };
  const initialValues = {
    name: "",
    price: undefined,
    gender: undefined,
    size: undefined,
    discount: undefined,
    categoryId: undefined,
    amount: undefined,
    isNew: undefined,
    content: "",
    images: [],
  };
  return (
    <>
      <h2>Tạo sản phẩm mới</h2>
      <Card>
        <Form
          name="createProductForm"
          layout="vertical"
          labelCol={{ span: 2 }}
          onFinish={(values) => handleCreateProduct(values)}
          initialValues={initialValues}
        >
          <Form.Item
            label="Tên sản phẩm"
            name="name"
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
            label="Tên hãng"
            name="categoryId"
            rules={[
              {
                required: true,
                message: "This field is required!",
              },
            ]}
          >
            <Select>{renderCategoryListOptions()}</Select>
          </Form.Item>
          <Form.Item
            label="Số lượng"
            name="amount"
            rules={[
              {
                required: true,
                message: "This field is required!",
              },
            ]}
          >
            <InputNumber min={1} />
          </Form.Item>
          <Form.Item
            label="Giá"
            name="price"
            rules={[
              {
                required: true,
                message: "This field is required!",
              },
            ]}
          >
            <InputNumber
              addonAfter={"VND"}
              min={1}
              max={100000000}
              formatter={(value) =>
                `${value}`.replace(/\B(?=(\d{3})+(?!\d))/g, ",")
              }
              parser={(value) => value.replace(/\$\s?|(,*)/g, "")}
            />
          </Form.Item>
          <Form.Item
            label="Giới tính"
            name="gender"
            rules={[
              {
                required: true,
                message: "This field is required!",
              },
            ]}
          >
            <Radio.Group size="large">
              <Radio value={1}>Nam</Radio>
              <Radio value={2}>Nữ</Radio>
            </Radio.Group>
          </Form.Item>
          <Form.Item
            label="Size"
            name="size"
            rules={[
              {
                required: true,
                message: "This field is required!",
              },
            ]}
          >
            <Checkbox.Group options={SIZE_OPTIONS} />
          </Form.Item>
          <Form.Item label="Sản phẩm mới" name="isNew" valuePropName="checked">
            <Checkbox />
          </Form.Item>
          <Form.Item label="Giảm giá" name="discount">
            <InputNumber
              min={0}
              max={100}
              addonAfter={"%"}
              formatter={(value) => `${value}`}
              parser={(value) => value.replace("%", "")}
            />
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
            name="images"
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
              listType="picture-card"
              beforeUpload={Upload.LIST_IGNORE}
            >
              <div>
                <PlusOutlined />
                <div style={{ marginTop: 8 }}>Tải ảnh lên</div>
              </div>
            </Upload>
          </Form.Item>
          <Button type="primary" htmlType="submit">
            Tạo sản phẩm
          </Button>
        </Form>
      </Card>
    </>
  );
};

export default AdminCreateProductPage;
