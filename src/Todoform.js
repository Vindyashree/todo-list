import React from 'react';
class Todoform extends React.Component{
    state = {
        title :''
    }
    onChange = (e) => {
       this.setState({title : e.target.value});

    }
    onSubmit = (e) => {
        e.preventDefault();
        this.props.addTodo(this.state.title);
        this.setState({title : ""});
    }
    render(){
        return (
            <form onSubmit = {this.onSubmit}>
                <input type = "text" placeholder = "AddToDo"
                value = {this.state.title}
                onChange={this.onChange}
                class = "inputtext"/>
                <input class = " submitbtn" type = "submit" />
            </form>
        )
    }
}
export default Todoform;