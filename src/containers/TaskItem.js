import React from "react";

import "style/TaskItem.css";

const lockedSymbol = () => <img src="/locked.svg" alt="locked symbol" />;

const openSymbol = (completed, onClick) => {
  if (completed)
    return (
      <img src="/completed.svg" alt="completed checkbox" onClick={onClick} />
    );

  return (
    <img src="/incomplete.svg" alt="completed checkbox" onClick={onClick} />
  );
};

const TaskItem = ({ title, onClick, locked, completed }) => {
  const cssClass = locked
    ? "task-locked"
    : completed
    ? "task-completed"
    : "task-incomplete";
  return (
    <div className={`one-task ${cssClass}`}>
      <div className="icon">
        {locked ? lockedSymbol() : openSymbol(completed, onClick)}
      </div>
      <div>{title}</div>
    </div>
  );
};

export default TaskItem;
