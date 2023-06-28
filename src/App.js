import React, { useState } from 'react';
import './style.css';

export default function App() {
  // let clickText = 'amila';

  const [myVar, setMyvar] = useState('Amila');
  const [inputText, setInputText] = useState('');
  const [btnText, setBtnText] = useState(0);

  const clickHandle = () => {
    // clickText = 'Thisara';
    setMyvar('Thisara');
  };

  const clickHandle2 = () => {
    // set time and one at time
    setTimeout(() => {
      setBtnText((previousVal) => previousVal + 1);
    }, 3000); //after 3 second value change
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

      <br />
      <div>{btnText}</div>
      <br />
      <button
        style={{
          fontSize: '14px',
          border: '1px solid blue',
          padding: '7px 12px',
        }}
        onClick={clickHandle2}
      >
        add one
      </button>
    </div>
  );
}
