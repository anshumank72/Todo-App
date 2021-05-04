import React from "react";
import classes from "./ListItems.css";

function TodoList(props) {
  const items = props.items;
  const ListItems = items.map((item) => {
    return (
      <div className={classes.list} key={item.key}>
        <p>
          <input
            type="text"
            id={item.key}
            value={item.text}
            onChange={(e) => {
              props.setUpdate(e.target.value, item.key);
            }}
          />
          <span>
            <button onClick={() => props.deleteItem(item.key)}>Delete</button>
          </span>
        </p>
      </div>
    );
  });
  return <div>{ListItems}</div>;
}

export default TodoList;
