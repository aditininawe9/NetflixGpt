import React from 'react'
import MovieCard from './MovieCard'

const MovieList = ({ title, movies = [] }) => {
    if (!movies || movies.length === 0) {
      return <p>Loading...</p>; // Show loading message until data arrives
    }
  
    return (
      <div className='px-6'>
        <h1 className='text-3xl py-2 px-2 text-white'>{title}</h1>
        <div className='flex overflow-x-scroll'>
        <div className='flex'>
        {movies?.map((movie) => (
            <MovieCard key={movie.id} posterPath={movie?.poster_path} />
        ))}
        </div>
        </div>
      </div>
    );
  };

export default MovieList
