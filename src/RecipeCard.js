import React from "react";

const RecipeCard = ({name,image,ingredients}) => {
    return(
        <div>
            <h1>{name}</h1>
            <ul>{ingredients.map(ingredient => (
                <li>{ingredient.text}</li>
            ))}</ul>
            <img src={image} alt=""></img>
        </div>
    );
}

export default RecipeCard