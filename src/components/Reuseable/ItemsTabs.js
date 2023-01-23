import * as React from 'react';
import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import { Grid, Card } from '@mui/material';
import IconButton from '@mui/material/IconButton';
import SearchIcon from '@mui/icons-material/Search';
import SplitButton from './SplitButton';
// import LongMenu from './LongMenu';
import classes from './ItemsTabs.module.css';
import DataTable from './DataTable';
import ItemsModal from './Modal/ItemsModal';
import ItemsTable from './Table/ItemsTable';
import AddItemModal from './Modal/AddItemModal';

export default function ItemsTabs() {
  const [value, setValue] = React.useState('1');

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: '100%', typography: 'body1' }}>
      <TabContext value={value}>
        <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
          <TabList onChange={handleChange} aria-label="lab API tabs example">
            <Tab label="PRODUCTS" value="1" />
            <Tab label="CATEGORY" value="2" />
            <Tab label="UNITS" value="3" />
          </TabList>
        </Box>
        <TabPanel value="1" sx={{ padding: '10px' }}>
          <Grid container spacing={1}>
            <Grid item md={3}>
              <Card className={`${classes.Card}`}>
                <div className={`row ${classes.Button}`}>
                  <IconButton aria-label="Example">
                    <SearchIcon />
                  </IconButton>
                  <AddItemModal/>
                  {/* <LongMenu /> */}
                </div>
                <DataTable />
              </Card>
            </Grid>
            <Grid item md={9}>
              {' '}
              <Card className={`${classes.sale}`}>
                <div className={`row ${classes.data}`}>
                  <p>
                    <b>Bolt</b>
                  </p>
                  <ItemsModal />
                </div>
                <div className={`row ${classes.data}`}>
                  <p className={`${classes.content}`}>
                    <b>SALE PRICE:</b> <span className={`${classes.datacolor}`}>₹ 20.00</span> (incl)
                  </p>
                  <p className={`${classes.content}`}>
                    <b>STOCK QUANTITY:</b> <span className={`${classes.datacolor}`}>-1</span> (incl)
                  </p>
                </div>
                <div className={`row ${classes.data}`}>
                  <p className={`${classes.content}`}>
                    <b>PURCHASE PRICE:</b> <span className={`${classes.datacolor}`}>₹ 10.00 </span>(excl)
                  </p>
                  <p className={`${classes.content}`}>
                    <b>STOCK VALUE:</b> <span className={`${classes.datacolor}`}>₹ 10.00</span> (excl)
                  </p>
                </div>
              </Card>
              <Card className={`${classes.table}`}>
                <ItemsTable />
              </Card>
            </Grid>
          </Grid>
        </TabPanel>
        <TabPanel value="2" sx={{ padding: '10px' }}>
          <Grid container spacing={1}>
            <Grid item md={3}>
              <Card className={`${classes.Card}`}>
                <div className={`row ${classes.Button}`}>
                  <IconButton aria-label="Example">
                    <SearchIcon />
                  </IconButton>
                  <SplitButton />
                  {/* <LongMenu /> */}
                </div>
                <DataTable />
              </Card>
            </Grid>
            <Grid item md={9}>
              {' '}
              <Card className={`${classes.sale}`}>
                <div className={`row ${classes.data}`}>
                  <p>
                    <b>GENERAL</b>
                  </p>
                  {/* <ItemsModal /> */}
                  <p className={`${classes.content}`}>
                    <b>Total Items:</b> <span className={`${classes.datacolor}`}>₹ 20.00</span> (incl)
                  </p>
                </div>
                {/* <div className={`row ${classes.data}`}>
                  <p className={`${classes.content}`}>
                    <b>SALE PRICE:</b> <span className={`${classes.datacolor}`}>₹ 20.00</span> (incl)
                  </p>
                  <p className={`${classes.content}`}>
                    <b>STOCK QUANTITY:</b> <span className={`${classes.datacolor}`}>-1</span> (incl)
                  </p>
                </div> */}
              </Card>
              <Card className={`${classes.table}`}>
                <ItemsTable />
              </Card>
            </Grid>
          </Grid>
        </TabPanel>
        <TabPanel value="3" sx={{ padding: '10px' }}>
          Item Three
        </TabPanel>
      </TabContext>
    </Box>
  );
}
