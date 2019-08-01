import React from "react";

import DataContext from "contexts/DataContext";
import "style/Groups.css";

const Groups = () => {
  const renderGroups = values => {
    const { data, changeDetailView, detailView } = values;

    if (detailView || data.length === 0) return <div />;

    const groups = Object.keys(data);

    return groups.map((group, idx) => {
      const completedTasks = data[group].filter(
        task => task.completedAt !== null
      );

      return (
        <div
          key={idx}
          onClick={() => changeDetailView(group)}
          style={{ display: "flex" }}
          className="groups"
        >
          <div className="icon">
            <img src="/group.svg" alt="Group symbol" />
          </div>
          <div>
            <div>{group}</div>
            <div className="group-status">{`${completedTasks.length} of ${
              data[group].length
            } tasks`}</div>
          </div>
        </div>
      );
    });
  };
  return (
    <DataContext.Consumer>
      {values => renderGroups(values)}
    </DataContext.Consumer>
  );
};

export default Groups;
