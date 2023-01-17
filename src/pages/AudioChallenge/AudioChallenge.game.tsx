import { useRef, useState } from 'react';
import { CSSTransition, SwitchTransition } from 'react-transition-group';

import { GameResults } from '../../components/GameResults/GameResults';
import { UserAnswers } from '../../types/types';

import './animations.scss';
import { AudioChallengeQuestions } from './AudioChallenge.questions';

export const AudioChallengeGame = () => {
  const [next, setNext] = useState(0);
  const refDiv = useRef<HTMLDivElement>(null);
  const [userAnswers, setUserAnswers] = useState<UserAnswers[]>([]);

  return (
    <>
      <SwitchTransition>
        <CSSTransition
          classNames="slide"
          key={next}
          nodeRef={refDiv}
          addEndListener={(done) => refDiv.current?.addEventListener('transitionend', done, false)}
        >
          <div ref={refDiv}>
            {next > 19 ? (
              <GameResults userAnswers={userAnswers} />
            ) : (
              <AudioChallengeQuestions
                next={next}
                setNext={setNext}
                setUserAnswers={setUserAnswers}
              />
            )}
          </div>
        </CSSTransition>
      </SwitchTransition>
    </>
  );
};
