import React, { useState } from 'react';


// the movie obj is passed from the movie.js file
const SearchMovie = ({ movies }) => {

  const [searchTerm, setSearchTerm] = useState('');

  const handleSearchTermChange = (event) => {
    setSearchTerm(event.target.value);
  };

  // use the filter method to store only the search movie list
  // movies is array obj from the movie.js file use this arr to filter the movieName
  // filter() has a function its has the obj parameter for each objects in an array
  // It has the call back function is startsWith it compare the movieName and searchTerm
  // we use the toLowerCase for case sensitive issue 
  const filteredMovies = movies.filter((obj) =>
    obj.movieName.toLowerCase().startsWith(searchTerm.toLowerCase())
  );

  return (
    <div>
      <input
        type="text"
        placeholder="Search Movie"
        value={searchTerm}
        onChange={handleSearchTermChange}
      />

      {/* use the tenary operator to display the movieName if its statifies the condition */}
      {searchTerm && filteredMovies.length > 0 ?(
      <ul>
        {filteredMovies.map((movie, index) => (
          <>
            <li key={index} style={{ color: 'green' }}>{movie.movieName + " - " + movie.imdbRating}</li>
          </>
          
        ))}
      </ul>

      ):
      searchTerm === '' ?(
        <p>please enter the movie name</p>
      ):
      (<p style={{ color: 'red' }}>movie not found</p>)}
    </div>
  );
};

export default SearchMovie;