import styled from "styled-components"

export const SideBarWrapper = styled.div`
  background-color: #FFFFFF;
  width: 100%;
  height: 100vh;
  max-width: 280px;
  display: flex;
  flex-direction: column;
  box-shadow: 0px 0px 2px rgba(0, 0, 0, 0.12), 0px 2px 2px rgba(0, 0, 0, 0.24);
  z-index: 999;
  position: fixed;
  @media(min-width:769px) {
    display:none;
  }
`

export const SideBarTitle = styled.h1`
  color:#1565c0;
  padding: 16px 20px;
  font-size: 16px;
  font-weight: normal;
  strong {
    font-size:20px;
  }
`
export const SideBarMenu = styled.div`
  color:#323D45;
  font-weight: 500;
  font-size: 14px;
  line-height: 20px;
  
`

export const MenuWrapper = styled.div`
  display:flex;
  flex-direction: column;
  /* justify-content: space-between; */
  
  padding: 36px 32px;
`
export const MenuImg = styled.img`
  margin-right: 8px;
`
export const Wrapper = styled.div`
  height: 20px;
  display:flex;
  align-items:center;
  margin-bottom: 24px;
`
