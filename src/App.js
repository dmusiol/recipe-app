import './App.css';
import { useEffect, useState} from "react";
import React from "react";
import RecipeCard from "./RecipeCard";



export default function App() {
  const [recipies, setRecipies] = useState([]);
  const [search, setSearch] = useState("");
  const [query, setQuery] = useState('chicken');

  const API_KEY = "a2abe5efbdbff70e0fc6f6a43990df7d";
  const APP_ID = "484ef14f";
  
  
  useEffect(() => {

  const getRecipies = async () => {
  const response = await fetch(`https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${API_KEY}`);
  const data = await response.json();
  setRecipies(data.hits);
}
    getRecipies();
    
  }, [query]);


const handleSearch = e => {
  setSearch(e.target.value);
}

const handleSubmit = e => {
e.preventDefault();
setQuery(search)
setSearch('');
}


  return (
    <div className="App">
      <h1>👩🏻‍🍳 Find your recipe!</h1>
      <form className= "search-form" onSubmit={handleSubmit}>
        <input className= "search-field" type="text" value={search} onChange={handleSearch}></input>
        <button className="search-btn" type="submit">Go!</button>
      </form>
      <div className="recipies">
      {recipies.map(recipe => (
      <RecipeCard
      key={recipe.recipe.label}
      name={recipe.recipe.label}
      image={recipe.recipe.image}
      ingredients={recipe.recipe.ingredients} 
        />
        ))}
        </div>
    </div>
  );
}


