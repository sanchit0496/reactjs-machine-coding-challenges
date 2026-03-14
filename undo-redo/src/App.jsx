import React from 'react'
import { useState } from 'react'

const App = () => {
  const [input, setInput] = useState('')
  const [inputStack, setInputStack] = useState([''])
  const [currentIndex, setCurrentIndex] = useState(0)

  const handleChange = (e) => {
    setInput(e.target.value)
    let tempStack = inputStack.slice(0, currentIndex + 1)
    let updatedStack = [...tempStack, e.target.value]

    setInputStack(updatedStack)
    setCurrentIndex(updatedStack.length - 1)
  }

  const handleUndo = () => {
    setCurrentIndex((prev) => Math.max(0, prev - 1))
  }
  const handleRedo = () => {
    setCurrentIndex((prev) => Math.min(prev + 1, inputStack.length - 1))
  }

  return (
    <div>
      App
      <input type='text' onChange={handleChange} value={inputStack[currentIndex] || ''} />
      <div>{inputStack[currentIndex]}</div>
      <button disabled={currentIndex === 0} onClick={handleUndo}>Undo</button>
      <button disabled={currentIndex === inputStack.length - 1} onClick={handleRedo}>Redo</button>
    </div>
  )
}

export default App 