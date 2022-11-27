import React from "react";
import { Link } from "react-router-dom";
import { Breadcrumb } from "antd";

import * as S from "./styles";

const TopWrapper = ({ titlePage, breadcrumb = [], height }) => {
  function renderBreadcrumb() {
    return breadcrumb.map((breadcrumbItem, breadcrumbIndex) => {
      return (
        <Breadcrumb.Item key={`breadcrumb-${breadcrumbIndex}`}>
          <Link state={breadcrumbItem.state} to={breadcrumbItem.path}>
            {breadcrumbItem.icon && breadcrumbItem.icon}
            <span>{breadcrumbItem.title}</span>
          </Link>
        </Breadcrumb.Item>
      );
    });
  }

  return (
    <S.TopContainer height={height}>
      <Breadcrumb className="breadcrumb_container">
        {renderBreadcrumb()}
      </Breadcrumb>
      {titlePage && <S.TopTitle>{titlePage}</S.TopTitle>}
    </S.TopContainer>
  );
};

export default TopWrapper;
