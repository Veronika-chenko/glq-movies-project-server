class Trailer {
  constructor(trailer) {
    this.id = trailer.id;
    this.key = trailer?.results[0]?.key;
  }
}

module.exports = { Trailer };
