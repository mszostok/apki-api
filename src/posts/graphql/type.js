const Post = `
  type Post {
    id: Int!
    title: String!
    author: String,
    content: String
  }
`;

export default () => [Post];
