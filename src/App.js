import React from 'react';
import TodoForm from './Todoform';
import TodoList from './TodoList';
import Todoheader from './Todoheader';
import Container from '@material-ui/core/Container';

import './App.css';
 

class App extends React.Component {
  constructor(props){
    super(props);

    //todos containing pre defined todos
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
  

  //change completed state based on check event 
  
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

  //delete todo object on click of delete button
  delTodo = (id) => {
    this.setState({
      todos : [...this.state.todos.filter(todo => 
        todo.id !== id)]
    });
  }



  //add todo item to todos from form 
  addTodo = (title) =>{
  const newtodo = new newTodo(Math.floor(Math.random() * 100),title);
  if(newtodo.title.trim()!==""){
    this.setState({
   todos : [...this.state.todos , newtodo]
 });
  }
  
  
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


//class to create todo object
class newTodo{
  constructor(id,title,completed=false){
    this.id=id
    this.title = title
    this.completed = completed
  }
}


export default App;
