import React from 'react'
import { getRecipe } from './assets/api/getRecipe'
import { useState } from 'react'
import { useDebounce } from './assets/hooks/useDebounce'
import { useEffect } from 'react'
import AutoCompleteList from './assets/components/AutoCompleteList/AutoCompleteList'
import { useRef } from 'react'
import { useCache } from './assets/hooks/useCache'


const App = () => {


  const [userInput, setUserInput] = useState('')
  const [recipeList, setRecipeList] = useState([])
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState('')
  const [activeIndex, setActiveIndex] = useState(-1)  


  const { debounceInput } = useDebounce(userInput, 1500)
  const { set, get, has, clear } = useCache()
  const inputRef = useRef()


  useEffect(() => {
    const fetchRecipe = async (userInput) => {
      if (has(userInput)) {
        let tempData = get(userInput)
        setRecipeList(tempData)
        setIsLoading(false)
        return
      }

      setIsLoading(true)
      try {
        const recipeData = await getRecipe(userInput)
        set(userInput, recipeData.recipes.slice(0, 10))
        setRecipeList(recipeData.recipes.slice(0, 10))
      } catch (error) {
        setError(error)
        setRecipeList([])
      } finally {
        setIsLoading(false)
      }
    }

    if (debounceInput.length > 0) {
      fetchRecipe(debounceInput)
    } else {
      setRecipeList([])
      setIsLoading(false)
    }

  }, [debounceInput])


  const handleKeyDown = (e) => {
    if (recipeList.length === 0) return

    if (e.key === 'ArrowDown') {
      e.preventDefault()
      setActiveIndex((prev) => (prev < recipeList.length - 1 ? prev + 1 : 0))
    } else if (e.key === 'ArrowUp') {
      e.preventDefault()
      setActiveIndex((prev) => (prev <= 0 ? recipeList.length - 1 : prev - 1))
    } else if (e.key === 'Enter' && activeIndex >= 0) {
      e.preventDefault()
      setUserInput(recipeList[activeIndex].name)
      setRecipeList([])
    }
  }


  const handleInputChange = (e) => {
    setUserInput(e.target.value)
  }
  
  return ( 
    <div onKeyDown={handleKeyDown} >
      <input 
        autoFocus={true} 
        onChange={handleInputChange}  
        value={userInput} 
        ref={inputRef} 
      />
      {
        <AutoCompleteList 
          isLoading={isLoading} 
          recipeList={recipeList} 
          activeIndex={activeIndex} 
          setActiveIndex={setActiveIndex} 
        />
      }
    </div>
  )
}


export default App
