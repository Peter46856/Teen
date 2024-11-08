import React, { useEffect} from "react";
import logo from "../assets/logo1.PNG"
import { preLoaderAnim } from '../animations';




const Welcome = () => {
    useEffect(()=>{
        preLoaderAnim();
    }, [])

    

    return (
        <div className="welcome-container">
            <img src={logo} alt="logo" className="welcome-logo" />
            <p className="welcome-text">View and text people live through our platform</p>
            
        </div>
    );
}

export default Welcome;
