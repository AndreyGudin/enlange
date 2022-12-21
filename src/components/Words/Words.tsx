import { ApiLinks } from '../../services/api';
import { WordsProps } from '../../types/types';

export const Words = ({ words }: WordsProps) => {
  return (
    <div className="flex flex-wrap gap-4 justify-center">
      {words.map((word) => {
        return (
          <div
            className="flex flex-col justify-start items-center gap-2 w-96 border rounded p-4 bg-white text-black"
            key={word.id}
          >
            <img className="w-full" src={`${ApiLinks.Link}/${word.image}`} alt={word.word} />
            <div className="flex gap-2 border w-full justify-around p-1 hover:scale-110 duration-300">
              <span className="text-2xl font-bold">{word.word}</span>
              <span className="text-2xl">{word.transcription}</span>
              <span className="text-2xl">{word.wordTranslate}</span>
            </div>
            <div className="flex flex-col w-full gap-2 border hover:scale-110 duration-300">
              <div
                className="flex gap-2 w-full p-1"
                dangerouslySetInnerHTML={{ __html: word.textMeaning }}
              ></div>
              <div className="flex gap-2 w-full p-1">{word.textMeaningTranslate}</div>
            </div>
            <div className="flex flex-col w-full gap-2 border hover:scale-110 duration-300">
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
