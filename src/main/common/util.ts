/* eslint import/prefer-default-export: off */
import { URL } from 'url';
import path from 'path';

export function resolveHtmlPath(htmlFileName: string) {
  if (process.env.NODE_ENV === 'development') {
    const port = process.env.PORT || 1212;
    const url = new URL(`http://localhost:${port}`);
    url.pathname = htmlFileName;
    return url.href;
  }
  return `file://${path.resolve(__dirname, '../renderer/', htmlFileName)}`;
}

export const handleResponse = (ipcMessageResponse, resp, event) => {
  event.reply(ipcMessageResponse, resp);
};

export function formatAlarm(alarm) {
  return {
    _id: alarm._id.toString().split("'")[0],
    name: alarm.name,
    timestamp: alarm.timestamp,
  };
}
