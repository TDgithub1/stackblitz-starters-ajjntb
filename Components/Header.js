import React, { useState } from 'react';

const Header = () => {
  const [menuClick, setMenuClick] = useState(false);

  return (
    <header className="header__container">
      <link
        rel="stylesheet"
        href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200"
      />

      <h1>
        Td <span>Dev</span>
      </h1>
      <nav>
        <img src="" alt=""></img>

        {/* style={{
            cursor: 'pointer',
            position: 'relative',
            right: '20px',
          }}

          onClick{() => {
            setMenuClick(true);
          }}
     */}
        <ul
          style={{
            right: `${menuClick ? '-20px' : '-250px'}`,
          }}
        >
          <div className="header__menuclose">
            <span class="material-symbols-outlined">close</span>
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
