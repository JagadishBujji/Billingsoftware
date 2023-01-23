import * as React from 'react';
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import TextField from '@mui/material/TextField';
import Select from '@mui/material/Select';

export default function PeriodInput() {
  const [value, setValue] = React.useState('');

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  return (
    <FormControl>
      <InputLabel id="demo-simple-select-label" />
      <TextField
      value={value}
     onChange={(e) => setValue(e.target.value)}
     select // tell TextField to render select
     label="Period"
     sx={{
      width: 150,
      height: 45,
      '& fieldset': { border: 'none' },
    }}
     >
{/* 
      <Select
        labelId="demo-simple-select-label"
        id="demo-simple-select"
        value={period}
        onChange={handleChange}
        
      > */}
        <MenuItem value={10}>All Sales Invoices</MenuItem>
        <MenuItem value={20}>This Month</MenuItem>
        <MenuItem value={30}>Last Month</MenuItem>
        <MenuItem value={40}>This Quarter</MenuItem>
        <MenuItem value={50}>This Year</MenuItem>
        <MenuItem value={60}>Custom</MenuItem>
      {/* </Select> */}
      </TextField>
    </FormControl>
  );
}
