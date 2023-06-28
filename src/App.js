import React, { useState } from 'react';
import './style.css';

export default function App() {
  // let clickText = 'amila';

  const [myVar, setMyvar] = useState('Amila');
  const [inputText, setInputText] = useState('');

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

      <input
        type="text"
        className="inputbox"
        placeholder="type what you want"
        //using anonymus funtion
        onChange={(e) => {
          e.preventDefault();
          setInputText(e.target.value);
        }}
      />

      <p>{inputText}</p>
    </div>
  );
}
