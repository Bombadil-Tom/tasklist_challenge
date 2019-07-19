import React, { Component } from "react";
import "style/App.css";
import TaskList from "containers/TaskList";

export default class App extends Component {
  render() {
    return <TaskList />;
  }
}
