import { ipcMessageType } from '../../main/types/ipcMessageTypes';

export function sendIpcMessage(
  ipcMessageType: ipcMessageType,
  data: any,
  callback: (arg: any) => void,
) {
  window.electron.ipcRenderer.once(ipcMessageType.RECEIVE, (arg: any) => {
    callback(arg);
  });
  window.electron.ipcRenderer.sendMessage(ipcMessageType.SEND, data);
}
