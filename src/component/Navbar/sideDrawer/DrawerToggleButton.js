import React from "react";
import "./DrawerToggleButton.css";

const DrawerToggleButton = (props) => (
  <div className="toggleBar">
    <button className="toggle-button" onClick={props.click}>
      <div className="toggle-button__line"></div>
      <div className="toggle-button__line"></div>
      <div className="toggle-button__line"></div>
    </button>
  </div>
);

export default DrawerToggleButton;
