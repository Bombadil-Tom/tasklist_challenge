import React, { Component } from "react";

import Group from "containers/Group";
import Heading from "components/Heading";

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

  onClick(name) {
    this.props.showDetail(name);
  }

  renderGroups() {
    const sortedData = this.sortData();

    const groups = [];

    for (let key in sortedData) {
      groups.push(
        <Group
          tasks={sortedData[key]}
          key={key}
          title={key}
          onClick={this.onClick.bind(this, key)}
        />
      );
    }

    return groups;
  }

  render() {
    return (
      <div>
        <div className="heading">
          <Heading text="Things To Do" />
        </div>
        <div>{this.renderGroups()}</div>
      </div>
    );
  }
}

export default GroupList;
