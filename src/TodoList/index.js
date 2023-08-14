import './TodoList.css'

function TodoList(props){
    return (
        <ul class="Todo-container">
            {props.children}
        </ul>
    )
  }

  export {TodoList};