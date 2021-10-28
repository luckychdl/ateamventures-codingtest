import React, { useState } from "react";
import FormControl from '@mui/material/FormControl';
import ListItemText from '@mui/material/ListItemText';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import Checkbox from '@mui/material/Checkbox';
import MenuItem from "@mui/material/MenuItem"
const ITEM_HEIGHT = 50;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4 ,
      width: 100,
      marginLeft: 10,
      marginTop: 2,
    },
  },
};
interface IProps {
  setValue:any;
  value:any;
  setMaterialFilter:any;
}
const list = [
  { id: 1, value: "알루미늄" },
  { id: 2, value: "탄소강" },
  { id: 3, value: "구리" },
  { id: 4, value: "합금강" },
  { id: 5, value: "강철" },
]

export default function SelectMaterial(props:IProps) {
  const [checkedData, setCheckedData] = useState([])

  const handleChange = (event: SelectChangeEvent<typeof checkedData>) => {
    const {
      target: { value },
    } = event;
    setCheckedData(
      typeof value === 'string' ? value.split(',') : value,
    );
    props.setValue(value)
    props.setMaterialFilter(value)
  };
const text = {
  fontSize:"2px"
}
  return (
    <div style={{marginRight:24}}>
      <FormControl sx={{ width: 80, height:30 }}>

        <Select
          labelId="demo-multiple-checkbox-label"
          id="demo-multiple-checkbox"
          multiple
          displayEmpty
          value={checkedData}
          onChange={handleChange}
          renderValue={(value) => value.length ? `재료 (${value.length})` : "재료"}
          MenuProps={MenuProps}
          style={{fontSize:4 ,height:32}}
          
        >
          {list.map((list) => (
            <MenuItem sx={{
              height: 30,
              padding: "0em",
            }} 
            key={list.id} value={list.value}>
              <Checkbox checked={props.value.length === 0 ? false : checkedData.indexOf(list.value) > -1} style={{transform:"scale(0.7)"}}/>
              <ListItemText primaryTypographyProps={{style: text}} primary={list.value} />
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </div>
  );
}