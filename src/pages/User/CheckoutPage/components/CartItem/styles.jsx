import styled from "styled-components";
import { AiOutlinePlus, AiOutlineMinus } from "react-icons/ai";

// export const CustomOutlinePlus = styled(AiOutlinePlus)`
//   cursor: pointer;

//   &:hover {
//     border: 1px solid royalblue;
//   }
// `;

// export const CustomOutlineMinus = styled(AiOutlineMinus)`
//   cursor: pointer;

//   &:hover {
//     border: 1px solid royalblue;
//   }
// `;

export const CartItemWrapper = styled.div`
  border: 1px solid rgb(222, 226, 230);
  border-radius: 2px;
  padding: 8px;
  margin-bottom: 16px;
  background-color: #fff;

  &:hover {
    box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  }
`;

export const CartItemContent = styled.div`
  display: flex;
  flex-direction: column;
  padding: 8px;
`;

export const CartItemContentTop = styled.div`
  display: flex;
  justify-content: space-between;
  font-size: 16px;
  font-weight: 700;
`;

export const CartItemContentMid = styled.div`
  margin-top: 8px;
  flex: 1;
`;

export const CartItemContentBot = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const CartItemTittle = styled.h3`
  text-transform: uppercase;
  margin-bottom: 0px;
  cursor: pointer;
  line-height: 1.4;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
  word-break: break-word;
`;
