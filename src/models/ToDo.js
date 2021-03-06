import $ from 'jquery-ajax';

class ToDoModel {
	static all() {
		let request = $.ajax({
			url: 'https://super-crud.herokuapp.com/todos',
			method: 'GET'
		});
		return request;
	}

	static create(todo) {
		let request = $.ajax({
   		 url: "https://super-crud.herokuapp.com/todos",
   		 method: 'POST',
   		 data: todo
		});
		return request;
	}

	static delete(todo) {
		let request = $.ajax({
			url: `https://super-crud.herokuapp.com/todos/${todo._id}`,
			method: 'DELETE'
		});
		return request;
	}

	static update(editedTodo, id) {
		let request = $.ajax({
			url: `https://super-crud.herokuapp.com/todos/${id}`,
			method: 'PUT',
			data: {
				body: editedTodo
			}
		});
		return request;
	}
}

export default ToDoModel;

