// @flow

import mongoose from 'mongoose';

// Use native promises
mongoose.Promise = global.Promise;

function mongodb(host: string) {
  mongoose.connect(host);

  const db = mongoose.connection;

  db.on('error', err => console.log('MongoDB connection error:', err));

  return db;
}

export default mongodb;
