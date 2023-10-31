export type ipcMessageType = {
  SEND: Channels;
  RECEIVE: Channels;
};

export type Channels =
  | GetAlarmsMessage.SEND
  | GetAlarmsMessage.RECEIVE
  | SaveAlarmMessage.SEND
  | SaveAlarmMessage.RECEIVE
  | DeleteAlarmMessage.SEND
  | DeleteAlarmMessage.RECEIVE;

export enum GetAlarmsMessage {
  SEND = 'fetchAlarms',
  RECEIVE = 'fetchedAlarms',
}
export enum SaveAlarmMessage {
  SEND = 'saveAlarm',
  RECEIVE = 'savedAlarm',
}
export enum DeleteAlarmMessage {
  SEND = 'deleteAlarm',
  RECEIVE = 'deletedAlarm',
}

export enum SaveAlarmResponse {
  SUCCESS = "L'alarme a été sauvegardée",
  FAILURE = "L'alarme n'a pas pu être sauvegardée",
}
export enum DeleteAlarmResponse {
  SUCCESS = "L'alarme a été supprimée",
  FAILURE = "L'alarme n'a pas pu être supprimée",
}
