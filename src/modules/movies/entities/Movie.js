const { format } = require('date-fns');
const { IMAGE_BASE_PATH } = process.env;

class Movie {
  constructor(movie) {
    this.movie = movie;
    this.id = movie.id;
    this.originalTitle = movie.original_title;
    this.posterPath = `${IMAGE_BASE_PATH}${movie.poster_path}`;
    this.adult = movie.adult;

    this.backdropPath = `${IMAGE_BASE_PATH}${movie.backdrop_path}`;
    this.originalLanguage = movie.original_language;
    this.overview = movie.overview;
    this.popularity = movie.popularity;

    this.title = movie.title;
    this.video = movie.video;
    this.voteCount = movie.vote_count;
    this.voteAvarage = movie.vote_average;
  }

  releaseDate(params) {
    if (!this.movie.release_date) return 'Unknown';

    return params.format
      ? format(new Date(this.movie.release_date), params.format)
      : this.movie.release_date;
  }
}

module.exports = { Movie };
