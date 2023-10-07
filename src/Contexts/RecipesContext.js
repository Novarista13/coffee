import { useState, createContext } from "react";

export const RecipesContext = createContext();
let goods = localStorage.getItem("recipesMaterial");
const recipes = JSON.parse(goods);

export default function RecipesContextProvider({ children }) {
  const [recipesMaterial, setRecipesMaterial] = useState(
    recipes ? recipes : []
  );

  console.log(recipesMaterial);

  return (
    <RecipesContext.Provider value={{ recipesMaterial, setRecipesMaterial }}>
      {children}
    </RecipesContext.Provider>
  );
}
