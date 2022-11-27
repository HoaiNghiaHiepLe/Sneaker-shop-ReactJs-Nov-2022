import { HomeOutlined } from "@ant-design/icons";
import { GiScrollQuill } from "react-icons/gi";
import { ROUTES, TITLES } from "../../../constants/";

export const BREADCRUMB = [
  {
    title: TITLES.USER.HOME,
    path: ROUTES.USER.HOME,
    icon: <HomeOutlined style={{ fontSize: 20 }} />,
  },
  {
    title: TITLES.USER.BLOG_LIST,
    path: ROUTES.USER.BLOG_LIST,
    icon: <GiScrollQuill style={{ fontSize: 20 }} />,
  },
];
