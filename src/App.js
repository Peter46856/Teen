import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route, useNavigate } from 'react-router-dom';
import Footer from './footer';
import Profile from './component/profile';
import Users from './users';
import './App.css';
import Navbar from './navbar';
import OnlineUsers from './online';
import SignUp from './component/SignUp';
import Matches from './matches';
import './message.css';
import Message from './component/message-container';

function App() {
  const current_theme = localStorage.getItem('current_theme');
  const [theme, setTheme] = useState(current_theme ? current_theme : 'light');
  const navigate = useNavigate();

  // Store theme preference in local storage
  useEffect(() => {
    localStorage.setItem('current_theme', theme);
  }, [theme]);

  // Redirect after 5 seconds (you can implement this as needed)
  useEffect(() => {
    const timer = setTimeout(() => {
      navigate('/some-other-route'); // Example: Redirect to another page
    }, 5000); // 5 seconds

    return () => clearTimeout(timer);
  }, [navigate]);

  return (
    <div className={`container1 ${theme}`}>
      <Router>
        {/* Navbar component */}
        <Navbar theme={theme} setTheme={setTheme} />
        <Users />

        {/* Define routes for the application */}
        <Routes>
          <Route path="/users" element={<Users />} />
          <Route path="/online" element={<OnlineUsers />} />
          <Route path="/matches" element={<Matches />} />
          <Route path="/message-container" element={<Message />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/signup" element={<SignUp />} />
          {/* Additional routes can be added here */}
        </Routes>

        {/* Footer component */}
        <Footer />
      </Router>
    </div>
  );
}

export default App;
