import React from 'react';

const DarkModeToggle = ({ onToggle }) => {
  return (
    <button onClick={onToggle} className="dark-mode-toggle">
      Toggle Dark/Light Mode
    </button>
  );
};

export default DarkModeToggle;
