import Post from './type';

import { getAllPosts } from '../services';

const text = `
  # Collection of *posts*. 
  # [Click me!](https://google.com)
  allPosts(
    # Size of returned *posts* collection
    limit: Int
  ): [Post]
`;

const resolvers = {
  allPosts: (_, { limit }) => getAllPosts({ limit }),
};

const typeDefs = () => [Post];

export default {
  text,
  resolvers,
  typeDefs,
};
