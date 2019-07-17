import React from "react";

import Checkbox from "components/Checkbox";

const Task = ({ title, locked, completed, id, onChange }) => {
  return (
    <div>
      {locked ? (
        <img src="" alt="locked symbol" />
      ) : (
        <Checkbox
          checked={completed ? true : false}
          id={id}
          onChange={onChange}
        />
      )}{" "}
      {title}
    </div>
  );
};

export default Task;
