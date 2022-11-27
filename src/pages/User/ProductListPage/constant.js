import { HomeOutlined } from "@ant-design/icons";
import { FaShopify } from "react-icons/fa";
import { ROUTES, TITLES } from "../../../constants/";

export const MIN_PRICE = 0;
export const MAX_PRICE = 5000000;
export const STEP_PRICE = 500000;
export const PRICE_MARKS = {
  0: "0",
  1000000: "1 tr",
  2000000: "2 tr",
  3000000: "3 tr",
  4000000: "4 tr",
  5000000: "5",
};

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
