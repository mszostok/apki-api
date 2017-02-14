// @flow

import Koa from 'koa';
import Router from 'koa-router';
import bodyParser from 'koa-bodyparser';

import mongodb from './services/mongodb';

import { graphqlKoa, graphiqlKoa } from 'graphql-server-koa';
import schema from './schema';

const app = new Koa();
const router = new Router();

async function run() {
  // Connect to MongoDB
  try {
    const db = await mongodb('mongodb://localhost/apki');
    db.on('error', (err) => {
      console.log('database error: ', err);
      process.exit(1);
    });
  } catch (err) {
    console.log('while connecting to database: ', err);
    process.exit(1);
  }

  const options = {
    graphql: {
      schema,
    },
    graphiql: {
      endpointURL: '/graphql',
      query: (
  `query allPosts($limit: Int) {
    allPosts(limit: $limit) {
      id
      author
    }
  }`
      ),
      variables: {
        limit: 2,
      },
    },
  };

  router
    .post('/graphql', graphqlKoa(options.graphql))
    .get('/graphql', graphqlKoa(options.graphql))
    .get('/graphiql', graphiqlKoa(options.graphiql));

  app
    .use(bodyParser())
    .use(router.routes())
    .use(router.allowedMethods());

  app.listen(9778, () => console.log('Server started on localhost:9778'));
}

run();
