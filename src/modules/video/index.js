const axios = require('axios');
const { Trailer } = require('./entities/Trailer');

const { API_KEY, BASE_URL } = process.env;

const getTrailer = async (movieId, lang) => {
  const { data } = await axios.get(
    `${BASE_URL}movie/${movieId}/videos?api_key=${API_KEY}&language=${lang}`
  );

  return new Trailer(data);
};

module.exports = {
  getTrailer,
};
