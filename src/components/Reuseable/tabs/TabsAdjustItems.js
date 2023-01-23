import * as React from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import { alpha, styled } from '@mui/material/styles';
import TextField from '@mui/material/TextField';

import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import TextareaAutosize from '@mui/base/TextareaAutosize';
import InputLabel from '@mui/material/InputLabel';
import GstType from './GstType';
import DatePicker from './DatePicker';

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

const CssTextField = styled(TextField)({
  '& label.Mui-focused': {
    color: 'black',
  },
  '& .MuiInput-underline:after': {
    borderBottomColor: 'green',
  },
  '& .MuiOutlinedInput-root': {
    // '& fieldset': {
    //   borderColor: 'red',
    // },
    // '&:hover fieldset': {
    //   borderColor: 'yellow',
    // },
    '&.Mui-focused fieldset': {
      borderColor: 'black',
    },
  },
});

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

export default function TabsAdjustItems() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: '100%' }}>
      <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
        <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
          <Tab label="GST & Address" {...a11yProps(0)} />
          <Tab label="Credit & Balance" {...a11yProps(1)} />
          {/* <Tab label="Item Three" {...a11yProps(2)} /> */}
        </Tabs>
      </Box>
      <TabPanel value={value} index={0}>
        <Grid container>
          <Grid md={5}>
            <GstType
              label="Gst Type"
              consumer="Unregistered/Consumer"
              regular="Registered Business - Regular"
              composition="Registered Business - Composition"
            />
            <GstType
              label="State"
              consumer="Andaman & Nicobar Islands"
              regular="Andhra Pradesh"
              composition="Arunachal Pradesh"
              state1="Assam"
              state2="Bihar"
              state3="Chandigarh"
              state4="Chhattisgarh"
              state5="Dadra & Nagar Haveli & Daman & Diu"
              state6="Daman & Diu"
              state7="Delhi"
              state8="Goa"
              state9="Gujarat"
              state10="Haryana"
              state11="Himachal Pradesh"
              state12="Jammu & Kashmir"
              state13="Jharkhand"
              state14="Karnataka"
              state15="Kerala"
              state16="Ladakh"
              state17="Lakshadweep"
              state18="Madhya Pradesh"
              state19="Maharashtra"
              state20="manipur"
              state21="Meghalaya"
              state22="Mizoram"
              state23="Nagaland"
              state24="Odisha"
              state25="Puducherry"
              state26="Punjab"
              state27="Rajasthan"
              state28="Sikkim"
              state29="Tamil Nadu"
              state30="Telangana"
              state31="Tripura"
              state32="Uttar Pradesh"
              state33="Uttarakhand"
              state34="West Bengal"
            />
            <CssTextField
              id="outlined-basic"
              type="email"
              label="Email ID"
              variant="outlined"
              sx={{ width: '60%', mt: 2 }}
            />
          </Grid>
          <Grid md={7}>
            <Grid
              container
              sx={{ display: 'flex', flexDirection: 'column', alignItems: 'start', justifyContent: 'start' }}
            >
              <InputLabel sx={{ mb: 1 }}>Billing Address</InputLabel>
              <TextareaAutosize
                type="address"
                aria-label="minimum height"
                minRows={6}
                placeholder="Billing Address"
                style={{ width: 250, padding: '10px', border: ' 1px solid #ccc', borderRadius: '10px' }}
              />
            </Grid>
          </Grid>
        </Grid>
      </TabPanel>
      <TabPanel value={value} index={1}>
        <Grid container>
          <Grid md={4}>
            <CssTextField id="outlined-basic" type="text" label="Opening Balance" variant="outlined" />
          </Grid>
          <Grid md={4}>
            <DatePicker />
          </Grid>
        </Grid>
      </TabPanel>
      <Stack spacing={2} direction="row" className="tabs">
        <Button variant="contained">Save & New </Button>
        <Button variant="outlined">Save</Button>
      </Stack>
    </Box>
  );
}
