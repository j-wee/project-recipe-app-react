import React, { useState } from "react";
import "./App.css";
import RecipeCreate from "./RecipeCreate";
import RecipeList from "./RecipeList";
import RecipeData from "./RecipeData"

function App() {
  const [recipes, setRecipes] = useState(RecipeData);

    // Ability for the <RecipeList /> component to list and delete an existing recipe.
    const deleteRecipe = (indexToDelete) => setRecipes((existingRecipes) => existingRecipes.filter((recipe, index) => index !== indexToDelete));
    // Ability for the <RecipeCreate /> component to create new recipes.
    const createRecipe = (newRecipe) => setRecipes((existingRecipes) => [...existingRecipes, newRecipe]);

    return (
    <div className="App">
      <header><h1>Delicious Food Recipes</h1></header>
      <RecipeList
        recipes={recipes}
        deleteRecipe={deleteRecipe}
      />
      <RecipeCreate createRecipe={createRecipe} />
    </div>
  );
}

export default App;
