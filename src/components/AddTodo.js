import React, { Component } from 'react'

export class AddTodo extends Component {

    state = {
        title: ""
    };

    onSubmit = e => {
        e.preventDefault();
        this.props.AddTodo(this.state.title);
        this.setState({title:""});
    };

    onChange = e => {
        // this.setState({title: e.target.value});
        this.setState({ [e.target.name]: e.target.value });
        // make sure input name, sample below "title" is the same state propetry in App.js
    };

  render() {
    return (
      <div>
        <form onSubmit={this.onSubmit} style={{ display: "flex"}}>
            <input
                type="text"
                name="title"
                placeholder='Add new todo task..'
                onChange={this.onChange}
                style={{ flex: '10', padding: '5px' }}
                value={this.state.title}
            />
            <input type='submit' value='Submit' className='btn' />
        </form>
      </div>
    )
  }
}

export default AddTodo
