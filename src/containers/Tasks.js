import React from "react";

import DataContext from "contexts/DataContext";
import TaskItem from "containers/TaskItem";

const isLocked = (dependencyIds, data) => {
  if (!dependencyIds.length) return false;

  const results = [];
  dependencyIds.forEach(id => {
    const dependentTask = data.filter(task => task.id === id);
    results.push(...dependentTask);
  });

  return results.some(task => task.completedAt === null);
};

const Tasks = () => {
  const renderTasks = values => {
    const { detailView, data, changeTaskState } = values;

    if (!detailView) return <div />;

    if (data.length === 0) return <div />;

    return data[detailView].map((task, idx) => {
      const locked = isLocked(task.dependencyIds, data[detailView]);
      return (
        <TaskItem
          key={idx}
          title={task.task}
          locked={locked}
          onClick={() => changeTaskState(task.id)}
          completed={task.completedAt}
        />
      );
    });
  };

  return (
    <DataContext.Consumer>{values => renderTasks(values)}</DataContext.Consumer>
  );
};

export default Tasks;
