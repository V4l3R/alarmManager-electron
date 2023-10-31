import { useContext } from 'react';
import { DateContext } from '../context/DateContext';

function Clock() {
  const { time, date } = useContext(DateContext);

  return (
    <div className="h-[60vh] flex text-center items-center justify-center">
      <div className="time">
        {date}
        <br />
        {time}
      </div>
    </div>
  );
}

export default Clock;
