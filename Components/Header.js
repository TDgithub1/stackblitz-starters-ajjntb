import React, { useState } from 'react';

const Header = () => {
  const [menuClick, setMenuClick] = useState(false);

  return (
    <header className="header__container">
      <h1>
        Td <span>Dev</span>
      </h1>
      <nav>
        <ol
          style={{
            listStyle: 'none',
          }}
        >
          <li>Home</li>
          <li>About</li>
          <li>Contact</li>
          <li>Project</li>
        </ol>
        <img
          className="header__menuClick"
          src="https://freesvg.org/img/1533918102.png"
          alt="menu"
          style={{
            width: '30px',
            cursor: 'pointer',
            // position: 'relative',
            // right: '20px',
          }}
          onClick={() => {
            setMenuClick(true);
          }}
        />

        <ul
          style={{
            right: `${menuClick ? '-20px' : '-250px'}`,
            display: `${menuClick ? 'flex' : 'none'}`,
          }}
        >
          <div
            className="header__menuclose"
            onClick={() => {
              setMenuClick(false);
            }}
          >
            <img
              src="https://freesvg.org/img/close_icon_black2.png"
              alt="menuClose"
              style={{
                width: '20px',
              }}
            />
          </div>
          <div className="header__menu">
            <li>Home</li>
            <li>About</li>
            <li>Contact</li>
            <li>Project</li>
          </div>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
