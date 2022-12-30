import { useEffect, useState } from "react";
import { getRandomPagesFromGroup } from "../services/api";
import { WordsForAudioChallenge } from "../types/props";
import { Word } from "../types/types";

  const generateRandomNumbers = (count:number,min:number,max:number):number[] => {
    const set = new Set<number>();
    while (set.size != count) {
      set.add(Math.floor(Math.random() * (max - min + 1) + min));
    }
    return [...set];
  }

export const useWordsForAudioChallengeGame = ():WordsForAudioChallenge => {
  const [answers, setAnswers] = useState<Word[]>([]);
  const [choices, setChoices] = useState<Word[][]>([]);
  const [loading, setLoading] = useState(true);
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
        temp.push(wordsForAnswers[i / 4]);
        wordsForChoices.push(temp);
        temp = [];
      }
      const wordsForChoicesRandom:Word[][] = [];
      wordsForChoices.forEach((word) => {
        const temp:Word[] = [];
        const randomNumbers = generateRandomNumbers(5,1,5)
        randomNumbers.forEach((n) => {
          temp.push(word[n - 1]);
        })
        wordsForChoicesRandom.push(temp);
      })
      setLoading(false);
      setAnswers(wordsForAnswers);
      setChoices(wordsForChoicesRandom);
    });
  }, []);
  return {answers, choices, loading};
}
