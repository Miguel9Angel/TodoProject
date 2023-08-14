import React from 'react';
import { TodoCounter } from '../TodoCounter';
import { TodoSearch } from '../TodoSearch';
import { TodoList } from '../TodoList';
import { TodoItem } from '../TodoItem';
import { CreateTodoButton } from '../CreateTodoButton';
import { TodoContext } from '../TodoContext';
import { Modal } from '../Modal';
import {TodoForm} from '../TodoForm'

function AppUI() {

    const {
        searchedTodos,
        completeTodo,
        deleteTodo,
        openModal,
        setOpenModal,
        progressTodoBar
    } = React.useContext(TodoContext)

    return (
        <div className='TodoContainer'>
            <TodoCounter/>
            <TodoSearch/>
                <TodoList>
                {searchedTodos.map(todo => (
                    <TodoItem
                        key={todo.text}
                        text={todo.text}
                        completed={todo.completed}
                        onComplete={() =>{
                            completeTodo(todo.text)
                            progressTodoBar()
                        }}
                        onDelete={() => deleteTodo(todo.text)}
                    />
                ))}
            </TodoList>
            <CreateTodoButton setOpenModal={setOpenModal} />
            {openModal && (
                <Modal>
                    <TodoForm/>
                </Modal>
            )}
        </div>
    );
}

export {AppUI};