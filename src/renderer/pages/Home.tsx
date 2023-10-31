import { useContext } from 'react';
import { AlarmContext } from '../context/AlarmContext';
import MainWindow from '../components/MainWindow';
import AlarmsList from '../components/AlarmsList';
import AlarmDisplay from '../components/AlarmDisplay';

const Home = () => {
  const { incomingAlarms, outgoingAlarms } = useContext(AlarmContext);

  return (
    <>
      <div className="flex flex-col w-full h-[20vh] items-center">
        <AlarmDisplay />
      </div>
      <div className="flex h-[80vh] px-[2vw]">
        <AlarmsList title="Alarmes manquées" alarmsList={outgoingAlarms} />
        <MainWindow />
        <AlarmsList
          title="Alarmes à venir"
          alarmsList={incomingAlarms}
          isIncoming
        />
      </div>
    </>
  );
};

export default Home;
