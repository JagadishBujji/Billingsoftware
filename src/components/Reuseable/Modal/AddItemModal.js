import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import AddIcon from '@mui/icons-material/Add';
import Grid from '@mui/material/Grid';
import { alpha, styled } from '@mui/material/styles';
import { Divider } from '@mui/material';
import TextField from '@mui/material/TextField';
import { Stack } from '@mui/system';
import UploadButtons from './UploadButton';
import PricingTab from '../tabs/PricingTab';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 1200,
  bgcolor: 'background.paper',
  //   border: '2px solid #000',
  borderRadius: '10px',
  boxShadow: 24,
  p: 4,
  maxHeight: '500px',
  overflowY: 'scroll',
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

export default function AddItemModal() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div>
      <Button variant="contained" onClick={handleOpen}>
        <AddIcon /> Add Item
      </Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Add Item
          </Typography>
          <Divider />

          <Grid container sx={{ mt: 3, p: 1 }}>
            <Grid md={4}>
              <CssTextField id="outlined-basic" type="text" label="Item Name" variant="outlined" />
            </Grid>
            <Grid md={4}>
              <CssTextField id="outlined-basic" type="tel" label="Item HSN" variant="outlined" />
            </Grid>
            <Grid md={4}>
              <CssTextField id="outlined-basic" type="tel" label="Phone Number" variant="outlined" />
            </Grid>
          </Grid>
          <Grid container sx={{ mt: 3, p: 1 }}>
            <Grid md={4}>
              <CssTextField id="outlined-basic" type="text" label="Item Name" variant="outlined" />
            </Grid>
            <Grid md={4}>
              <UploadButtons />
            </Grid>
            <Grid md={4}>
              <Stack direction={'row'} className="stack">
                <img src="/images/login.png" alt="" className="img-modal" />
              </Stack>
            </Grid>
          </Grid>
          <PricingTab />
        </Box>
      </Modal>
    </div>
  );
}
