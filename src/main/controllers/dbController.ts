import { alarmsCollectionName } from '../common/constants';

const { ObjectId } = require('mongodb');
const { db } = require('../connectors/dbConnector');

export function addAlarm(alarmName, alarmTimestamp) {
  var myobj = { name: alarmName, timestamp: alarmTimestamp };
  return db.collection(alarmsCollectionName).insertOne(myobj);
}

export function getAlarms() {
  return db.collection(alarmsCollectionName).find().toArray();
}

export function deleteAlarm(alarmId) {
  return db
    .collection(alarmsCollectionName)
    .deleteOne({ _id: new ObjectId(alarmId) });
}
