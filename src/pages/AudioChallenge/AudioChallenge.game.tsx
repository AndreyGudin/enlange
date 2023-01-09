import { MouseEventHandler, useEffect, useRef, useState } from 'react';
import { useWordsForAudioChallengeGame } from '../../hooks/useWordsForAudioChallengeGame';
import { ApiLinks, getRandomPagesFromGroup } from '../../services/api';
import { Word } from '../../types/types';

export const AudioChallengeGame = () => {
  const { answers, choices, loading } = useWordsForAudioChallengeGame();
  const [next, setNext] = useState(0);
  const [clicked, setClicked] = useState('');
  const refAudio = useRef<HTMLAudioElement>(null);
  const [isAnswered, setIsAnswered] = useState(false);
  const [isRight, setIsRight] = useState('');
  useEffect(() => {
    refAudio.current?.play();
  }, [next]);

  const handleNext = () => {
    if (next < 19) {
      console.log(next);
      setNext((v) => (v += 1));
    }
    setIsAnswered(false);
  };

  const handleDontKnow = () => {
    if (next < 19) {
      console.log(next);
      setNext((v) => (v += 1));
    }
  };

  const handleClick = (id: string) => {
    setClicked(id);
    setIsAnswered(true);
  };

  return (
    <div className="flex flex-col gap-5">
      <div>
        <div>
          {loading ? null : (
            <audio autoPlay ref={refAudio} src={`${ApiLinks.Link}/${answers[next].audio}`}></audio>
          )}
        </div>
        <div>
          {loading || !isAnswered ? null : (
            <img src={`${ApiLinks.Link}/${answers[next].image}`} alt="" />
          )}
        </div>
        <div>{loading || !isAnswered ? null : answers[next].word}</div>
      </div>
      <div className="flex gap-3">
        {loading
          ? null
          : choices[next].map((word) => {
              return (
                <div
                  key={word.id}
                  onClick={() => handleClick(word.id)}
                  className={`${clicked === word.id ? 'bg-violet-600' : ''} 
                  ${
                    word.id === answers[next].id && clicked === answers[next].id
                      ? 'bg-green-500'
                      : ''
                  }
                  p-2 border rounded hover:bg-violet-600 hover:cursor-pointer`}
                >
                  {word.wordTranslate}
                </div>
              );
            })}
      </div>
      {isAnswered ? (
        <button
          onClick={handleNext}
          className="text-white w-[137px] h-[52px] cursor-pointer bg-purple-600 rounded hover:bg-purple-500 duration-300"
        >
          Следующий
        </button>
      ) : (
        <button
          onClick={handleDontKnow}
          className="text-white w-[137px] h-[52px] bg-slate-400 opacity-40 rounded hover:bg-purple-500 hover:opacity-100 duration-300"
        >
          Не знаю
        </button>
      )}
    </div>
  );
};
