type IAlarm = {
  _id: string;
  name: string;
  timestamp: number;
  date: string;
  time: string;
};

type IAlarmContext = {
  incomingAlarms: IAlarm[];
  outgoingAlarms: IAlarm[];
  currentAlarm: IAlarm;
  refreshAlarms: () => void;
  saveAlarm: () => void;
  deleteAlarm: (id: string) => void;
};
