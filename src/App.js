import './App.css';

function App() {

  const apiKEY = "b9543425f8c6abba5d47a0427007a82b";
  const appID = "484ef14f";

  const apiURL = `https://api.edamam.com/search?q=chicken&app_id=${appID}&app_key=${apiKEY}`;

  return (
    <div className="App">
      <form>
        <input type="text"></input>
        <button type="submit"></button>
      </form>
    </div>
  );
}

export default App;
