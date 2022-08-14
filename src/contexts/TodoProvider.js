import React
  from 'react'
import todos from "../todos.json"

import {createContext, useContext, useState} from "react"

export const todoContext = createContext(null)

const TodoProvider = ({children}) => {
    const [todoList, setTodoList] = useState(todos)

    return (
        <todoContext.Provider value={{todoList,setTodoList}}>
            {children}
        </todoContext.Provider>
    )
}

export const useTodoContext = () => useContext(todoContext)

export default TodoProvider