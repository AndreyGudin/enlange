import { useState } from 'react';
import { GroupPicker } from '../../components/GroupPicker/GroupPicker';
import { AudioChallengeGame } from './AudioChallenge.game';

export const AudioChallenge = () => {
  const [group, setGroup] = useState(1);
  const [startGame, setStart] = useState(false);

  const handleClick = () => {
    setStart((startGame) => !startGame);
  };

  const styleForContainer = 'flex gap-1 justify-center';
  const styleForGroupElements =
    'w-20 h-20 flex justify-center items-center bg-slate-400 border hover:cursor-pointer';
  return (
    <div className="w-4/5 h-3/5 border rounded flex flex-col justify-center items-center gap-10 backdrop-blur-xl shadow-lg shadow-white">
      {startGame ? <AudioChallengeGame /> : (
        <GroupPicker
          setCurrentGroup={setGroup}
          styleForContainer={styleForContainer}
          styleForGroupElements={styleForGroupElements}
        />
      )}
      {
        startGame ? null: <button
        onClick={handleClick}
        className="text-white w-[137px] h-[52px] bg-purple-600 rounded hover:bg-purple-500 duration-300"
      >
        Старт
      </button>
      }
      
    </div>
  );
};
