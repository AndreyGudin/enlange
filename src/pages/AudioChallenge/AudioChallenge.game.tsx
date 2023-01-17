import { useEffect, useRef, useState } from 'react';
import { CSSTransition, SwitchTransition } from 'react-transition-group';

import { GameResults } from '../../components/GameResults/GameResults';
import { useWordsForAudioChallengeGame } from '../../hooks/useWordsForAudioChallengeGame';
import { ApiLinks } from '../../services/api';
import { UserAnswers, Word } from '../../types/types';

import playing from '../../assets/61376.svg';
import './animations.scss';
export const AudioChallengeGame = () => {
  const { answers, choices, loading } = useWordsForAudioChallengeGame();
  const [next, setNext] = useState(0);
  const [clicked, setClicked] = useState('');
  const refAudio = useRef<HTMLAudioElement>(null);
  const refImage = useRef<HTMLImageElement>(null);
  const refImage2 = useRef<HTMLImageElement>(null);
  const refDiv = useRef<HTMLDivElement>(null);
  const [isAnswered, setIsAnswered] = useState(false);
  const [userAnswers, setUserAnswers] = useState<UserAnswers[]>([]);

  useEffect(() => {
    refAudio.current?.play();
  }, [next]);

  const handleNext = () => {
    if (next < 20) {
      console.log(next);
      setNext((v) => (v += 1));
    }
    setIsAnswered(false);
  };

  const handleDontKnow = () => {
    if (next < 20) {
      console.log(next);
      setNext((v) => (v += 1));
    }
  };

  const handleClick = (word: Word, answer: Word) => {
    setClicked(word.id);
    setIsAnswered(true);
    if (word.id === answer.id)
      setUserAnswers((userAnswers) => [
        ...userAnswers,
        { word: word.wordTranslate, answer: answer.word, isRight: true },
      ]);
    else
      setUserAnswers((userAnswers) => [
        ...userAnswers,
        { word: word.wordTranslate, answer: answer.word, isRight: false },
      ]);
  };

  return (
    <>
    <SwitchTransition>
      <CSSTransition
        classNames="slide"
        key={next}
        nodeRef={refDiv}
        addEndListener={(done) => refDiv.current?.addEventListener("transitionend", done, false)}
      >
        <div ref={refDiv}>
          {next > 19 ? (
            <GameResults userAnswers={userAnswers} />
          ) : (
            <div className="flex flex-col gap-5 items-center">
              <div>
                {loading ? null : (
                  <audio
                    autoPlay
                    ref={refAudio}
                    src={`${ApiLinks.Link}/${answers[next].audio}`}
                  ></audio>
                )}
                <CSSTransition
                  in={!isAnswered}
                  nodeRef={refImage2}
                  timeout={300}
                  classNames="image"
                  unmountOnExit
                >
                  <img ref={refImage2} className="w-32 h-auto" src={playing} alt="word" />
                </CSSTransition>
                <CSSTransition
                  in={isAnswered}
                  nodeRef={refImage}
                  timeout={{ appear: 300, enter: 300, exit: 0 }}
                  classNames="image"
                  unmountOnExit
                >
                  {loading ? (
                    <span></span>
                  ) : (
                    <img
                      ref={refImage}
                      src={`${ApiLinks.Link}/${answers[next].image}`}
                      alt="word"
                    />
                  )}
                </CSSTransition>
                <div className="text-6xl text-center">
                  {loading || !isAnswered ? null : answers[next].word}
                </div>
              </div>
              <div className="flex gap-3">
                {loading
                  ? null
                  : choices[next].map((word) => {
                      return (
                        <div
                          key={word.id}
                          onClick={() => handleClick(word, answers[next])}
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
          )}
        </div>
      </CSSTransition>
      </SwitchTransition>
    </>
  );
};
