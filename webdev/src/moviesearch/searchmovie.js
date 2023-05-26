import React, { useState } from 'react';

const SearchMovie = ({ movies }) => {

  const [searchTerm, setSearchTerm] = useState('');

  const handleSearchTermChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const filteredMovies = movies.filter((movie) =>
    movie.movieName.toLowerCase().startsWith(searchTerm.toLowerCase())
  );

  return (
    <div>
      <input
        type="text"
        placeholder="Search Movie"
        value={searchTerm}
        onChange={handleSearchTermChange}
      />
      {searchTerm && filteredMovies.length > 0 ?(
      <ul>
        {filteredMovies.map((movie, index) => (
          <li key={index}>{movie.movieName}</li>
        ))}
      </ul>

      ):(<p>please enter the movieName</p>)}
    </div>
  );
};

export default SearchMovie;