 import { useState } from "react"
import { useTodoContext } from "../../contexts/TodoProvider"
import TodoList from "../TodoList/TodoList"
import React from 'react'
import { uuid } from "uuidv4"


const Todo = () => {
     const { todoList, setTodoList } = useTodoContext()
     const [text, setText] = useState("")
     
    const handleInput = (e) => {
       setText(e.target.value)
    }

    const handleEnter = (e) => {
        if ( e.key === "Enter" ) {
            const text = e.target.value
            if (text.trim() !== "" ) {
                setTodoList((prev) => ([
                    ...todoList,
                    {
                        id: uuid(),
                        title: text,
                        completed: false,
                    },
                ]))
                
                setText("")
            }
        } 
    }

    const onAdd = () => {
        if (text === "" ) return

        setTodoList((prev) => ([
          ...prev,
          {
            id: uuid(),
            title: text,
            completed: false,
          },
        ]))
        setText("")
    }

   return (
       <div className="todo">
         <p>Task</p>
         <input 
            value={text}
            type="text"
            onKeyPress={handleEnter}
            onChange={handleInput}
            placeholder="Write here"
            id="input"
            autoFocus
          />
          <button onClick={onAdd}>Add</button>

          {
            todoList.length === 0 ? (
              <div>
                  <p>your life is a blank page. You write on it.</p>
                  <p>So start by adding your tasks here.</p>
              </div>
            ) : <TodoList />
          }
       </div>
   )
}

export default Todo