import React from "react";

import DataContext from "contexts/DataContext";
import "style/Button.css";
import "style/Heading.css";

const renderHeading = ({ detailView, changeDetailView }) => {
  if (!detailView) return <div className="heading">Things to do</div>;

  return (
    <div className="heading">
      {detailView}{" "}
      <button className="back-btn" onClick={() => changeDetailView("")}>
        All Groups
      </button>
    </div>
  );
};

const Heading = () => (
  <DataContext.Consumer>{values => renderHeading(values)}</DataContext.Consumer>
);

export default Heading;
