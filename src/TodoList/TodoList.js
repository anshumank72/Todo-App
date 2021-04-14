import React from "react";
import Todo from "../Todo/Todo";

const toDoList = (props) => {
  const todolist = props.lists.map((list) => {
    return (
      <Todo
        key={list.id}
        task={list.task}
        index={list.id}
        onDelete={props.onDelete}
      />
    );
  });
  return <div className="TodoList">{todolist}</div>;
};
export default toDoList;
