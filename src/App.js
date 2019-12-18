import React from 'react';
import TodoForm from './Todoform';
import TodoList from './TodoList';
import Todoheader from './Todoheader';
import Container from '@material-ui/core/Container';

import './App.css';
 

class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      todos : [
        {
          id:1,
          title:"learn react",
          completed:false
        },
        {
          id:2,
          title:"learn .net",
          completed:true
        },
        {
          id:3,
          title:"learn crm",
          completed:false
        }
      ]
    }
  }
  
  markCompleted = (id) => {
    this.setState({
      todos : this.state.todos.map(todo => 
        {
          if(todo.id === id){
            todo.completed = !todo.completed;

          }
          return todo;
        })
    });
  
  }

  delTodo = (id) => {
    this.setState({
      todos : [...this.state.todos.filter(todo => 
        todo.id !== id)]
    });
  }


  addTodo = (title) =>{
  const newtodo = new newTodo(Math.floor(Math.random() * 100),title);
 this.setState({
   todos : [...this.state.todos , newtodo]
 });
  
  }
  
 render (){
   return(
    <Container fixed>
   <div class="App">
     <center>
       <Todoheader/>
    <TodoForm addTodo = {this.addTodo}/>
    <TodoList todos={this.state.todos} markCompleted = {this.markCompleted} delTodo = {this.delTodo}/>
    </center>
   </div>
   </Container>
    );
   }
}

class newTodo{
  constructor(id,title,completed=false){
    this.id=id
    this.title = title
    this.completed = completed
  }
}


export default App;
