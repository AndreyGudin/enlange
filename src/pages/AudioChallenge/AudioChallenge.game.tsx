import { useEffect } from 'react';
import { getRandomPagesFromGroup } from '../../services/api';
import { Word } from '../../types/types';

export const AudioChallengeGame = () => {

  const generateRandomNumbers = (count:number,min:number,max:number):number[] => {
    const set = new Set<number>();
    while (set.size != count) {
      set.add(Math.floor(Math.random() * (max - min + 1) + min));
    }
    return [...set];

  }

  useEffect(() => {
    getRandomPagesFromGroup(generateRandomNumbers(5,1,13), 1)
    .then((r) => {
      const numbersForAnswers = generateRandomNumbers(20,1,100);
      const wordsForAnswers:Word[] = [];
      const wordsOthers:Word[] = [];
      const wordsForChoices:Word[][] = [];
      numbersForAnswers.forEach((number) => {wordsForAnswers.push(r[number - 1])});
      for (let i = 0; i < 100; i += 1) {
        if (!numbersForAnswers.includes(i + 1)) wordsOthers.push(r[i]);
        
      }
      const wordsOthersRandom:Word[] = generateRandomNumbers(80,1,80).map(n => wordsOthers[n - 1]);

      for (let i =0; i < 80; i += 4 ) {
        let temp:Word[] = [];
        for (let j =0; j < 4; j += 1 ) {
          temp.push(wordsOthersRandom[i + j]);
        }
        wordsForChoices.push(temp);
        temp = [];
      }
      console.log(wordsForChoices);
    });
  }, []);
  return <>Game</>;
};
