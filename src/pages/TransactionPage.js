import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Grid, Container, Typography } from '@mui/material';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import ControlPointIcon from '@mui/icons-material/ControlPoint';
import PeriodInput from '../components/Period/PeriodInput';
import DatePicker from '../components/Period/DatePicker';
import FirmsInput from '../components/Period/FirmsInput';
import classes from "./TransactionPage.module.css"
import SalesCalculation from '../components/calculation/SalesCalculation';
import SearchBar from '../components/search/SearchBar';
import SalesTable from '../components/sales-table/SalesTable';


export default function TransactionPage() {
  return (
    <>
      <Helmet>
        <title> Sales </title>
      </Helmet>
      <Card sx={{ minWidth: 275,p:2}}>
      <div className={classes.salesmain}>
        <PeriodInput />
        <DatePicker />
        <FirmsInput />
        </div>
        <SalesCalculation />
    </Card>
    <Card sx={{ minWidth: 275,p:2}} >
      <div>
        <h5>Transactions</h5>
        <div className={classes.salestablehead}>
          <SearchBar />
          <Button variant="contained"><ControlPointIcon />Add Sale</Button>
        </div>
        <SalesTable />
      </div>
    </Card>
    </>
  );
}
