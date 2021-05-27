import './App.css';
import { useEffect, useState} from "react";
import React from "react";
import RecipeCard from "./RecipeCard";
import Footer from "./Footer";
import TopMenu from "./TopMenu"
import 'bootstrap/dist/css/bootstrap.min.css';
import {BsSearch} from 'react-icons/bs';




export default function App() {
  const [recipies, setRecipies] = useState([]);
  const [search, setSearch] = useState("");
  const [query, setQuery] = useState('Spanish tortilla');

  const API_KEY = "a2abe5efbdbff70e0fc6f6a43990df7d";
  const APP_ID = "484ef14f";
  
  
  useEffect(() => {

  const getRecipies = async () => {
  const response = await fetch(`https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${API_KEY}`);
  const data = await response.json();
  setRecipies(data.hits);
  console.log(data.hits);
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
      <TopMenu />
      <header>
      <form className= "search-form" onSubmit={handleSubmit}> 
        <input className= "search-field" type="text" placeholder="Search recipes and more..." value={search} onChange={handleSearch}></input>
        <button><BsSearch className="srch-btn"/></button>
      </form>
      </header>
      <div className="recipes">
      {recipies.slice(0, 8).map(recipe => (
      <RecipeCard
      key={recipe.recipe.uri}
      name={recipe.recipe.label}
      image={recipe.recipe.image}
      ingredients={recipe.recipe.ingredients} 
      url={recipe.recipe.url}
      calories={recipe.recipe.calories}
        />
        ))}
        </div>
        <footer>
          <Footer/>
        </footer>
    </div>
  );
}


