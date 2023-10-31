import { useContext } from 'react';
import { AlarmContext } from '../context/AlarmContext';

function AlarmSelector() {
  const { saveAlarm } = useContext(AlarmContext);

  return (
    <div className="h-[15vh] flex flex-col justify-around">
      <div className="flex w-full my-2 sm:px-4 pt-3 pb-2 justify-around">
        <input id="datePicker" type="datetime-local" />
        <input
          type="text"
          name="alarmName"
          id="alarmName"
          placeholder="Nom de l'alarme"
          className="max-w-[50%] pl-2 border-b-2 border-b-slate-400"
        />
      </div>
      <div className="flex w-full">
        <button
          type="button"
          onClick={() => saveAlarm()}
          className="mx-auto btn"
        >
          Ajouter une alarme
        </button>
      </div>
    </div>
  );
}

export default AlarmSelector;
