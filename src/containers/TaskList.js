import React from "react";
import "style/App.css";
import { DataStore } from "contexts/DataContext";
import Tasks from "containers/Tasks";
import Groups from "containers/Groups";
import Heading from "containers/Heading";

const TaskList = Component => (
  <DataStore>
    <div className="task-list">
      <Heading />
      <Tasks />
      <Groups />
    </div>
  </DataStore>
);

export default TaskList;
