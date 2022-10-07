import React, {Component} from 'react';

import Todos from './components/Todos';

import Header from './components/layout/Header';

import AddTodo from './components/AddTodo';

import './App.css';

import axios from 'axios';

//import {v4 as uuid} from "uuid"; 


class App extends Component{

  state ={
    todos: []
  }

  componentDidMount(){
    axios.get('https://jsonplaceholder.typicode.com/todos?_limit=10').then(res=> this.setState({todos: res.data}));
  }

  //Mark complete

  markComplete = (id) => {
    this.setState({todos: this.state.todos.map(todo => {
      if(todo.id === id){
        todo.completed = !todo.completed;
      }
      return todo;
    })})
  }

  //Delete

  delTodo = (id) => {
    axios.delete('https://jsonplaceholder.typicode.com/todos/${id}').then(res => this.setState({
      todos: [...this.state.todos.filter(todo => todo.id !== id)]
    }));
    
  }

  //Add

  addTodo = (title) => {
    /*const newTodo = {
      id: uuid(),
      title, //title: title
      completed: false
    };
    this.setState({todos: [...this.state.todos, newTodo]})
    */
    axios.post('https://jsonplaceholder.typicode.com/todos', {
      title,
      completed: false
    }

    ).then(res=> this.setState({todos: [...this.state.todos, res.data]}))

 
    
  }
   
  render(){
console.log(this.state.todos)
    return(

        <div className='App'>
          <Header />
          <AddTodo addTodo={this.addTodo} />
          <Todos todos = {this.state.todos} markComplete={this.markComplete} delTodo={this.delTodo} />
         
        </div>
    )
  }
}

export default App;
