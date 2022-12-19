import { useEffect, useState } from 'react';
import { ApiLinks, getWords } from '../../services/api';
import { Word } from '../../types/types';

export const Textbook = () => {
  const [wordCards, setCards] = useState<Word[]>([]);

  useEffect(() => {
    getWords(1, 1).then((r) => setCards(r));
  }, []);
  return (
    <div className="flex flex-wrap gap-4">
      {wordCards.map((word) => {
        return (
          <div
            className="flex flex-col justify-around items-center gap-2 w-96 border rounded p-4 bg-white text-black"
            key={word.id}
          >
            <img className="w-full" src={`${ApiLinks.Link}/${word.image}`} alt={word.word} />
            <div className="flex gap-2 border w-full justify-around p-1">
              <span className="text-2xl font-bold">{word.word}</span>
              <span className="text-2xl">{word.transcription}</span>
              <span className="text-2xl">{word.wordTranslate}</span>
            </div>
            <div className="flex flex-col w-full gap-2 border">
              <div
                className="flex gap-2 w-full p-1"
                dangerouslySetInnerHTML={{ __html: word.textMeaning }}
              ></div>
              <div className="flex gap-2 w-full p-1">{word.textMeaningTranslate}</div>
            </div>
            <div className="flex flex-col w-full gap-2 border">
              <div
                className="flex gap-2 w-full p-1"
                dangerouslySetInnerHTML={{ __html: word.textExample }}
              ></div>
              <div className="flex gap-2 w-full p-1">{word.textExampleTranslate}</div>
            </div>
          </div>
        );
      })}
    </div>
  );
};
