import React from "react";
import "./TaskIndicator.css";

const taskIndicator = (props) => {
  return (
    <div className="taskIndicator">
      <h3>You have {props.number} tasks</h3>
    </div>
  );
};
export default taskIndicator;
