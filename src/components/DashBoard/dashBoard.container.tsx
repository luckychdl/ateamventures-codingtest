
import Card from "../Card/card.container"
import SelectMaterial from "../../commons/selectMaterial";
import SelectMenu from "../../commons/selectMenu";
import ToggleSwitch from "../../commons/switch";
import {
  DashBoardWrapper,
  DashBoardTitle,
  DashBoardSubTitle,
  SelectWrapper,
  UtilWrapper,
  CardWrapper,
  TitleWrapper,
  Filter,
  Image,
  FilterWrapper,
} from "./dashBoard.styles"
import { useEffect, useState } from "react";
import axios from "axios";


const DashBoard = () => {
  const [cardData , setCardData] = useState([])
  const [toggle , setToggle] = useState(false)
  const [value, setValue] = useState([])
  const [methodFilter, setMethodFilter] = useState([])
  const [materialFilter, setMaterialFilter] = useState([])
  
  const getData = async() =>{
    const res = await axios.get("http://localhost:3000/requests")
    setCardData(res.data)}
  useEffect(()=>{
    getData()
    },[])
  useEffect(()=>{
    if(toggle) {
      const toggleData = cardData.filter((el) => el.status === "상담중")
      setCardData(toggleData)
    } else {
      getData()
    }
  },[toggle])

  useEffect(()=>{
    if(methodFilter) {
      const methodFilterData = cardData.filter((el)=> methodFilter.every((data) => el.method.includes(data) ) )
      setCardData(methodFilterData)
    } 
    else{
      getData()
    }
  },[methodFilter])

  useEffect(()=>{
    if(materialFilter) {
      const materialFilterData = cardData.filter((el)=> materialFilter.every((data) => el.material.includes(data) ) )
      setCardData(materialFilterData)
    } 
    else{
      getData()
    }
  },[materialFilter])
  const onClickReset = () => {
    getData()
    setValue([])
    window.location.reload()
  }
  const ToggleChange = () => {
    setToggle((prev) =>(!prev))
  }
console.log(methodFilter)

  return (
    
    <DashBoardWrapper>
      <TitleWrapper>
      <DashBoardTitle>들어온 요청</DashBoardTitle>
      <DashBoardSubTitle>파트너님에게 딱 맞는 요청서를 찾아보세요.</DashBoardSubTitle>
      </TitleWrapper>
      <UtilWrapper>
        <SelectWrapper>
          <SelectMenu 
          value={value}
          setMethodFilter={setMethodFilter}
          setValue={setValue}
          />
          <SelectMaterial 
          value={value}
          setValue={setValue}
          setMaterialFilter={setMaterialFilter}
          />
          {value.length > 0 && 
          <FilterWrapper onClick={onClickReset}>
            <Image src="/icon/icon/navigation/refresh_24px.svg" alt=""/>
            <Filter>필터링 리셋</Filter>
          </FilterWrapper>
          }
        </SelectWrapper>
        <ToggleSwitch ToggleChange={ToggleChange}/>
      </UtilWrapper>
      <CardWrapper>
      {cardData.map((data) => {
      return <Card key={data.id} data={data}/>
    })}
    </CardWrapper>
    
    </DashBoardWrapper>
    
    
    )
}

export default DashBoard