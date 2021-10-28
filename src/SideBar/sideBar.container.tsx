import {
  SideBarWrapper,
  SideBarTitle,
  SideBarMenu,
  MenuWrapper,
  MenuImg,
  Wrapper
} from "./sideBar.styles"

const SideBar = () => {

  return(
    <>
    <SideBarWrapper>
      <SideBarTitle><strong>CAPA</strong> 파트너스</SideBarTitle>
      <MenuWrapper>
        <Wrapper>
          <MenuImg src="/icon/icon/navigation/Vector.svg"/>
          <SideBarMenu>파트너 정밀가공</SideBarMenu>
        </Wrapper>
        <SideBarMenu>로그아웃</SideBarMenu>
      </MenuWrapper>
    </SideBarWrapper>
    
    </>
  )
}

export default SideBar