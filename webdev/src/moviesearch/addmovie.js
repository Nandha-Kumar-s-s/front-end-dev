import React, { useState } from 'react';

const AddMovieForm = ({ addMovie }) => {

//addMovie is () in movie.js passing as a parameter
// initially set this things in empty "" the update occur once the user trigger the event
  const [movieName, setMovieName] = useState('');
  const [imdbRating, setImdbRating] = useState('');
  const [error, setError] = useState('');


//in this method the event parameter refers to event occur we are using onChange
//event.target refers to the element which triggers the event
//event.target.value represent the current value of the user input
  const handleMovieNameChange = (event) => {
    setMovieName(event.target.value);
    setError('');
  };

  const handleImdbRatingChange = (event) => {
    setImdbRating(event.target.value);
    setError('');
  };


// condition for adding a movie
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
// passing a movie object  to the addMovie()
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
