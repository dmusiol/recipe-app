import React from "react";
import style from "./recipe.module.css";

export default function FullRecipeView({ingredientList}) {
    return (
        <div>
        <ul className={style.unordList}>{ingredientList.map(ingredient => (
                <li className={style.ingredients}>{ingredient.text}</li>
            ))}</ul>
            </div>
    )
}