import React from "react";
import {
  HeaderWrapper,
  HeaderTitle,
  HeaderMenu,
  MenuWrapper,
  

} from "./header.styles"
const HeaderUI = () =>{

  return (
  <HeaderWrapper>
    <HeaderTitle><strong>CAPA</strong> 파트너스</HeaderTitle>
    <MenuWrapper>
      <HeaderMenu>A 가공업체</HeaderMenu>
      <HeaderMenu>|</HeaderMenu>
      <HeaderMenu>로그아웃</HeaderMenu>
    </MenuWrapper>
  </HeaderWrapper>
  )
}

export default HeaderUI