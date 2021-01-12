import React from 'react';
import "./todo-form.css";

class TodoForm extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			inputValue: ""
		}
	}

	inputHandler(e) {
		this.setState({inputValue: e.target.value});
	}

	clearInput() {
		this.setState({inputValue: ""});
	}

	render() {

		const newTodo = this.state.inputValue;

		return (
			<div className="todo-form">
				<input onChange={this.inputHandler.bind(this)} type="text" value={this.state.inputValue} placeholder="new todo..." />
				<button onClick={() => {
					this.props.addTodo(newTodo);
					this.clearInput();
				}} className="btn">Add todo</button>
			</div>
		)
	}
}

export default TodoForm