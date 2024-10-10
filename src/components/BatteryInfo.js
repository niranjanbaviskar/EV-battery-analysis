import React, { useState, useEffect } from "react";

const BatteryInfo = () => {
  const userId = localStorage.getItem("userId");

  const batteryData = {
    "user1": { quality: "Good", age: "2 years", problems: "No major issues", servicing: "Due in 3 months" },
    "user2": { quality: "Average", age: "3 years", problems: "Battery drain", servicing: "Due in 1 month" },
    "user3": { quality: "Excellent", age: "1 year", problems: "No issues", servicing: "Due in 6 months" },
    "user4": { quality: "Poor", age: "5 years", problems: "Frequent charging needed", servicing: "Due now" },
    "user5": { quality: "Good", age: "4 years", problems: "Minor issues", servicing: "Due in 2 months" },
    "user6": { quality: "Average", age: "3.5 years", problems: "Occasional overheating", servicing: "Due in 4 months" },
    "user7": { quality: "Good", age: "2.5 years", problems: "No significant problems", servicing: "Due in 5 months" },
    "user8": { quality: "Poor", age: "6 years", problems: "Battery replacement needed", servicing: "Due now" },
    "user9": { quality: "Excellent", age: "1.5 years", problems: "No problems", servicing: "Due in 7 months" },
    "user10": { quality: "Average", age: "4.5 years", problems: "Slight battery drain", servicing: "Due in 3 months" },
    "user11": { quality: "Good", age: "2 years", problems: "No issues", servicing: "Due in 1 month" },
    "user12": { quality: "Average", age: "3 years", problems: "Intermittent charging", servicing: "Due in 2 months" },
};


  const userBatteryInfo = batteryData[userId] || { quality: "Unknown", age: "N/A", problems: "N/A", servicing: "N/A" };

  // State to track whether each box is clicked
  const [isVisible, setIsVisible] = useState({
    quality: false,
    age: false,
    problems: false,
    servicing: false,
  });

  // State for zoom effect on title
  const [zoom, setZoom] = useState(1);
  const [zoomingIn, setZoomingIn] = useState(true); // Controls zoom direction

  // Effect for zooming in and out automatically on title
  useEffect(() => {
    const interval = setInterval(() => {
      setZoom(prevZoom => {
        if (zoomingIn) {
          if (prevZoom < 1.5) {
            return prevZoom + 0.1; // Zoom in
          } else {
            setZoomingIn(false); // Switch to zoom out
          }
        } else {
          if (prevZoom > 1) {
            return prevZoom - 0.1; // Zoom out
          } else {
            setZoomingIn(true); // Switch to zoom in
          }
        }
        return prevZoom; // Default return
      });
    }, 300); // Change zoom every 300 milliseconds

    return () => clearInterval(interval); // Cleanup interval on component unmount
  }, [zoomingIn]);

  // Toggle visibility of each detail
  const toggleVisibility = (key) => {
    setIsVisible((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  // Box styles with different light colors, bigger font, and blur effect for the background only
  const boxStyle = (color, isVisible) => ({
    background: 'rgba(255, 255, 255, 0.3)', // Semi-transparent background
    borderRadius: '15px',
    padding: '40px',
    margin: '20px',
    cursor: 'pointer',
    textAlign: 'center',
    transition: 'transform 0.3s ease, filter 0.3s ease',
    boxShadow: '0 5px 15px rgba(0, 0, 0, 0.2)',
    flex: '1 1 calc(50% - 40px)', // Ensure two boxes per row
    maxWidth: 'calc(50% - 40px)', // Ensure two boxes per row
    backdropFilter: isVisible ? 'none' : 'blur(17px)', // Apply blur to background
  });

  const titleStyle = {
    fontSize: '2rem',
    fontWeight: 'bold',
    zIndex: '1', // Ensure the title stays on top and is not blurred
  };

  const valueStyle = {
    marginTop: '10px',
    fontSize: '1.8rem', // Increase font size for values
  };

  // Apply zoom effect to title
  const titleZoomStyle = {
    fontSize: '3rem',
    fontWeight: 'bold',
    marginBottom: '30px',
    transform: `scale(${zoom})`, // Apply zoom scale
    transition: 'transform 0.3s ease', // Smooth transition for zooming
  };

  return (
    <div className="info-container" style={{ padding: '20px', textAlign: 'center', position: 'absolute', top: '0', width: '100%' }}>
      <h1 style={titleZoomStyle}>Battery Information for {userId}</h1>
      <div style={{ display: 'flex', justifyContent: 'space-around', flexWrap: 'wrap' }}>
        {/* Quality Box */}
        <div
          style={boxStyle('#FFDDC1', isVisible.quality)} // light peach color
          onClick={() => toggleVisibility('quality')}
        >
          <div style={titleStyle}>Quality</div>
          {isVisible.quality && <div style={valueStyle}>{userBatteryInfo.quality}</div>}
        </div>

        {/* Age Box */}
        <div
          style={boxStyle('#D3F8E2', isVisible.age)} // light green color
          onClick={() => toggleVisibility('age')}
        >
          <div style={titleStyle}>Age</div>
          {isVisible.age && <div style={valueStyle}>{userBatteryInfo.age}</div>}
        </div>

        {/* Problems Box */}
        <div
          style={boxStyle('#FFF4D2', isVisible.problems)} // light yellow color
          onClick={() => toggleVisibility('problems')}
        >
          <div style={titleStyle}>Problems</div>
          {isVisible.problems && <div style={valueStyle}>{userBatteryInfo.problems}</div>}
        </div>

        {/* Servicing Box */}
        <div
          style={boxStyle('#D2EFFF', isVisible.servicing)} // light blue color
          onClick={() => toggleVisibility('servicing')}
        >
          <div style={titleStyle}>Next Servicing</div>
          {isVisible.servicing && <div style={valueStyle}>{userBatteryInfo.servicing}</div>}
        </div>
      </div>
    </div>
  );
};

export default BatteryInfo;
