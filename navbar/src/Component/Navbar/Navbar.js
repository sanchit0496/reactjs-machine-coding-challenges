import React from 'react'
import { useState } from 'react'
import './Navbar.css'

const Navbar = () => {

    const [clickedItemId, setClickedItemId] = useState(0)

    const handleClick = (clickedId) => {
        console.log('clickedId', clickedId)
        setClickedItemId(clickedId)
    }
    
  return (
    <div className='navbarContainer'>
    <nav>
        <div className = 'navbarOptions' id='option01' onClick = {() => handleClick('option01')}  style = {{borderBottom : clickedItemId === 'option01' ?  '5px solid black': ''}}>Option 01</div>
        <div className = 'navbarOptions' id='option02' onClick = {() => handleClick('option02')}  style = {{borderBottom : clickedItemId === 'option02' ?  '5px solid black': ''}}>Option 02</div>
        <div className = 'navbarOptions' id='option03' onClick = {() => handleClick('option03')}  style = {{borderBottom : clickedItemId === 'option03' ?  '5px solid black': ''}}>Option 03</div>
        <div className = 'navbarOptions' id='option04' onClick = {() => handleClick('option04')}  style = {{borderBottom : clickedItemId === 'option04' ?  '5px solid black': ''}}>Option 04</div>
        <div className = 'navbarOptions' id='option05' onClick = {() => handleClick('option05')}  style = {{borderBottom : clickedItemId === 'option05' ?  '5px solid black': ''}}>Option 05</div>
    </nav>
    </div>
  )
}

export default Navbar