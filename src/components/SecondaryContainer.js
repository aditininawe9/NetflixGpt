import React from "react";
import { useSelector } from "react-redux";
import MovieList from "./MovieList";

const SecondaryContainer = () => {
  const movies = useSelector((store) => store.movie);
  return (
    <div className=" -mt-15 relative z-20">
      <div className="bg-black">
        <MovieList title={"Now Playing"} movies={movies?.nowPlayinMovies} />
        <MovieList title={"Trending"} movies={movies?.trendingMovies} />
        <MovieList title={"Popular"} movies={movies?.popularMovies} />
        <MovieList title={"Upcoming Movies"} movies={movies?.upcomingMovies} />
        <MovieList title={"Horror"} movies={movies?.nowPlayinMovies} />
      </div>
    </div>
  );
};

export default SecondaryContainer;
