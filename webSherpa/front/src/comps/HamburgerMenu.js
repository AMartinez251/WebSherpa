import React, { useState } from 'react';

import './HamburgerMenu.css';

const HamburgerMenu = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={`hamburger-menu ${isOpen ? 'open' : ''}`} onClick={handleClick}>
      <div className="line"></div>
      <div className="line"></div>
    </div>
  );
};

export default HamburgerMenu;