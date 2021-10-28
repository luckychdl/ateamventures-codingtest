import styled from "styled-components"
export const MainWrapper = styled.div`
 
  `
export const CardWrapper = styled.div`
  width: 366px;
  height: 100%;
  border: 1px solid #BDBDBD;
  padding: 24px 16px;
  display:flex;
  justify-content: flex-start;
  flex-direction: column;
  margin-top: 32px;
  border-radius: 4px;
  :hover {
    border: 1px solid #2196F3;
  }
`
export const ClientInfo = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  padding: 0px;
  border-bottom: 1px solid #e5e5e5;
`
export const TitleWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`
export const Title = styled.div`
  width:100%;
  font-size: 16px;
  line-height: 24px;
  font-style: normal;
  font-weight: bold;
  display: flex;
  align-items: center;
  margin: 0 14px 4px 0;
`
export const Consult = styled.div`
  font-weight: 500;
  font-size: 12px;
  line-height: 20px;
  display: flex;
  align-items: center;
  text-align: center;
  color: #ffa000;
`
export const ConsultWrapper = styled.div`
  height: 24px;
  width: 50px;
  border-radius: 12px;
  padding: 2px 8px;
  background: #ffffff;
  display: flex;
  box-sizing: border-box;
  flex-direction: column;
  align-items: center;
  border: 1px solid #ffa000;
  margin: 0px 0px;
  flex: none;
  order: 0;
  align-self: flex-end;
  flex-grow: 0;
`
export const ClientName = styled.div``
export const RequestDate = styled.div`
  color:#939FA5;
  font-size: 14px;
  line-height: 20px;
  margin-top: 24px;
  margin-bottom: 16px;
`
export const RequestWrapper = styled.div`
  display:flex;
  flex-direction: column;
  justify-content: space-between;
  margin-top: 32px;
  height: 104px;
  
`
export const Requests = styled.div`
  width: 70px;
  margin-right: 32px;
  font-size:14px;
`
export const RequestsSubWrapper = styled.div`
  display: flex;
  justify-content: flex-start;
`
export const RequestsData = styled.div`
  font-size:14px;
  color:#323D45;
  font-style: normal;
  font-weight: bold;
`
export const Requests1stBtn = styled.button`
  height: 32px;
  padding: 6px 12px;
  background-color: #2196F3;
  color:#FFFFFF;
  border:none;
  border-radius: 4px;
  font-weight: 500;
  font-size: 14px;
  line-height: 20px;
`
export const Requests2ndBtn = styled.button`
  height: 32px;
  padding: 6px 12px;
  background-color: #FFFFFF;
  color: #2196F3;
  border: 1px solid #2196F3;
  border-radius:4px;
  font-weight: 500;
  font-size: 14px;
  line-height: 20px;
`
export const BtnWrapper = styled.div`
  margin-top: 32px;
  width: 192px;
  display: flex;
  justify-content: space-between;
  
`