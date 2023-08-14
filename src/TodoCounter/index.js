import React from 'react';
import { TodoContext } from '../TodoContext';
import './TodoCounter.css'

function TodoCounter(){
    
  const {
    completedTodos,
    totalTodos
  } = React.useContext(TodoContext)
  return (
      <>
        <h1 class="title">
          Your Tasks
        </h1>
        <h1 class="counter">
          You have completed {completedTodos} out of {totalTodos} taks
        </h1>
      </>
    )
  }

  export {TodoCounter};