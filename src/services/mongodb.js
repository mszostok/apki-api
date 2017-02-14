// @flow

import mongoose from 'mongoose';

// Use native promises
mongoose.Promise = global.Promise;

function mongodb(host: string) {
  return new Promise((resolve, reject) => {
    mongoose.connect(host)
      .then(() => resolve(mongoose.connection))
      .catch(reject);
  });
}

export default mongodb;
