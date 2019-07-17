import React from "react";

const Checkbox = ({ checked, onChange, id }) => (
  <input type="checkbox" checked={checked} onChange={onChange} id={id} />
);

export default Checkbox;
