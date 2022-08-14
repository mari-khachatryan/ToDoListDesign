import React from 'react'

const Modal = ({ handleClose, handleYes }) => {
    return (
        <div className='modalBackground'>
            <div className='modalContainer'>
                    <button onClick={() => handleClose(false)}> x </button>
                    <div className='titele'>
                    <h1> Are you sure you want to delete? </h1>
                    </div>
                    <div className='footer'>
                        <button onClick={handleYes}>Yes</button>
                        <button onClick={() => handleClose(false)}>No</button>
                </div>
            </div>
            
        </div>
    )
}

export default Modal