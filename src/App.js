import './App.css';
import randomColor from 'randomcolor';
import React, { useState } from 'react';

export default function App() {
  // Default color set to light pink for contrast to white text
  const [color, setColor] = useState('#f6caf2');

  // Function to generate and update the color
  const generateColor = () => {
    const newColor = randomColor();
    setColor(newColor);
  };

  return (
    <div style={{ padding: '20px', textAlign: 'center' }}>
      <h1>Random Color Generator</h1>

      <button onClick={generateColor} className="button">
        Generate
      </button>

      <div
        style={{
          marginTop: '20px',
          width: '200px',
          height: '200px',
          backgroundColor: color, // Dynamic background color
          borderRadius: '50%', // Makes the div a circle
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          color: '#fff', // White text color for contrast
          fontWeight: 'bold',
          fontSize: '14px',
          fontFamily: 'Roboto, sans-serif', // Modern font
          boxShadow: '0 8px 15px rgba(0, 0, 0, 0.2)', // Subtle shadow
          transition: 'all 0.3s ease', // Smooth color transition
          margin: '20px auto', // Center the circle horizontally
        }}
      >
        Generated Color: {color}
      </div>
    </div>
  );
}
