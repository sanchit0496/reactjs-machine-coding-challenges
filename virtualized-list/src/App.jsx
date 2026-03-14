import React from 'react'
import { useState, useEffect, useRef } from 'react';

const App = () => {

  const [data, setData] = useState([]);
  const [startIndex, setStartIndex] = useState(0);
  const [visibleList, setVisibleList] = useState([])

  const containerRef = useRef()

  const TOTAL_ITEMS = 1000;
  const ITEM_HEIGHT = 25;

  useEffect(() => {
    let dataList = [];
    for (let i = 0; i < TOTAL_ITEMS; i++) {
      dataList.push(`Div ${i}`);
    }
    setData(dataList);

  }, []);

  const handleScroll = () => {
    if (containerRef.current !== null) {

      const scrollTop = containerRef.current.scrollTop
      const containerHeight = (containerRef.current.clientHeight)
      const itemsPerView = Math.ceil(containerHeight / ITEM_HEIGHT) 
      // console.log(scrollTop, containerHeight, itemsPerView)
      
      const stIndex = Math.max(0, Math.ceil(scrollTop/ ITEM_HEIGHT)) 
      const otherIndex = Math.min(TOTAL_ITEMS, Math.ceil(stIndex + itemsPerView))
      setStartIndex(stIndex)
      let temp = data.slice(stIndex, otherIndex) 
      setVisibleList(temp)
    }
  }
  console.log(startIndex)

  useEffect(() => {
    handleScroll()
    if (containerRef.current !== null) {
      containerRef.current.addEventListener('scroll', handleScroll)
    }
    return (() => {
      if (containerRef.current !== null) {
        containerRef.current.removeEventListener('scroll', handleScroll)
      }
    })
  }, [data])


  return (
    <div ref={containerRef} className='app-holder' style={{ position: 'absolute', height: '380px', overflowY: 'auto', border: '1px solid grey', width: '300px' }}>
      <div className="list-holder" style={{ position: 'relative', height: `${(TOTAL_ITEMS * ITEM_HEIGHT)}px` }}>
        {visibleList.map((item, index) => {
          return <div
            key={startIndex + index}
            style={{ top: `${(startIndex + index) * ITEM_HEIGHT}px`, height: `${ITEM_HEIGHT}px`, width: '100%', position: 'absolute' }}>  
            {item}
          </div>
        })}
      </div>
    </div>
  )
}

export default App