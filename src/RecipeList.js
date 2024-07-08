import React from "react";
import RecipeItem from "./RecipeItem";  // Created at least one additional component that is used by this component.

function RecipeList({ recipes, deleteRecipe }) {
  
  // Display the list of recipes using the structure of table that is provided.
  // Each recipe row must have a delete button - <button name="delete">Delete</button> - that deletes the post when clicked.

  return (
    <div className="recipe-list">
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Cuisine</th>
            <th>Photo</th>
            <th>Ingredients</th>
            <th>Preparation</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {recipes.map((recipe, index) => (
              <RecipeItem
                  recipe={recipe}
                  deleteRecipe={() => deleteRecipe(index)}
                  key={index}
              />
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default RecipeList;
