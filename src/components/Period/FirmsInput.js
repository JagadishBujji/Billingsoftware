import * as React from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

export default function FirmsInput() {
  const [period, setPeriod] = React.useState('');

  const handleChange = (event) => {
    setPeriod(event.target.value);
  };
  
  return (
            <FormControl sx={{width:100,ml:2}}>
              <InputLabel id="demo-simple-select-label">Firms</InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={period}
                label="Period"
                onChange={handleChange}
              >
                <MenuItem value={10}>All Firms</MenuItem>
                <MenuItem value={20}>Sanjay</MenuItem>
                <MenuItem value={30}>Franklin</MenuItem>
              </Select>
            </FormControl>
  );
}
