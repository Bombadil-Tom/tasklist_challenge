import React from "react";

const Task = ({ title, locked, completed, id }) => {
  const lock = locked ? "Locked" : "Open";
  const done = completed ? "completed" : "notCompleted";
  return (
    <div>
      {lock} {title} {done}
    </div>
  );
};

export default Task;
