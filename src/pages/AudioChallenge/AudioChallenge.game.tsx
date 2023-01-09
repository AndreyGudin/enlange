import { MouseEventHandler, useEffect, useState } from 'react';
import { useWordsForAudioChallengeGame } from '../../hooks/useWordsForAudioChallengeGame';
import { getRandomPagesFromGroup } from '../../services/api';
import { Word } from '../../types/types';

export const AudioChallengeGame = () => {
  const { answers, choices, loading } = useWordsForAudioChallengeGame();
  const [next, setNext] = useState(0);
  const [clicked, setClicked] = useState('');

  const handleNext = () => {
    if (next < 19) {
      console.log(next);
      setNext((v) => (v += 1));
    }
  };

  const handleClick = (id: string) => {
    setClicked(id);
  };

  return (
    <div className="flex flex-col gap-5">
      <div>{loading ? null : answers[next].word}</div>
      <div className="flex gap-3">
        {loading
          ? null
          : choices[next].map((word) => {
              return (
                <div
                  key={word.id}
                  onClick={() => handleClick(word.id)}
                  className={`${
                    clicked === word.id ? 'bg-violet-600' : ''
                  } p-2 border rounded hover:bg-violet-600 hover:cursor-pointer`}
                >
                  {word.wordTranslate}
                </div>
              );
            })}
      </div>
      <button
        onClick={handleNext}
        className="text-white w-[137px] h-[52px] bg-purple-600 rounded hover:bg-purple-500 duration-300"
      >
        Следующий
      </button>
    </div>
  );
};
