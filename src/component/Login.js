import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import logo from "../assets/logo1.PNG"
import { TextField } from "@mui/material";
import { Button } from "@mui/material";



const Login = () => { 
    const [showLogin, setShowLogin] = useState(false);
    const [data, setData] = useState({name:"", email:"", password:""});
    const [loading, setLoading] = useState(false);

    const [loginStatus,setLoginStatus] = React.useState("");
    const [signUpStatus,setSignUpStatus] = React.useState("");

    const navigate = useNavigate();

    const changeHandler = async (e) => {
        setLoading(true);
        console.log(data);
        try {
            const config = {
                headers: {
                    "content-type": "application/json",
                },
            };

            const response = await axios.post(
                "http:localhost:8080/User/Login/",
                data,
                config
            );
           setLoginStatus({msg: "Success", key:Math.random()});
           setLoading(false);
           localstorage.setItem("userData", JSON.stringify(response));
           navigate(/users/);
            }
           catch (error) {
            setLoginStatus({
                msg: "Invalid User details",
                key: Math.random(),
            });
           }
           setLoading(false);
        };

        const signUpHandler = async () => {
            setLoading(true);
            try {
                const config = {
                headers: {
                    "content-type" : "application/json",
                    },
                };
                const response = await axios.post(
                    "http://localhost:8080/signUp/",
                    data,
                    config
                );
                console.log(response);
                setSignUpStatus({ msg:"success", key: math.random()})
                navigate(/users/);
                localStorage.setItem("userData", JSON.stringify(response));
                setLoading(false);
            
            }catch (error) {
                console.log(error);
                if (error.response.status===405){
                    setLoginStatus=({
                        msg: "User with this Email Already Exists",
                        key: Math.random(),
                    });
                }
                setLoading(false);
            }
        };
    
    return (
        <div className="login-container">
            <div className="image-container">
               <img src={logo} alt="logo" className="login-logo" />
            </div>
            <div className="loginbox">
                <p className="login-text">Login to your acccount now</p>
                <TextField 
                    id="standard-basic" 
                    label="Username" 
                    variant="standard" 
                    color="success" 
                    focused
                />
                <TextField 
                    id="standard-basic" 
                    label="Email" 
                    variant="standard" color="secondary" 
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

                <Button 
                variant="outlined" 
                color="success">
                Login
                </Button>
                <p>Already have an account...<Link to="/component/SignUp">SignUp</Link></p>
            </div>
            
        </div>
        
    );
}

export default Login;
