import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { MovieCard, Loading } from '../components';
import * as movieAPI from '../services/movieAPI';

class MovieList extends Component {
  constructor() {
    super();

    this.state = {
      movies: [],
      loading: true,
    };
  }

  componentDidMount() {
    this.requestMovie();
  }

  requestMovie = async () => {
    const requestion = await movieAPI.getMovies();
    this.setState({
      movies: [...requestion],
      loading: false,
    });
  }

  render() {
    const { movies, loading } = this.state;
    // Render Loading here if the request is still happening
    if (loading) return <Loading />;
    return (
      <div data-testid="movie-list">
        <div className="movie-list">
          {movies.map((movie) => <MovieCard key={ movie.title } movie={ movie } />)}
        </div>
        <Link className="bottons" to="/movies/new">ADICIONAR CARTÃO</Link>
      </div>
    );
  }
}

export default MovieList;
