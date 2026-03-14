import React from 'react'
import Stepper from './components/Stepper/Stepper'
import { useState } from 'react'

const App = () => {
  const data = [
    {id: 1, label: 'Information'},
    {id: 2, label: 'Address'},    
    {id: 3, label: 'Payment'},   
    {id: 4, label: 'Confirmation'}
  ]
  const [activeIndex, setActiveIndex] = useState(0)

  const handleNext = () => {
    setActiveIndex((prev) => Math.min(prev + 1, data.length -1))
  } 

  const handlePrev = () => {
    setActiveIndex((prev) => Math.max(prev - 1, 0))  
  }

  return (
    <div>
      App
      <Stepper data={data} activeIndex = {activeIndex} /> 
      <button onClick={handlePrev}>Prev</button>
            <button onClick={handleNext}>Next</button>
    </div>
  )
}

export default App