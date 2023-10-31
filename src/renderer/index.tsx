import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import DateProvider from './context/DateContext';
import AlarmProvider from './context/AlarmContext';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement,
);
root.render(
  <DateProvider>
    <AlarmProvider>
      <React.StrictMode>
        <App />
      </React.StrictMode>
    </AlarmProvider>
  </DateProvider>,
);
