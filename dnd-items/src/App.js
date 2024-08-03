import React, { useState } from 'react'
import './App.css'

const App = () => {
  const data = [0,1,2,3,4,5]

  const [draggedItem, setDraggedItem] = useState(null)

  const handleDrag = (e, item) => {
    console.log('handleDrag', e.dataTransfer, item)
    // e.dataTransfer.effectAllowed = 'move'
    setDraggedItem(item)
  }
  console.log('draggedItem', draggedItem)

  const handleDragEnd = (e,item) => {
    console.log('handleDragEnd', item)
    setDraggedItem(null)
  }

  const handleDragOver = (e,item) => {
    console.log('handleDragOver', item)
  }

  return (
    <div>
      App
      {
        data.map((item) => {
          return(
            <div 
              id = {item} 
              className='drag-item'
              onDragStart={(e) => handleDrag(e, item)} 
              onDragEnd = {(e) => handleDragEnd(e, item)}
              onDragOver = {(e) => handleDragOver(e, item)}
            >
              {`Div ${item}`}
            </div>
          )
        })
      }
    </div>
  )
}

export default App