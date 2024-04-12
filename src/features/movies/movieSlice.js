import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import MovieApi from "../../common/apis/MovieApi";
import { APIKey } from "../../common/apis/MovieApiKey";

export const fetchSeries = createAsyncThunk(
  "movies/ftechAsyncShows",
  async () => {
    const response = await MovieApi.get(
      `?apiKey=${APIKey}&s='wolf'&type=series`
    );
    return response.data;
  }
);
export const fetchEpisodes = createAsyncThunk(
  "movies/ftechAsyncEpisodes",
  async () => {
    const response = await MovieApi.get(
      `?apiKey=${APIKey}&t=Game of Thrones&Season=1`
    );
    return response.data;
  }
);
export const fetchMovieOrSeriesDetails = createAsyncThunk(
  "movies/fetchMovieOrSeriesDetails",
  async (id) => {
    // MovieApi.get(`?apiKey=${APIKey}&i=${id}&plot=full`)
    // .then(res=>res.data)
    // .catch(err=>err)
    const response = await MovieApi.get(`?apiKey=${APIKey}&i=${id}&plot=full`);
    return response.data;
  }
);

const initialState = {
  movies: {},
  movieLoading: false,
  series: {},
  seriesLoading: false,
  episodes: {},
  episodesLoading: false,
  selectedMovieOrSeries: {},
  selectedMovieOrSeriesLoading: false,
};

const movieSlice = createSlice({
  name: "movies",
  initialState,
  reducers: {
    addMovies: (state, { type, payload }) => {
      console.log({ state, payload });
      state.movies = payload;
      state.movieLoading = false;
    },
    setMovieLoading: (state, { type, payload }) => {
      state.movieLoading = payload;
    },
    removeSelectedMovieOrSeries: (state, { type, payload }) => {
        state.selectedMovieOrSeries = {}
    }
  },
  extraReducers: (builder) => {
    builder.addCase(fetchSeries.pending, (state, { type, payload }) => {
      state.seriesLoading = true;
    });
    builder.addCase(fetchSeries.fulfilled, (state, { type, payload }) => {
      state.seriesLoading = false;
      state.series = payload;
    });
    builder.addCase(fetchSeries.rejected, (state, { type, payload }) => {
      state.seriesLoading = false;
      state.series = {};
    });
    builder.addCase(fetchEpisodes.pending, (state, { type, payload }) => {
      state.episodesLoading = true;
    });
    builder.addCase(fetchEpisodes.fulfilled, (state, { type, payload }) => {
      state.episodesLoading = false;
      state.episodes = payload;
    });
    builder.addCase(fetchEpisodes.rejected, (state, { type, payload }) => {
      state.episodesLoading = false;
      state.episodes = {};
    });
    builder.addCase(
      fetchMovieOrSeriesDetails.pending,
      (state, { type, payload }) => {
        state.selectedMovieOrSeriesLoading = true;
      }
    );
    builder.addCase(
      fetchMovieOrSeriesDetails.fulfilled,
      (state, { type, payload }) => {
        console.log("payload:", payload);
        state.selectedMovieOrSeriesLoading = false;
        state.selectedMovieOrSeries = payload;
      }
    );
    builder.addCase(
      fetchMovieOrSeriesDetails.rejected,
      (state, { type, payload }) => {
        state.selectedMovieOrSeriesLoading = false;
        state.selectedMovieOrSeries = {};
      }
    );
  },
});
// console.log({ movieSlice });
export const { addMovies, setMovieLoading, removeSelectedMovieOrSeries } = movieSlice.actions;
export const getAllMovies = (state) => state.moviesReducer.movies;
export const getMovieLoading = (state) => state.moviesReducer.movieLoading;
export const getAllSeries = (state) => state.moviesReducer.series;
export const getSeriesLoading = (state) => state.moviesReducer.seriesLoading;
export const getAllEpisodes = (state) => state.moviesReducer.episodes;
export const getEpisodesLoading = (state) =>
  state.moviesReducer.episodesLoading;
export const getSelectedMovieOrSeries = (state) =>
  state.moviesReducer.selectedMovieOrSeries;
export const getSelectedMovieOrSeriesLoading = (state) =>
  state.moviesReducer.selectedMovieOrSeriesLoading;
export default movieSlice.reducer;
