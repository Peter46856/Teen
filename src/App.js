/*
import React, {useEffect , useState } from 'react';
import Footer from './footer';

import Profile from './component/profile';
import Users from './users';
import './App.css';
import Navbar from './navbar';
import OnlineUsers from './online';

import Login from './component/Login';
import Matches from './matches';
import './message.css';
import Sidebar from './component/Sidebar';
import Welcome from './component/Welcome';
import ChatArea from './component/ChatArea';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';





function App() {
const current_theme = localStorage.getItem('current_theme');
const [theme, setTheme] = useState(current_theme ?
 current_theme : 'light');

 useEffect(()=>{
  localStorage.setItem('current_theme', theme)
 }, [theme])
  return (
    <div className={`container1 ${theme}`}>

      <Router>
    
       <Navbar theme={theme} setTheme={setTheme} />
      
        <Routes>
          <Route path='/'element={<Users/>}>
           
          </Route>
          <Route path='/online'element={<OnlineUsers/>}>
           
          </Route>
          <Route path='/matches'element={<Matches/>}>
           
          </Route>
          <Route path="/app"element={<Welcome/>}>
            <Route path="component/Sidebar" element={<Sidebar/>}/>
            <Route path='component/ChatArea' element={<ChatArea/>}/>
           
          </Route>
          <Route path='/profile'element={<Profile/>}>
           
          </Route>
          <Route path='/component/Login'element={<Login/>}>
           
          </Route>
        </Routes>
          <Footer/>
        
      </Router>
    </div>
    );
  }

export default App;

*/


import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Footer from './footer';
import Profile from './component/profile';
import Users from './users';
import './App.css';
import Navbar from './navbar';
import OnlineUsers from './online';
import SignUp from './component/SignUp';
//import Login from './component/Login';
import Matches from './matches';
import './message.css';


import Message from './component/message-container';


function App() {
  const current_theme = localStorage.getItem('current_theme');
  const [theme, setTheme] = useState(current_theme ? current_theme : 'light');

  useEffect(() => {
    localStorage.setItem('current_theme', theme)
  }, [theme]);


  const [redirect, setRedirect] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setRedirect(true);
    }, 5000); // 5 seconds

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className={`container1 ${theme}`}>
      <Router>
        <Navbar theme={theme} setTheme={setTheme} />
        <Routes>
          <Route path="/" element={<Users />} />
          <Route path="/online" element={<OnlineUsers />} />
          <Route path="/matches" element={<Matches />} />
          <Route path="/component/message-container" element={<Message />} />
         
          <Route path="/profile" element={<Profile />} />
          <Route path="/component/SignUp" element={<SignUp />} />
          {/*<Route path="/component/Login" element={<Login />} /> */}
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
