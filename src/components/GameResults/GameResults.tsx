import { GameResultProps } from '../../types/props';

export const GameResults = ({ userAnswers }: GameResultProps) => {

  return (
    <div className="bg-slate-400 p-3">
      <h3 className="text-3xl font-bold my-4">Результаты</h3>
      <div>
        {userAnswers.map((words, i) => {
          return (
            <div key={i} className="flex gap-3">
              <span>{`${words.answer}:`}</span>
              <span className={`${words.isRight ? "text-green-500" : "text-red-600"}`}>{words.word}</span>
            </div>
          )
        })}
      </div>
    </div>
  );
};
