import React, {Component} from 'react';

class EditToDoForm extends Component {
	constructor() {
		super();
		this.state = {
			updatedToDoBody: ''
		};
	}
	onInputChange(event) {
		console.log('changing a todo!');
		this.setState({
			updatedToDoBody: event.target.value
		});
	}
	onFormSubmit(event) {
		console.log('submitted!');
		event.preventDefault();
		this.props.onUpdateTodo(this.state.updatedToDoBody, this.props.todo._id);
		this.setState({
			updatedToDoBody: ''
		});

	}
	render() {
		return(
			<div className='editToDoForm' data-todos-index={this.props.todo._id}>
				<form onSubmit={event => this.onFormSubmit(event)}>
					<input
						onChange={event => this.onInputChange(event)}
						placeholder='Write updated todo here...'
						type='text'
						value={this.state.updatedToDoBody} />
					<button type='submit'>Update Todo!</button>
				</form>
			</div>
		)
	}
}

export default EditToDoForm