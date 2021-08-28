import React from 'react';
import MovieShowCard from './MovieShowCard';

const MovieShow = ({ show, selectHandler, fromSearch }) => {
  return (
    <button
      className="bg-white p-1 rounded-md text-start text-gray-500 hover:text-gray-900 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
      onClick={() => selectHandler(show)}
    >
      <MovieShowCard show={show} fromSearch={fromSearch} />
    </button>
  );
};

export default MovieShow;
