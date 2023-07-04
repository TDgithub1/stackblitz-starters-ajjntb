import React, { useState } from 'react';
import './style.css';
import './app.css';

import Unit from '../Components/Unit';

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

  // second(main class) section usestate & function

  const [imageUrl, setImageUrl] = useState('');
  const [name, setName] = useState('');
  const [city, setCity] = useState('');
  const [position, setPosition] = useState('');
  const [myData, setMyData] = useState([]);

  // console.log(myData);

  return (
    <div>
      <h1>Hello TDP</h1>

      <h2>Welcome {myVar}</h2>

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
      <br />
      <br />
      <br />

      <div className="main__contanier">
        <div className="main_left">
          <input
            type="text"
            value={imageUrl}
            onChange={(e) => {
              e.preventDefault();
              setImageUrl(e.target.value);
            }}
          />
          <input
            type="text"
            value={name}
            onChange={(e) => {
              e.preventDefault();
              setName(e.target.value);
            }}
          />
          <input
            type="text"
            value={city}
            onChange={(e) => {
              e.preventDefault();
              setCity(e.target.value);
            }}
          />
          <input
            type="text"
            value={position}
            onChange={(e) => {
              e.preventDefault();
              setPosition(e.target.value);
            }}
          />
          <button
            onClick={() => {
              // console.log({
              //   imageUrl,
              //   name,
              //   city,
              //   position,
              // });

              setMyData((pre) => {
                return [
                  ...pre,
                  {
                    image: imageUrl,
                    name,
                    city,
                    position,
                  },
                ];
              });

              setImageUrl((pre) => {
                if (pre.length > 0) {
                  return '';
                } else {
                  return pre;
                }
              });

              setName((pre) => (pre.length > 0 ? '' : pre));
              // setName(pre => pre.length > 0 ? ("") : (pre)) same thing

              setCity((pre) => (pre.length > 0 ? '' : pre));

              setPosition((pre) => (pre.length > 0 ? '' : pre));
            }}
          >
            submit
          </button>
        </div>
        <div className="main_right">
          {myData?.map(({ image, name, city, position }, index) => (
            <Unit
              image={image}
              name={name}
              city={city}
              position={position}
              key={index}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
