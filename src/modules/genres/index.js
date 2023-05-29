const axios = require('axios');
const { Genre } = require('./entities/Genre');

const { API_KEY, BASE_URL } = process.env;

const getList = async (lang) => {
  //   console.log('🚀 ~ lang:', lang);
  const { data } = await axios.get(
    `${BASE_URL}genre/movie/list?api_key=${API_KEY}&language=${lang}`
  );
  //   console.log('🚀 ~ getMovieList ~ genres:', data.genres);

  return data.genres.map((genre) => new Genre(genre));
};

module.exports = {
  getList,
};
