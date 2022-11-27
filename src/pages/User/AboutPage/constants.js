import { HomeOutlined } from "@ant-design/icons";
import { RiContactsLine } from "react-icons/ri";
import { ROUTES, TITLES } from "../../../constants/";

export const BREADCRUMB = [
  {
    title: TITLES.USER.HOME,
    path: ROUTES.USER.HOME,
    icon: <HomeOutlined style={{ fontSize: 20 }} />,
  },
  {
    title: TITLES.USER.ABOUT,
    path: ROUTES.USER.ABOUT,
    icon: <RiContactsLine style={{ fontSize: 20 }} />,
  },
];
