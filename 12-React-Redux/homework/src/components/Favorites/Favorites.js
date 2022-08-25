import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import "./Favorites.css";
import { removeMovieFavorite } from "../../actions";
import { AiFillHeart, AiOutlineHeart } from "react-icons/ai";

export class ConnectedList extends Component {
  movieIsFavorite(imdbID) {
    return this.props.favorites.find((fav) => fav.id === imdbID) ? true : false;
  }
  render() {
    return (
      <div>
        <h2>Películas Favoritas</h2>

        <ul>
          {this.props.favorites?.map((movie) => (
            <li key={movie.id}>
              <Link to={`/movie/${movie.id}`}>{movie.title}</Link>

              <button onClick={() => this.props.remove(movie.id)}>
                {this.movieIsFavorite(movie.id) ? (
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
  favorites: state.moviesFavourites,
});

const mapDispatchToProps = (dispatch) => ({
  remove: (id) => dispatch(removeMovieFavorite(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ConnectedList);
