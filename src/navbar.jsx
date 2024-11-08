import React from 'react';
import './navbar.css';
import logo_light from './assets/logo1.PNG'
import logo_dark from './assets/logo2.PNG'
import '@fortawesome/fontawesome-free/css/all.css';
import NotificationsIcon from '@mui/icons-material/Notifications';
import mode_dark from './assets/mode1.png'
import mode_light from './assets/mode2.png'
import { Link } from 'react-router-dom';
import IconButton from '@mui/material/IconButton';


 
const Navbar = ({theme, setTheme}) => {
    const toggle_mode = () => {
        theme === 'light' ? setTheme('dark') : setTheme('light');
    }


    return (

      <nav className="navbar">
        <img src={theme === 'light' ? logo_light : logo_dark} alt="logo" className="logo"/>
        <ul>
        <li className="nav-item mr-3">
          <Link className="nav-link p-2 mr-2" to="/">Home</Link>
        </li>

        <li className="nav-item">
          <Link className="nav-link p-2" to="/online">Online</Link>
        </li>

        <li className="nav-item">	
          <Link className="nav-link p-2" to="/matches">Matches</Link>
        </li>

        <li className="nav-item">
          <Link className="nav-link p-2" to="/component/message-container">Messages</Link>
        </li>

        <li className="nav-item">
          <Link  className="nav-link p-2" to="/profile">Profile</Link>
        </li>

        <li className="nav-item">
          <Link className="nav-link p-2" to="/component/SignUp">Login</Link>
        </li>
        
        
        
        </ul>


        <IconButton>
          <NotificationsIcon/>
        </IconButton>



       <i class="fa-regular fa-comment"></i>
        <img onClick={()=>{toggle_mode()}} src={theme === 'light' ? mode_light : mode_dark} alt="toggle" className="toggle-icon"/>
   
        
      </nav>

    
    );
      

        
}

export default Navbar;

/*
import React from 'react';
import { Link } from 'react-router-dom'; 

function Navbar() {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/services">Services</Link>
        </li>
        <li>
          <Link to="/contact">Contact</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;




<nav className="navbar">
            <img src={theme === 'light' ? logo_light : logo_dark} alt="logo" className="logo"/>
            <ul>
                <li>
                  <Link to="/">Home</Link>
                </li>

                <li>
                  <Link to="/online">Online</Link>
                </li>

                <li>	
                  <Link to="/matches">Matches</Link>
                </li>

                <li>
                  <Link to="/messages">Messages</Link>
                </li>

                <li>
                  <Link to="/profile">Profile</Link>
                </li>
                
                
                
            </ul>
            <i class="fa-regular fa-comment"></i>
            <img onClick={()=>{toggle_mode()}} src={theme === 'light' ? mode_light : mode_dark} alt="toggle" className="toggle-icon"/>
           
                
        </nav>
    );

*/