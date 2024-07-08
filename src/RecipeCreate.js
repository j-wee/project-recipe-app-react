import React, { useState } from "react";

function RecipeCreate({ createRecipe }) {
  const initialDataState = {
    name: "",
    cuisine: "",
    photo: "",
    ingredients: "",
    preparation: ""
  };

  const [recipeData, setRecipeData] = useState( { ...initialDataState } );

  // Added required submit and change handlers.
  const handleChange = ({ target }) => {
    setRecipeData({
      ...recipeData,
      [target.name]: target.value
    });
  };

  // When the form is submitted, a new recipe should be created, and the form contents cleared.
  const handleSubmit = (event) => {
    event.preventDefault();
    createRecipe(recipeData);
    setRecipeData({ ...initialDataState });
  }

  // Added the required input and textarea form elements.
  return (
    <form name="create" onSubmit={handleSubmit}>
      <table>
        <tbody>
        <tr>
          <td>
            <input
                id="name"
                type="text"
                name="name"
                onChange={handleChange}
                value={recipeData.name}
                placeholder="Name"
            />
          </td>
          <td>
            <input
                id="cuisine"
                type="text"
                name="cuisine"
                onChange={handleChange}
                value={recipeData.cuisine}
                placeholder="Cuisine"
            />
          </td>
          <td>
            <input
                id="photo"
                type="text"
                name="photo"
                onChange={handleChange}
                value={recipeData.photo}
                placeholder="URL"
            />
          </td>
          <td>
            <textarea
                id="ingredients"
                name="ingredients"
                onChange={handleChange}
                value={recipeData.ingredients}
                placeholder="Ingredients"
            />
          </td>
          <td>
            <textarea
                id="preparation"
                name="preparation"
                onChange={handleChange}
                value={recipeData.preparation}
                placeholder="Preparation"
            />
          </td>
          <td>
            <button type="submit">Create</button>
          </td>
        </tr>
        </tbody>
      </table>
    </form>
  );
}

export default RecipeCreate;
