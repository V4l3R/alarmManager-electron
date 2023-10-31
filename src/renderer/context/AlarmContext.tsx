import { createContext, useContext, useEffect, useState } from 'react';
import { DateContext } from './DateContext';
import { sendIpcMessage } from '../action/ipcTrasnmetter';
import {
  DeleteAlarmMessage,
  GetAlarmsMessage,
  SaveAlarmMessage,
} from '../../main/types/ipcMessageTypes';
import {
  BUZZ_DELAY,
  emptyAlarm,
  emptyAlarmContext,
} from '../../main/common/constants';

export const AlarmContext = createContext<IAlarmContext>(emptyAlarmContext);

export default function AlarmProvider({ children }: any) {
  const { timestamp: actualTimestamp } = useContext(DateContext);

  const [incomingAlarms, setIncomingAlarms] = useState<IAlarm[]>([]);
  const [outgoingAlarms, setOutgoingAlarms] = useState<IAlarm[]>([]);
  const [nextAlarm, setNextAlarm] = useState<IAlarm>(emptyAlarm);
  const [currentAlarm, setCurrentAlarm] = useState<IAlarm>(emptyAlarm);

  useEffect(() => {
    refreshAlarms();

    return () => {};
  }, []);

  useEffect(() => {
    if (!nextAlarm) {
      return;
    }

    const nextAlarmDelay = nextAlarm.timestamp - actualTimestamp;
    const nextAlarmStop = nextAlarmDelay + BUZZ_DELAY;

    setTimeout(() => {
      setCurrentAlarm(nextAlarm);
      incomingAlarms.shift();
    }, nextAlarmDelay);

    setTimeout(() => {
      setCurrentAlarm(emptyAlarm);
      refreshAlarms();
    }, nextAlarmStop);

    return () => {};
  }, [nextAlarm]);

  function buildAlarmLists(alarmList: IAlarm[]) {
    setCurrentAlarm(emptyAlarm);
    const outgoingAlarmList: IAlarm[] = [];
    const incomingAlarmList: IAlarm[] = [];
    const actualDate = new Date();
    alarmList.forEach((alarm) => {
      const date = new Date(Number(alarm.timestamp));
      const alarmObj = {
        _id: alarm._id,
        name: alarm.name,
        timestamp: alarm.timestamp,
        date: date.toLocaleDateString(),
        time: date.toLocaleTimeString(),
      };
      if (alarm.timestamp > Number(actualDate)) {
        incomingAlarmList.push(alarmObj);
      } else {
        outgoingAlarmList.push(alarmObj);
      }
    });
    incomingAlarmList.sort((a, b) => {
      return a.timestamp - b.timestamp;
    });
    outgoingAlarmList.sort((a, b) => {
      return b.timestamp - a.timestamp;
    });
    setIncomingAlarms(incomingAlarmList);
    setOutgoingAlarms(outgoingAlarmList);
    setNextAlarm(incomingAlarmList[0]);
  }

  function refreshAlarms() {
    sendIpcMessage(GetAlarmsMessage, {}, (arg) => buildAlarmLists(arg.alarms));
  }

  function deleteAlarm(id: string) {
    sendIpcMessage(DeleteAlarmMessage, { alarmId: id }, refreshAlarms);
  }

  function saveAlarm() {
    const newAlarmDate = new Date(
      (document.getElementById('datePicker') as HTMLInputElement)?.value,
    );
    const newAlarmName = (
      document.getElementById('alarmName') as HTMLInputElement
    )?.value;

    if (newAlarmDate === undefined || newAlarmName === '') {
      return;
    }

    const data = {
      name: newAlarmName,
      timestamp: newAlarmDate.getTime().toString(),
    };

    sendIpcMessage(SaveAlarmMessage, data, refreshAlarms);
  }

  return (
    <AlarmContext.Provider
      value={{
        incomingAlarms,
        outgoingAlarms,
        currentAlarm,
        refreshAlarms,
        saveAlarm,
        deleteAlarm,
      }}
    >
      {children}
    </AlarmContext.Provider>
  );
}
