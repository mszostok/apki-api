// @flow

import log from 'winston';

import mongoose from 'mongoose';

// Use native promises
mongoose.Promise = global.Promise;

function handleConnectionError(err) {
  log.error('with database connection: ', err);
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
