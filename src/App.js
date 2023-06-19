import logo from './logo.svg';
import './App.css';
import FilmListing from './components/FilmListing';
import films from './films';
import AddFilms from './components/AddFilms';

function App() {
  return (
    <div className="App">
      <h3>Films</h3>
      <div className='cards' id='cards'>
        {films.map((film) =>
        <FilmListing film={film}/>
      )}
      </div>

      <h3>Add</h3>
      <AddFilms />
    </div>
  );
}

export default App;
