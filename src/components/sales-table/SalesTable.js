import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import PrintIcon from '@mui/icons-material/Print';
import ShareIcon from '@mui/icons-material/Share';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import classes from './SalesTable.module.css';

function createData(date, invoice, name, transaction, payment, amount, balance) {
  return { date, invoice, name, transaction, payment, amount, balance };
}

const rows = [createData('01/01/2023', 1, 'Franklin', 'Sale', 'cash', 0, 0)];

export default function SalesTable() {
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell align="left">DATE</TableCell>
            <TableCell align="left">INVOICE NO</TableCell>
            <TableCell align="left">PARTY NAME</TableCell>
            <TableCell align="left">TRANSACTION</TableCell>
            <TableCell align="left">PAYMENT TYPE</TableCell>
            <TableCell align="left">AMOUNT</TableCell>
            <TableCell align="left">BALANCE</TableCell>
            <TableCell align="left"> </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.date} sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
              <TableCell component="th" scope="row">
                {row.date}
              </TableCell>
              <TableCell align="left">{row.invoice}</TableCell>
              <TableCell align="left">{row.name}</TableCell>
              <TableCell align="left">{row.transaction}</TableCell>
              <TableCell align="left">{row.payment}</TableCell>
              <TableCell align="left">{row.amount}</TableCell>
              <TableCell align="left">{row.balance}</TableCell>
              <TableCell className={classes.print} align="left">
                <PrintIcon />
                <ShareIcon />
              </TableCell>
              <TableCell align="left"><MoreVertIcon /></TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
