import React, {Component} from 'react';
import ToDo from './ToDo';

class TodoList extends Component {
  render(){
    let todoArray = this.props.todos.map( (todo) => {
      return (
        <ToDo
          key={todo._id}
          todo={todo}
          onUpdateTodo={this.props.onUpdateTodo}
          onDeleteTodo={this.props.onDeleteTodo}/>
      )
    })
    return(
      <div className="todos">
        {todoArray}
      </div>
    )
  }
}

export default TodoList