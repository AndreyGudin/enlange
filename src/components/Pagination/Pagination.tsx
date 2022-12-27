import { DOTS, usePagination } from '../../hooks/usePagination';

type PaginationProps = {
  onPageChange: (page: number) => void;
  currentPage: number;
};

export const Pagination = ({ onPageChange, currentPage }: PaginationProps) => {
  const totalCount = 600;
  const siblingCount = 1;
  const pageSize = 20;

  const paginationRange = usePagination({
    currentPage,
    totalCount,
    siblingCount,
    pageSize,
  });
  console.log('paginationRange', paginationRange);
  if (paginationRange) {
    if (currentPage === 0 || paginationRange!.length < 2) {
      return null;
    }
  }

  const onNext = () => {
    onPageChange(currentPage + 1);
  };

  const onPrevious = () => {
    onPageChange(currentPage - 1);
  };

  let lastPage = paginationRange ? paginationRange[paginationRange.length - 1] : 1;
  let disabledLeft = currentPage === 1 ? 'pointer-events-none border-slate-500' : 'border-white';
  let disabledRight = currentPage === lastPage ? 'pointer-events-none border-slate-500' : 'border-white'
  return (
    <ul className="flex list-none">
      <li className={`pagination-item ${disabledLeft}`} onClick={onPrevious}>
        <div className={`relative inline-block w-2 h-2 border-r-2 border-t-2 ${disabledLeft} rotate-[-135deg]`} />
      </li>
      {paginationRange?.map((pageNumber, i) => {
        if (pageNumber === DOTS) {
          return  <li key={i} className="pagination-item hover:cursor-default hover:bg-transparent hover:text-slate-400">&#8230;</li>;
        }
        let selected = pageNumber === currentPage ? 'border' : '';
        return (
          <li key={i} className={`pagination-item ${selected}`} onClick={() => onPageChange(pageNumber as number)}>
            {pageNumber}
          </li>
        );
      })}
      <li className={`pagination-item ${disabledRight}`} onClick={onNext}>
        <div className={`relative inline-block w-2 h-2 border-r-2 border-t-2 ${disabledRight} rotate-[45deg]`} />
      </li>
    </ul>
  );
};
