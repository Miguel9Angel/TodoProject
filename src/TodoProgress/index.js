import React from 'react';
import './TodoProgress.css'
import { TodoContext } from '../TodoContext';

function TodoProgress(props){

    const {
        progressTodo
    } = React.useContext(TodoContext)

    let circularProgress = document.querySelector(".circular-progress");
    let progressValue = document.querySelector(".progress-value");
    let a = 10

    // progressValue.textContent = `${a}%`
    // circularProgress.style.background = `conic-gradient(#7d2ae8 ${a*3.6}deg, #ededed 0deg)`

    return (
        <div className="container">
            <div className="circular-progress">
                <span className="progress-value">0%</span>
            </div>
            <span className="text">Tasks Progress</span>
        </div>
    )
  }

  export {TodoProgress};