const axios = require('axios');
const { Movies } = require('./entities/Movies');

const { API_KEY, BASE_URL } = process.env;

const getPopular = async (page, lang) => {
  // console.log('🚀 ~ lang:', lang);
  const { data } = await axios.get(
    `${BASE_URL}discover/movie?include_adult=false&include_video=false&language=${lang}&page=${page}&sort_by=popularity.desc&api_key=${API_KEY}`
  );

  return new Movies(data);
};

const getDetails = (movieId, lang) => {
  return axios.get(
    `${BASE_URL}movie/${movieId}?api_key=${API_KEY}&language=${lang}`
  );
};

const discoverMovies = async (filter, lang) => {
  console.log('🚀 ~ filter:', filter);
  const { data } = await axios.get(
    `${BASE_URL}discover/movie?api_key=${API_KEY}&language=${lang}&page=${filter.page}&year=${filter.year}&sort_by=${filter.sortBy}.${filter.sortDirection}&include_adult=${filter.includeAdult}&primary_release_year=${filter.primaryReleaseYear}&with_genres=${filter.genres}`
  );
  // console.log('🚀discoverMovies ~ data:', data);

  return new Movies(data);
};

module.exports = {
  getPopular,
  getDetails,
  discoverMovies,
};
