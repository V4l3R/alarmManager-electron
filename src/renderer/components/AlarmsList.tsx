import { useContext } from 'react';
import { AlarmContext } from '../context/AlarmContext';
import { WARNING_DELAY } from '../../main/common/constants';
import { LargeSeparatorH, SmallSeparatorH } from './Separators';

function AlarmsList({
  title,
  alarmsList,
  isIncoming = false,
}: {
  title: string;
  alarmsList: IAlarm[];
  isIncoming?: boolean;
}) {
  const { deleteAlarm } = useContext(AlarmContext);

  return (
    <div className="w-[22vw] h-[75vh] py-[1vh] rounded-3xl border-2 border-slate-500 bgGrTr">
      <div className="text-center title">{title}</div>
      <LargeSeparatorH />
      <div className="h-[60vh] scrollable ">
        {alarmsList.length > 0 &&
          alarmsList.map((alarm) => {
            return (
              <div key={alarm._id}>
                <div className="flex justify-between px-4">
                  <div
                    className={`py-3 ${
                      isIncoming &&
                      alarm?.timestamp < Date.now() + WARNING_DELAY
                        ? 'text-red-500'
                        : ''
                    }`}
                  >
                    {alarm.name} - {alarm.date} {alarm.time}
                  </div>
                  <button onClick={() => deleteAlarm(alarm._id)}>X</button>
                </div>
                <SmallSeparatorH />
              </div>
            );
          })}
      </div>
    </div>
  );
}

export default AlarmsList;
