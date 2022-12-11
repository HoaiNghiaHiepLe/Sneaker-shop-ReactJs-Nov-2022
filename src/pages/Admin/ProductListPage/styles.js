import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100%;
  .admin_product_table {
    .ant-table-cell {
      text-align: center;
    }
    tr {
      td:nth-child(2) {
        text-align: left;
      }
    }
  }
`;

export const TopWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 16px;
`;
