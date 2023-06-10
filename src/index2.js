const fs = require('fs');
const path = require('path');
const express = require('express');
const logger = require('morgan');
const cors = require('cors');
const { ApolloServer } = require('@apollo/server');
const { expressMiddleware } = require('@apollo/server/express4');

require('dotenv').config();

const { PORT } = process.env;
const Query = require('./resolvers/Query');

// graphql
const resolvers = {
  Query,
};

const typeDefs = fs.readFileSync(
  path.join(__dirname, 'schema.graphql'),
  'utf8'
);
// context
const context = ({ req, res }) => ({
  locale: req?.headers?.locale || 'en-US',
});

const app = express();
const port = PORT || 80;

(async function () {
  try {
    const server = new ApolloServer({
      typeDefs,
      resolvers,
      context,
      introspection: true,
    });

    await server.start();

    app.use(logger('dev'));
    app.use(cors());
    app.use(express.json());
    app.use(express.urlencoded({ extended: true }));
    app.use('/graphql', expressMiddleware(server));

    app.get('/', function (req, res) {
      res.send('Movies server');
    });

    app.listen(port, () => {
      console.log(`🚀 Express ready at http://localhost:${port}`);
      console.log(`🚀 Graphql ready at http://localhost:${port}/graphql`);
    });
  } catch (error) {
    console.error(`Failed to launch application with error: ${error.message}`);
    process.exit(1);
  }
})();
