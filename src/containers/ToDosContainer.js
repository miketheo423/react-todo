import React, {Component} from 'react';
import ToDoModel from '../models/ToDo';
import ToDoList from '../components/ToDoList';
import CreateToDoForm from '../components/CreateToDoForm';

class ToDosContainer extends Component {
	constructor() {
		super();
		this.state = {
			todos: []
		};
	}
	componentDidMount() {
		this.fetchData();
	}
	fetchData() {
		ToDoModel.all().then( (res) => {
			this.setState({
				todos: res.todos
			});
		});
	}
	createToDo(newBody) {
		let newTodo = {
			body: newBody,
			completed: false
		};
		ToDoModel.create(newTodo).then((res) => {
			console.log('created todo', res);
			let todos = this.state.todos;
			let newTodos = todos.push(res);
			this.setState({newTodos});
		});
	}
	deleteTodo(todo) {
		console.log('deleting todo', todo);
		ToDoModel.delete(todo).then((res) => {
			let todos = this.state.todos.filter((todo) =>{
				return todo._id !== res._id;
			});
			this.setState({todos});
		});
	}
	updateTodo(updatedTodo, id) {
		console.log('updating todo', updatedTodo);
		ToDoModel.update(updatedTodo, id).then((res) => {
			let targetTodo = this.state.todos.find((item) => {
				return item._id === id;
			});
			targetTodo.body = res.body;
		});
	}
	
	render() {
		return(
			<div className='todosContainer'>
        <CreateToDoForm 
        createToDo={this.createToDo.bind(this)}/>
        <ToDoList 
        todos={this.state.todos}
        onUpdateTodo={this.updateTodo.bind(this)}
        onDeleteTodo={this.deleteTodo.bind(this)} />
      </div>
		)
	}
}

export default ToDosContainer