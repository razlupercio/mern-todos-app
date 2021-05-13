import React, { Component } from 'react';
import axios from 'axios';
import TodoTableRow from './todoTableRow';

export default class TodosList extends Component {

_isMounted = false;

  constructor(props) {
    super(props);
    this.state = {todos: []};
  }

  componentDidMount() {
    this._isMounted = true;

    axios.get('http://localhost:4000/todos/')
      .then(response => {
        if (this._isMounted) {
          this.setState({ todos: response.data });
        }
      })
      .catch(function (error){
        console.log(error);
      })
  }

  componentDidMount() {
    this._isMounted = true
  }

  componentWillUnmount(){
      this._isMounted = false;
    }

  componentDidUpdate() {
    axios.get('http://localhost:4000/todos/')
      .then(response => {
        if(this._isMounted) {
        this.setState({ todos: response.data });
        }
      })
      .catch(function (error){
        console.log(error);
      })
  }

  todoList() {
    return this.state.todos.map(function (currentTodo, i){
      return <TodoTableRow todo={currentTodo} key={i} />;
    })
  }

  render() {
      return (
          <div>
            <h3>Todos List</h3>
            <table className="table table-striped" style={{ marginTop: 20 }} >
              <thead>
                <tr>
                  <th>Description</th>
                  <th>Responsible</th>
                  <th>Priority</th>
                  <th>Actions</th>
                  <th></th>
                </tr>
              </thead>
              <tbody>
                { this.todoList() }
              </tbody>
            </table>
          </div>
      )
  }
}
