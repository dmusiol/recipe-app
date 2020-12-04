import React from "react";

export default function FullRecipeView({ingredientList}) {
    return (
        <div>
        <ul>{ingredientList.map(ingredient => (
                <li>{ingredient.text}</li>
            ))}</ul>
            </div>
    )
}