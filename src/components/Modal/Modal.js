import React from 'react'
import classes from './Modal.module.css'

const Modal = ({ handleClose, handleYes, isOpen }) => {
    return (
        <div className={classes.modalBackground} style={{ display: isOpen ? 'nane' : 'block'}}>
            <div className={classes.modalContainer}>
                    <button onClick={() => handleClose(false)}> x </button>
                    <div className={classes.titele}>
                    <h1> Are you sure you want to delete? </h1>
                    </div>
                    <div className={classes.footer}>
                        <button onClick={handleYes}> Yes </button>
                        <button onClick={() => handleClose(false)}> No </button>
                </div>
            </div>
            
        </div>
    )
}

export default Modal