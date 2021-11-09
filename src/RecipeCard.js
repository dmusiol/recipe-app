import React from "react";
import style from "./recipe.module.css";
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

const RecipeCard = ({name,image,url,calories,ingredients}) => {
   
    let caloriesNum = Math.round(calories);
    

    function displayFullRecipe(e) {
        e.preventDefault();
        window.open(url);
    }
    
    return(
    <Card style={{ width: '19rem' }} className={style.recipe}>
        <Card.Img variant="top" src={image} className={style.image} />
        <Card.Body>
            <Card.Title className={style.h3}>{name}</Card.Title>
            <Card.Text className={style.calories}>
                <strong>Calories:</strong> {caloriesNum} kcals
            </Card.Text>
            <Card.Text className={style.ingredients}>
               <strong>Ingredients: </strong>∙{ingredients.slice(0, 3).map(ingredient => (
                   <span key={ingredient.foodID}> {ingredient.text} ∙</span>
               )) }
           </Card.Text>
        <Button variant="danger" onClick={displayFullRecipe} className="recipe-btn">Full recipe</Button>
        </Card.Body>
    </Card>
    );
}

export default RecipeCard