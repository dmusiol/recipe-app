import React, { useState } from "react";
import style from "./recipe.module.css";
import FullRecipeView from "./FullRecipeView";

const RecipeCard = ({name,image,ingredients}) => {
    const [value, setValue] = useState(false);

    function displayFullRecipe(e) {
        e.preventDefault();
        setValue(true);
    }
    
    return(
        <div className={style.recipe}>
            <h3>{name}</h3>
            <img className={style.image} src={image} alt=""></img>
            <button className={style.button} onClick={displayFullRecipe}>Show recipe</button>
            {value === true ? (
            <FullRecipeView ingredientList={ingredients}/>

        ) : null
            }
        </div>
    );
}

export default RecipeCard