import React, { Component } from "react";

import GroupList from "containers/GroupList";

class TaskList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      detail: false
    };
    this.showDetail = this.showDetail.bind(this);
    this.hideDetail = this.hideDetail.bind(this);
  }

  componentDidMount() {
    fetch("/data.json")
      .then(response => response.json())
      .then(data => this.setState({ data }));
  }

  showDetail(name) {
    this.setState({ detail: name });
  }

  hideDetail() {
    this.setState({ detail: false });
  }

  render() {
    const { detail, data } = this.state;
    return (
      <div>
        {!detail && <GroupList data={data} showDetail={this.showDetail} />}
        {detail && (
          <div>
            {detail} <button onClick={this.hideDetail}>ALL GROUPS</button>
          </div>
        )}
      </div>
    );
  }
}

export default TaskList;
