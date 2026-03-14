import { useEffect } from "react"
import { useState } from "react"

export const useLocalStorage = (key, inputValue) => {


    const readValue = () => {
        let item = localStorage.getItem(key)
        return item ? JSON.parse(item) : inputValue
    }

    const [value, setValue] = useState(readValue())
    console.log(key, inputValue)

    useEffect(() => {
        const localStorageValue = readValue()
        setValue(localStorageValue)
    }, [])


    useEffect(() => {
        localStorage.setItem(key, JSON.stringify(value)) 
    }, [key, value]) 

    return {
        value,
        setValue
    }
}  
