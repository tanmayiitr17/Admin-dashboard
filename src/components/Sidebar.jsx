import React from 'react';

const Sidebar = ({ summary }) => {
  return (
    <aside className="sidebar">
      <h2>Summary Statistics</h2>
      <ul>
        {summary.map((stat, index) => (
          <li key={index}>{stat}</li>
        ))}
      </ul>
    </aside>
  );
};

export default Sidebar;
