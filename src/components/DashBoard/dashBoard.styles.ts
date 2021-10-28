import styled from "styled-components"

export const DashBoardWrapper = styled.div`
  display:flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 24px 20px 20px 20px;
  width:100%;
  max-width: 1151px;
`
export const DashBoardTitle = styled.div`
  font-weight: bold;
  font-size: 16px;
`
export const DashBoardSubTitle = styled.div`
  font-size: 12px;
`
export const SelectWrapper = styled.div`
  display: flex;
  justify-content: flex-start;
  width: 100%;
  max-width: 1131px;
  
`
export const UtilWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width:100%;
  max-width: 1131px;
  margin-top: 40px;
  @media(max-width:768px) {
    display:flex;
   flex-direction: column;
   align-items: flex-start;
  }
`
export const CardWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%; 
  max-width: 1131px;
  flex-wrap: wrap;
  
`

export const TitleWrapper = styled.div`
  display: flex;

  flex-direction: column;
`
export const FilterWrapper = styled.div`
  display:flex;
  align-items: center;
  cursor: pointer;
`
export const Filter = styled.div`
  font-size: 12px;
  line-height: 20px;
  color:#2196F3;
`
export const Image = styled.img`
  margin-right: 12px;
  width:15px;
  height: 15px;
`
export const EmptyCard = styled.div``