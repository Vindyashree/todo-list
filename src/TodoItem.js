import React from 'react';
import { withTheme } from '@material-ui/core';
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';




class TodoItem extends React.Component{
    //cancel the todo if completed is true
    getstyle = () =>{
        return {
           
            textDecoration : this.props.completed ? 'line-through':'none',
           
        }
    }
  
  
    render(){
        return (
            
         <div style = {this.getstyle() } class="Item">
               
            <input type = 'checkbox' checked= {this.props.completed} 
            onChange = {this.props.markCompleted.bind
                    (this,this.props.id)}
                    />
               <span> {this.props.title}</span> 
             <IconButton aria-label="delete" onClick ={this.props.delTodo.bind
                    (this,this.props.id)}  class = "btnstyle">
                 <DeleteIcon />
             </IconButton>
                    
        </div>
        );
    }
}


export default TodoItem;