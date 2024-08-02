import React from 'react'

const InputComponent = ({type, onChange, name, error}) => {
  return (
    <>
    <label>{name}</label>
    <input type={type} onChange = {onChange}></input>
    {error.length > 0 && <span>{error}</span>}
    </>
  )
}

export default InputComponent