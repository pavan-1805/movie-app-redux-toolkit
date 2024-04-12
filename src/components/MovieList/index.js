import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { getAllMovies } from "../../features/movies/movieSlice";
import MovieCard from "../MovieCard";
import "./index.css";
const MovieList = (props) => {
  const { data, label } = props;

  return (
    <div className="movie-wrapper">
      <div className="movie-list">
        <h2 className="movie-heading">{label}</h2>
        <div className="movie-container">
          {data.Response === "True" ? (
            <>
              {data.Search.map((movie, index) => (
                <>
                  <MovieCard key={index} movie={movie} />
                </>
              ))}
            </>
          ) : (
            <div className="movies-error">
              <h3>{data.Error}</h3>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default React.memo(MovieList);
