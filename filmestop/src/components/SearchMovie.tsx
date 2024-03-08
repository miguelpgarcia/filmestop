import { useState, useEffect } from 'react';
import MovieDetails from './MovieDetails.tsx';

function SearchMovie() {
  const [searchTerm, setSearchTerm] = useState('');
  const [movies, setMovies] = useState([]);
  const [selectedMovieId, setSelectedMovieId] = useState(null);




  useEffect(() => {
    if (searchTerm.trim() === '') return;

    fetch(`https://api.themoviedb.org/3/search/movie?query=${encodeURIComponent(searchTerm)}&api_key=c554dc7f8d98022b6c08ef85a702130c`, {
      method: "GET",
    })
    .then((response) => response.json())
    .then((data) => {
      setMovies(data.results);
    })
    .catch((error) => console.log(error));
  }, [searchTerm]);


  function handleClickMovie(movie){
    console.log('You clicked on a movie;');
    console.log(movie.id)
    /*console.log(movie.id)*/ 
    if (selectedMovieId === movie.id) setSelectedMovieId(null)
    else setSelectedMovieId(movie.id);
    return 
  }

  return (
    <div>
      <input 
        type="text" 
        placeholder="Search for a movie..." 
        value={searchTerm} 
        onChange={(e) => setSearchTerm(e.target.value)} 

      />
      <ul>
        {movies.map(movie => (
          <li key={movie.id} >
            <div onClick={() => handleClickMovie(movie)}>{movie.title}</div>
            {selectedMovieId === movie.id && <MovieDetails movie={movie} />  }
          </li>
        ))}
      </ul>
    </div>
  );
}
export default SearchMovie;


function Test(){
  return (<div>FODASE</div>)
}