import React from 'react';
import './TodoSearch.css'
import { TodoContext } from '../TodoContext';

function TodoSearch(){
  const {
    searchValue,
    setSearchValue
  } = React.useContext(TodoContext)
  return (
    <input class="search-input"  placeholder="Everything you love to do..."
      value={searchValue}
      onChange={(event) => {
        setSearchValue(event.target.value);
      }}
    />
  )
  }
  
  export {TodoSearch};