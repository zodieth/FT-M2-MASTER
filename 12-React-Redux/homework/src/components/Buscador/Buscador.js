import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { getMovies } from "../../actions";
import { addMovieFavorite } from "../../actions";
import { AiFillHeart, AiOutlineHeart } from "react-icons/ai";

import "./Buscador.css";

export class Buscador extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
    };
  }
  handleChange(event) {
    this.setState({ title: event.target.value });
  }
  handleSubmit(event) {
    event.preventDefault();
    this.props.getMovies(this.state.title);
  }

  movieIsFavorite(imdbID) {
    return this.props.favorites.find((fav) => fav.id === imdbID) ? true : false;
  }

  render() {
    const { title } = this.state;
    return (
      <div>
        <h2>Buscador</h2>
        <form className="form-container" onSubmit={(e) => this.handleSubmit(e)}>
          <div>
            <label className="label" htmlFor="title">
              Película:{" "}
            </label>
            <input
              type="text"
              id="title"
              autoComplete="off"
              value={title}
              onChange={(e) => this.handleChange(e)}
            />
          </div>
          <button type="submit">BUSCAR</button>
        </form>
        <ul>
          {this.props.movies?.map((movie) => (
            <li key={movie.imdbID}>
              {" "}
              <Link to={`/movie/${movie.imdbID}`}>{movie.Title}</Link>
              <button
                onClick={() =>
                  this.props.addMovieFavorite({
                    Title: movie.title,
                    id: movie.imdbID,
                  })
                }
              >
                {this.movieIsFavorite(movie.imdbID) ? (
                  <AiFillHeart />
                ) : (
                  <AiOutlineHeart />
                )}
              </button>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  movies: state.moviesLoaded,
  favorites: state.moviesFavourites,
});

const mapDispatchToProps = (dispatch) => ({
  getMovies: (title) => dispatch(getMovies(title)),
  addMovieFavorite: (movie) => dispatch(addMovieFavorite(movie)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Buscador);
