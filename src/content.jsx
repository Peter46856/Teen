import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route, useNavigate } from 'react-router-dom';
import Profile from './component/profile';
import Users from './users';
import './App.css';
import Navbar from './navbar';
import OnlineUsers from './online';
import SignUp from './component/SignUp';
import Matches from './matches';
import './message.css';
import Message from './component/message-container';

function Content() {
  





  return (
    <div className={`container1 ${theme}`}>
      <Router>
       

        {/* Define routes for the application */}
        <Routes>
          <Route path="/" element={<Users />} />
          <Route path="/online" element={<OnlineUsers />} />
          <Route path="/matches" element={<Matches />} />
          <Route path="/message-container" element={<Message />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/signup" element={<SignUp />} />
          {/* Additional routes can be added here */}
        </Routes>

       
      </Router>
    </div>
  );
}

export default Content;
