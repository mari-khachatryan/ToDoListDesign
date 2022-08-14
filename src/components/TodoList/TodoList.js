import { useState } from "react"
import {useTodoContext} from "../../contexts/TodoProvider"
import React from 'react'
import CloseIcon from "@material-ui/core/Icon";
import Modal from "../Modal/Modal";


const TodoList = () => {
  const { todoList, setTodoList } = useTodoContext()
  const [hideCompleted, setHideCompleted] = useState(false)
  const [checkedItem, setCheckedItem] = useState(null)
  const [openModal, setOpenModal] = useState(false)


    const handleChangeitem = (todo) => {
        setTodoList((prev) => {
            return prev.map((item) => {
                if (item.id === todo.id) {
                    return ({
                        ...item,
                        completed: !item.completed
                    })
                } else {
                    return item
                }
            })
        })
    }

    const handleChange = () => {
        setHideCompleted(!hideCompleted)
        // setTodoList((prev) => {
        //     return prev.filter((item) => {
        //         if ( !item.completed ) {
        //             return ({
        //                 ...item
        //             })
        //         } 
        //     })
        // })
    }

    const onDeleteItem = () => {
        setTodoList(todoList.filter((item) => item.id !== checkedItem.id))
        setOpenModal(false)
        setCheckedItem(null)
    }
    
    return (
      <div>
         <label>
            <input type="checkbox" checked={hideCompleted} onChange={handleChange}/>
             Hide completed
         </label>
        {
            todoList.map(todo => {
                return (
                    <div key={todo.id} style={{display: hideCompleted && todo.completed ? "none" : ""}}>
                            <input type="checkbox" checked={todo.completed} onChange={() => handleChangeitem(todo)}/>
                            <p>{todo.title}</p>
                            <button 
                                className="openModalBtn"
                                onClick={() => {
                                    setCheckedItem(todo, setOpenModal(true))
                                }} >
                            
                            {/* {
                                <CloseIcon color="action"/>
                            } */}
                            X
                            </button>
                    </div>
                )
            })
        }
        {openModal && <Modal handleClose={setOpenModal} handleYes={onDeleteItem} />}
      </div>
    )
  }

export default TodoList