import React from 'react';
import { v4 as uuidv4 } from 'uuid';
import TodoForm from '../todo-form/todo-form';
import TodoList from '../todo-list/todo-list';
import "./app.css";

class App extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			todos: [{id: 1, text: 'Hello World'}, {id: 2, text: 'Space Defenders'}, {id: 3, text: 'Acuna Matata'}]
		}
	}

	addTodo(newTodo) {
		if(!newTodo) {
			alert('Fill todo input please!');
			return
		}

		const currentTodos = this.state.todos;
		const id = uuidv4();
		currentTodos.push({id, text: newTodo});
		this.setState({todos: currentTodos});
	}

	editTodo(id) {
		const editedTodoList = this.state.todos.map((todo) => {
			if(todo.id === id) {
				const newText = prompt('Add new text', todo.text);
				
				if(newText === null) return todo

				newText ? todo.text = newText : todo.text = "Empty"
			}
			return todo
		});

		this.setState({todos: editedTodoList});
	}

	removeTodo(id) {
		const newTodoList = this.state.todos.filter(todo => todo.id !== id);
		this.setState({todos: newTodoList});
	}

	render() {
		return (
			<div className="todo-app">
				<h1>Todo App</h1>
				<TodoForm addTodo={this.addTodo.bind(this)} />
				<TodoList todos={this.state.todos} editTodo={this.editTodo.bind(this)} removeTodo={this.removeTodo.bind(this)} />
			</div>
		)
	}
}

export default App