import React, { Component } from "react";
import "./App.css";
import TaskIndicator from "./TaskIndicator/TaskIndicator";
import TodoList from "./TodoList/TodoList";
import InputForm from "./InputForm/InputForm";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      lists: [{ task: "", id: "" }],
      input: "",
    };
  }
  changeHandler = (e) => {
    this.setState({ input: e.target.value });
  };

  submitHandler = (e) => {
    let list;
    e.preventDefault();
    if (this.state.input === "") {
      return;
    } else {
      list = { task: this.state.input, id: this.state.lists.length + 1 };
    }
    this.setState({ lists: [...this.state.lists, list], index: "" });
    document.getElementById("myform").reset();
  };

  deleteHandler = (index) => {
    const filteredList = this.state.lists.filter((list) => {
      return list.id !== index;
    });
    this.setState({ lists: filteredList });
  };
  render() {
    return (
      <div className="App">
        <InputForm
          onChange={this.changeHandler}
          onSubmit={this.submitHandler}
        />
        <TodoList lists={this.state.lists} onDelete={this.deleteHandler} />
        <TaskIndicator number={this.state.lists.length} />
      </div>
    );
  }
}

export default App;
