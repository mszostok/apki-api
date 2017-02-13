// @flow
import type { Post } from './typedefs';

import PostModel from './domain/model';

async function allPosts(_: any, { limit }: { limit?: Number } = {}): Promise<[Post]> {
  const result = await PostModel.find().limit(limit);
  return result;
}

export { allPosts };
