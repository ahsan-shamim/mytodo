import React from 'react';
import styles from './Cockpit.css';


const Cockpit = props => {
  // Date
  const d = new Date();
  const months = ["January","February","March","April","May","June","July","August","September","October","November","December"];
  const weekDays = ["Saturday","Sunday","Monday","Tuesday","Wednesday","Thursday","Friday"];

  const date = d.getDate();
  const month = months[d.getMonth()];
  const weekDay = weekDays[d.getDay()];

  
  return (
    <div className={styles.Cockpit}>
      <div className={styles.Header}>
        <h1>Todos</h1>
        <h4>
          <span>{date}</span>
          <span>{month}</span>
          <span>{weekDay}</span>
        </h4>
      </div>
      <form action="#" onSubmit={(e)=>props.submit(e)}>
        <input type="text" name="addTodo" placeholder="Enter your task to do."/>
        <button>Add Task</button>
      </form>
    </div>
  );
}

export default Cockpit;