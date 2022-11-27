import { useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { Button, Form, Input, Spin, Card } from "antd";

import {
  getCategoryDetailAction,
  updateCategoryAction,
  clearCategoryDetailAction,
} from "../../../redux/actions";
import { ROUTES, TITLES } from "../../../constants/";
import * as S from "./styles";

const AdminUpdateCategoryPage = () => {
  const { id } = useParams();

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [updateForm] = Form.useForm();

  const { categoryDetail } = useSelector((state) => state.category);

  const { userInfo } = useSelector((state) => state.user);

  useEffect(() => {
    dispatch(getCategoryDetailAction({ id: id }));
    document.title = TITLES.ADMIN.UPDATE_CATEGORY;
  }, [id]);

  useEffect(() => {
    if (categoryDetail.data.id) {
      updateForm.resetFields();
    }
  }, [categoryDetail.data]);

  useEffect(() => {
    return () => dispatch(clearCategoryDetailAction());
  }, []);

  const initialValues = {
    name: categoryDetail.data.name,
    id: categoryDetail.data.id,
    author: categoryDetail.data.author,
  };

  const handleUpdateCategory = async (values) => {
    const { ...categoryValues } = values;
    await dispatch(
      updateCategoryAction({
        id: id,
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

  return (
    <S.Wrapper>
      <S.TopWrapper>
        <h3>Cập nhật nhãn hàng</h3>
        <Button
          type="primary"
          onClick={() => {
            updateForm.submit();
          }}
        >
          Cập nhật
        </Button>
      </S.TopWrapper>
      <Spin spinning={categoryDetail.loading}>
        <Card>
          <Form
            form={updateForm}
            name="updateCategoryForm"
            layout="vertical"
            initialValues={initialValues}
            labelCol={{ span: 2 }}
            onFinish={(values) => handleUpdateCategory(values)}
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
          </Form>
        </Card>
      </Spin>
    </S.Wrapper>
  );
};

export default AdminUpdateCategoryPage;
