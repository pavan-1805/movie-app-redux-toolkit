import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import CircularProgress from "@mui/material/CircularProgress";
import "./index.css";
import { useParams } from "react-router";
import {
  fetchMovieOrSeriesDetails,
  getSelectedMovieOrSeries,
  getSelectedMovieOrSeriesLoading,
  removeSelectedMovieOrSeries,
} from "../../features/movies/movieSlice";
const MovieDetails = () => {
  const { imdbID } = useParams();
  // console.log({imdbID});
  const dispatch = useDispatch();
  const selectedMovieOrSeries = useSelector(getSelectedMovieOrSeries);
  const selectedMovieOrSeriesLoading = useSelector(
    getSelectedMovieOrSeriesLoading
  );
  console.log({ selectedMovieOrSeries });
  useEffect(() => {
    dispatch(fetchMovieOrSeriesDetails(imdbID));
    return () => {
      dispatch(removeSelectedMovieOrSeries());
    };
  }, [imdbID]);

  return (
    <div className="movie-section">
      {Object.keys(selectedMovieOrSeries).length === 0 ? (
        <CircularProgress />
      ) : (
        <>
          <div className="section-left">
            <div className="movie-title">{selectedMovieOrSeries.Title}</div>
            <div className="movie-rating">
              <span>
                IMDB Rating <i className="fa fa-star"></i> :{" "}
                {selectedMovieOrSeries.imdbRating}
              </span>
              <span>
                IMDB Votes <i className="fa fa-thumbs-up"></i> :{" "}
                {selectedMovieOrSeries.imdbVotes}
              </span>
              <span>
                Runtime <i className="fa fa-film"></i> :{" "}
                {selectedMovieOrSeries.Runtime}
              </span>
              <span>
                Year <i className="fa fa-calendar"></i> :{" "}
                {selectedMovieOrSeries.Year}
              </span>
            </div>
            <div className="movie-plot">{selectedMovieOrSeries.Plot}</div>
            <div className="movie-info">
              <div>
                <span>Director</span>
                <span>{selectedMovieOrSeries.Director}</span>
              </div>
              <div>
                <span>Stars</span>
                <span>{selectedMovieOrSeries.Actors}</span>
              </div>
              <div>
                <span>Generes</span>
                <span>{selectedMovieOrSeries.Genre}</span>
              </div>
              <div>
                <span>Languages</span>
                <span>{selectedMovieOrSeries.Language}</span>
              </div>
              <div>
                <span>Awards</span>
                <span>{selectedMovieOrSeries.Awards}</span>
              </div>
            </div>
          </div>
          <div className="section-right">
            <img
              src={selectedMovieOrSeries.Poster}
              alt={selectedMovieOrSeries.Title}
            />
          </div>
        </>
      )}
    </div>
  );
};

export default MovieDetails;
