import Clock from './Clock';
import AlarmSelector from './AlarmSelector';
import { LargeSeparatorH } from './Separators';

function MainWindow() {
  return (
    <div className="w-[56vw] px-[3vw] flex flex-col">
      <Clock />
      <LargeSeparatorH />
      <AlarmSelector />
    </div>
  );
}

export default MainWindow;
