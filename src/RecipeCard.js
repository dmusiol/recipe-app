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
            <Card.Text className={style.ingredients}>
               <span>Calories:</span> {caloriesNum}
               <br/>
               <span>Ingredients:</span> {ingredients[0].text}, {ingredients[1].text}, {ingredients[2].text}
            </Card.Text>
        <Button variant="danger" onClick={displayFullRecipe}>Full recipe</Button>
        </Card.Body>
    </Card>
    );
}

export default RecipeCard