import { useEffect, useState } from 'react';
import { useWordsForAudioChallengeGame } from '../../hooks/useWordsForAudioChallengeGame';
import { getRandomPagesFromGroup } from '../../services/api';
import { Word } from '../../types/types';

export const AudioChallengeGame = () => {
  const { answers, choices, loading } = useWordsForAudioChallengeGame();
  const [next, setNext] = useState(0);

  const handleClick = () => {
    if (next < 20) setNext(v => v += 1);
  }

  return (
    <div className="flex flex-col gap-5">
      <div>{loading ? null : answers[next].word}</div>
      <div className="flex gap-3">
        {loading
          ? null
          : choices[next].map((word) => {
              return <div key={word.id}>{word.wordTranslate}</div>;
            })}
      </div>
      <button onClick={handleClick} className="text-white w-[137px] h-[52px] bg-purple-600 rounded hover:bg-purple-500 duration-300">
        Следующий
      </button>
    </div>
  );
};
