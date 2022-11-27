import React from "react";
import { Spin } from "antd";

import * as S from "./styles";
const LoadingWrapper = () => {
  return (
    <S.LoadingWrapper>
      <Spin size="large" />
    </S.LoadingWrapper>
  );
};

export default LoadingWrapper;
