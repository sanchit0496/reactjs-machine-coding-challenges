import React, { useState } from 'react'
import { v4 as uuidv4 } from 'uuid';

const App = () => {
  const [comments, setComments] = useState([
    {
      id: uuidv4(),
      author: "Sanchit",
      text: "Bro nested comments ka React version de.",
      children: [
        {
          id: uuidv4(),
          author: "Aman",
          text: "Same here, drag & drop bhi chahiye.",
          children: [
            {
              id: uuidv4(),
              author: "Other",
              text: "Other",
              children: []
            }
          ]
        }
      ]
    },
    {
      id: uuidv4(),
      author: "Priya",
      text: "React wale threaded comments useful lag rahe.",
      children: []
    }
  ]);
  const [inputComment, setInputComment] = useState('')
  const [inputReply, setInputReply] = useState('')

  const [commentToEdit, setCommentToEdit] = useState('')
  const [inputEdit, setInputEdit] = useState('')

  const handleReplyInput = (e) => {
    setInputReply(e.target.value)
  }

  const addReplyRecursion = (inputComments, replyItem, replyObj) => {
    console.log(inputComments, replyItem, replyObj)
    return inputComments?.map((item) => {
      if (item.id === replyItem.id) {
        return {
          ...item,
          children: [...item.children, replyObj]
        }
      } else {
        return {
          ...item,
          children: addReplyRecursion(item.children, replyItem, replyObj)
        }
      }
    })
  }

  const handleAddReply = (replyItem) => {
    console.log(replyItem)
    let replyObj = {
      id: uuidv4(),
      author: "You",
      text: inputReply,
      children: []
    }
    setComments((prev) => {
      return addReplyRecursion(prev, replyItem, replyObj)
    })
  }
  console.log(comments)

  const renderChildren = (mainCommentChild) => {
    return (
      mainCommentChild.map((item) => {
        return (
          <div style={{ marginLeft: '20px', border: '1px solid grey', padding: '10px' }}>
            {item.id === commentToEdit ? <input type='text' onChange={handleEditInput} /> :
              <div>{`${item.author} : ${item.text} `}</div>}
            <button onClick={() => handleDelete(item)}>Delete</button>
            <button onClick={() => handleEdit(item)}>Edit</button>
            <div>
              <input type='text' onChange={handleReplyInput} />
              <button onClick={() => handleAddReply(item)}>Reply</button>
              {renderChildren(item.children)}
            </div>
          </div>
        )
      })
    )
  }

  const handleCommentInput = (e) => {
    setInputComment(e.target.value)
  }



  const handleAddComment = () => {
    let tempComment = {
      id: uuidv4(),
      author: "You",
      text: inputComment,
      children: []
    }
    setComments([...comments, tempComment])
  }

  const deleteCommentRecursion = (inputComments, itemToFilter) => {
    return (
      inputComments.filter((item) => item.id !== itemToFilter.id)
        .map((item) => {
          return {
            ...item,
            children: deleteCommentRecursion(item.children, itemToFilter)
          }
        })
    )
  }

  const handleDelete = (itemToFilter) => {
    console.log(itemToFilter)
    setComments((prev) => {
      return deleteCommentRecursion(prev, itemToFilter)
    })
  }

  const handleEdit = (itemToEdit) => {
    console.log(itemToEdit)
    setCommentToEdit(itemToEdit.id)
  }


  const handleEditInput = (e) => {
    setInputEdit(e.target.value)
  }

  const editCommentRecursion = (inputComments, editItem) => {
    return inputComments.map((item) => {
      if (item.id === editItem.id) {
        return {
          ...item,
          text: inputEdit
        }
      } else {
        return {
          ...item,
          children: editCommentRecursion(item.children, editItem)
        }
      }
    })
  }

  const handleEditSave = (editItem) => {
    console.log(editItem)
    setComments((prev) => {
      return editCommentRecursion(prev, editItem)
    })
    setCommentToEdit("")
    setInputEdit("")
  }


  return (
    <div>
      App
      <input type='text' onChange={handleCommentInput} />
      <button onClick={() => handleAddComment()}>Add Comment</button>
      {comments.map((mainComment) => {
        return (
          <div style={{ border: '1px solid grey', padding: '5px', margin: '5px' }}>
            {mainComment.id === commentToEdit ? <input type='text' onChange={handleEditInput} /> :
              <div>{`${mainComment.author} : ${mainComment.text} `}</div>}
            {mainComment.id !== commentToEdit && <button onClick={() => handleDelete(mainComment)}>Delete</button>}
            {mainComment.id !== commentToEdit && <button onClick={() => handleEdit(mainComment)}>Edit</button>}
            {mainComment.id === commentToEdit && <button onClick={() => handleEditSave(mainComment)}>Save Edit</button>}


            <div>
              <input type='text' onChange={handleReplyInput} />
              <button onClick={() => handleAddReply(mainComment)}>Reply</button>
              {renderChildren(mainComment.children)}
            </div>
          </div>
        )
      })}
    </div>
  )
}

export default App