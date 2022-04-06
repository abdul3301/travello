import {
  Box,
  Button,
  FormControl,
  Grid,
  InputLabel,
  MenuItem,
  Modal,
  Select,
  TextField,
  Typography,
} from '@material-ui/core';
import CloseIcon from '@material-ui/icons/Close';
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import DateTimePicker from '@mui/lab/DateTimePicker';

import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import axios from 'axios';

import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

toast.configure();

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 800,
  height: 630,
  bgcolor: 'background.paper',
  borderRadius: '4%',
  boxShadow: 24,
  p: 4,
};

export default function ModalData({ open, handleClose, data }) {
  // Form Data
  const [venue, setVenue] = React.useState('');
  const [value, setValue] = React.useState(new Date('2014-08-18T21:11:54'));
  const [eventName, setEventName] = useState('');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [title, setTitle] = useState('');

  useEffect(() => {
    const title = JSON.parse(localStorage.getItem('venue'));

    setTitle(title?.title);
    // console.log(title);
  }, [title, name]);

  const handleChange = (newValue) => {
    setValue(newValue);
    // console.log(newValue);
  };

  const handleCity = (venue) => {
    setVenue(venue.target.value);
    // console.log(venue.target.value);
  };

  const history = useHistory();

  //  Get the data from form
  const handleSubmit = async (e) => {
    e.preventDefault();
    const obj = {
      eventName: title,
      dateAndTime: value,
      city: venue,
      name: name,
      email: email,
      phone: phone,
    };

    console.log(obj);
    const res = await axios.post('/regEvent', obj);

    if (res) {
      console.log('Data Submittted');

      setTimeout(() => {
        history.push('/Adventures');
      }, 2000);
    }
  };

  // Toast Notification
  const notify = () => {
    toast('Data Submitted Successfully', {
      autoClose: 3000,
    });
  };

  return (
    <Modal
      open={open}
      onClose={handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box sx={style}>
        <button
          onClick={handleClose}
          style={{
            float: 'right',
            padding: '10px 15px',
            backgroundColor: 'white',
            border: 'none',
            cursor: 'pointer',
          }}
        >
          <CloseIcon />
        </button>
        <Grid
          container
          direction="row"
          justify="space-between"
          alignItems="center"
        >
          <Grid item>
            <Typography id="modal-modal-title" variant="h6" component="h2">
              {data.title}
            </Typography>
            <br></br>

            <img
              style={{ width: 350, borderSpacing: '0 10px' }}
              src={data.image}
              id="modal-modal-title"
              variant="h6"
              component="h2"
            ></img>
            <br></br>
            <br></br>
            <Typography id="modal-modal-description" sx={{ mt: 2 }}>
              {data.location}
            </Typography>
          </Grid>

          {/* Form */}
          <form action="#">
            <Grid item style={{ paddingRight: '90px' }}>
              <h2>Get a Quick quote</h2>
              <br></br>
              <br></br>
              <LocalizationProvider dateAdapter={AdapterDateFns}>
                <DateTimePicker
                  renderInput={(props) => <TextField {...props} />}
                  label="Select Date and Time"
                  minDate={new Date()}
                  inputFormat="dd/MM/yyyy   hh:mm  a"
                  value={value}
                  onChange={handleChange}
                />
              </LocalizationProvider>
              <br></br>
              <br></br>
              <Box sx={{ minWidth: 120 }}>
                <FormControl fullWidth>
                  <InputLabel id="demo-simple-select-label">
                    --Select City--
                  </InputLabel>
                  <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={venue}
                    label="Age"
                    onChange={handleCity}
                  >
                    <MenuItem value="Hyderabad">Hyderabad</MenuItem>
                    <MenuItem value="Bangalore">Bangalore</MenuItem>
                    <MenuItem value="Chennai">Chennai</MenuItem>
                    <MenuItem value="Delhi">Delhi</MenuItem>
                    <MenuItem value="Mumbai">Mumbai</MenuItem>
                  </Select>
                </FormControl>
              </Box>
              <br></br>
              <TextField
                type="name"
                label="Enter your Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
              ></TextField>
              <br></br>
              <br></br>
              <TextField
                type="email"
                label="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              ></TextField>{' '}
              <br></br>
              <br></br>
              <TextField
                type="tel"
                label="Mobile no"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
              ></TextField>{' '}
              <br></br>
              <br></br>
              <br></br>
              <Button
                variant="contained"
                onClick={(event) => {
                  handleSubmit(event);
                  notify();
                }}
              >
                Submit
              </Button>
            </Grid>

            {/* Form End */}
          </form>
        </Grid>
      </Box>
    </Modal>
  );
}
