import { useEffect, useState } from 'react';
import { Words } from '../../components/Words/Words';
import { getWords } from '../../services/api';
import { Word } from '../../types/types';

export const Textbook = () => {
  const [wordCards, setCards] = useState<Word[]>([]);

  useEffect(() => {
    getWords(1, 1).then((r) => setCards(r));
  }, []);
  return (
    <div>
      <Words words={wordCards} />
    </div>
  );
};
