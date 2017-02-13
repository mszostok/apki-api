import { makeExecutableSchema } from 'graphql-tools';

import * as Posts from './posts/graphql';

const Query = `
  type Query {
    ${Posts.query.text}
  }
`;

const Schema = `
  schema {
    query: Query
  }
`;

const typeDefs = [
  Schema,
  Query,
  Posts.query.typeDefs,
];

const resolvers = {
  Query: {
    ...Posts.query.resolvers,
  },
};

export default makeExecutableSchema({ typeDefs, resolvers });
