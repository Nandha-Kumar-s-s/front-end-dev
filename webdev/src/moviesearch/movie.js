import React, { useState } from 'react';
import AddMovieForm from './addmovie';
import SearchMovie from './searchmovie';

const MovieTable = () => {
  const [movies, setMovies] = useState([
    { movieName: 'jhon wick', imdbRating:8},
    { movieName: 'master', imdbRating: 7 },
  ]);

  const sortMovies = () => {
    const sortedMovies = [...movies].sort((a, b) =>
      a.movieName.localeCompare(b.movieName)
    );
    setMovies(sortedMovies);
  };

  const addMovie = (movie) => {
    setMovies([...movies, movie]);
  };

  return (
    <div>
      <button onClick={sortMovies}>Sort by Movie Name</button>
      <table>
        <thead>
          <tr>
            <th>Movie Name</th>
            <th>IMDB Rating</th>
          </tr>
        </thead>
        <tbody>
          {movies.map((movie, index) => (
            <tr key={index}>
              <td>{movie.movieName}</td>
              <td>{movie.imdbRating}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <AddMovieForm addMovie={addMovie} />
      <SearchMovie movies={movies}/>
    </div>
  );
};

export default MovieTable;