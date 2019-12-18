import React from 'react';
import TodoItem from './TodoItem';
class TodoList extends React.Component{
  
    render(){
        return this.props.todos.map((todo) => (
        <TodoItem id = {todo.id} title = {todo.title} completed = {todo.completed}
        markCompleted = {this.props.markCompleted} 
        delTodo = {this.props.delTodo}/>
        ));
    }
}
export default TodoList;