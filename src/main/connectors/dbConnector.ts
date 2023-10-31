import { mongodbUrl as url } from '../common/constants';

const { MongoClient } = require('mongodb');

const options = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
};

const client = new MongoClient(url, options);
client.connect();
console.log('Connecté à la base de données MongoDB !');
export const db = client.db();
