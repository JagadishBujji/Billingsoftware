import { Helmet } from 'react-helmet-async';
import { useState } from 'react';
// @mui
import { Container, Grid, Card, Stack, Typography } from '@mui/material';
import IconButton from '@mui/material/IconButton';
import SearchIcon from '@mui/icons-material/Search';
import DataTable from '../components/Reuseable/DataTable';
import ItemsModal from '../components/Reuseable/Modal/ItemsModal';
import ItemsTable from '../components/Reuseable/Table/ItemsTable';
import SplitButton from '../components/Reuseable/SplitButton';
import classes from '../components/Reuseable/ItemsTabs.module.css';
// components
import { ProductSort, ProductList, ProductCartWidget, ProductFilterSidebar } from '../sections/@dashboard/products';
// mock
import PRODUCTS from '../_mock/products';

// ----------------------------------------------------------------------

export default function ProductsPage() {
  const [openFilter, setOpenFilter] = useState(false);

  const handleOpenFilter = () => {
    setOpenFilter(true);
  };

  const handleCloseFilter = () => {
    setOpenFilter(false);
  };

  return (
    <>
      <Helmet>
        <title> Parties | Billing Report </title>
      </Helmet>

      <Container>
        {/* <Typography variant="h4" sx={{ mb: 5 }}>
          Products
        </Typography> */}

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
                  <b>Jagadish</b>
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
      </Container>
    </>
  );
}
