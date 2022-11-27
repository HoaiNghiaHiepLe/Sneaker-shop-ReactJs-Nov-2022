import styled from "styled-components";

import { Card } from "antd";

export const Wrapper = styled.div`
  height: 100%;
`;

export const TopWrapper = styled.div`
  background-color: #fff;
  position: sticky;
  top: 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 8px 12px;
  border-bottom: 1px solid #ccc;
  z-index: 97;
`;

export const CustomCard = styled(Card)`
  height: 100%;
`;
