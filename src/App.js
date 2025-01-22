import './App.css';
import randomColor from 'randomcolor';
import React, { useState } from 'react';

export default function App() {
  // State to store the generated color
  const [color, setColor] = useState('#ffffff'); // Default is white

  // Function to handle button click
  const generateColor = () => {
    const newColor = randomColor(); // Generate a random color
    setColor(newColor); // Update the state with the new color
  };

  return (
    <div style={{ padding: '20px', textAlign: 'center' }}>
      <h1>Random Color Generator</h1>
      <button onClick={generateColor}>Generate</button>
      <div
        style={{
          marginTop: '20px',
          width: '150px',
          height: '150px',
          backgroundColor: color,
          borderRadius: '50%', // Makes the div a circle
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          color: '#000', // Ensure text is visible
          border: '1px solid #000',
          margin: '20px auto', // Center the circle
        }}
      >
        Generated Color: {color}
      </div>
    </div>
  );
}
