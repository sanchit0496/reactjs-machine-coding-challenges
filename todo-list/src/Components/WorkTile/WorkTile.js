import React from 'react'

const WorkTile = ({title, workList, setWorkList}) => {

    const handleDelete = (clickedTitle) => {
        let workListFiltered = workList.filter((item) => item !== clickedTitle)
        setWorkList(workListFiltered)
    }
  return (
    <div className='tile'>
      <p className='tileTitle'>{title}</p>
      <button onClick={() => handleDelete(title)}>Delete</button>
    </div>
  )
}

export default WorkTile