import React from "react";

type NavBarProps = {
  habitCount: number;
};

export const NavBar: React.FC<NavBarProps> = ({ habitCount }) => {
  return (
    <div className="navbar">
      <i className="title-icon fa-solid fa-leaf"></i>
      <span className="title">Habit Tracker</span>
      <span className="navbar-count">{habitCount}</span>
    </div>
  );
};
