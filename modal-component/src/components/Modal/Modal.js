import React from 'react'
import Button from '../Button/Button'
import './Modal.css'

const Modal = ({handleClick}) => {
  return (
    <div className='modalBody'>
        <div className='a'>
            Header
            <Button text={'close'} handleClick = {handleClick} />
        </div>
        Modal
    </div>
  )
}

export default Modal