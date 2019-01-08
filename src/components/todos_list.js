import React, { Component } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import Like from "../img/like.png";
import DisLike from "../img/dislike.png";

const Todo = ({
  todo: {
    todo_description,
    todo_responsible,
    todo_priority,
    todo_completed,
    _id
  }
}) => {
  return (
    <tr>
      <td>{todo_description}</td>
      <td>{todo_responsible}</td>
      <td>{todo_priority}</td>
      <td>
        {todo_completed === true ? (
          <img src={Like} width="20" height="20" alt="done" />
        ) : (
          <img src={DisLike} width="20" height="20" alt="not done yet" />
        )}
      </td>
      <td>
        <Link to={`/edit/${_id}`}>Edit</Link>
      </td>
    </tr>
  );
};

export default class TodosList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: []
    };
  }

  componentDidMount = () => {
    axios
      .get("http://localhost:4000/todos")
      .then(({ data }) => this.setState({ todos: data }))
      .catch(err => console.log(err));
  };

  todoList = () => {
    return this.state.todos.map((currentTodo, i) => {
      return <Todo todo={currentTodo} key={i} />;
    });
  };

  render = () => {
    return (
      <div>
        <h3>Todos List</h3>
        <table className="table table-striped" style={{ marginTop: 20 }}>
          <thead>
            <tr>
              <th>Description</th>
              <th>Responsible</th>
              <th>Priority</th>
              <th>Done/Not Done</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>{this.todoList()}</tbody>
        </table>
      </div>
    );
  };
}
