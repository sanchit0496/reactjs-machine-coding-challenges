import { useEffect } from "react"
import { useState } from "react"

export const useDebounce = (userInput, delay) => {
    const [debounceInput, setDebounceInput] = useState('')

    useEffect(() => {
        let inputInterval;

        if (inputInterval) clearTimeout(inputInterval)
        inputInterval = setTimeout(async () => {
            setDebounceInput(userInput)
        }, delay);
        return (() => {
            return clearTimeout(inputInterval)
        })
    }, [userInput])

    return {
        debounceInput  
    }

} 