const { getList } = require('../modules/genres');
const { getDetails, discoverMovies } = require('../modules/movies');
// const { Movie } = require('../modules/movies/entities/Movie');
const { MovieDetails } = require('../modules/movies/entities/MovieDetails');
const { getTrailer } = require('../modules/video');

async function movies(parent, args, { locale }) {
  // console.log('🚀 ~ args.filter:', args.filter);
  const data = await discoverMovies(args.filter, locale);
  // console.log('🚀 ~ data:', data);
  return data;
}

async function moviesByIds(parent, { ids }, { locale }) {
  const requests = ids.map((id) => getDetails(id, locale));

  const data = await Promise.all(requests);
  // const movies = data.map(({ data }) => new Movie(data));
  const movies = data.map(({ data }) => new MovieDetails(data));
  // console.log('🚀 ~ movies:', movies);
  return movies;
}

async function genres(_, {}, { locale }) {
  const data = await getList(locale);
  return data;
}

async function trailer(parent, { id }, { locale }) {
  const data = await getTrailer(id, locale);
  return data;
}

module.exports = {
  movies,
  moviesByIds,
  genres,
  trailer,
};
