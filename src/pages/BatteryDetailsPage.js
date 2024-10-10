import React from "react";
import BatteryInfo from "../components/BatteryInfo";

const BatteryDetailsPage = () => {
  return (
    <div className="container" style={{ position: 'relative', overflow: 'hidden', height: '100vh' }}>
      {/* Video Background */}
      <video
        autoPlay
        loop
        muted
        style={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          minWidth: '100%',
          minHeight: '100%',
          width: 'auto',
          height: 'auto',
          zIndex: -1,
          transform: 'translate(-50%, -50%)', // Center the video
          filter: 'blur(3px)', // Add blur effect
        }}
      >
        <source src="/videoev.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      
      {/* Content */}
      <BatteryInfo />
    </div>
  );
};

export default BatteryDetailsPage;
