import logo from './logo.svg';
import './App.css';
import FilmListing from './components/FilmListing';
import films from './films';
import AddFilms from './components/AddFilms';
import { useState } from 'react';

function App() {

  const [searchTerm, setSearchTerm] = useState('');
  const [searchResult, setSearchResult] = useState(null);

  const findValue = () => {
    let name = document.getElementById("search").value;
    const result = films.find((item) => item.name === searchTerm);
    setSearchResult(result);
  }
  



  return (
    <div id='app' className="App">
      <h3>Films</h3>
      <div>
        <input name='search' id='search' onChange={(e) => setSearchTerm(e.target.value)}></input>
        {searchResult && (
        <div >
          <div className='card'>
          <h3>Search Result:</h3>
          
          <img width={100} height={150} src={searchResult.image}></img>
          <span className='info'>
            <p>{searchResult.name}</p>
            <p>{searchResult.year}</p>
          </span>
          </div>
        </div>
      )}

        <button id='search_button' onClick={findValue}>Search</button>
      </div>
      <div className='cards' id='cards'>
        {films.map((film) =>
        <FilmListing film={film}/>
      )}
      </div>

      <h3>Add</h3>
      <AddFilms />

      <div id='container_other' className='message hidden'>
          <p id='p_director'></p>
          <p id='p_description'></p>
      </div>
    </div>
  );
}

export default App;
