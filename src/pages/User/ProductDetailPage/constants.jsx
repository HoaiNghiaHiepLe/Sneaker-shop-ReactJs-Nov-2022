import { Image, Space, Row } from "antd";
import { HomeOutlined } from "@ant-design/icons";
import { FaShopify } from "react-icons/fa";
import { ROUTES, TITLES } from "../../../constants";

export const policyList = [
  "Ship COD Toàn Quốc",
  "Giảm Giá Toàn Bộ Sản Phẩm Lên Đến 60%",
  "Nhận hàng và kiểm tra trước khi thanh toán",
  "Double Box kèm chống sốc khi giao hàng",
  "Giao hàng nhanh 60 phút trong nội thành Hà Nội và tp Hcm",
];

export const BREADCRUMB = [
  {
    title: TITLES.USER.HOME,
    path: ROUTES.USER.HOME,
    icon: <HomeOutlined style={{ fontSize: 20 }} />,
  },
  {
    title: TITLES.USER.PRODUCT_LIST,
    path: ROUTES.USER.PRODUCT_LIST,
    icon: <FaShopify style={{ fontSize: 20 }} />,
  },
];
