import React from "react";

import "style/Group.css";

const completedTasks = tasks => tasks.filter(task => task.completedAt).length;

const Group = ({ tasks, title, onClick }) => {
  return (
    <div onClick={onClick} name={title} className="group">
      <div className="group-icon">
        <img src={`${process.env.PUBLIC_URL}/group.svg`} alt="group symbol" />
      </div>
      <div>
        <div>{title}</div>
        <div className="group-status">
          {completedTasks(tasks)} of {tasks.length} tasks completed
        </div>
      </div>
    </div>
  );
};

export default Group;
