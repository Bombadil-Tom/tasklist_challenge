import React, { Component } from "react";

const Context = React.createContext([]);

export class DataStore extends Component {
  state = { data: [], detailView: "" };

  componentDidMount() {
    fetch("/data.json")
      .then(response => response.json())
      .then(data => this.sortData(data));
  }

  sortData(data) {
    const groups = {};
    data.forEach(tasks => {
      const { group } = tasks;

      if (groups.hasOwnProperty(group)) groups[group].push(tasks);
      else groups[group] = [tasks];
    });

    this.setState({ data: groups });
  }

  onDetailViewChange(detailView) {
    this.setState({ detailView });
  }

  onChangeTaskState(id) {
    const { detailView, data } = this.state;
    const selectedData = data[detailView];

    const newData = selectedData.map(task => {
      if (task.id === parseInt(id, 10)) {
        const newState = !task.completedAt ? new Date() : null;
        return { ...task, completedAt: newState };
      } else return task;
    });

    const newState = Object.assign(data, { [detailView]: newData });
    this.setState(newState);
  }

  filterTasksByGroup(groupName) {
    const { data } = this.state;
    return data.filter(task => task.group === groupName);
  }

  render() {
    return (
      <Context.Provider
        value={{
          ...this.state,
          changeTaskState: this.onChangeTaskState.bind(this),
          filterTasksByGroup: this.filterTasksByGroup.bind(this),
          changeDetailView: this.onDetailViewChange.bind(this)
        }}
      >
        {this.props.children}
      </Context.Provider>
    );
  }
}

export default Context;
