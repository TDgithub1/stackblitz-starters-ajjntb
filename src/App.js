import React, { useState } from 'react';
import './style.css';

export default function App() {
  // let clickText = 'amila';

  const [myVar, setMyvar] = useState('Amila');

  const clickHandle = () => {
    // clickText = 'Thisara';
    setMyvar('Thisara');
  };

  return (
    <div>
      <h1>Hello TDP</h1>

      <h2>{myVar}</h2>

      <button
        style={{
          fontSize: '14px',
          border: '1px solid red',
          padding: '7px 12px',
        }}
        onClick={clickHandle}
      >
        Click me
      </button>

      <p>Start editing to see some magic happen :)</p>
    </div>
  );
}
