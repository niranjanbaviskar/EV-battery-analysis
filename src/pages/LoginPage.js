import React from "react";
import LoginForm from "../components/LoginForm";

const LoginPage = () => {
  const backgroundStyle = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh',
    position: 'relative', // Relative position for the overlay
    overflow: 'hidden', // Hide any overflow
  };

  const overlayStyle = {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    backgroundImage: "url('/background2.png')", // Path to the image in the public folder
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    filter: 'blur(1px)', // Blur effect
    zIndex: -1, // Position it behind the form
  };

  const formContainerStyle = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '45vh', // Adjust height as needed
    width: '65%', // Adjust width as needed
    backgroundColor: 'rgba(255, 255, 255, 0.1)', // Slightly transparent for glass effect
    backdropFilter: 'blur(10px)', // Adds additional blur effect
    borderRadius: '20px', // Rounded corners
    boxShadow: '0 4px 20px rgba(0, 0, 0, 0.5)', // Shadow for depth
    padding: '20px', // Padding inside the container
  };

  return (
    <div style={backgroundStyle}>
      <div style={overlayStyle} />
      <div style={formContainerStyle}>
        <LoginForm />
      </div>
    </div>
  );
};

export default LoginPage;
