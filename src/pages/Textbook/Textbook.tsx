import { useEffect, useState } from 'react';
import { Pagination } from '../../components/Pagination/Pagination';
import { Words } from '../../components/Words/Words';
import { getWords } from '../../services/api';
import { Word } from '../../types/types';

export const Textbook = () => {
  const [wordCards, setCards] = useState<Word[]>([]);
  const [currentPage, setCurrentPage] = useState<number>(1)
  useEffect(() => {
    getWords(currentPage, 1).then((r) => setCards(r));
  }, [currentPage]);
  return (
    <div className="flex flex-col items-center">
      <Words words={wordCards} />
      <Pagination 
        onPageChange={page => setCurrentPage(page)}
        currentPage={currentPage}
      />
    </div>
  );
};
