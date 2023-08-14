import './CreateTodoButton.css'

function CreateTodoButton({setOpenModal}){
    return (
        <div class='button-container'>
        <button class="add-button" onClick={
            () => {
                setOpenModal(state => !state);
            }
        }>New Task</button>
        </div>
    )
  }

  export {CreateTodoButton}