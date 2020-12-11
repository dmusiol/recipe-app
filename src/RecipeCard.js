import React, { useState } from "react";
import style from "./recipe.module.css";
import FullRecipeView from "./FullRecipeView";

const RecipeCard = ({name,image,ingredients,url}) => {
    const [isActive, setActive] = useState("false");

    function displayFullRecipe(e) {
        e.preventDefault();
        setActive(!isActive);
    }
    
    return(
        <div className={style.recipe}>
            <h3>{name}</h3>
            <img className={style.image} src={image} alt=""></img>
            <button className={style.button} onClick={displayFullRecipe}>Show recipe</button>
           {!isActive ? (
            <FullRecipeView ingredientList={ingredients} recipeURL={url}/>
           ) : null }
        </div>
    );
}

export default RecipeCard