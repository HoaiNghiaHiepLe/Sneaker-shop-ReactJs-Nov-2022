import { Button, Table } from "antd";
import styled from "styled-components";

export const CancelButton = styled(Button)`
  background: rgb(247, 247, 247);
  border-color: rgb(225, 225, 225);
  outline-color: rgb(204, 204, 204);
`;
export const CartListTable = styled(Table)`
  .item_price {
    height: 100%;
    display: flex;
    flex-flow: column wrap;
    justify-content: center;
    align-items: center;
    .prime_price {
      color: var(--text-disabled);
    }
    .item_discount {
      font-size: 14px;
      b {
        color: var(--primary-color);
      }
    }
    .final_price_each {
      font-size: 18px;
      color: var(--danger-color);
      font-weight: 600;
    }
  }
  .final_price {
    font-size: 20px;
    color: var(--danger-color);
    font-weight: 600;
  }
`;
