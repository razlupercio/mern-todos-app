import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { Button } from 'react-bootstrap';

export default class TodoTableRow extends Component {

    constructor(props) {
        super(props);
        this.deleteTodo = this.deleteTodo.bind(this);
    }

    deleteTodo() {
        axios.delete('http://localhost:4000/todos/delete/'+this.props.todo._id)
        .then(response => {
          console.log('Todo successfully deleted!')
        })
        .catch(function (error) {
          console.log(error);
        })
    }

    render() {
        return (
            <tr>
                <td className={this.props.todo.todo_completed ? 'completed' : ''}>{this.props.todo.todo_description}</td>
                <td className={this.props.todo.todo_completed ? 'completed' : ''}>{this.props.todo.todo_responsible}</td>
                <td className={this.props.todo.todo_completed ? 'completed' : ''}>{this.props.todo.todo_priority}</td>
                <td>
                    <Link to={"/edit/"+this.props.todo._id}>editar</Link>
                    -
                    <Button onClick={this.deleteTodo} size="sm" variant="danger">eliminar</Button>
                </td>
          </tr>
        );
    }
}
