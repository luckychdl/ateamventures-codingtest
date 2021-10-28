import styled from "styled-components"

export const HeaderWrapper = styled.div`
  background-color: #1565c0;
  width: 100%;
  height: 70px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-shadow: 0px 0px 2px rgba(0, 0, 0, 0.12), 0px 2px 2px rgba(0, 0, 0, 0.24);

`

export const HeaderTitle = styled.h1`
  color:#FFFFFF;
  padding: 25px 40px;
  font-size: 16px;
  font-weight: normal;
  strong {
    font-size:20px;
  }
`
export const HeaderMenu = styled.div`
  color:#FFFFFF;
  font-size: 10px;
  font-weight: bold;
`

export const MenuWrapper = styled.div`
  display:flex;
  justify-content: space-between;
  width:120px;
  padding-right: 20px;
`
export const Hamberger = styled.img`
  display:none;
  @media(max-width:768px) {
    display:flex;
    margin-left: 23px;
  }
`
export const Wrapper = styled.div`
  display:flex;
  width:100%;
`
export const OverLay = styled.div`
    position: fixed;
    width: 100%;
    height: 100%;
    background-color: black;
    opacity: 0.5;
    z-index: 998;
    /* display: none; */
`