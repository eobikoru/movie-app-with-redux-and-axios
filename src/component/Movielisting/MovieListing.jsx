import React from "react";
import { useSelector } from "react-redux";
import { getAllMovies } from "../../features/movies/movieSlice";
import MovieCard from "../movieCard/MovieCard";
import './MovieListing.scss'
function MovieListing() {
  const movies = useSelector(getAllMovies);

  let renderMovies = "";

  renderMovies =
    movies.Response === "True" ? (
      movies.Search.map((movie, index) => {
       return  <MovieCard key={index} data={movie} />;
      })
    ) : (
      <div className="movies-error">{movies.error}</div>
    );
  return (
    <div className="movie-wrapper">
      <div className="movie-list">
        <h2>movies</h2>
        <div className="movie-container">{renderMovies}</div>
      </div>
    </div>
  );
}

export default MovieListing;