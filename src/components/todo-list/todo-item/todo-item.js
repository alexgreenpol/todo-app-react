import React from 'react';
import "./todo-item.css";

const TodoItem = (props) => {
	return (
		<div className="todo-item">
			<div className="todo-item__text">{props.todoText}</div>
			<button className="btn btn--edit" onClick={() => {
				props.editTodo(props.todoId);
			}}>Edit</button>
			<button className="btn btn--remove" onClick={() => {
				props.removeTodo(props.todoId);
			}}>Remove</button>
		</div>
	)
}

export default TodoItem