import React, { useState } from "react";
import FormControl from '@mui/material/FormControl';
import ListItemText from '@mui/material/ListItemText';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import Checkbox from '@mui/material/Checkbox';
import MenuItem from "@mui/material/MenuItem";


interface IProps {
  value:any;
  setValue:any;
  setMethodFilter:any
}

const list = [
  { id: 1, value: "밀링" },
    { id: 2, value: "선반" },
]
export default function SelectMenu(props:IProps) {
  const [checkedData, setCheckedData] = useState<string[]>([])
  
  const handleChange = (event: SelectChangeEvent<typeof checkedData>) => {
    const {
      target: { value },
    } = event;
    setCheckedData(
      typeof value === 'string' ? value.split(',') : value,
    );
    props.setValue(value)
    props.setMethodFilter(value)
    
  };
  
  const text = {
    fontSize:"2px",
  }
  return (
    <div style={{display:"flex", marginRight: 8}}>
      <FormControl sx={{ width: 100, height:32}} >
        <Select
          labelId="demo-multiple-checkbox-label"
          id="demo-multiple-checkbox"
          multiple
          displayEmpty
          value={checkedData}
          onChange={handleChange}
          renderValue={(selected) => selected.length ? `가공방식 (${selected.length})` : '가공방식'}
          // MenuProps={MenuProps}
          style={{fontSize:4, height:32}}
          
        >
          {list.map((list) => (
            <MenuItem 
            sx={{
              height: 30,
              padding: "0em",
            }}
            key={list.id} value={list.value} 
             >
              <Checkbox 
              checked={props.value.length === 0 ? false : checkedData.indexOf(list.value) > -1} 
              style={{transform:"scale(0.7)", width:40}} 
              
              />
              <ListItemText 
              primary={list.value} 
              primaryTypographyProps={{style: text}}
              />
            </MenuItem>
          ))}
        </Select>
      </FormControl>
            
    </div>
  );
}