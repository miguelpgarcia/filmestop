import '../styles/MovieDetails.css'
import { useState, useEffect } from 'react';

function MovieDetails({movie}) {
    const [movieDetailed, setMovieDetailed] = useState(null);
    useEffect(() => {
        // Fetch movie details when the component mounts or when the movie prop changes
        fetch(`https://api.themoviedb.org/3/movie/${encodeURIComponent(movie.id)}?api_key=c554dc7f8d98022b6c08ef85a702130c`)
          .then(response => response.json())
          .then(data => {
            setMovieDetailed(data);
            console.log("DADOS");
            console.log(data);
          })
          .catch(error => console.error("Error fetching movie details:", error));
      }, [movie]);
    
    
      return (
        <div className="movie-details-container">
          {movieDetailed && (
            <div className="movie-details">
              <h2>{movieDetailed.title}</h2>
              <p>{movieDetailed.overview}</p>
              <div className="image-container">
                <img
                  className="image"
                  src={`https://image.tmdb.org/t/p/w500${movieDetailed.poster_path}`}
                  alt={movieDetailed.title}
                />
              </div>
              <p>{movieDetailed.release_date}</p>
            </div>
            
          )}
        </div>
      );
}




export default MovieDetails;