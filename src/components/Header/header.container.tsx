
import { useState } from "react"
import SideBar from "../../SideBar/sideBar.container"
import {
  HeaderWrapper,
  HeaderTitle,
  HeaderMenu,
  MenuWrapper,
  Hamberger,
  Wrapper,
  OverLay
} from "./header.styles"
const Header = () =>{
  const [isOpen, setIsOpen] = useState(false)

  const onClickOpen = () => {
    setIsOpen((prev)=>!prev)
  }
  return (
    <Wrapper>
      {isOpen && 
      <>
      <SideBar />
      <OverLay onClick={onClickOpen}/>
      </>}
    <HeaderWrapper>
      <Hamberger src="/icon/icon/navigation/menu.png" onClick={onClickOpen}/>
      <HeaderTitle><strong>CAPA</strong> 파트너스</HeaderTitle>
      <MenuWrapper>
        <HeaderMenu>A 가공업체</HeaderMenu>
        <HeaderMenu>|</HeaderMenu>
        <HeaderMenu>로그아웃</HeaderMenu>
      </MenuWrapper>
    </HeaderWrapper>
    </Wrapper>
    )
}

export default Header