import React from 'react'
import "./StarRating.css"
import { useState } from 'react'

const StarRating = ({ length }) => {
    const [hoveredList, setHoveredList] = useState([])
    const [clickedIndex, setClickedIndex] = useState(null)

    const handleStarClick = (index) => {
        setClickedIndex(index)
    }
    console.log(clickedIndex)

    const handleStarHover = (index) => {
        console.log(index)
        let temp = []
        for (let i = 0; i <= index; i++) {
            temp.push(i)
        }
        setHoveredList(temp)


    }
    const getClassName = (index) => {
        if (hoveredList.length > 0) {
            return hoveredList.includes(index) ? 'star active' : 'star'
        }
        if (clickedIndex !== null) {
            return index <= clickedIndex ? 'star clicked' : 'star'
        }
        return 'star'

    }



    const onMouseLeaveRating = () => {
        setHoveredList([])
    }
    console.log(hoveredList)

    const renderUI = (length) => {
        let ui = []
        for (let index = 0; index < length; index++) {
            const element = <div
                key={index}
                className={getClassName(index)}
                onClick={() => handleStarClick(index)}
                onMouseOver={() => handleStarHover(index)}
            >
                {'*'}
            </div>
            ui.push(element)
        }
        return ui;

    }

    return (
        <div className='holder' onMouseLeave={onMouseLeaveRating}>
            {renderUI(length)}
        </div>
    )
}

export default StarRating