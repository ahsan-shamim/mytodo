import React, { Component } from 'react';
import styles from './App.css';
import Cockpit from '../components/Cockpit/Cockpit';
import Todos from '../components/Todos/Todos';

class App extends Component {
  // state
  state = {
    todos:[],
    checkedClass:false
  }

  // handler functions
  todolistHandler = (e) => {
    e.preventDefault();
    const todos = [...this.state.todos]
    let todo = e.target.addTodo.value;
    todos.push(todo);
    this.setState({
      todos
    })
  }

  checkHandle = (e)=> {
    if(e.target.checked) {
      this.setState(prevState=>({
        checkedClass: !prevState.checkedClass
      }))
    }else {
      this.setState(prevState=>({
        checkedClass: !prevState.checkedClass
      }))
    }
  }

  deleteItemHandler = (todoIndex) => {
    let todos = [...this.state.todos]
    todos.splice(todoIndex,1);
    this.setState({
      todos:todos
    })
  }


  render() {
    let todos = [...this.state.todos];
    return (
      <div className={styles.App}>
        <Cockpit 
          submit= {this.todolistHandler}
        />
        <Todos
          todos={todos}
          checkHandle = {this.checkHandle}
          checkState = {this.state.checkedClass}
          deleteItem={this.deleteItemHandler}
        />
      </div>
    );
  }
}

export default App;
