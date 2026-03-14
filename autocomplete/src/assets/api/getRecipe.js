export const getRecipe = async(userInput) => {
    const data = await fetch(`https://dummyjson.com/recipes/search?q=${userInput}`)
    const response = data.json()
    return response
}