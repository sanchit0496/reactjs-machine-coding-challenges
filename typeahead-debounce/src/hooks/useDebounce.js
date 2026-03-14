import { useEffect } from "react"
import { useState } from "react"

export const useDebounce = (cityList, userInput, delay) => {
    const [debouncedList, setDebouncedList] = useState(cityList)
  
    const filterList = () => {   
        let temp = cityList.filter((item) => item.toLowerCase().includes(userInput.toLowerCase()))    
        setDebouncedList(temp) 
    }

    useEffect(() => { 
        let timer = setTimeout(filterList, delay);
        return(() =>{
             clearInterval(timer)
        })
    }, [userInput])
    

    return{
        debouncedList
    }
}