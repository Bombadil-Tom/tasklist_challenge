import React from "react";

const completedTasks = tasks => tasks.filter(task => task.completedAt).length;

const Group = ({ tasks, title, onClick }) => {
  return (
    <div onClick={onClick} name={title}>
      <div>{title}</div>
      <div>
        {completedTasks(tasks)} of {tasks.length} tasks completed
      </div>
    </div>
  );
};

export default Group;
