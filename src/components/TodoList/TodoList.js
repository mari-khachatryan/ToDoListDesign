import { useState } from "react"
import {useTodoContext} from "../../contexts/TodoProvider"
import React from 'react'
// import CloseIcon from "@material-ui/core/Icon";
import Modal from "../Modal/Modal";
import { mergeClasses } from "@material-ui/styles";
import classes from './TodoList.module.css'
import closeicon from '../../assets/Vector.svg'


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
         <div className={classes.hideCompletedwrapper}>
            <input className={classes.hideCompleted} type="checkbox" checked={hideCompleted} onChange={handleChange}/>
            <span>Hide completed</span>
         </div>
        <div className={classes.listwrapper}>
        {
            todoList.map(todo => {
                return (
                    <div key={todo.id} className={classes.elementtodo} style={{display: hideCompleted && todo.completed ? "none" : ""}}>
                        <input type="checkbox" className={classes.completed} checked={todo.completed} onChange={() => handleChangeitem(todo)}/>
                        <span>{todo.title}</span>
                        <closeicon 
                            className={classes.openModalBtn}
                            onClick={() => {
                                setCheckedItem(todo, setOpenModal(true))
                            }} >
                        
                        {/* {
                            <CloseIcon color="action"/>
                        } */}
                        X
                        </closeicon>
                    </div>
                )
            })
        }
        </div>
        {openModal && <Modal handleClose={setOpenModal} handleYes={onDeleteItem} isOpen={openModal} />}
      </div>
    )
  }

export default TodoList