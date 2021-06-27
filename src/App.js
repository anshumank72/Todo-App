import React, { Component } from "react";
import classes from "./App.css";
import ListItems from "./ListItems/ListItems";

class App extends Component {
  state = {
    items: [],
    currentItem: {
      text: "",
      key: "",
    },
    checked: false,
  };
  handleInput = (e) => {
    this.setState({
      currentItem: {
        text: e.target.value,
        key: Date.now(),
      },
    });
  };
  addItem = (e) => {
    e.preventDefault();
    const newItem = this.state.currentItem;
    console.log(newItem);
    if (newItem.text !== "") {
      const newItems = [...this.state.items, newItem];
      // const newItems = this.state.items.concat(newItem);
      console.log(newItems);

      this.setState({
        items: newItems,
        currentItem: {
          text: "",
          key: "",
        },
      });
    }
  };

  deleteItem = (key) => {
    const filteredItems = this.state.items.filter((item) => item.key !== key);

    this.setState({ items: filteredItems });
  };

  setUpdate = (text, key) => {
    const items = this.state.items;
    items.map((item) => {
      if (item.key === key) {
        item.text = text;
      }
    });
    this.setState({
      items: items,
    });
  };

  render() {
    // console.log(this.state.completeItem, "val");
    return (
      <div className={classes.App}>
        <header>
          <form className={classes.toDoForm} onSubmit={this.addItem}>
            <input
              type="text"
              placeholder="Add a to-do..."
              value={this.state.currentItem.text}
              onChange={this.handleInput}
            />

            <button type="submit">Add</button>
          </form>
        </header>
        <ListItems
          items={this.state.items}
          deleteItem={this.deleteItem}
          setUpdate={this.setUpdate}
        />
      </div>
    );
  }
}

export default App;
