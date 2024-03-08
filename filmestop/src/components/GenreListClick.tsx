
import { useState, useEffect } from 'react';

function GenreListClick({ onGenreClick }) {
  const [genres, setGenres] = useState([]);

  useEffect(() => {
    fetch('https://api.themoviedb.org/3/genre/movie/list?language=en-US&api_key=c554dc7f8d98022b6c08ef85a702130c')
      .then(response => response.json())
      .then(data => {
        setGenres(data.genres);
      })
      .catch(error => console.error("Error fetching genre list:", error));
  }, []);

  return (
    <div>
      <h2>Genres</h2>
      <div>
        {genres.map(genre => (
          <button key={genre.id} onClick={() => onGenreClick(genre.id)}>{genre.name}</button>
        ))}
      </div>
    </div>
  );
}

export default GenreListClick;

