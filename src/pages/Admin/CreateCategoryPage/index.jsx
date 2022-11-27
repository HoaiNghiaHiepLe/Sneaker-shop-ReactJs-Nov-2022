import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { Button, Card, Form, Input } from "antd";

import { createCategoryAction } from "../../../redux/actions";
import { ROUTES, TITLES } from "../../../constants/";
import * as S from "./styles";

const AdminCreateCategoryPage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [createForm] = Form.useForm();
  const { userInfo } = useSelector((state) => state.user);

  useEffect(() => {
    document.title = TITLES.ADMIN.CREATE_CATEGORY;
  }, []);

  const handleCreateCategory = async (values) => {
    const { ...categoryValues } = values;
    await dispatch(
      createCategoryAction({
        values: {
          ...categoryValues,
          author: userInfo.data.fullName,
        },
        callback: {
          goToList: () => navigate(ROUTES.ADMIN.CATEGORY_LIST),
        },
      })
    );
  };
  const initialValues = {
    name: "",
    id: undefined,
    author: "",
  };

  return (
    <>
      <h2>Tạo nhãn hàng mới</h2>
      <Card>
        <Form
          form={createForm}
          name="createCategoryForm"
          layout="vertical"
          labelCol={{ span: 2 }}
          onFinish={(values) => handleCreateCategory(values)}
          initialValues={initialValues}
        >
          <Form.Item
            label="Tên hãng"
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
          <Button type="primary" htmlType="submit">
            Tạo nhãn hàng
          </Button>
        </Form>
      </Card>
    </>
  );
};

export default AdminCreateCategoryPage;
