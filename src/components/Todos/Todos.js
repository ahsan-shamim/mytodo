import React from 'react';
import Todo from './Todo/Todo';


const Todos = props => props.todos.map((todo,index) => {
  return <Todo
    task= {todo}
    index = {index}
    key={props.todos.indexOf(todo)}
    checkHandle={props.checkHandle}
    checkState={props.checkState}
    deleteItem={props.deleteItem}
  />
})

export default Todos;