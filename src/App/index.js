import React from 'react';
import './App.css'
import { TodoProvider } from '../TodoContext';
import { AppUI } from './appUI';
import { TodoProgress } from '../TodoProgress';

function App() {
  return (
    <>
      <TodoProvider>
        {/* <TodoProgress/> */}
        <AppUI/>
      </TodoProvider>
    </>
  )
}

export default App;
