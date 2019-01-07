import React, { Component } from "react";

export default class CreateTodo extends Component {
  constructor(props) {
    super(props);

    this.state = {
      todo_description: "",
      todo_responsible: "",
      todo_priority: "",
      todo_completed: false
    };
    this.onChangeTodoDescription = this.onChangeTodoDescription.bind(this);
    this.onChangeTodoResponsible = this.onChangeTodoResponsible.bind(this);
    this.onChangeTodoPriority = this.onChangeTodoPriority.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }
  onChangeTodoDescription = e => {
    this.setState({
      todo_description: e.target.value
    });
  };

  onChangeTodoResponsible = e => {
    this.setState({
      todo_responsible: e.target.value
    });
  };

  onChangeTodoPriority = e => {
    this.setState({
      todo_priority: e.target.value
    });
  };

  onSubmit(e) {
    e.preventDefault();

    console.log(`form submoted`);
    console.log(`Descriction ${this.state.todo_description}`);
    console.log(`Responsible ${this.state.todo_responsible}`);
    console.log(`Priority ${this.state.todo_priority}`);
    console.log(`Completed ${this.state.todo_completed}`);

    this.setState({
      todo_description: "",
      todo_responsible: "",
      todo_priority: "",
      todo_completed: false
    });
  }

  render = () => {
    return (
      <div style={{ marginTop: 20 }}>
        <h3>Create New Todo</h3>
        <form onSubmit={this.onSubmit}>
          <div className="form-group">
            <label htmlFor="">Description:</label>
            <input
              type="text"
              className="form-control"
              value={this.state.todo_description}
              onChange={this.onChangeTodoDescription}
            />
          </div>
        </form>
      </div>
    );
  };
}
