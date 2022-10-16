//Library Imports
import React from 'react';
import { BrowserRouter, Route, Routes, Link } from 'react-router-dom';

//Page Imports
import './App.css';
//import Layout from './pages/Layout.js';
//import NavBar from './pages/NavBar.js';
import Home from './pages/Home.js';
import SignUp from './pages/SignUp.js';
import SignIn from './pages/SignIn.js';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <nav>
          <Link to="/">Home</Link> | <Link to="/signin">Sign In</Link> | <Link to="/signup">Sign Up</Link>
        </nav>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/signin" element={<SignIn />} />
          <Route path="/signup" element={<SignUp />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
