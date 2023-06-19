const { format } = require('date-fns');
const { IMAGE_BASE_PATH } = process.env;

class MovieDetails {
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
    this.voteAverage = movie.vote_average;

    this.genres = movie.genres;
  }

  //   genres() {
  //     if (this.movie.genre_ids) {
  //       // console.log('🚀 ~ Movie ~ genre_ids:', this.movie.genre_ids);

  //       return this.movie.genre_ids;
  //     }
  //     if (this.movie.genres) {
  //       console.log('🚀 ~ Movie ~ this.movie.genres:', this.movie.genres);
  //       return this.movie.genres;
  //     }
  //   }

  releaseDate(params) {
    if (!this.movie.release_date) return 'Unknown';

    return params.format
      ? format(new Date(this.movie.release_date), params.format)
      : this.movie.release_date;
  }
}

module.exports = { MovieDetails };
