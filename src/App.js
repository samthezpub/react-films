import logo from './logo.svg';
import films from './components/films';
import './App.css';
import FilmsList from './components/FilmsList';


function App() {
  return (
    <div>
      <ul style={{padding:'0px', display: "flex", justifyContent: "space-evenly"}}>
        {films.map(film => (
          <li><FilmsList 
          title={film.name} 
          image={film.image} 
          year={film.year} 
          id={film.id}/></li>
        ))}
        
    </ul>
    </div>
  );
}

export default App;
