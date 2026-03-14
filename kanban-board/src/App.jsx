import React from 'react'
import './App.css'
import { useState } from 'react'
import { useEffect } from 'react'
import { useRef } from 'react'

const App = () => {

  const data = {
    todo: [
      { id: 1, title: "Task 1" },
      { id: 2, title: "Task 2" },
    ],
    progress: [
      { id: 3, title: "Task 3" },
    ],
    done: [
      { id: 4, title: "Task 4" },
    ],
  }

  const [dragItem, setDragItem] = useState('')
  const [source, setSource] = useState('')
  const [taskList, setTaskList] = useState(data)
  const [input, setInput] = useState('')


  useEffect(() => {
    console.log('haha')
    let taskFromLocalStorage = window.localStorage.getItem('kanban')
    if (taskFromLocalStorage) {
      setTaskList(JSON.parse(taskFromLocalStorage))
    }
  }, [])

  const isFirstRender = useRef(true)

  useEffect(() => {
    if (isFirstRender.current) {
      isFirstRender.current = false
      return
    }
    localStorage.setItem('kanban', JSON.stringify(taskList))
  }, [taskList])



  const handleDragStart = (e, item, header) => {
    console.log('drag here', item)
    setDragItem(item)
    setSource(header)
  }

  const handleDrop = (e, header) => {
    e.preventDefault()
    console.log(header, source, dragItem)
    e.dataTransfer.effectAllowed = true
    console.log(taskList[source])

    setTaskList((prev) => {
      let sourceItems = prev[source]
      let updatedSourceItems = sourceItems.filter((item) => dragItem.id !== item.id)

      let dropItems = [...prev[header], dragItem]
      return {
        ...prev,
        [source]: updatedSourceItems,
        [header]: dropItems
      }
    })

  }

  const handleDragOver = (e) => {
    e.preventDefault()
    e.dataTransfer.effectAllowed = true
  }

  const renderSection = (header, items) => {
    return (
      <div className='board-section' onDrop={(e) => handleDrop(e, header)} onDragOver={(e) => handleDragOver(e)}>
        <div className="board-header">{header}</div>
        <div className="board-data">
          {items.map((item) => {
            return <div
              className='board-item'
              onDragStart={(e) => handleDragStart(e, item, header)}
            >
              {item.title}
            </div>
          })}
        </div>
      </div>
    )
  }
  const renderUI = () => {
    let ui = []
    for (let key in taskList) {
      ui.push(renderSection(key, taskList[key]))
    }
    return ui
  }

  const handleInputChange = (e) => {
    console.log(e)
    setInput(e.target.value)
  }
  const handleTaskAdd = () => {
    console.log(input)
    setTaskList((prev) => {
      let updateToDoList = prev['todo']
      return {
        ...prev,
        ['todo']: [...updateToDoList, { id: input, title: input }]
      }
    })
  }

  return (
    <>
      <input type='text' value={input} onChange={(e) => handleInputChange(e)} />
      <button onClick={handleTaskAdd}>Add</button>

      <div className='board-holder'>
        {renderUI()}
      </div>
    </>
  )
}

export default App