const axios = require('axios');
const { Movies } = require('./entities/Movies');

const { API_KEY, BASE_URL } = process.env;

const discoverMovies = async (filter, lang) => {
  // console.log('🚀 ~ filter:', filter);
  const { data } = await axios.get(
    `${BASE_URL}discover/movie?api_key=${API_KEY}&language=${lang}&page=${filter.page}&year=${filter.year}&sort_by=${filter.sortBy}.${filter.sortDirection}&include_adult=${filter.includeAdult}&primary_release_year=${filter.primaryReleaseYear}&with_genres=${filter.genre}`
  );
  // console.log('🚀discoverMovies ~ data:', data);

  return new Movies(data);
};

const getDetails = (movieId, lang) => {
  return axios.get(
    `${BASE_URL}movie/${movieId}?api_key=${API_KEY}&language=${lang}`
  );
};

module.exports = {
  getDetails,
  discoverMovies,
};
