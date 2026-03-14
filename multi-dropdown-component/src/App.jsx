import React, { useEffect, useState } from 'react'
import Dropdown from './assets/components/Dropdown/Dropdown'

const App = () => {
    
  const dropdownData = [
    {
      title: 'Title 01',
      options: [
        'Option 01',
        'Option 02'
      ]
    },
    {
      title: 'Title 02',
      options: [
        'Option 01',
        'Option 02'
      ]
    }
  ]

  const [list, setList] = useState(dropdownData)

  const handleDropdownClick = (clickedIndex) => {  
    console.log(clickedIndex) 
 
    let temp = list.map((item, index) => {
      if(clickedIndex === index){
        return {...item, isOpen: !item.isOpen}
      }
        return {...item, isOpen: false}
    })
 
    setList(temp)
  }

  const handleDropdownOptionClick = (clickedDropdown, clickedOption) => {
    console.log(clickedDropdown, clickedOption)
    let temp = list.map((item) => {
      if(item.title === clickedDropdown.title){
        return {...item,  selectedOption: [...item.selectedOption, clickedOption] }
      }
        return {...item, selectedOption: []} 
    }) 
    setList(temp)
  }
  

  useEffect(() => {
    let tempList = dropdownData.map((item) => {
      return(
        {...item, isOpen: false, selectedOption: []} 
      )
    })
    console.log(tempList)
    setList(tempList) 
  }, [])

  return (
    <div>
      App
      {list && list.map((item, index) => { 
        return <Dropdown key={item.title} dropdownData = {item} handleDropdownClick = {() => handleDropdownClick(index)} handleDropdownOptionClick = {handleDropdownOptionClick} /> 
      })} 
    </div>
  )
}

export default App