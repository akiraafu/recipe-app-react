import { Link } from "react-router-dom";
import Trashcan from "../assets/trashcan.svg";
import { projectFirestore } from "../firebase/config";

//styles
import "./recipeList.css";

import React from "react";
import { useTheme } from "../hooks/useTheme";

const RecipeList = ({ recipes }) => {
  const { mode } = useTheme();
  if (recipes.length === 0) {
    return <div className="error">No recipes to load...</div>;
  }

  const handleClick = (id) => {
    projectFirestore.collection("recipes").doc(id).delete();
  };

  return (
    <div className="recipe-list">
      {recipes.map((recipe) => (
        <div key={recipe.id} className={`card ${mode}`}>
          <h3>{recipe.title}</h3>
          <p>{recipe.cookingTime} to make.</p>
          <div>{recipe.method.substring(0, 80)}...</div>
          <Link to={`/recipes/${recipe.id}`}>Cook This</Link>
          <img
            className="delete"
            src={Trashcan}
            alt="trashcan"
            onClick={() => handleClick(recipe.id)}
          />
          {/*we need to pass an id to this function to delete the specific one */}
        </div>
      ))}
    </div>
  );
};

export default RecipeList;
