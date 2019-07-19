import React from "react";

const iconURL = `${process.env.PUBLIC_URL}/`;

const Checkbox = ({ checked, onChange, id }) => (
  <img
    src={checked ? `${iconURL}completed.svg` : `${iconURL}incomplete.svg`}
    checked={checked}
    onClick={onChange}
    id={id}
    alt={checked ? "Completed Symbol" : "Incomplete Symbol"}
  />
);

export default Checkbox;
