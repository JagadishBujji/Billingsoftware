import * as React from 'react';
import { Stack } from '@mui/system';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { alpha, styled } from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import { Button } from '@mui/material';
import GstType from './GstType';
import WithOrWithOut from './WithOrWithOut';
import Percentage from './Percentage';
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

export default function PricingTab() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: '100%' }}>
      <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
        <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
          <Tab label="Pricing" {...a11yProps(0)} />
          <Tab label="Stock" {...a11yProps(1)} />
          {/* <Tab label="Item Three" {...a11yProps(2)} /> */}
        </Tabs>
      </Box>
      <TabPanel value={value} index={0}>
        <Typography id="modal-modal-title" variant="h6" component="h6">
          Sale Price
        </Typography>
        <Grid container>
          <Grid md={6} sx={{ mt: 1 }}>
            <Stack direction={'row'}>
              <CssTextField id="outlined-basic" type="text" label="Sale Price" variant="outlined" />
              <WithOrWithOut />
            </Stack>
          </Grid>
          <Grid md={6} sx={{ mt: 1 }}>
            <Stack direction={'row'}>
              <CssTextField id="outlined-basic" type="tel" label="Disc. on Sale Price" variant="outlined" />
              <Percentage />
            </Stack>
          </Grid>
          {/* <Grid md={4}>
            <CssTextField id="outlined-basic" type="tel" label="Phone Number" variant="outlined" />
          </Grid> */}
        </Grid>
        <Grid container sx={{ mt: 2 }}>
          <Grid md={6}>
            <Typography id="modal-modal-title" variant="h6" component="h6">
              Purchase Price
            </Typography>
            <Grid container>
              <Grid md={6} sx={{ mt: 1 }}>
                <Stack direction={'row'}>
                  <CssTextField id="outlined-basic" type="text" label="Purchase Price" variant="outlined" />
                  <WithOrWithOut />
                </Stack>
              </Grid>
            </Grid>
          </Grid>
          <Grid md={6}>
            <Typography id="modal-modal-title" variant="h6" component="h6">
              Taxes
            </Typography>
            <GstType
              consumer="IGST@0%"
              regular="GST@0%"
              composition="IGST@0.25%"
              state1="GST@0.25%"
              state2="IGST@3%"
              state3="GST@3%"
              state4="IGST@5%"
              state5="GST@5%"
              state6="IGST@12%"
              state7="GST@12%"
              state8="IGST@18%"
              state9="GST@18%"
              state10="IGST@28%"
              state11="GST@28%"
              state12="Exempted"
            />
          </Grid>
        </Grid>
      </TabPanel>
      <TabPanel value={value} index={1}>
        <Grid container>
          <Grid md={4} sx={{ mt: 1 }}>
            <CssTextField id="outlined-basic" type="text" label="Opening Quantity" variant="outlined" />
          </Grid>
          <Grid md={4} sx={{ mt: 1 }}>
            <CssTextField id="outlined-basic" type="tel" label="At Price" variant="outlined" />
          </Grid>
          <Grid md={4}>
            <DatePicker />
          </Grid>
        </Grid>
        <Grid container sx={{ mt: 1 }}>
          <Grid md={4} sx={{ mt: 1 }}>
            <CssTextField id="outlined-basic" type="text" label="Min Stock To Maintain" variant="outlined" />
          </Grid>
          <Grid md={4} sx={{ mt: 1 }}>
            <CssTextField id="outlined-basic" type="tel" label="Location" variant="outlined" />
          </Grid>
        </Grid>
      </TabPanel>
      {/* <TabPanel value={value} index={2}>
        Item Three
      </TabPanel> */}
      <Stack spacing={2} direction="row" className="tabs">
        <Button variant="contained">Save & New </Button>
        <Button variant="outlined">Save</Button>
      </Stack>
    </Box>
  );
}
