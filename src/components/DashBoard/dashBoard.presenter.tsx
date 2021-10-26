import React from "react";
import SelectMaterial from "../../commons/selectMaterial";
import SelectMenu from "../../commons/selectMenu";
import ToggleSwitch from "../../commons/switch";
import {
  DashBoardWrapper,
  DashBoardTitle,
  DashBoardSubTitle,
  SelectWrapper,
  UtilWrapper
} from "./dashBoard.styles"


const DashBoardUI = (props:any) => {

  return (
    <DashBoardWrapper>
      <DashBoardTitle>들어온 요청</DashBoardTitle>
      <DashBoardSubTitle>파트너님에게 딱 맞는 요청서를 찾아보세요.</DashBoardSubTitle>
      <UtilWrapper>
        <SelectWrapper>
          <SelectMenu />
          <SelectMaterial />
        </SelectWrapper>
        <ToggleSwitch />
      </UtilWrapper>
    </DashBoardWrapper>
    )
}

export default DashBoardUI