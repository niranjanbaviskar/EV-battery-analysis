import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const LoginForm = () => {
  const [userId, setUserId] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (userId) {
      localStorage.setItem("userId", userId);
      navigate("/battery-info");
    }
  };

  // Inline styles for 3D effect and square shape
  const formContainerStyle = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: 'vh',
    backgroundColor: 'rgba(255, 255, 255, 0.2)', // slightly transparent for mirror effect
    color: '#fff',
    backdropFilter: 'blur(100px)', // adds the glassy effect
  };
  const formStyle = {
    backgroundColor: 'rgba(255, 255, 255, 0.1)', // transparent white
    padding: '30px',
    borderRadius: '20px', // rounded corners for a modern look
    boxShadow: '0px 10px 30px rgba(0, 0, 0, 0.7)', // 3D shadow effect
    width: '100%',
    maxWidth: '300px', // restrict form width for square shape
    textAlign: 'center',
    backdropFilter: 'blur(10px)', // glassy effect for transparency
  };

  const titleStyle = {
    fontSize: '3.8rem',
    marginBottom: '15px',
    fontWeight: 'bold', // Make font bold
    color: '#000', // Black color
    textShadow: '2px 2px 5px rgba(0, 0, 0, 0.3)', // 3D effect with shadow
    fontFamily: 'Phosphate', // Change to your desired font family
};


  const inputStyle = {
    width: '90%',
    padding: '14px',
    margin: '10px 0',
    borderRadius: '10px',
    border: '2px solid black',
    backgroundColor: '#333',
    color: '#fff',
    fontSize: '1rem',
  };

  const buttonStyle = {
    width: '50%',
    padding: '15px',
    backgroundColor: 'green',
    color: '#fff',
    border: '2px solid #fff',
    borderRadius: '30px',
    fontSize: '2rem',
    cursor: 'pointer',
    transition: 'background-color 2s ease',
  };

  return (
    <div style={formContainerStyle}>
      <div style={formStyle}>
        <form onSubmit={handleSubmit}>
          <h2 style={titleStyle}>User Login</h2>
          <input
            type="text"
            placeholder="Enter User ID"
            value={userId}
            onChange={(e) => setUserId(e.target.value)}
            required
            style={inputStyle}
          />
          <button
            type="submit"
            style={buttonStyle}
            onMouseOver={(e) => (e.target.style.backgroundColor = '#333')}
            onMouseOut={(e) => (e.target.style.backgroundColor = '#000')}
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default LoginForm;
