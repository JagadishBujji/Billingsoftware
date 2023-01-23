import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import { Typography } from '@mui/material';
import classes from "./SalesCalculation.module.css"

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

const SalesCalculation = () => {
  return (
    <>
      <Grid container spacing={2} className={classes.main} sx={{mt:1}}>
        <Grid item xs={12} md={3} sx={{width:50}} className={classes.paidmain}>
          <Item className={classes.paid}>
            <Typography>
              {' '}
              Paid <br /> ₹ 0.00
            </Typography>
          </Item>
          <Typography className={classes.addoperator}>+</Typography>
        </Grid>
        <Grid item xs={12} md={3} sx={{width:50}}  >
          <Item className={classes.unpaid}> <Typography>
              {' '}
              Unpaid <br /> ₹ 0.00
            </Typography>
            </Item>
            <Typography className={classes.equaloperator}>=</Typography>
        </Grid>
        
        <Grid item xs={12} md={3} sx={{width:50}}  >
          <Item className={classes.total}>
          <Typography>
              {' '}
              Total <br /> ₹ 0.00
            </Typography>
          </Item>
        </Grid>
      </Grid>
    </>
  );
};

export default SalesCalculation;
