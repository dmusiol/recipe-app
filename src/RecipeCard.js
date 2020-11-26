import React from "react";
import style from "./recipe.module.css";

const RecipeCard = ({name,image,ingredients}) => {
    
    return(
        <div className={style.recipe}>
            <h1>{name}</h1>
            <ul>{ingredients.map(ingredient => (
                <li>{ingredient.text}</li>
            ))}</ul>
            <img className={style.image} src={image} alt=""></img>
        </div>
    );
}

export default RecipeCard