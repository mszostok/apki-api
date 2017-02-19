import mongoose from 'mongoose';

const postSchema = mongoose.Schema({
  title: {
    type: String,
    require: true,
  },
  content: {
    type: String,
    require: true,
  },
  author: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    require: true,
  },
});

const PostModel = mongoose.model('Post', postSchema);

export default PostModel;
