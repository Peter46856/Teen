/*

import React from 'react';
import logo from "../assets/logo1.PNG"
import { Link } from 'react-router-dom';
import { TextField } from "@mui/material";
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

const SignUp = () => {
    const [age, setAge] = React.useState('');
    
  
    const handleChange = (event) => {
      setAge(event.target.value);
    };

    
    return (
        <div className="login-container">
            <div className="image-container">
               <img src={logo} alt="logo" className="welcome-logo" />
            </div>
            <div className="loginbox">
              <div>
                <FormControl variant="standard" sx={{ m: 1, minWidth: 120 }}>
                  <InputLabel id="demo-simple-select-standard-label">Age</InputLabel>
                  <Select
                      labelId="demo-simple-select-standard-label"
                      id="demo-simple-select-standard"
                      value={age}
                      onChange={handleChange}
                      label="Age"
                    >
                      <MenuItem value="">
                       <em>None</em>
                      </MenuItem>
                      <MenuItem value={10}>Ten</MenuItem>
                      <MenuItem value={20}>Twenty</MenuItem>
                      <MenuItem value={30}>Thirty</MenuItem>
                    </Select>
                </FormControl>
              

              <div>
                <FormControl variant="filled" sx={{ m: 1, minWidth: 120 }}>
                  <InputLabel id="demo-simple-select-filled-label">Age</InputLabel>
                    <Select
                      labelId="demo-simple-select-filled-label"
                      id="demo-simple-select-filled"
                      value={age}
                      onChange={handleChange}
                    >
                      <MenuItem value="">
                        <em>None</em>
                      </MenuItem>
                      <MenuItem value={10}>Ten</MenuItem>
                      <MenuItem value={20}>Twenty</MenuItem>
                      <MenuItem value={30}>Thirty</MenuItem>
                    </Select>
                </FormControl>
              </div>
            </div>

            <p className="login-text">Create your account now...</p>
            <TextField 
              id="standard-basic" 
              label="Username" 
              variant="standard" 
              color="secondary" 
              focused
            />
            <TextField 
              id="standard-basic" 
              label="Email" 
              variant="standard" 
              color="success" 
              focused
            />
            
            <TextField
              id="standard-basic"
              label="Password"
              type="password"
              autoComplete="off"
              variant="standard"
              color="warning" 
              focused
            />
            <p>Already have an account...<Link to="/login">Login</Link></p>
        </div>
    );
};

export default SignUp;



/*
import React from 'react';
import logo from "../assets/logo1.PNG"
import { Link } from 'react-router-dom';
import { TextField } from "@mui/material";
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

const SignUp = () => {
    const [age, setAge] = React.useState('');
    
  
    const handleChange = (event) => {
      setAge(event.target.value);
    };

    
    return (
        <div className="login-container">
            <div className="image-container">
               <img src={logo} alt="logo" className="welcome-logo" />
            </div>
            <div className="loginbox">
              <div>
                <FormControl variant="standard" sx={{ m: 1, minWidth: 120 }}>
                  <InputLabel id="demo-simple-select-standard-label">Age</InputLabel>
                  <Select
                      labelId="demo-simple-select-standard-label"
                      id="demo-simple-select-standard"
                      value={age}
                      onChange={handleChange}
                      label="Age"
                    >
                      <MenuItem value="">
                       <em>None</em>
                      </MenuItem>
                      <MenuItem value={10}>Ten</MenuItem>
                      <MenuItem value={20}>Twenty</MenuItem>
                      <MenuItem value={30}>Thirty</MenuItem>
                    </Select>
                </FormControl>
                <FormControl variant="filled" sx={{ m: 1, minWidth: 120 }}>
                  <InputLabel id="demo-simple-select-filled-label">Age</InputLabel>
                    <Select
                  labelId="demo-simple-select-filled-label"
            id="demo-simple-select-filled"
            value={age}
            onChange={handleChange}
          >
            <MenuItem value="">
              <em>None</em>
            </MenuItem>
            <MenuItem value={10}>Ten</MenuItem>
            <MenuItem value={20}>Twenty</MenuItem>
            <MenuItem value={30}>Thirty</MenuItem>
          </Select>
        </FormControl>
      </div>

          <p className="login-text">Create your acccount now...</p>
          <TextField 
              id="standard-basic" 
              label="Username" 
              variant="standard" 
              color="secondary" 
              focused
          />
          <TextField 
              id="standard-basic" 
              label="Email" 
              variant="standard" 
              color="success" 
              focused
          />
          
          <TextField
              id="standard-basic"
              label="Password"
              type="password"
              autoComplete="off"
              variant="standard"
              color="warning" 
              focused
          />
          <p>Already have an account...<Link to="/login">Login</Link></p>
      </div>
      
    </div>
  );
};

export default SignUp;




import React from 'react';
import logo from "../assets/logo1.PNG"
import { TextField } from "@mui/material";
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';



export default function SelectVariants() {
    const [age, setAge] = React.useState('');
  
    const handleChange = (event) => {
      setAge(event.target.value);
    };
  

const SignUp = () => {
    return (
        <div className="login-container">
            <div className="image-container">
               <img src={logo} alt="logo" className="welcome-logo" />
            </div>
            <div className="loginbox">

            <div>
              <FormControl variant="standard" sx={{ m: 1, minWidth: 120 }}>
                <InputLabel id="demo-simple-select-standard-label">Age</InputLabel>
                  <Select
                    labelId="demo-simple-select-standard-label"
                    id="demo-simple-select-standard"
                    value={age}
                    onChange={handleChange}
                    label="Age"
                  >
                    <MenuItem value="">
                     <em>None</em>
                    </MenuItem>
                    <MenuItem value={10}>Ten</MenuItem>
                    <MenuItem value={20}>Twenty</MenuItem>
                    <MenuItem value={30}>Thirty</MenuItem>
                  </Select>
              </FormControl>
              <FormControl variant="filled" sx={{ m: 1, minWidth: 120 }}>
                <InputLabel id="demo-simple-select-filled-label">Age</InputLabel>
                  <Select
                labelId="demo-simple-select-filled-label"
          id="demo-simple-select-filled"
          value={age}
          onChange={handleChange}
        >
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          <MenuItem value={10}>Ten</MenuItem>
          <MenuItem value={20}>Twenty</MenuItem>
          <MenuItem value={30}>Thirty</MenuItem>
        </Select>
      </FormControl>
    </div>




                <p className="login-text">Sign up your acccount now</p>
                <TextField 
                    id="standard-basic" 
                    label="Username" 
                    variant="standard" 
                    color="secondary" 
                    focused
                />
                <TextField 
                    id="standard-basic" 
                    label="Email" 
                    variant="standard" 
                />
                
                <TextField
                    id="standard-basic"
                    label="Password"
                    type="password"
                    autoComplete="off"
                    variant="standard"
                />
            </div>
        </div>
        <p>Already have an account...<button>Login</button></p>

    );
};

export default SignUp;
*/

import React from 'react';
import { Link } from 'react-router-dom'; // Import Link from React Router
import logo from "../assets/logo1.PNG"
import { TextField } from "@mui/material";
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

const SignUp = () => {
    const [age, setAge] = React.useState('');
  
    const handleChange = (event) => {
      setAge(event.target.value);
    };
  
    return (
        <div className="login-container">
            <div className="image-container">
               <img src={logo} alt="logo" className="welcome-logo" />
            </div>
            <div className="loginbox">
            <p className="login-text">Sign up your account now</p>
              <div>
                <FormControl variant="standard" sx={{ m: 1, minWidth: 120 }}>
                  <InputLabel id="demo-simple-select-standard-label">Age</InputLabel>
                    <Select
                      labelId="demo-simple-select-standard-label"
                      id="demo-simple-select-standard"
                      value={age}
                      onChange={handleChange}
                      label="Age"
                    >
                      <MenuItem value="">
                       <em>None</em>
                      </MenuItem>
                      <MenuItem value={10}>Ten</MenuItem>
                      <MenuItem value={20}>Twenty</MenuItem>
                      <MenuItem value={30}>Thirty</MenuItem>
                    </Select>
                </FormControl>
                <FormControl variant="filled" sx={{ m: 1, minWidth: 120 }}>
                  <InputLabel id="demo-simple-select-filled-label">Age</InputLabel>
                    <Select
                  labelId="demo-simple-select-filled-label"
            id="demo-simple-select-filled"
            value={age}
            onChange={handleChange}
          >
            <MenuItem value="">
              <em>None</em>
            </MenuItem>
            <MenuItem value={10}>Ten</MenuItem>
            <MenuItem value={20}>Twenty</MenuItem>
            <MenuItem value={30}>Thirty</MenuItem>
          </Select>
        </FormControl>
      </div>

         
          <TextField 
              id="standard-basic" 
              label="Username" 
              variant="standard" 
              color="secondary" 
              focused
          />
          <TextField 
              id="standard-basic" 
              label="Email" 
              variant="standard" 
              color="success" 
              focused
          />
          
          <TextField
              id="standard-basic"
              label="Password"
              type="password"
              autoComplete="off"
              variant="standard"
              color="warning" 
              focused
          />
          <p className='login-text'>Already have an account...<Link to="/component/Login">Login</Link></p> 
      </div>
      <div>
        
        
      </div>
    </div>
  );
};

export default SignUp;
