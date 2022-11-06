import React, { useState } from 'react';
import AppBar from '@mui/material/AppBar';
import TextField from '@mui/material/TextField';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import './style.css';

const App = () => {
  const [p, setP] = useState(0);
  const [t, setT] = useState(0);
  const [r, setR] = useState(0);
  const [si, setSi] = useState();

  const calculateInterest = () => {
    setSi(p*t*r/100);
  }

  return (
    <div>    
      <AppBar position="static">
        <Toolbar>         
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Simple Interest
          </Typography>         
        </Toolbar>        
      </AppBar>   
      <br/>
      <div className="si">
        <TextField onChange={(event) => setP(event.target.value)} id="outlined-basic" label="Enter P" variant="outlined" /><br/><br/>
        <TextField onChange={(event) => setR(event.target.value)} id="outlined-basic" label="Enter T" variant="outlined" /><br/><br/>
        <TextField onChange={(event) => setT(event.target.value)} id="outlined-basic" label="Enter R" variant="outlined" /> 
        <br/><br/>
        <Button onClick={() => calculateInterest()} variant="contained" className="button">Calculate</Button>
        <br/><br/>
        <Typography variant="h6" gutterBottom>
          Simple Interest is: {si}
        </Typography>
      </div>
    </div>
  );
}

export default App;
