import React, {Component} from 'react';
import { BrowserRouter as Router, Route} from 'react-router-dom';
import Header from './components/layout/header';
import Todos from "./components/Todos";
import AddTodo from './components/AddTodo';
import About from './components/pages/About'
import {v4 as uuid} from 'uuid';
import './App.css';

class App extends Component {

  state = {

    todos: [
      {
        id: uuid(),
        title: "Watch PinoyFreeCoder Channel.",
        completed: false
      },
      {
        id: uuid(),
        title: "Practice coding.",
        completed: false
      },
      {
        id: uuid(),
        title: "Create ReactJS application.",
        completed: false
      }
    ]
  };

  //Mark Complete

  markComplete = id => {
    this.setState({
      todos: this.state.todos.map(todo => {
        if ( todo.id === id) {
          todo.completed = !todo.completed;
        }
        return todo;
      })
    });
  };

  delTodo = id => {
    this.setState({
      todos: [...this.state.todos.filter(todo => todo.id !== id)]
    });
  };

  AddTodo = title => {
    const newTodo = {
      id: uuid(),
      title,
      completed:false
    };
    this.setState({ todos: [...this.state.todos, newTodo] });
  }


  render() {

    return (
          <Router>
      {/* this is a component */}
      <div className='App'>
        <Header/>
        {/* AddTodo method is passed through here */}
        <AddTodo AddTodo={this.AddTodo}/> 
        <Todos todos={this.state.todos}
         markComplete={this.markComplete}
         delTodo={this.delTodo}/>
      </div>
      </Router>
    );
  }
}

export default App;
