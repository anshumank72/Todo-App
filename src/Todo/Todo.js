import React from "react";
import "./Todo.css";

const toDo = (props) => {
  return (
    <div className="todo">
      {props.task}
      <button onClick={() => props.onDelete(props.index)}>DELETE</button>
    </div>
  );
};
export default toDo;
