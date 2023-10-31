export const mongodbUrl = 'mongodb://127.0.0.1:27017/dbAlarmManager';
export const alarmsCollectionName = 'alarms';

export const CLOCK_REFRESH_DELAY = 1000;
export const BUZZ_DELAY = 15000;
export const WARNING_DELAY = 600000;

export const emptyDate: IDate = {
  timestamp: Number(new Date()),
  date: '',
  time: '',
};

export const emptyDateContext: IDateContext = emptyDate;

export const emptyAlarm: IAlarm = {
  _id: '',
  name: '',
  timestamp: 0,
  date: '',
  time: '',
};

export const emptyAlarmContext: IAlarmContext = {
  incomingAlarms: [emptyAlarm],
  outgoingAlarms: [emptyAlarm],
  currentAlarm: emptyAlarm,
  refreshAlarms: () => {},
  saveAlarm: () => {},
  deleteAlarm: (id: string) => {},
};
