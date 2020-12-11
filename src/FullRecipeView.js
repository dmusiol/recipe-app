import React from "react";
import style from "./recipe.module.css";

export default function FullRecipeView({ingredientList, recipeURL}) {
    return (
        <div className={style.ingredientsBox}>
        <ul className={style.unordList}>{ingredientList.map(ingredient => (
                <li className={style.ingredients}>{ingredient.text}</li>
            ))}</ul>
        <a href= {recipeURL}>
              👉 Get full recipe 
        </a>
        </div>
    )
}