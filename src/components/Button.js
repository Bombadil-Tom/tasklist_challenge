import React from "react";
import "style/Button.css";

const Button = ({ title, onClick, className }) => (
  <button onClick={onClick} className={className}>
    {title}
  </button>
);

export default Button;
