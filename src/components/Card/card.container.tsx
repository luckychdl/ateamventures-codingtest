

import {
  CardWrapper,
  ClientInfo,
  TitleWrapper,
  Title,
  Consult,
  ClientName,
  RequestDate,
  ConsultWrapper,
  RequestWrapper,
  Requests,
  RequestsSubWrapper,
  RequestsData,
  Requests1stBtn,
  Requests2ndBtn,
  BtnWrapper
} from "./card.styles"


const Card = ( {data} ) => {
  
return (
  <CardWrapper>
    <ClientInfo>
      <TitleWrapper>
        <Title>{data.title}</Title>
          {data.status === "상담중" && 
          <ConsultWrapper>
            <Consult>상담중</Consult> 
          </ConsultWrapper>}
      </TitleWrapper>
      <ClientName>{data.client}</ClientName>
      <RequestDate>{data.due} 까지 납기</RequestDate>
    </ClientInfo>
    <RequestWrapper>
      <RequestsSubWrapper>
        <Requests>도면개수</Requests>
        <RequestsData>{data.count}개</RequestsData>
      </RequestsSubWrapper>
      <RequestsSubWrapper>
        <Requests>총수량</Requests>
        <RequestsData>{data.amount}개</RequestsData>
      </RequestsSubWrapper>
      <RequestsSubWrapper>
        <Requests>가공방식</Requests>
        <RequestsData>{data.method.join(", ")}</RequestsData>
      </RequestsSubWrapper>
      <RequestsSubWrapper>
        <Requests>재료</Requests>
        <RequestsData>{data.material.join(", ")}</RequestsData>
      </RequestsSubWrapper>
    </RequestWrapper>
    <BtnWrapper>
      <Requests1stBtn>요청 내역 보기</Requests1stBtn>
      <Requests2ndBtn>채팅하기</Requests2ndBtn>
    </BtnWrapper>
  </CardWrapper>
  )
}

export default Card