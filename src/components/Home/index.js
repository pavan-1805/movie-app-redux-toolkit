import React, { useEffect, useState } from "react";
import "./index.css";
import MovieList from "../MovieList";
import { useDispatch, useSelector } from "react-redux";
import CircularProgress from "@mui/material/CircularProgress";
import MovieApi from "../../common/apis/MovieApi";
import { APIKey } from "../../common/apis/MovieApiKey";
import {
  addMovies,
  fetchEpisodes,
  fetchSeries,
  getAllEpisodes,
  getAllMovies,
  getAllSeries,
  getEpisodesLoading,
  getMovieLoading,
  getSeriesLoading,
  setMovieLoading,
} from "../../features/movies/movieSlice";
const Home = () => {
  const dispatch = useDispatch();
  const movies = useSelector(getAllMovies);
  const movieLoading = useSelector(getMovieLoading);
  const series = useSelector(getAllSeries);
  const seriesLoading = useSelector(getSeriesLoading);
  // const episodes = useSelector(getAllEpisodes);
  // const episodesLoading = useSelector(getEpisodesLoading);
  
  useEffect(() => {
    dispatch(setMovieLoading(true));
    MovieApi.get(`?apiKey=${APIKey}&s='iron'&type=movie`)
      .then((response) => {
        dispatch(addMovies(response.data));
      })
      .catch((err) => {
        console.log("ERROR:", err);
        dispatch(addMovies({}));
      });
      dispatch(fetchSeries());
      dispatch(fetchEpisodes());
  }, []);
  return (
    <div className="banner">
      {movieLoading ? <CircularProgress /> : <MovieList data={movies} label={'Movies'}/>}
      {seriesLoading ? <CircularProgress /> : <MovieList data={series} label={'Series'}/>}
      {/* {episodesLoading ? <CircularProgress /> : <MovieList data={episodes} label={'Episodes'}/>} */}
    </div>
  );
};

export default React.memo(Home);
