
import { FormControlLabel, FormGroup, Switch } from "@mui/material"
import styled from "styled-components"
interface IProps {
  ToggleChange: ()=> void;
}

const Form = styled(FormGroup)`
  display:flex;
  margin-left: 10px;
  @media(max-width:768px) {
    margin-top: 20px;
  }
`
const ToggleSwitch = (props:IProps) => {


  return (
  <Form>
    <FormControlLabel 
    control={<Switch size="small"/>}
    onClick={props.ToggleChange} 
    label={
    <div style={{fontSize:14,width:120 }}>
      {"상담중인 요청만 보기"}
    </div>} />
    
  </Form>
    )
}

export default ToggleSwitch