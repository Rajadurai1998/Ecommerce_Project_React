// SignUp.js
import React, { useState } from 'react';
import './SignUp.css';
import axios from 'axios';

function SignUp() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [mail, setGmail] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [message, setMessage] = useState('');

  const handleSignUp = () => {
    // Make an HTTP POST request to the signup endpoint
    axios.post('https://localhost:7280/api/SignUp/signup', { username, password,mail, confirmPassword })
      .then(response => {
        setMessage(response.data.message);
      })
      .catch(error => {
        setMessage('Error signing up');
      });
  };

  return (
    <div className="SignUp">
      <div className="signup-container">
        <h2>Sign Up</h2>
        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <input
          type="gmail"
          placeholder="Gmail ID"
          value={mail}
          onChange={(e) => setGmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        {/* <input
          type="gmail"
          placeholder="Gmail"
          value={mail}
          onChange={(e) => setGmail(e.target.value)}
        /> */}
        <input
          type="password"
          placeholder="Confirm Password"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
        />
        <button onClick={handleSignUp}>Sign Up</button>
        {message && <p>{message}</p>}
      </div>
    </div>
  );
}

export default SignUp;
