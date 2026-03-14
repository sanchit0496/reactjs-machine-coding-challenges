import { useRef } from "react"

export const useCache = () => { 
    const cache = useRef(new Map()) 

    const set = (key, value) => {
        return cache.current.set(key, value)
    }

    const get = (key, value) => {
        return cache.current.get(key)
    }

    const has = (key, value) => {
        return cache.current.has(key)
    }

    const clear = (key, value) => {
        return cache.current.clear(key)
    }
    return {
        set, get, has, clear
    }
}