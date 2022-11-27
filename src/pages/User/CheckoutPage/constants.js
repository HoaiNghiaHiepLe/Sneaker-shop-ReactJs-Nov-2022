import { HomeOutlined } from "@ant-design/icons";
import { IoBagCheckOutline } from "react-icons/io5";
import { ROUTES, TITLES } from "../../../constants/";

export const BREADCRUMB = [
  {
    title: TITLES.USER.HOME,
    path: ROUTES.USER.HOME,
    icon: <HomeOutlined style={{ fontSize: 20 }} />,
  },
  {
    title: TITLES.USER.CHECKOUT,
    path: ROUTES.USER.CHECKOUT,
    icon: <IoBagCheckOutline style={{ fontSize: 20 }} />,
  },
];
