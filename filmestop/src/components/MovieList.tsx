import { useState, useEffect } from 'react';
import MovieDetails from './MovieDetails.tsx';
import GenreList from './GenreList';
import '../styles/MovieList.css'

function MovieList() {
  const [searchTerm, setSearchTerm] = useState('');
  const [movies, setMovies] = useState([]);
  const [selectedMovieId, setSelectedMovieId] = useState(null);
  const [selectedGenre, setSelectedGenre] = useState(null);


  const handleGenreClick = (genreId) => {
    setSelectedGenre(genreId);
    // Perform desired action with the selected genre ID
    fetch(`https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&with_genres=${genreId}&api_key=c554dc7f8d98022b6c08ef85a702130c`)
    .then(response => response.json())
    .then(data => {
      setMovies(data.results);
      console.log("Resultado Generos:", data.results);
    })
    .catch(error => console.error("Error fetching movies:", error));
  };


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
    if (selectedMovieId === movie.id) setSelectedMovieId(null);
    else setSelectedMovieId(movie.id);
    return 
  }

  return (
    <div class = "movieList">
      <GenreList onGenreClick={handleGenreClick} />
      <div class = "searchInputContainer">
      <input class = "searchInput"
        type="text" 
        placeholder="Search for a movie..." 
        value={searchTerm} 
        onChange={(e) => setSearchTerm(e.target.value)} 

      />
      </div>
      <ul>
        {movies.map(movie => (
          <ul class = "ul" key={movie.id} >
            <div className = "movie-title" onClick={() => handleClickMovie(movie)}>{movie.title}</div>
            {selectedMovieId === movie.id && <MovieDetails movie={movie} />  }
          </ul>
        ))}
      </ul>
    </div>
  );
}
export default MovieList;


