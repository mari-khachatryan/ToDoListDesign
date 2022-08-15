 import { useState } from "react"
import { useTodoContext } from "../../contexts/TodoProvider"
import TodoList from "../TodoList/TodoList"
import React from 'react'
import { uuid } from "uuidv4"
import classes from './Todo.module.css'


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
       <div className={classes.todo}>
            <div className={classes.addwrapper}>
                <div className={classes.inputwrapper}>
                    <label>Task</label>
                    <input 
                        className={classes.taskinput}
                        value={text}
                        type="text"
                        onKeyPress={handleEnter}
                        onChange={handleInput}
                        placeholder="Write here"
                        id="input"
                    />
                </div>

                <button className={classes.addbutton} onClick={onAdd}>Add</button>
            </div>

          {
            todoList.length === 0 ? (
              <div className={classes.textwrpapper}>
                  <p className={classes.firsttaxt}>Your life is a blank page. You write on it.</p>
                  <p className={classes.secondtext}>So start by adding your tasks here.</p>
              </div>
            ) : <TodoList />
          }
       </div>
   )
}

export default Todo