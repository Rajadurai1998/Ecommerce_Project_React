import React, { useState } from 'react';
import './LogIn.css';
import axios from 'axios'; 
import { useNavigate } from 'react-router-dom';

function LogIn() {
  const [Username, setUsername] = useState('');
  const [Password, setPassword] = useState('');
  const [message, setMessage] = useState('');
  const navigate = useNavigate();

  const handleLogin = () => {
    axios.post('https://localhost:7280/api/Login/login', { Username, Password })
      .then(response => {
        setMessage(response.data.message);
        // Check if login is successful
        if (response.data.message === "Login successful") {
          // Store username in session storage
          sessionStorage.setItem('username', Username);
          // Navigate to Medicine component
          navigate("/Medicine");
        }
      })
      .catch(error => {
        setMessage('Invalid username or password');
      });
  };

  return (
    <div className="LogIn">
      <div className="login-container">
        <h2>Login</h2>
        <input
          type="text"
          placeholder="Username"
          value={Username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          value={Password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button onClick={handleLogin}>Login</button>
        {message && <p>{message}</p>}
      </div>
    </div>
  );
}

export default LogIn;
