import React, { Component } from "react";

import Group from "containers/Group";

class GroupList extends Component {
  sortData() {
    const { data } = this.props;
    const groups = {};
    data.forEach(tasks => {
      const { group } = tasks;

      if (groups.hasOwnProperty(group)) groups[group].push(tasks);
      else groups[group] = [tasks];
    });

    return groups;
  }

  renderGroups() {
    const sortedData = this.sortData();

    const groups = [];

    for (let key in sortedData) {
      groups.push(<Group tasks={sortedData[key]} key={key} title={key} />);
    }

    return groups;
  }

  render() {
    return (
      <div>
        Things To Do
        <div>{this.renderGroups()}</div>
      </div>
    );
  }
}

export default GroupList;
