
import { useState } from 'react';
import GenreListClick from './GenreListClick';

function GenreList() {
  const [selectedGenre, setSelectedGenre] = useState(null);
  const [movies, setMovies] = useState([]);


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

  return (
    <div>
      <h1>Movie Genres</h1>
      <GenreListClick onGenreClick={handleGenreClick} />
      {selectedGenre && <p>Selected genre: {selectedGenre}</p>}
      <h2>Movies</h2>
      <div>
          {movies.map(movie => (
                <div key={movie.id}>
                    <h3>{movie.title}</h3> 
                </div>
          ))}
      </div>
    </div>
  );
}

export default GenreList;
