class Trailer {
  constructor(trailer) {
    this.id = trailer.id;
    this.name = trailer.results[0].name;
    this.key = trailer.results[0].key;
  }
}

module.exports = { Trailer };
