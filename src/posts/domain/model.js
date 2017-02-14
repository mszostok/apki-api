import mongoose from 'mongoose';

const postSchema = mongoose.Schema({
  title: String,
  author: String,
  content: String,
});

const PostModel = mongoose.model('Post', postSchema);

export default PostModel;
