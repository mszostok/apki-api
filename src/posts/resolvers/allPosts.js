// @flow
import type { Post } from '../typedefs';

import PostModel from '../domain/model';

type Args = {
  limit?: number,
};

async function allPosts(_: {}, { limit }: Args = {}): Promise<[Post]> {
  const result = await PostModel.find().limit(limit);
  return result;
}

export default allPosts;
