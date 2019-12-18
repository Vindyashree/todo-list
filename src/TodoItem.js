import React from 'react';
class TodoItem extends React.Component{
    getstyle = () =>{
        return {
            backgroundColor : 'blue',
            padding : '20px',
            textDecoration : this.props.completed ? 'line-through':'none',
            width : '50%',
            border: "2px solid black",
            marginTop:"20px"
        }
    }
  
  
    render(){
        return (
            <center><div style = {this.getstyle() } class="Item">
               
            <input type = 'checkbox' checked= {this.props.completed} onChange = {this.props.markCompleted.bind
                    (this,this.props.id)}/>
               <span> {this.props.title}</span> 
             
                <button onClick = {this.props.delTodo.bind
                    (this,this.props.id)} style = {btnstyle}>x</button>
            </div></center>
        );
    }
}
const btnstyle = {
    backgroundColor : 'red',
    padding : '5px 10px',
    borderRadius : '50%',
    float : 'right'
}

export default TodoItem;