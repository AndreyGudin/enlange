import { useState } from 'react';
import { GroupPicker } from '../../components/GroupPicker/GroupPicker';

export const AudioChallenge = () => {
  const [group, setGroup] = useState(1);
  const styleForContainer = 'flex gap-1 justify-center';
  const styleForGroupElements = 'w-20 h-20 flex justify-center items-center bg-slate-400 border';
  return (
    <div className="flex flex-col items-center gap-10">
      <GroupPicker
        setCurrentGroup={setGroup}
        styleForContainer={styleForContainer}
        styleForGroupElements={styleForGroupElements}
      />
      <button className="text-white w-[137px] h-[52px] bg-purple-600 rounded hover:bg-purple-500 duration-300">Старт</button>
    </div>
  );
};
