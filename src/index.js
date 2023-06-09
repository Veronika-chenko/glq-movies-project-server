const fs = require('fs');
const path = require('path');
const express = require('express');
const logger = require('morgan');
const cors = require('cors');
const { ApolloServer } = require('@apollo/server');
const { expressMiddleware } = require('@apollo/server/express4');
const {
  ApolloServerPluginDrainHttpServer,
} = require('@apollo/server/plugin/drainHttpServer');
const http = require('http');

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

const app = express();
const port = PORT || 80;

(async function () {
  try {
    const httpServer = http.createServer(app);
    const server = new ApolloServer({
      typeDefs,
      resolvers,
      introspection: true,
      plugins: [ApolloServerPluginDrainHttpServer({ httpServer })],
    });

    await server.start();

    app.use(logger('dev'));
    app.use(cors());
    app.use(express.json());
    app.use(express.urlencoded({ extended: true }));
    app.use(
      '/graphql',
      expressMiddleware(server, {
        context: async ({ req }) => ({
          locale: req?.headers?.locale || 'en-US',
        }),
      })
    );

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
