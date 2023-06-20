import logo from './logo.svg';
import './App.css';
import FilmListing from './components/FilmListing';
import films from './films';
import AddFilms from './components/AddFilms';

function App() {
  return (
    <div id='app' className="App">
      <h3>Films</h3>
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
