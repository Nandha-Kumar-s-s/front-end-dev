import React, { useState } from 'react';

const AddMovieForm = ({ addMovie }) => {

  const [movieName, setMovieName] = useState('');
  const [imdbRating, setImdbRating] = useState('');
  const [error, setError] = useState('');

  const handleMovieNameChange = (event) => {
    setMovieName(event.target.value);
    setError('');
  };

  const handleImdbRatingChange = (event) => {
    setImdbRating(event.target.value);
    setError('');
  };

  const handleAddMovie = () => {
    let errorMessage = '';

    if (movieName.trim() === '') {
        errorMessage = 'Movie name cannot be empty.';
    }

    else if (movieName.trim().length < 3) {
    errorMessage = 'Movie name should have at least 3 characters.';
    } 

    else if (imdbRating.trim() === '') {
    errorMessage = 'IMDB rating cannot be empty.';
    }

    else if (isNaN(parseFloat(imdbRating)) || parseFloat(imdbRating) <= 0) {
      errorMessage = 'IMDB rating should be a positive number.';
    } 

    else {
    const movie = {
      movieName: movieName.trim(),
      imdbRating: parseFloat(imdbRating.trim()),
    };

    addMovie(movie);

    setMovieName('');
    setImdbRating('');
    }

    setError(errorMessage);
};

  return (
    <div>
      <input
        type="text"
        placeholder="Movie Name"
        value={movieName}
        onChange={handleMovieNameChange}
      />

      <input
        type="text"
        placeholder="IMDB Rating"
        value={imdbRating}
        onChange={handleImdbRatingChange}
      />
      
      <button onClick={handleAddMovie}>Add Movie</button>
      {error && <p style={{ color: 'red' }}>{error}</p>}
    </div>
  );
};

export default AddMovieForm;
