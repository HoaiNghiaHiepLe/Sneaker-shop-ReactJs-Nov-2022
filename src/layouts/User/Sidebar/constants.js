import { ROUTES } from "../../../constants/routes";
import { MdManageAccounts } from "react-icons/md";
import { FaHome, FaShopify } from "react-icons/fa";
import { GiScrollQuill } from "react-icons/gi";
import { RiContactsLine } from "react-icons/ri";

export const SIDEBAR_ITEMS = [
  {
    title: "Trang chủ",
    path: ROUTES.USER.HOME,
    icon: <FaHome style={{ fontSize: 30, marginRight: 10 }} />,
  },
  {
    title: "Trang cá nhân",
    path: ROUTES.USER.PROFILE,
    icon: <MdManageAccounts style={{ fontSize: 26, marginRight: 10 }} />,
  },
  {
    title: "Sản phẩm",
    path: ROUTES.USER.PRODUCT_LIST,
    icon: <FaShopify style={{ fontSize: 30, marginRight: 10 }} />,
  },
  {
    title: "Bài viết",
    path: ROUTES.USER.BLOG_LIST,
    icon: <GiScrollQuill style={{ fontSize: 26, marginRight: 10 }} />,
  },
  {
    title: "Giới thiệu",
    path: ROUTES.USER.ABOUT,
    icon: <RiContactsLine style={{ fontSize: 26, marginRight: 10 }} />,
  },
];
