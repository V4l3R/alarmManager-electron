import { createContext, useEffect, useState } from 'react';
import {
  CLOCK_REFRESH_DELAY,
  emptyDateContext,
} from '../../main/common/constants';

export const DateContext = createContext<IDateContext>(emptyDateContext);

export default function DateProvider({ children }: any) {
  const [dateObj, setDateObj] = useState<IDate>({
    timestamp: Number(new Date()),
    date: new Date().toLocaleDateString(),
    time: new Date().toLocaleTimeString(),
  });

  useEffect(() => {
    setInterval(() => {
      const newDate = new Date();
      setDateObj({
        timestamp: Number(newDate),
        date: newDate.toLocaleDateString(),
        time: newDate.toLocaleTimeString(),
      });
    }, CLOCK_REFRESH_DELAY);

    return () => {};
  }, []);

  return (
    <DateContext.Provider value={dateObj}>{children}</DateContext.Provider>
  );
}
