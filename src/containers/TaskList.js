import React, { Component } from "react";

class TaskList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      detail: false
    };
  }

  componentDidMount() {
    fetch(`/data.json`)
      .then(response => response.json())
      .then(data => this.setState({ data }));
  }
  render() {
    console.log(this.state);
    return <div />;
  }
}

export default TaskList;
