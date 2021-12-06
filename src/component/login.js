import React, { useState, useEffect } from 'react';

export default function LogIn(props) {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    let a = '';

    isLoggedIn ? a = 'logged in' : a = 'logged off';
    
    useEffect(() => {
      isLoggedIn && alert(`You are now ${a}`)
    },[isLoggedIn, a]);
  
    return (
      <div>
        <button 
          className="btn btn-primary m-4" 
          onClick={() => setIsLoggedIn(!isLoggedIn)}>
          {isLoggedIn ? 'Log out' : 'Log in'}
        </button>
      </div>
    )
  }