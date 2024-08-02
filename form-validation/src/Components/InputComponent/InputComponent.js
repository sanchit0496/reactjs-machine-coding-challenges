import React from 'react'

const InputComponent = ({type, onChange, name, error}) => {
  return (
    <div>
    <label>{name}</label>
    <input type={type} onChange = {onChange}></input>
    {error.length > 0 && <p>{error}</p>}
    </div>
  )
}

export default InputComponent