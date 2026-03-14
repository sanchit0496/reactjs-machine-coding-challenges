import React from 'react'
import "./Dropdown.css" 

const Dropdown = ({ dropdownData, handleDropdownClick, handleDropdownOptionClick }) => { 

  const getDropdownOptions = (dropdownData) => {
    return <div>
      {dropdownData.options.map((item) => {
        return <div onClick={() => handleDropdownOptionClick(dropdownData, item)} className='dd-options'>{item}</div>  
      })}
    </div>
  }

  return (
    <div className='dd-item'>
      <div className='dd-title' onClick={handleDropdownClick}> 
        {dropdownData.title}  
      </div>
      <div>
      {dropdownData.isOpen && getDropdownOptions(dropdownData)}
      </div> 
    </div>
  )
}

export default Dropdown