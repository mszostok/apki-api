// @flow

import mongoose from 'mongoose';

// Use native promises
mongoose.Promise = global.Promise;

function handleConnectionError(err) {
  console.log('database error: ', err);
  process.exit(1);
}

function mongodb(host: string) {
  return new Promise((resolve, reject) => {
    mongoose.connect(host)
      .then(() => {
        mongoose.connection.on('error', handleConnectionError);
        resolve();
      })
      .catch(reject);
  });
}

export default mongodb;
