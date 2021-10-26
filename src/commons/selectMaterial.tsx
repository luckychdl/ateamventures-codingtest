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
      marginTop: 2
    },
  },
};

const list = [
  "알루미늄",
  "탄소강",
  "구리",
  "합금강",
  "강철"
]

export default function SelectMaterial() {
  const [checkedData, setCheckedData] = useState<string[]>([])

  const handleChange = (event: SelectChangeEvent<typeof checkedData>) => {
    const {
      target: { value },
    } = event;
    setCheckedData(
      typeof value === 'string' ? value.split(',') : value,
    );
  };
const text = {
  fontSize:"2px"
}
  return (
    <div>
      <FormControl sx={{ width: 80, height:30 }}>

        <Select
          labelId="demo-multiple-checkbox-label"
          id="demo-multiple-checkbox"
          multiple
          displayEmpty
          inputProps={{
            sx: {
              "&.MuiOutlinedInput-input:hover": {
                borderColor:"#1565c0"
              },
            }
          }}
          value={checkedData}
          onChange={handleChange}
          renderValue={(selected) => selected.length ? `재료 (${selected.length})` : "재료"}
          MenuProps={MenuProps}
          style={{fontSize:4 }}
          
        >
          {list.map((list) => (
            <MenuItem sx={{
              height: 30,
              padding: "0em",
            }} 
            key={list} value={list}>
              <Checkbox checked={checkedData.indexOf(list) > -1} style={{transform:"scale(0.7)"}}/>
              <ListItemText primaryTypographyProps={{style: text}} primary={list} />
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </div>
  );
}