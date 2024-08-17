import React from 'react';

const Toggle = ({ onToggle }) => {
  return (
    <button onClick={onToggle} className="toggle-button">
      Toggle Data
    </button>
  );
};

export default Toggle;
