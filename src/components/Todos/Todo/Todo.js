import React from 'react';
import styles from './Todo.css';


const Todo = props => {
  function addZero (i) {
    if(i<10){
      i = `0${i}`
    }
    return i;
  }
  const d = new Date();
  let hour = addZero(d.getHours());
  const minutes = addZero(d.getMinutes());
  const ampm = hour>=12?"PM":"AM";
  hour = hour % 12;

  let checkClass = [styles.Todo];
  if(props.checkState === true) {
    checkClass.push(styles.checked);
  }
  
  return (
    <div className={checkClass.join(" ")}>
      <div className={styles.left}>
        <input onChange={e=>props.checkHandle(e)} type="checkbox"/>
        <span>{props.task}</span>
      </div>
      <div className={styles.right}>
        <span className={styles.time}>{` ${hour}:${minutes} ${ampm}`}</span>
        <span className={styles.cross} onClick={()=>props.deleteItem(props.index)}>X</span>
      </div>
  </div>
  );
}

export default Todo;