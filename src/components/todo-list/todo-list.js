import React from 'react';
import TodoItem from './todo-item/todo-item';
import "./todo-list.css";

const TodoList = (props) => {
	return (
		<div className="todo-list">
			{props.todos.map(todo => {
				return(
					<TodoItem
						key={todo.id} 
						todoId={todo.id} 
						todoText={todo.text} 
						editTodo={props.editTodo} 
						removeTodo={props.removeTodo} 
					/>
				)
			})}
		</div>
	)
}

export default TodoList