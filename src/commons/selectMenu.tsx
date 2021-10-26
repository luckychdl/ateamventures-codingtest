import React, { useState } from "react";
import FormControl from '@mui/material/FormControl';
import ListItemText from '@mui/material/ListItemText';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import Checkbox from '@mui/material/Checkbox';
import MenuItem from "@mui/material/MenuItem";


const ITEM_HEIGHT = 30;
// const ITEM_PADDING_TOP = 1;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 2.7 ,
      width: 100,

    },
    
  },
};

const list = [
  "밀링",
  "선반"
]
export default function SelectMenu() {
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
    fontSize:"2px",
  }
  return (
    <div>
      <FormControl sx={{ width: 100, height:30 }} >
        <Select
          labelId="demo-multiple-checkbox-label"
          id="demo-multiple-checkbox"
          multiple
          inputProps={{
            sx: {
              "&.MuiOutlinedInput-input:hover": {
                borderColor:"#1565c0",
              },
            }
          }}
          displayEmpty
          value={checkedData}
          onChange={handleChange}
          renderValue={(selected) => selected.length ? `가공방식 (${selected.length})` : '가공방식'}
          MenuProps={MenuProps}
          style={{fontSize:4}}
        >
          {list.map((list) => (
            <MenuItem sx={{
              height: 30,
              padding: "0em",
              
            }}
            key={list} value={list} >
              <Checkbox checked={checkedData.indexOf(list) > -1} style={{transform:"scale(0.7)"}}/>
              <ListItemText primary={list} primaryTypographyProps={{style: text}}/>
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </div>
  );
}