import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import { alpha, styled } from '@mui/material/styles';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import TuneIcon from '@mui/icons-material/Tune';
import { Divider } from '@mui/material';
// import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';
import TabsAdjustItems from '../tabs/TabsAdjustItems';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 1000,
  bgcolor: 'background.paper',
  borderRadius: '10px',
  boxShadow: 24,
  p: 4,
};

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

export default function ItemsModal() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div>
      <Button variant="contained" onClick={handleOpen}>
        <TuneIcon sx={{ mr: 1 }} />
        Adjust Items
      </Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Edit Party
          </Typography>
          <Divider />

          <Grid container sx={{ mt: 3, p: 3 }}>
            <Grid md={4}>
              <CssTextField id="outlined-basic" type="text" label="Edit Party" variant="outlined" />
            </Grid>
            <Grid md={4}>
              <CssTextField id="outlined-basic" type="tel" label="GSTIN" variant="outlined" />
            </Grid>
            <Grid md={4}>
              <CssTextField id="outlined-basic" type="tel" label="Phone Number" variant="outlined" />
            </Grid>
          </Grid>
          <TabsAdjustItems />
        </Box>
      </Modal>
    </div>
  );
}
