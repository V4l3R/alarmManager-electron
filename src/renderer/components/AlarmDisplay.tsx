import { useContext } from 'react';
import { AlarmContext } from '../context/AlarmContext';

function AlarmDisplay() {
  const { currentAlarm, deleteAlarm } = useContext(AlarmContext);

  return (
    <>
      {currentAlarm.name !== '' && (
        <>
          <div className="flex w-max h-[17vh] items-center alarm">
            {currentAlarm.name}
          </div>
          <button
            onClick={() => deleteAlarm(currentAlarm._id)}
            className="w-fit btn"
          >
            Éteindre
          </button>
        </>
      )}
    </>
  );
}

export default AlarmDisplay;
