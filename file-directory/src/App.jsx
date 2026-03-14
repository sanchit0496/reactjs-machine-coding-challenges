import React, { useState } from 'react'
import { v4 as uuidv4 } from "uuid";

const App = () => {


  const [directory, setDirectory] = useState([
    {
      id: uuidv4(),
      name: "src",
      type: "directory",
      isOpen: true,
      children: [
        { id: uuidv4(), name: "index.js", type: "file", children: [] },
        {
          id: uuidv4(),
          name: "components",
          type: "directory",
          isOpen: true,
          children: [
            { id: uuidv4(), name: "Button.js", type: "file", children: [] }
          ]
        }
      ]
    },
    { id: uuidv4(), name: "package.json", type: "file", children: [] }
  ])


  const [inputFolder, setInputFolder] = useState('')
  const [clickedItemForEdit, setClickedItemForEdit] = useState('')
  const [editInput, setEditInput] = useState('')
  const [filterInput, setFilterInput] = useState('') 

  const handleNewFolderInput = (e) => {
    setInputFolder(e.target.value)
  }

  const handleAddNewFolder = (e) => {
    let folderObj = {
      id: uuidv4(),
      name: inputFolder,
      type: "directory",
      isOpen: true,
      children: []
    }
    let temp = [...directory, folderObj]
    setDirectory(temp)
  }

  const createItemRecursively = (inputDirectory, clickedDirectory, newFolderObj, type) => {
    return inputDirectory.map((item) => {
      if (item.id === clickedDirectory.id) {
        return {
          ...item,
          children: [...item.children, newFolderObj]
        }
      } else {
        return {
          ...item,
          children: createItemRecursively(item.children, clickedDirectory, newFolderObj, type)
        }
      }
    })
  }

  const createDirectoryItem = (clickedDirectory, type) => {
    let newFolderObj = {
      id: uuidv4(),
      name: type === 'directory' ? 'NewFolder' : 'New File',
      type: type === 'directory' ? 'directory' : 'file',
      isOpen: type === 'directory' ? true : false,
      children: []
    }
    setDirectory((prev) => {
      return createItemRecursively(prev, clickedDirectory, newFolderObj, type)
    })
  }

  const deleteItemRecursively = (inputDirectory, clickedItem) => {
    return inputDirectory.filter((item) => item.id !== clickedItem.id).map((subItem) => {
      return {
        ...subItem,
        children: deleteItemRecursively(subItem.children, clickedItem)
      }
    })
  }
  const handleDeleteItem = (clickedItem) => {
    setDirectory((prev) => {
      return deleteItemRecursively(prev, clickedItem)
    })
  }

  const handleEditClicked = (clickedItem) => {
    setClickedItemForEdit(clickedItem)
  }

  const handleInputEdit = (e) => {
    setEditInput(e.target.value)
  }

  const editItemRecursiveley = (inputDirectory, clickedItem, editInput) => {
    return inputDirectory.map((item) => {
      if (item.id === clickedItem.id) {
        return {
          ...item,
          name: editInput
        }
      } else {
        return {
          ...item,
          children: item.type === 'directory' ? editItemRecursiveley(item.children, clickedItem, editInput) : []
        }
      }
    })
  }

  const handleEditItem = (clickedItem) => {
    setDirectory((prev) => {
      return editItemRecursiveley(prev, clickedItem, editInput)
    })
    setClickedItemForEdit('')
    setEditInput('')
  }

  const handleToggleRecursively = (inputDirectory, clickedItem) => {
    return inputDirectory.map((item) => {
      if(item.id === clickedItem.id && item.type === 'directory'){
        return{
          ...item,
          isOpen: !item.isOpen 
        }
      }else{
        return{
          ...item,
          children: item.type === 'directory' ? handleToggleRecursively(item.children, clickedItem) : []
        }
      }
    })
  }
  const handleToggleClick = (clickedItem) => {
    setDirectory((prev) => {
      return handleToggleRecursively(prev, clickedItem)
    })
  }


  const renderUI = (subDirectory) => {
    return subDirectory.map((item) => {
      return (
        <div style={{ marginLeft: '20px', border: '1px solid lightgrey', padding: '5px', margin: '5px' }}>

          {item.id !== clickedItemForEdit.id ?
            <>
              <div>
                {`${item.type === 'file' ? "File" : "Folder"}: ${item.name}`}
              </div>
              {item.type === 'directory' && <button onClick={() => handleToggleClick(item)}>Toggle</button>}
            </>
            :
            <>
              <input type='text' onChange={handleInputEdit} />
              <button onClick={() => handleEditItem(item)}>Save Edit</button>
            </>}

          {item.id !== clickedItemForEdit.id ?
            <>
              <button onClick={() => handleDeleteItem(item)}>Delete</button>
              <button onClick={() => handleEditClicked(item)}>Edit</button>
            </> : null}

          {item.type === 'directory' &&
            <div>
              <button onClick={() => createDirectoryItem(item, 'directory')}>Create Folder</button>
              <button onClick={() => createDirectoryItem(item, 'file')}>Create File</button>
            </div>}

          <div>
            {item.type === 'directory' && item.isOpen && (
  <div>{renderUI(item.children)}</div>
)}

          </div>
        </div>
      )
    })
  }
  const handleFilterInput = (e) => {
    setFilterInput(e.target.value) 
    filterTree(directory, e.target.value) 
  }

  //   const filterTree = (nodes, query) => {
  //   if (!query) return nodes

  //   return nodes
  //     .map(item => {
  //       if (item.type === 'directory') {
  //         const filteredChildren = filterTree(item.children, query)

  //         if (
  //           item.name.toLowerCase().includes(query) ||
  //           filteredChildren.length > 0
  //         ) {
  //           return {
  //             ...item,
  //             isOpen: true,
  //             children: filteredChildren
  //           }
  //         }
  //       }

  //       if (
  //         item.type === 'file' &&
  //         item.name.toLowerCase().includes(query)
  //       ) {
  //         return item
  //       }

  //       return null
  //     })
  //     .filter(Boolean)
  // }

  const filterTree = (inputDirectory, query) => {
    if(query.length === 0){
      return inputDirectory
    }

    return inputDirectory.map((item) => {
      if(item.type === 'directory'){
        const filteredChildren = filterTree(item.children, query)

        if(item.name.toLowerCase().includes(query.toLowerCase()) ||
            filteredChildren.length > 0 ){ 
          return{
            ...item,
            isOpen: true,
            children: filteredChildren 
          }
        }
      }
       
      if(item.type === 'file'){
         if(item.name.toLowerCase().includes(query.toLowerCase())){
          return item
        }
      }
      return null 
    }).filter(Boolean)  

  }
  
  const filteredDirectory = filterTree(directory, filterInput) 
  console.log('filteredDirectory', filteredDirectory)

  return (
    <div>
      <input type='text' onChange={handleNewFolderInput} />
      <button onClick={handleAddNewFolder}>New Folder</button> 

      <input type='text' placeholder='Filter' onChange={handleFilterInput} />

      <div>{renderUI(filteredDirectory)}</div>
    </div>
  )
}

export default App