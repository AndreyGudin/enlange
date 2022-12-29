import { useEffect, useState } from 'react';
import { GroupPicker } from '../../components/GroupPicker/GroupPicker';
import { Pagination } from '../../components/Pagination/Pagination';
import { Words } from '../../components/Words/Words';
import { getWords } from '../../services/api';
import { Word } from '../../types/types';

const Textbook = () => {
  const [wordCards, setCards] = useState<Word[]>([]);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [currentGroup, setCurrentGroup] = useState<number>(1);
  useEffect(() => {
    getWords(currentPage, currentGroup).then((r) => setCards(r));
  }, [currentPage, currentGroup]);

  const styleForGroupElements =
    'rounded-full bg-white w-8 h-8 hover:cursor-pointer text-black text-lg flex justify-center items-center';
  const styleForGroupContainer = 'flex flex-col gap-3 fixed top-1/2 left-[96.6%]';
  return (
    <div className="flex flex-col items-center">
      <Words words={wordCards} />
      <GroupPicker
        setCurrentGroup={setCurrentGroup}
        styleForContainer={styleForGroupContainer}
        styleForGroupElements={styleForGroupElements}
      />
      <Pagination onPageChange={(page) => setCurrentPage(page)} currentPage={currentPage} />
    </div>
  );
};

export { Textbook as default };
