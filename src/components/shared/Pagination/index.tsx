import { memo } from 'react';
import ReactPaginate from 'react-paginate';

interface IPagination {
  page: number;
  pageCount?: number;
  pageRangeDisplayed?: number;
  handlePageClick: (page: number) => void;
  // refetchHelpList: any;
}
const Pagination = ({
  page,
  pageCount = 0,
  pageRangeDisplayed = 1,
  handlePageClick,
}: // refetchHelpList,
IPagination) => {
  const onClick = (event: any) => {
    handlePageClick(event.selected + 1);
    // refetchHelpList();
  };

  return (
    <div className="flex justify-center items-center h-12 mt-2">
      <ReactPaginate
        containerClassName="pagination"
        activeClassName="paginationActive"
        breakLabel="..."
        nextLabel=">"
        onPageChange={onClick}
        pageRangeDisplayed={pageRangeDisplayed}
        pageCount={pageCount}
        previousLabel="<"
        forcePage={page - 1}
      />
    </div>
  );
};

export default memo(Pagination);
