import React from "react";

import Checkbox from "components/Checkbox";
import "style/Task.css";

const Task = ({ title, locked, completed, id, onChange }) => {
  const titleClass = locked ? "task-locked" : completed ? "task-completed" : "";
  return (
    <div className="task-item">
      {locked ? (
        <div className="task-icon">
          <img
            src={`${process.env.PUBLIC_URL}/locked.svg`}
            alt="locked symbol"
          />
        </div>
      ) : (
        <div className="task-icon">
          <Checkbox
            checked={completed ? true : false}
            id={id}
            onChange={onChange}
          />
        </div>
      )}{" "}
      <div className={titleClass}>{title}</div>
    </div>
  );
};

export default Task;
