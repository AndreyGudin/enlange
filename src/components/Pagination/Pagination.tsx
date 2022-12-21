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
  let disabled = currentPage === 1 ? 'disabled' : 'active';
  const paginationItem = "px-0 py-3 h-8 text-center mx-auto my-1 text-slate-400 flex box-border justify-center items-center tracking-wide rounded text-xs hover:cursor-pointer hover:text-white hover:bg-slate-400 min-w-[32px]";
  return (
    <ul className="flex list-none">
      <li className={disabled} onClick={onPrevious}>
        <div className="arrow left" />
      </li>
      {paginationRange?.map((pageNumber, i) => {
        if (pageNumber === DOTS) {
          return <li className="pagination-item dots">&#8230;</li>;
        }
        let selected = pageNumber === currentPage ? 'border' : '';
        return (
          <li key={i} className={`pagination-item ${selected}`} onClick={() => onPageChange(pageNumber as number)}>
            {pageNumber}
          </li>
        );
      })}
      <li className={`${currentPage === lastPage ? 'disabled' : 'active'}`} onClick={onNext}>
        <div className="arrow right" />
      </li>
    </ul>
  );
};
