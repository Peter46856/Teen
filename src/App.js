import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route, useNavigate } from 'react-router-dom';
//import Footer from './footer';
//import Navbar from './navbar';
import Content from './content';
import './App.css';

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

       
       
       
        <Content />
        

    </div>
  );
}

export default App;
