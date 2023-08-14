import React from "react";

const TodoContext = React.createContext();

const defaultTodos = [
    { text: 'Cortar cebolla', completed: true },
    { text: 'Tomar el Curso de Intro a React.js', completed: false },
    { text: 'Llorar con la Llorona', completed: false },
    { text: 'LALALALALA', completed: false },
    { text: 'Usar estados derivados', completed: true },
  ];

function TodoProvider({children}) {

    const [todos, setTodos] = React.useState(defaultTodos);
    const [searchValue, setSearchValue] = React.useState('');
    const [openModal, setOpenModal] = React.useState(false);
    const [progressTodo, setprogressTodo] = React.useState(0);


    const completedTodos = todos.filter(todo => !!todo.completed).length;
    const totalTodos = todos.length

    const searchedTodos = todos.filter(
        (todo) => {
            const todoText = todo.text.toLowerCase();
            const searchText = searchValue.toLowerCase()
            return todoText.includes(searchText)
        }
    )
    
    const addTodo = (text) => {
        const newTodos = [...todos];
        newTodos.push({
            text,
            completed: false,
        });
        setTodos(newTodos)
    }

    const completeTodo = (text) => {
        const newTodos = [...todos];
        const todoIndex = newTodos.findIndex(
            (todo) => todo.text === text
        );
        if (newTodos[todoIndex].completed) {
            newTodos[todoIndex].completed = false
        } else {
            newTodos[todoIndex].completed = true
        }
        console.log(newTodos[todoIndex].completed);
        setTodos(newTodos);
    };

    const deleteTodo = (text) => {
        const newTodos = [...todos];
        const todoIndex = newTodos.findIndex(
            (todo) => todo.text === text
        );
        newTodos.splice(todoIndex, 1);
        setTodos(newTodos);
    };

    const progressTodoBar = () => {
        const progress = (completedTodos/totalTodos)*360
        setprogressTodo(progress)
        console.log('completeTodo: ' + completedTodos);
        console.log('totalTodos: ' + totalTodos);
        console.log(progress);
        console.log(progressTodo);
    }

    return (
        <TodoContext.Provider value={{
            completedTodos,
            totalTodos,
            searchValue,
            setSearchValue,
            searchedTodos,
            completeTodo,
            deleteTodo,
            openModal,
            setOpenModal,
            addTodo,
            progressTodo,
            progressTodoBar
        }}>
            {children}
        </TodoContext.Provider>
    )
}

export {TodoContext, TodoProvider};