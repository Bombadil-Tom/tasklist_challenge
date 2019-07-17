import React from "react";

import Checkbox from "components/Checkbox";

const Task = ({ title, locked, completed, id }) => {
  return (
    <div>
      {locked ? (
        <img src="" alt="locked symbol" />
      ) : (
        <Checkbox checked={completed ? true : false} id={id} />
      )}{" "}
      {title}
    </div>
  );
};

export default Task;
