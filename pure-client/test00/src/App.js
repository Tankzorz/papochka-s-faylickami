import './App.css';
import { Container, Slider, Box, TextField, Grid} from '@material-ui/core';
import Navbar from "./components/navbar";
import DatePicker from '@material-ui/lab/DatePicker';
import DateAdapter from 'luxon';




function App() {
  return (
    <div>
      <Container maxWidth="md">
        <Navbar></Navbar>
          <Box sx={{ flexGrow: 1 }}>
            <Grid container spacing={2}>
              <Grid item xs={4}>
              <LocalizationProvider dateAdapter={DateAdapter}>
                <DatePicker
                  label="Basic example"
                  value={value}
                  onChange={(newValue) => {
                    setValue(newValue);
                  }}
                  renderInput={(params) => <TextField {...params} />}
                />
              </LocalizationProvider>
              </Grid>

            </Grid>
      </Box>
      </Container>
    </div>
  );
}

export default App;
