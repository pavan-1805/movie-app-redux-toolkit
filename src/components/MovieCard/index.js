import React from "react";
import "./index.css";
import { Link } from "react-router-dom";
const MovieCard = (props) => {
  const { movie } = props;
  return (
    <div className="movie-card">
      <Link to={`/movie/${movie.imdbID}`}>
        <div className="card">
          <div className="card-image">
            <img className="image" src={movie.Poster} alt={movie.Title} />
          </div>
          <div className="card-info">
            <div className="info">
              <h4>{movie.Title}</h4>
              <p>{movie.Year}</p>
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default MovieCard;
