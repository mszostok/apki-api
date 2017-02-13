// @flow
import type { Post } from '../typedefs';

import { posts } from '../domain';

function getAllPosts({ limit }: { limit?: Number } = {}): [Post] {
  if (limit) {
    return posts.slice(0, limit);
  }

  return posts;
}

export { getAllPosts };
