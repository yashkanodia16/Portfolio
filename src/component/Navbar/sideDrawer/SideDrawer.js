import React from "react";
import "./SideDrawer.css";

const SideDrawer = (props) => {
  let drawerClasses = "side-drawer";
  if (props.show) {
    drawerClasses = "side-drawer open";
  }

  return (
    <nav className={drawerClasses}>
      <ul>
        <li>
          <a href="/">Resume</a>
        </li>
        <li>
          <a href="/">About</a>
        </li>
        <li>
          <a href="/">Experience</a>
        </li>
        <li>
          <a href="/">Projects</a>
        </li>
        <li>
          <a href="/">Education</a>
        </li>
        <li>
          <a href="/">Skills</a>
        </li>
        <li>
          <a href="/">Contact</a>
        </li>
      </ul>
    </nav>
  );
};

export default SideDrawer;
