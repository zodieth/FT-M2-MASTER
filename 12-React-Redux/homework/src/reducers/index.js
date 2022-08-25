import {
  GET_MOVIES,
  ADD_MOVIE_FAVORITE,
  GET_MOVIE_DETAIL,
  REMOVE_MOVIE_FAVORITE,
} from "../actions";

const initialState = {
  moviesFavourites: [],
  moviesLoaded: [],
  movieDetail: {},
};

export function reducer(state = initialState, { type, payload }) {
  switch (type) {
    case ADD_MOVIE_FAVORITE: {
      return {
        ...JSON.parse(JSON.stringify(state)),
        moviesFavourites: [
          ...JSON.parse(JSON.stringify(state.moviesFavourites)),
          payload,
        ],
      };
    }

    case GET_MOVIES: {
      return {
        ...JSON.parse(JSON.stringify(state)),
        moviesLoaded: payload.Search,
      };
    }
    case GET_MOVIE_DETAIL: {
      return {
        ...JSON.parse(JSON.stringify(state)),
        movieDetail: payload,
      };
    }
    case REMOVE_MOVIE_FAVORITE: {
      return {
        ...JSON.parse(JSON.stringify(state)),
        moviesFavourites: [
          ...JSON.parse(JSON.stringify(state.moviesFavourites)).filter(
            (movie) => movie.imdbID !== payload
          ),
        ],
      };
    }
    default:
      return state;
  }
}
