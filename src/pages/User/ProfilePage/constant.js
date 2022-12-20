import { AiOutlineEdit, AiOutlineUser, AiOutlineHistory } from "react-icons/ai";
import { MdFavoriteBorder } from "react-icons/md";
import { ROUTES, TITLES } from "../../../constants/";

export const MENU_ITEMS = [
  {
    icon: <AiOutlineUser />,
    title: TITLES.USER.PROFILE,
    path: ROUTES.USER.PROFILE,
  },
  {
    icon: <AiOutlineHistory />,
    title: TITLES.USER.ORDER_HISTORY,
    path: ROUTES.USER.ORDER_HISTORY,
  },
  {
    icon: <MdFavoriteBorder />,
    title: TITLES.USER.FAVORITE_PRODUCT,
    path: ROUTES.USER.FAVORITE_PRODUCT,
  },
  {
    icon: <AiOutlineEdit />,
    title: TITLES.USER.PASSWORD_CHANGE,
    path: ROUTES.USER.PASSWORD_CHANGE,
  },
];
