import React, { useState ,useEffect} from 'react';
import AddMovieForm from './addmovie';
import SearchMovie from './searchmovie';


// MovieTable is a parent component 
const MovieTable = () => {

//use the useState() to set intial value
  const [movies, setMovies] = useState([
    { movieName: 'jhon wick', imdbRating:8},
    { movieName: 'master', imdbRating: 7 },
  ]);


//in sortMovies() we use a speard operator for movies array sort is inbuilt js method it take two parameters
//it compare the string in the local until the every object in a array
  const sortMovies = () => {
    const sortedMovies = [...movies].sort((a, b) =>
      a.movieName.localeCompare(b.movieName)
    );

// set the sortedMovies in the setMovie function
    setMovies(sortedMovies);
  };


//addMovie() is used to add the movie when the input is qiven 
  const addMovie = (movie) => {
    setMovies([...movies, movie]);
  };

//useEffect() for checking how the component rendered
  useEffect(() => {
    console.log('Keys and Values:');
    movies.forEach((movie, index) => {
      console.log('Key:', index, 'Value:', movie);
    });
  }, [movies]);

  return (
    <div>

      {/* once the button is clicked it calls the sortMovies() */}
      <button onClick={sortMovies}>Sort by Movie Name</button>
      <table>
        <thead>
          <tr>
            <th>Movie Name</th>
            <th>IMDB Rating</th>
          </tr>
        </thead>
        <tbody>

        {/*map() use the array movies and has 2 parameter one is temporary array and index value is generated by map() */}
          {movies.map((movie, index) => (
            <tr key={index}>
              <td>{movie.movieName}</td>
              <td>{movie.imdbRating}</td>
            </tr>
          ))}
        </tbody>
      </table>
      {/* passing a addMovie() as a parameter for the AddMovieForm component */}
      <AddMovieForm addMovie={addMovie} />
      {/* passing a movies obj as a parameter for the SearchMovie component */}
      <SearchMovie movies={movies}/>
    </div>
  );
};

export default MovieTable;