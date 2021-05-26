import React, { useState } from "react";
import style from "./recipe.module.css";
import FullRecipeView from "./FullRecipeView";
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

const RecipeCard = ({name,image,ingredients,url,diet,calories}) => {
    const [isActive, setActive] = useState("false");
    let caloriesNum = Math.round(calories);

    function displayFullRecipe(e) {
        e.preventDefault();
        setActive(!isActive);
    }
    
    return(
    <Card style={{ width: '18rem' }} className={style.recipe}>
        <Card.Img variant="top" src={image} className={style.image} />
        <Card.Body>
            <Card.Title className={style.h3}>{name}</Card.Title>
            <Card.Text>
               Calories: {caloriesNum}
            </Card.Text>
        <Button variant="danger" onClick={displayFullRecipe}>Full recipe</Button>
        {!isActive ? (
            <FullRecipeView ingredientList={ingredients} recipeURL={url}/>
           ) : null }
        </Card.Body>
    </Card>
    );
}

export default RecipeCard