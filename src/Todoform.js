import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Container from '@material-ui/core/Container';
import Button from '@material-ui/core/Button';
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';

class Todoform extends React.Component{

    state = {
        title :''
    }

    //fetching input value
    onChange = (e) => {
       this.setState({title : e.target.value});

    }

    //on submit calling addtodo 
    onSubmit = (e) => {
        e.preventDefault();
        this.props.addTodo(this.state.title);
        this.setState({title : ""});
    }
    render(){
        return (
            <Container fixed>

            <form onSubmit = {this.onSubmit} style={{margin : '20px'}}>

                <TextField id="standard-basic" label="Add Todo"
                value = {this.state.title}
                onChange={this.onChange}
               />
               
              <Fab color="primary" aria-label="add" type="submit">
                 <AddIcon  />
             </Fab>
               
            </form>
            </Container>
        )
    }
}
export default Todoform;