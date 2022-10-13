import React from 'react';

function NavBar() {
    return (
      <nav className="navbar">
        <h1>AuthApp</h1>
        <div className="links">
          <a href="/">Home</a> | <a href="/signin">SignIn</a> |  <a href="/signup">SignUp</a> 
        </div>
      </nav>
    );
  }

export default NavBar;