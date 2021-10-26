
import { FormControlLabel, FormGroup, Switch } from "@mui/material"



const ToggleSwitch = () => {


  return (
  <FormGroup style={{display:"flex"}}>
    <FormControlLabel control={<Switch size="small"/>} label={<span style={{fontSize:10}}>{"상담중인 요청만 보기"}</span>} />
    
  </FormGroup>
    )
}

export default ToggleSwitch