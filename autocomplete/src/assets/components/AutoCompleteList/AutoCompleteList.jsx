import React from 'react'
import { useState } from 'react'
import { useRef } from 'react'
import { useEffect } from 'react'


const AutoCompleteList = ({ isLoading, recipeList, activeIndex, setActiveIndex }) => {
    const listRef = useRef()

    return (
        <div>
            {isLoading ? <div>{'Loading'}</div>
                :
                <div className='recipe-list' ref={listRef}> 
                    {recipeList && recipeList.map((item, index) => {
                        return <div 
                            key={index} 
                            style={{ 
                                border: `${activeIndex === index ? '1px solid blue' : '1px solid whitesmoke'}`, 
                                borderRadius: '5px', 
                                padding: '2px' 
                            }}
                            onClick={() => setActiveIndex(index)}  
                        >
                            {item.name}
                        </div>
                    })}
                </div>}
        </div>
    )
}


export default AutoCompleteList
