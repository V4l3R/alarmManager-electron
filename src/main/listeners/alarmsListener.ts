import { ipcMain } from 'electron';
import {
  DeleteAlarmMessage,
  DeleteAlarmResponse,
  GetAlarmsMessage,
  SaveAlarmMessage,
  SaveAlarmResponse,
} from '../types/ipcMessageTypes';
import { formatAlarm, handleResponse } from '../common/util';
import { addAlarm, deleteAlarm, getAlarms } from '../controllers/dbController';

////////////////
// GET ALARMS //
////////////////
ipcMain.on(GetAlarmsMessage.SEND, async (event, arg) => {
  getAlarms().then((dbAlarms) => {
    const alarms = [];

    dbAlarms.forEach((alarm) => {
      alarms.push(formatAlarm(alarm));
    });

    event.reply(GetAlarmsMessage.RECEIVE, { alarms });
  });
});

/////////////////
// SAVE ALARMS //
/////////////////
ipcMain.on(SaveAlarmMessage.SEND, async (event, arg) => {
  const alarmName = arg.name;
  const alarmTimestamp = arg.timestamp;

  addAlarm(alarmName, alarmTimestamp).then((resp) => {
    handleResponse(
      SaveAlarmMessage.RECEIVE,
      resp.acknowledged ? SaveAlarmResponse.SUCCESS : SaveAlarmResponse.FAILURE,
      event,
    );
  });
});

///////////////////
// DELETE ALARMS //
///////////////////
ipcMain.on(DeleteAlarmMessage.SEND, async (event, arg) => {
  const alarmId = arg.alarmId;

  deleteAlarm(alarmId).then((resp) => {
    handleResponse(
      DeleteAlarmMessage.RECEIVE,
      resp.acknowledged
        ? DeleteAlarmResponse.SUCCESS
        : DeleteAlarmResponse.FAILURE,
      event,
    );
  });
});
