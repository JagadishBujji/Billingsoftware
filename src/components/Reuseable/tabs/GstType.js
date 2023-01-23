import * as React from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

export default function GstType(props) {
  const [age, setAge] = React.useState('');

  const handleChange = (event) => {
    setAge(event.target.value);
  };

  return (
    <Box sx={{ minWidth: 120, mb: 1 }}>
      <FormControl sx={{ width: '60%' }}>
        <InputLabel id="demo-simple-select-label">{props.label}</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={age}
          label={props.label}
          onChange={handleChange}
        >
          <MenuItem value={props.consumer}>{props.consumer}</MenuItem>
          <MenuItem value={props.regular}>{props.regular}</MenuItem>
          <MenuItem value={props.composition}>{props.composition}</MenuItem>
          <MenuItem value={props.state1}>{props.state1}</MenuItem>
          <MenuItem value={props.state2}>{props.state2}</MenuItem>
          <MenuItem value={props.state3}>{props.state3}</MenuItem>
          <MenuItem value={props.state4}>{props.state4}</MenuItem>
          <MenuItem value={props.state5}>{props.state5}</MenuItem>
          <MenuItem value={props.state6}>{props.state6}</MenuItem>
          <MenuItem value={props.state7}>{props.state7}</MenuItem>
          <MenuItem value={props.state8}>{props.state8}</MenuItem>
          <MenuItem value={props.state9}>{props.state9}</MenuItem>
          <MenuItem value={props.state10}>{props.state10}</MenuItem>
          <MenuItem value={props.state11}>{props.state11}</MenuItem>
          <MenuItem value={props.state12}>{props.state12}</MenuItem>
          <MenuItem value={props.state13}>{props.state13}</MenuItem>
          <MenuItem value={props.state14}>{props.state14}</MenuItem>
          <MenuItem value={props.state15}>{props.state15}</MenuItem>
          <MenuItem value={props.state16}>{props.state16}</MenuItem>
          <MenuItem value={props.state17}>{props.state17}</MenuItem>
          <MenuItem value={props.state18}>{props.state18}</MenuItem>
          <MenuItem value={props.state19}>{props.state19}</MenuItem>
          <MenuItem value={props.state20}>{props.state20}</MenuItem>
          <MenuItem value={props.state21}>{props.state21}</MenuItem>
          <MenuItem value={props.state22}>{props.state22}</MenuItem>
          <MenuItem value={props.state23}>{props.state23}</MenuItem>
          <MenuItem value={props.state24}>{props.state24}</MenuItem>
          <MenuItem value={props.state25}>{props.state25}</MenuItem>
          <MenuItem value={props.state26}>{props.state26}</MenuItem>
          <MenuItem value={props.state27}>{props.state27}</MenuItem>
          <MenuItem value={props.state28}>{props.state28}</MenuItem>
          <MenuItem value={props.state29}>{props.state29}</MenuItem>
          <MenuItem value={props.state30}>{props.state30}</MenuItem>
          <MenuItem value={props.state31}>{props.state31}</MenuItem>
          <MenuItem value={props.state32}>{props.state32}</MenuItem>
          <MenuItem value={props.state33}>{props.state33}</MenuItem>
          <MenuItem value={props.state34}>{props.state34}</MenuItem>
        </Select>
      </FormControl>
    </Box>
  );
}
