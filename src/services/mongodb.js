// @flow

import mongoose from 'mongoose';

function mongodb(host: string) {
  mongoose.connect(host);

  const db = mongoose.connection;

  db.on('error', err => console.log('MongoDB connection error:', err));

  return db;
}

export default mongodb;
