import './TodoItem.css'



function TodoItem(props){
    return (
      <li className="task">
        <span 
          className={`done-icon ${props.completed}`}
          onClick={props.onComplete}
          >
            ✔
          </span>
        <p className={`description-task ${props.completed && "TodoItem-p--complete"}`}>{props.text}</p>
        <span 
          className="delete-icon"
          onClick={props.onDelete}
          >
            X
          </span>
      </li>
    )
  }

  export {TodoItem}